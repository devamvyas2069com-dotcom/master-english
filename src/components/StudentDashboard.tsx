import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  Clock, 
  Target, 
  Flame, 
  BarChart3, 
  AlertCircle, 
  Calendar, 
  Bell, 
  ArrowRight,
  TrendingUp,
  Award,
  Sparkles
} from 'lucide-react';
import { UserProfile, Chapter, QuestionModel } from '../types';

interface StudentDashboardProps {
  currentUser: UserProfile;
  onNavigate: (tab: string, chapterId?: string) => void;
  recentChapter: Chapter;
  mistakesCount: number;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
  currentUser,
  onNavigate,
  recentChapter,
  mistakesCount
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Good morning, {currentUser.name.split(' ')[0]}
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Continue your preparation.
          </p>
        </div>

        <div className="flex items-center gap-2 self-start sm:self-auto">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-xs font-semibold text-slate-700 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            Roll No: {currentUser.rollNo || '10142'} ({currentUser.grade})
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-800">
            {currentUser.school.split(',')[0]}
          </span>
        </div>
      </div>

      {/* Key Academic Statistics Bar */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-4">
        {/* Questions Solved */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block">Questions Solved</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">{currentUser.questionsSolved}</span>
            <span className="text-[11px] text-emerald-600 font-medium">+18 this week</span>
          </div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1">
            <div className="bg-blue-600 h-1 rounded-full" style={{ width: '65%' }}></div>
          </div>
        </div>

        {/* Tests Completed */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block">Tests Completed</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">{currentUser.testsCompleted}</span>
            <span className="text-[11px] text-slate-500 font-medium">of 15 scheduled</span>
          </div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1">
            <div className="bg-emerald-600 h-1 rounded-full" style={{ width: '60%' }}></div>
          </div>
        </div>

        {/* Accuracy */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block">Accuracy</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-slate-900">{currentUser.accuracy}%</span>
            <span className="text-[11px] text-emerald-600 font-medium">↑ 3.2%</span>
          </div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1">
            <div className="bg-violet-600 h-1 rounded-full" style={{ width: `${currentUser.accuracy}%` }}></div>
          </div>
        </div>

        {/* Current Streak */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
          <span className="text-xs font-medium text-slate-500 block">Current Streak</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-amber-600 flex items-center gap-1">
              <Flame className="w-5 h-5 fill-amber-500 text-amber-500" />
              {currentUser.streak}
            </span>
            <span className="text-[11px] text-slate-500 font-medium">days active</span>
          </div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1">
            <div className="bg-amber-500 h-1 rounded-full" style={{ width: '80%' }}></div>
          </div>
        </div>

        {/* Overall Progress */}
        <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs col-span-2 sm:col-span-1">
          <span className="text-xs font-medium text-slate-500 block">Overall Progress</span>
          <div className="flex items-baseline gap-2 mt-1">
            <span className="text-2xl font-bold text-blue-700">{currentUser.overallProgress}%</span>
            <span className="text-[11px] text-blue-600 font-medium">Syllabus Covered</span>
          </div>
          <div className="mt-2 w-full bg-slate-100 rounded-full h-1">
            <div className="bg-blue-700 h-1 rounded-full" style={{ width: `${currentUser.overallProgress}%` }}></div>
          </div>
        </div>
      </div>

      {/* Main Required Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card 1: CONTINUE LEARNING */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-bold uppercase tracking-wider text-blue-700">Continue Learning</span>
              <span>{recentChapter.book}</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              {recentChapter.title}
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              By {recentChapter.authorOrPoet} • Next: 10 Important Board Questions
            </p>
            <div className="space-y-1.5 mb-5">
              <div className="flex justify-between text-xs font-semibold text-slate-700">
                <span>Chapter Mastery</span>
                <span>{recentChapter.progressPercent}%</span>
              </div>
              <div className="w-full bg-slate-100 rounded-full h-2">
                <div 
                  className="bg-blue-600 h-2 rounded-full transition-all duration-500" 
                  style={{ width: `${recentChapter.progressPercent}%` }}
                ></div>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('chapter-detail', recentChapter.id)}
            className="w-full py-2.5 px-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Resume Chapter Notes
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 2: TODAY'S PRACTICE */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-bold uppercase tracking-wider text-emerald-700">Today's Practice</span>
              <span className="text-emerald-600 font-medium">Daily Drill</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Reported Speech & Board Questions
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              5 curated board-style questions targeting your recent error patterns.
            </p>
            <div className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs text-slate-600 space-y-1.5 mb-5">
              <div className="flex items-center justify-between">
                <span>Estimated Time:</span>
                <span className="font-semibold text-slate-800">8 Minutes</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Topics:</span>
                <span className="font-semibold text-slate-800">Commands, Inversions, Concord</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('practice-session')}
            className="w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Start Today's Practice
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 3: RECENT RESULTS */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-bold uppercase tracking-wider text-violet-700">Recent Results</span>
              <span>24 Sep 2026</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Literature Sectional Test #2
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              First Flight & Footprints Without Feet
            </p>
            <div className="grid grid-cols-2 gap-3 mb-5">
              <div className="p-3 bg-violet-50 rounded-lg text-center">
                <span className="text-[11px] text-violet-700 block font-medium">Score</span>
                <span className="text-xl font-bold text-violet-900">18 / 20</span>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg text-center">
                <span className="text-[11px] text-slate-600 block font-medium">Accuracy</span>
                <span className="text-xl font-bold text-slate-900">90.0%</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('mock-tests')}
            className="w-full py-2.5 px-4 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            View Full Report & Analysis
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 4: MY MISTAKES */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-bold uppercase tracking-wider text-amber-700">My Mistakes</span>
              <span className="px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-semibold text-[10px]">
                {mistakesCount} Unresolved
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              Personalized Mistake Book
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Questions you answered incorrectly during recent mock tests and chapter drills are automatically saved here.
            </p>
            <div className="text-xs text-slate-600 space-y-1.5 mb-5 bg-amber-50/50 p-3 rounded-lg border border-amber-100">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Reported speech double inversion errors</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span>
                <span>Lencho's irony explanation in 6M questions</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('mistakes')}
            className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Practice My Mistakes
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 5: UPCOMING TEST */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-bold uppercase tracking-wider text-blue-700">Upcoming Test</span>
              <span className="flex items-center gap-1 text-slate-500">
                <Calendar className="w-3 h-3" /> Sun, 3 Oct
              </span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              All-India Full Board Mock Test #1
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Official 80-Mark 3-Hour Simulation (Reading, Writing, Grammar, Literature)
            </p>
            <div className="p-3 bg-blue-50/50 rounded-lg border border-blue-100 text-xs text-slate-700 space-y-1 mb-5">
              <p><strong>Evaluation:</strong> AI & Teacher Verified Marking Scheme</p>
              <p><strong>Pattern:</strong> CBSE 2026-27 Prescribed Blueprint</p>
            </div>
          </div>

          <button
            onClick={() => onNavigate('mock-tests')}
            className="w-full py-2.5 px-4 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Register / Set Reminder
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Card 6: RECENT ANNOUNCEMENTS */}
        <div className="bg-white rounded-xl border border-slate-200 p-6 flex flex-col justify-between shadow-xs hover:border-slate-300 transition-colors">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
              <span className="font-bold uppercase tracking-wider text-rose-700">Recent Announcements</span>
              <span className="text-[10px] text-slate-400">CBSE Circular</span>
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-1">
              CBSE Class 10 Syllabus Guidelines
            </h3>
            <p className="text-xs text-slate-500 mb-4">
              Important updates for English (Code 184)
            </p>
            <div className="space-y-2 text-xs text-slate-600 mb-5">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="font-semibold text-slate-900 block">50% Competency Questions</span>
                <span className="text-[11px] text-slate-500">Board exam will prioritize application, analytical paragraphs and extract evaluations.</span>
              </div>
            </div>
          </div>

          <button
            onClick={() => onNavigate('board-prep')}
            className="w-full py-2.5 px-4 border border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Review Board Syllabus Notes
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
