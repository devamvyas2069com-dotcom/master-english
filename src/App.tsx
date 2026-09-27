/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { StudentDashboard } from './components/StudentDashboard';
import { LiteratureDashboard } from './components/LiteratureDashboard';
import { ChapterDetailPage } from './components/ChapterDetailPage';
import { GrammarSection } from './components/GrammarSection';
import { ReadingWritingSection } from './components/ReadingWritingSection';
import { PYQSection } from './components/PYQSection';
import { QuestionBankPage } from './components/QuestionBankPage';
import { MockTestPage } from './components/MockTestPage';
import { MistakeBookPage } from './components/MistakeBookPage';
import { BookmarksPage } from './components/BookmarksPage';
import { BoardPrepDashboard } from './components/BoardPrepDashboard';
import { TeacherPortal } from './components/TeacherPortal';
import { AdminPortal } from './components/AdminPortal';
import { StudentLoginModal } from './components/StudentLoginModal';

import { 
  UserProfile, 
  SyllabusYear, 
  QuestionModel, 
  MistakeRecord, 
  TestAttemptResult 
} from './types';
import { CHAPTERS_DATA } from './data/chaptersData';
import { ALL_QUESTIONS_DATA } from './data/questionsBankData';

export default function App() {
  // Current active navigation tab
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [selectedChapterId, setSelectedChapterId] = useState<string>('ff-prose-1');
  const [initialChapterSubTab, setInitialChapterSubTab] = useState<string>('notes');
  const [searchFilterTerm, setSearchFilterTerm] = useState<string>('');

  // Academic syllabus year
  const [syllabusYear, setSyllabusYear] = useState<SyllabusYear>('2026-27');

  // Logged in user profile
  const [currentUser, setCurrentUser] = useState<UserProfile>({
    id: 'usr-std-1',
    name: 'Aryan Sharma',
    role: 'student',
    studentId: 'STD-2026-1042',
    school: 'Delhi Public School, R.K. Puram',
    grade: 'Class 10',
    section: 'A',
    rollNo: '10142',
    email: 'aryan.sharma@school.edu',
    hasPasskey: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    streak: 14,
    questionsSolved: 348,
    testsCompleted: 9,
    accuracy: 86.4,
    overallProgress: 74
  });

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  // User Bookmarks
  const [bookmarkedQuestions, setBookmarkedQuestions] = useState<QuestionModel[]>([
    ALL_QUESTIONS_DATA[0],
    ALL_QUESTIONS_DATA[1]
  ]);

  // User Mistakes Book
  const [mistakes, setMistakes] = useState<MistakeRecord[]>([
    {
      id: 'mstk-1',
      questionId: 'q-gram-rs-04',
      question: ALL_QUESTIONS_DATA.find(q => q.id === 'q-gram-rs-04') || ALL_QUESTIONS_DATA[2],
      studentAnswer: 'The doctor asked the patient that how long had he been suffering',
      dateAttempted: '25 Sep 2026',
      timesWrong: 2,
      resolved: false
    },
    {
      id: 'mstk-2',
      questionId: 'q-ff-1-01',
      question: ALL_QUESTIONS_DATA[0],
      studentAnswer: 'The postmaster sent money because he wanted to be known as generous',
      dateAttempted: '24 Sep 2026',
      timesWrong: 1,
      resolved: false
    }
  ]);

  // Sync syllabus year with backend on mount
  useEffect(() => {
    fetch('/api/syllabus')
      .then(res => res.json())
      .then(data => {
        if (data.currentAcademicYear) {
          setSyllabusYear(data.currentAcademicYear);
        }
      })
      .catch(() => {});
  }, []);

  const handleUpdateSyllabusYear = (year: SyllabusYear) => {
    setSyllabusYear(year);
    fetch('/api/syllabus/update-year', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ year })
    }).catch(() => {});
  };

  const handleBookmarkToggle = (q: QuestionModel) => {
    setBookmarkedQuestions(prev => {
      const exists = prev.some(item => item.id === q.id);
      if (exists) {
        return prev.filter(item => item.id !== q.id);
      } else {
        return [...prev, q];
      }
    });
  };

  const isBookmarked = (id: string) => {
    return bookmarkedQuestions.some(item => item.id === id);
  };

  const handleLogMistake = (q: QuestionModel, studentAnswer: string) => {
    setMistakes(prev => {
      const existing = prev.find(m => m.questionId === q.id);
      if (existing) {
        return prev.map(m => m.questionId === q.id ? { ...m, timesWrong: m.timesWrong + 1, dateAttempted: 'Today' } : m);
      }
      const newRecord: MistakeRecord = {
        id: `mstk-${Date.now()}`,
        questionId: q.id,
        question: q,
        studentAnswer,
        dateAttempted: 'Today',
        timesWrong: 1,
        resolved: false
      };
      return [newRecord, ...prev];
    });
  };

  const handleRemoveMistake = (id: string) => {
    setMistakes(prev => prev.filter(m => m.id !== id));
  };

  const handleSelectChapter = (chapterId: string, initialTab: string = 'notes') => {
    setSelectedChapterId(chapterId);
    setInitialChapterSubTab(initialTab);
    setCurrentTab('chapter-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSearchSelect = (term: string) => {
    setSearchFilterTerm(term);
    setCurrentTab('question-bank');
  };

  const handleAddQuestionFromTeacher = (newQ: QuestionModel) => {
    ALL_QUESTIONS_DATA.unshift(newQ);
  };

  const handleCompleteMockTest = (result: TestAttemptResult) => {
    // Increment completed tests & update questions solved
    setCurrentUser(prev => ({
      ...prev,
      testsCompleted: prev.testsCompleted + 1,
      questionsSolved: prev.questionsSolved + result.totalQuestions,
      accuracy: Math.round(((prev.accuracy * prev.testsCompleted) + result.accuracy) / (prev.testsCompleted + 1))
    }));
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-blue-100 selection:text-blue-900">
      {/* Central Navigation Bar */}
      <Navbar
        currentTab={currentTab}
        setCurrentTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        currentUser={currentUser}
        onOpenLogin={() => setIsLoginModalOpen(true)}
        bookmarksCount={bookmarkedQuestions.length}
        mistakesCount={mistakes.length}
        syllabusYear={syllabusYear}
        onSearchSelect={handleSearchSelect}
      />

      {/* Main Page Body */}
      <div className="flex-1">
        {currentTab === 'home' && (
          <HomePage
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            syllabusYear={syllabusYear}
          />
        )}

        {currentTab === 'dashboard' && (
          <StudentDashboard
            currentUser={currentUser}
            onNavigate={(tab, chapterId) => {
              if (chapterId) {
                handleSelectChapter(chapterId);
              } else {
                setCurrentTab(tab);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
            recentChapter={CHAPTERS_DATA[0]}
            mistakesCount={mistakes.length}
          />
        )}

        {currentTab === 'literature' && (
          <LiteratureDashboard
            onSelectChapter={handleSelectChapter}
            bookmarksCount={bookmarkedQuestions.length}
            mistakesCount={mistakes.length}
            onNavigate={(tab) => {
              setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          />
        )}

        {currentTab === 'chapter-detail' && (
          <ChapterDetailPage
            chapterId={selectedChapterId}
            initialTab={initialChapterSubTab}
            onBack={() => setCurrentTab('literature')}
            onBookmarkQuestion={handleBookmarkToggle}
            isBookmarked={isBookmarked}
            onLogMistake={handleLogMistake}
          />
        )}

        {currentTab === 'grammar' && (
          <GrammarSection
            onBookmarkQuestion={handleBookmarkToggle}
            isBookmarked={isBookmarked}
            onLogMistake={handleLogMistake}
          />
        )}

        {currentTab === 'reading-writing' && (
          <ReadingWritingSection
            onBookmarkQuestion={handleBookmarkToggle}
            isBookmarked={isBookmarked}
          />
        )}

        {currentTab === 'pyqs' && (
          <PYQSection
            onBookmarkQuestion={handleBookmarkToggle}
            isBookmarked={isBookmarked}
            onNavigateChapter={(cId) => handleSelectChapter(cId)}
          />
        )}

        {currentTab === 'question-bank' && (
          <QuestionBankPage
            initialSearch={searchFilterTerm}
            onBookmarkQuestion={handleBookmarkToggle}
            isBookmarked={isBookmarked}
            onLogMistake={handleLogMistake}
          />
        )}

        {currentTab === 'mock-tests' && (
          <MockTestPage
            onCompleteTest={handleCompleteMockTest}
            onLogMistake={handleLogMistake}
          />
        )}

        {currentTab === 'board-prep' && (
          <BoardPrepDashboard
            onNavigate={(tab, cId) => {
              if (cId) handleSelectChapter(cId);
              else setCurrentTab(tab);
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            syllabusYear={syllabusYear}
          />
        )}

        {currentTab === 'mistakes' && (
          <MistakeBookPage
            mistakes={mistakes}
            onRemoveMistake={handleRemoveMistake}
            onPracticeMistakes={() => setCurrentTab('mock-tests')}
            onNavigateChapter={(cId) => handleSelectChapter(cId)}
          />
        )}

        {currentTab === 'bookmarks' && (
          <BookmarksPage
            bookmarkedQuestions={bookmarkedQuestions}
            onRemoveBookmark={(id) => setBookmarkedQuestions(prev => prev.filter(q => q.id !== id))}
            onNavigateChapter={(cId) => handleSelectChapter(cId)}
          />
        )}

        {currentTab === 'teacher' && (
          <TeacherPortal
            onAddQuestion={handleAddQuestionFromTeacher}
          />
        )}

        {currentTab === 'admin' && (
          <AdminPortal
            syllabusYear={syllabusYear}
            onUpdateSyllabusYear={handleUpdateSyllabusYear}
          />
        )}
      </div>

      {/* Institutional Login Modal */}
      <StudentLoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        currentUser={currentUser}
        onLoginSuccess={(user) => {
          setCurrentUser(user);
          if (user.role === 'admin') setCurrentTab('admin');
          else if (user.role === 'teacher') setCurrentTab('teacher');
          else setCurrentTab('dashboard');
        }}
      />

      {/* Minimal Academic Footer */}
      <footer className="bg-white border-t border-slate-200 py-8 px-4 sm:px-6 text-xs text-slate-500">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-slate-800">ENGLISH MASTER 10</span>
            <span>•</span>
            <span>CBSE Class 10 English Language & Literature (Code 184)</span>
          </div>

          <div className="flex items-center gap-4 text-slate-600">
            <button onClick={() => setCurrentTab('board-prep')} className="hover:text-blue-600">
              Board Preparation
            </button>
            <button onClick={() => setCurrentTab('literature')} className="hover:text-blue-600">
              Literature System
            </button>
            <button onClick={() => setCurrentTab('grammar')} className="hover:text-blue-600">
              Grammar
            </button>
            <button onClick={() => setIsLoginModalOpen(true)} className="hover:text-blue-600 font-semibold">
              School Login
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}
