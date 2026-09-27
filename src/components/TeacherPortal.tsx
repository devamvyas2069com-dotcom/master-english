import React, { useState } from 'react';
import { 
  GraduationCap, 
  PlusCircle, 
  CheckCircle2, 
  Clock, 
  Tag, 
  Award, 
  FileText, 
  Users, 
  AlertCircle,
  ArrowRight
} from 'lucide-react';
import { QuestionModel, QuestionType, DifficultyLevel, SourceType } from '../types';
import { CHAPTERS_DATA } from '../data/chaptersData';

interface TeacherPortalProps {
  onAddQuestion: (newQuestion: QuestionModel) => void;
}

export const TeacherPortal: React.FC<TeacherPortalProps> = ({ onAddQuestion }) => {
  const [activeTab, setActiveTab] = useState<'create-q' | 'review-queue' | 'analytics'>('create-q');

  // Form State
  const [chapterId, setChapterId] = useState(CHAPTERS_DATA[0].id);
  const [type, setType] = useState<QuestionType>('Short Answer');
  const [marks, setMarks] = useState<number>(3);
  const [difficulty, setDifficulty] = useState<DifficultyLevel>('Board Standard');
  const [sourceType, setSourceType] = useState<SourceType>('teacher_created');
  const [verifiedYear, setVerifiedYear] = useState<string>('');
  const [paperCode, setPaperCode] = useState<string>('');
  const [questionText, setQuestionText] = useState('');
  const [modelAnswer, setModelAnswer] = useState('');
  const [explanation, setExplanation] = useState('');
  const [keywords, setKeywords] = useState('');
  const [markingPoints, setMarkingPoints] = useState('');
  const [commonMistake, setCommonMistake] = useState('');
  const [howToImprove, setHowToImprove] = useState('');
  const [savedSuccess, setSavedSuccess] = useState(false);

  const selectedChapter = CHAPTERS_DATA.find(c => c.id === chapterId) || CHAPTERS_DATA[0];

  const handleCreateQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!questionText.trim() || !modelAnswer.trim()) return;

    const newQ: QuestionModel = {
      id: `q-tch-${Date.now()}`,
      chapterId: selectedChapter.id,
      chapterTitle: selectedChapter.title,
      book: selectedChapter.book,
      type,
      marks,
      difficulty,
      sourceType,
      verifiedYear: verifiedYear ? parseInt(verifiedYear) : undefined,
      paperCode: paperCode || undefined,
      verificationStatus: sourceType === 'official_board' ? 'review' : 'verified',
      question: questionText.trim(),
      modelAnswer: modelAnswer.trim(),
      explanation: explanation.trim() || 'Teacher verified curriculum explanation.',
      keywordsToInclude: keywords.split(',').map(s => s.trim()).filter(Boolean),
      markingPoints: markingPoints.split('\n').map(s => s.trim()).filter(Boolean),
      commonMistake: commonMistake.trim(),
      howToImprove: howToImprove.trim()
    };

    onAddQuestion(newQ);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 3000);

    // Reset fields
    setQuestionText('');
    setModelAnswer('');
    setExplanation('');
    setKeywords('');
    setMarkingPoints('');
    setCommonMistake('');
    setHowToImprove('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              Curriculum Faculty Portal
            </span>
            <span className="text-xs text-slate-500">
              PGT English Evaluator Panel
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Teacher & Evaluator Console
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Create curriculum-aligned questions, add marking schemes, tag PYQs, and inspect student learning diagnostics.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('create-q')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'create-q' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Create Question
          </button>
          <button
            onClick={() => setActiveTab('review-queue')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'review-queue' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Verification Queue
          </button>
          <button
            onClick={() => setActiveTab('analytics')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeTab === 'analytics' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student Mistakes
          </button>
        </div>
      </div>

      {/* CREATE QUESTION TAB */}
      {activeTab === 'create-q' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3 flex items-center justify-between">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <PlusCircle className="w-5 h-5 text-blue-600" />
              Add Question to Bank & Marking Scheme
            </h2>
            {savedSuccess && (
              <span className="text-xs px-2.5 py-1 rounded bg-emerald-100 text-emerald-800 font-semibold flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" /> Added to question bank!
              </span>
            )}
          </div>

          <form onSubmit={handleCreateQuestionSubmit} className="space-y-5 text-xs sm:text-sm">
            {/* Metadata Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Target Chapter</label>
                <select
                  value={chapterId}
                  onChange={(e) => setChapterId(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                >
                  {CHAPTERS_DATA.map(c => (
                    <option key={c.id} value={c.id}>{c.title} ({c.book.split(' ')[0]})</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Question Type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                >
                  <option value="MCQ">MCQ (1 Mark)</option>
                  <option value="Short Answer">Short Answer (3 Marks)</option>
                  <option value="Long Answer">Long Answer (6 Marks)</option>
                  <option value="Extract Based">Extract Based (5 Marks)</option>
                  <option value="Competency Based">Competency Based</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Marks</label>
                <select
                  value={marks}
                  onChange={(e) => setMarks(parseInt(e.target.value))}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                >
                  <option value="1">1 Mark</option>
                  <option value="2">2 Marks</option>
                  <option value="3">3 Marks</option>
                  <option value="5">5 Marks</option>
                  <option value="6">6 Marks</option>
                </select>
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Source Label</label>
                <select
                  value={sourceType}
                  onChange={(e) => setSourceType(e.target.value as any)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                >
                  <option value="official_board">OFFICIAL PYQ (Board Exam)</option>
                  <option value="official_sample_paper">OFFICIAL SAMPLE PAPER</option>
                  <option value="board_style">BOARD-STYLE PRACTICE</option>
                  <option value="teacher_created">TEACHER CREATED</option>
                  <option value="platform_practice">PLATFORM PRACTICE</option>
                </select>
              </div>
            </div>

            {/* PYQ Year Verification Inputs */}
            {sourceType === 'official_board' && (
              <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                <div>
                  <label className="font-bold text-blue-900 block mb-1">Verified Board Exam Year</label>
                  <input
                    type="number"
                    placeholder="e.g. 2024 (Must be verified against official paper)"
                    value={verifiedYear}
                    onChange={(e) => setVerifiedYear(e.target.value)}
                    className="w-full p-2 bg-white border border-blue-200 rounded-lg text-xs"
                  />
                </div>
                <div>
                  <label className="font-bold text-blue-900 block mb-1">Paper Set / Question Number</label>
                  <input
                    type="text"
                    placeholder="e.g. Set 2/1/1, Q. No. 8(a)"
                    value={paperCode}
                    onChange={(e) => setPaperCode(e.target.value)}
                    className="w-full p-2 bg-white border border-blue-200 rounded-lg text-xs"
                  />
                </div>
              </div>
            )}

            {/* Question Text */}
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Question Wording</label>
              <textarea
                required
                rows={3}
                placeholder="Enter exact question text..."
                value={questionText}
                onChange={(e) => setQuestionText(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>

            {/* Model Answer */}
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Model Answer (Written in Natural Class 10 Standard)</label>
              <textarea
                required
                rows={4}
                placeholder="Provide complete, structured model answer..."
                value={modelAnswer}
                onChange={(e) => setModelAnswer(e.target.value)}
                className="w-full p-3 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm font-serif focus:outline-none focus:border-blue-400"
              ></textarea>
            </div>

            {/* Keywords & Marking Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Essential Keywords (Comma separated)</label>
                <input
                  type="text"
                  placeholder="e.g. unshakeable faith, situational irony, postmaster"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Marking Scheme Breakdown (One point per line)</label>
                <textarea
                  rows={2}
                  placeholder="1 mark for...&#10;2 marks for..."
                  value={markingPoints}
                  onChange={(e) => setMarkingPoints(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                ></textarea>
              </div>
            </div>

            {/* Common Mistake & Improvement */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Common Student Error</label>
                <input
                  type="text"
                  placeholder="e.g. Writing 'that where' in reported speech"
                  value={commonMistake}
                  onChange={(e) => setCommonMistake(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">How to Improve</label>
                <input
                  type="text"
                  placeholder="e.g. Assertive word order without double conjunction"
                  value={howToImprove}
                  onChange={(e) => setHowToImprove(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center gap-2"
            >
              <CheckCircle2 className="w-4 h-4" /> Save Question to Repository
            </button>
          </form>
        </div>
      )}

      {/* REVIEW QUEUE TAB */}
      {activeTab === 'review-queue' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Teacher Verification Queue (3 Items Pending Review)
          </h2>
          <div className="space-y-3">
            {[
              { title: 'A Letter to God - 6M Competency Question', submittedBy: 'Dr. Sen', date: '26 Sep 2026', status: 'Pending Verification' },
              { title: 'Reported Speech Dialogue Exercise (Board Style)', submittedBy: 'Mrs. Rao', date: '25 Sep 2026', status: 'Pending Verification' }
            ].map((item, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-bold text-slate-900">{item.title}</h4>
                  <span className="text-slate-500">Submitted by {item.submittedBy} on {item.date}</span>
                </div>
                <button className="px-3 py-1.5 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700">
                  Review & Approve
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STUDENT MISTAKES & ANALYTICS TAB */}
      {activeTab === 'analytics' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
          <h2 className="text-lg font-bold text-slate-900">
            Class Diagnostic Error Analysis
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-1">Most Missed Grammar Topic</span>
              <strong className="text-sm text-red-600">Reported Speech (Wh- Questions)</strong>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-1">Average Literature Accuracy</span>
              <strong className="text-sm text-emerald-600">86.2%</strong>
            </div>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
              <span className="text-slate-500 block mb-1">Active Students</span>
              <strong className="text-sm text-slate-900">142 Students Enrolled</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
