import React from 'react';
import { 
  BookOpen, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Bookmark, 
  Sparkles, 
  ShieldCheck, 
  FileText, 
  PenTool, 
  Clock, 
  BrainCircuit, 
  Target 
} from 'lucide-react';
import { SyllabusYear } from '../types';

interface HomePageProps {
  onNavigate: (tab: string) => void;
  syllabusYear: SyllabusYear;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate, syllabusYear }) => {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Hero Section */}
      <section className="relative pt-12 pb-16 md:pt-20 md:pb-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Syllabus Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-medium text-blue-800">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600"></span>
            Official CBSE Curriculum {syllabusYear} Aligned (Code 184)
          </div>

          {/* Exact Hero Title */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900 leading-tight">
            Master Class 10 English.
          </h1>

          {/* Exact Subtitle */}
          <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Complete Grammar, Literature, Reading, Writing & Board Preparation — all in one place.
          </p>

          {/* Core Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-3">
            <button
              onClick={() => onNavigate('dashboard')}
              className="px-6 py-3 rounded-lg bg-blue-600 text-white font-semibold text-sm hover:bg-blue-700 transition-colors shadow-sm inline-flex items-center gap-2"
            >
              START LEARNING
              <ArrowRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => onNavigate('literature')}
              className="px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-100/80 transition-colors"
            >
              EXPLORE LITERATURE
            </button>

            <button
              onClick={() => onNavigate('grammar')}
              className="px-5 py-3 rounded-lg bg-white border border-slate-300 text-slate-800 font-semibold text-sm hover:bg-slate-100/80 transition-colors"
            >
              PRACTICE GRAMMAR
            </button>

            <button
              onClick={() => onNavigate('mock-tests')}
              className="px-5 py-3 rounded-lg bg-slate-900 text-white font-semibold text-sm hover:bg-slate-800 transition-colors"
            >
              TAKE A MOCK TEST
            </button>
          </div>
        </div>

        {/* Four Simple Academic Cards Below Hero */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-16 max-w-6xl mx-auto">
          {/* Card 1: GRAMMAR */}
          <div 
            onClick={() => onNavigate('grammar')}
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
              <PenTool className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
              GRAMMAR
            </h3>
            <p className="text-xs text-slate-500 mb-4 line-clamp-2">
              Determiners, Tenses, Modals, Concord & Reported Speech with rules and board error correction.
            </p>
            <div className="flex items-center justify-between text-xs text-blue-600 font-semibold pt-2 border-t border-slate-100">
              <span>5 Core Modules</span>
              <span className="group-hover:translate-x-0.5 transition-transform">Practice →</span>
            </div>
          </div>

          {/* Card 2: LITERATURE */}
          <div 
            onClick={() => onNavigate('literature')}
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-700 flex items-center justify-center mb-4 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
              <BookOpen className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
              LITERATURE
            </h3>
            <p className="text-xs text-slate-500 mb-4 line-clamp-2">
              First Flight & Footprints Without Feet. Original comprehensive notes, summaries and 10 key questions.
            </p>
            <div className="flex items-center justify-between text-xs text-emerald-700 font-semibold pt-2 border-t border-slate-100">
              <span>19 Prescribed Chapters</span>
              <span className="group-hover:translate-x-0.5 transition-transform">Read Notes →</span>
            </div>
          </div>

          {/* Card 3: PRACTICE */}
          <div 
            onClick={() => onNavigate('question-bank')}
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-violet-50 text-violet-700 flex items-center justify-center mb-4 group-hover:bg-violet-600 group-hover:text-white transition-colors">
              <Target className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
              PRACTICE
            </h3>
            <p className="text-xs text-slate-500 mb-4 line-clamp-2">
              Adaptive drills avoiding duplicates, weak topic targeting, mistake tracking, and instant model answers.
            </p>
            <div className="flex items-center justify-between text-xs text-violet-700 font-semibold pt-2 border-t border-slate-100">
              <span>Adaptive Question Bank</span>
              <span className="group-hover:translate-x-0.5 transition-transform">Solve Drills →</span>
            </div>
          </div>

          {/* Card 4: BOARD PREPARATION */}
          <div 
            onClick={() => onNavigate('board-prep')}
            className="p-6 bg-white rounded-xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-md transition-all cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-lg bg-amber-50 text-amber-700 flex items-center justify-center mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
              <Award className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold text-slate-900 mb-1 tracking-tight">
              BOARD PREPARATION
            </h3>
            <p className="text-xs text-slate-500 mb-4 line-clamp-2">
              Verified board PYQs (2019-2025), official sample papers, marking schemes, and full syllabus mocks.
            </p>
            <div className="flex items-center justify-between text-xs text-amber-700 font-semibold pt-2 border-t border-slate-100">
              <span>Verified Past Papers</span>
              <span className="group-hover:translate-x-0.5 transition-transform">Explore PYQs →</span>
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Division Overview (Clean & Academic) */}
      <section className="py-12 border-t border-slate-200 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
              CBSE Class 10 Examination Architecture
            </h2>
            <p className="text-sm text-slate-500 mt-1">
              Aligned with the 80 Marks Theory Examination Pattern (Code 184)
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Section A */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Section A</span>
                <span className="text-xs px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-semibold">20 Marks</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Reading Skills</h3>
              <ul className="text-xs text-slate-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Discursive Passage</strong> (400-450 words) evaluating inference and vocabulary</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-600 mt-0.5 shrink-0" />
                  <span><strong>Case-based Factual Passage</strong> (200-250 words) with statistical cues</span>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('reading-writing')}
                className="text-xs font-semibold text-blue-600 hover:text-blue-800"
              >
                Practice Reading Passages →
              </button>
            </div>

            {/* Section B */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Section B</span>
                <span className="text-xs px-2 py-0.5 rounded bg-emerald-100 text-emerald-800 font-semibold">20 Marks</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Writing & Grammar</h3>
              <ul className="text-xs text-slate-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Grammar (10 Marks)</strong>: Determiners, Tenses, Modals, Concord, Reported Speech</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span><strong>Writing (10 Marks)</strong>: Formal Letter (5M) & Analytical Paragraph (5M)</span>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('grammar')}
                className="text-xs font-semibold text-emerald-700 hover:text-emerald-900"
              >
                Master Grammar & Formats →
              </button>
            </div>

            {/* Section C */}
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-violet-700 uppercase tracking-wider">Section C</span>
                <span className="text-xs px-2 py-0.5 rounded bg-violet-100 text-violet-800 font-semibold">40 Marks</span>
              </div>
              <h3 className="text-lg font-bold text-slate-900 mb-2">Language Through Literature</h3>
              <ul className="text-xs text-slate-600 space-y-2 mb-4">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 mt-0.5 shrink-0" />
                  <span><strong>First Flight</strong>: 9 Prose Chapters & 10 Prescribed Poems</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 mt-0.5 shrink-0" />
                  <span><strong>Footprints Without Feet</strong>: 9 Supplementary Reader Stories</span>
                </li>
              </ul>
              <button 
                onClick={() => onNavigate('literature')}
                className="text-xs font-semibold text-violet-700 hover:text-violet-900"
              >
                Explore Literature Textbooks →
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* The 10 Important Questions Feature Highlight */}
      <section className="py-14 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="bg-slate-900 text-white rounded-2xl p-8 sm:p-12 relative overflow-hidden">
          <div className="max-w-2xl space-y-4">
            <span className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Examiner-Graded Learning System
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Every chapter is a complete learning system, not just a static notes page.
            </h2>
            <p className="text-slate-300 text-sm leading-relaxed">
              Full Notes → 1-Page Quick Revision → 10 Carefully Selected Questions with Model Answers, Marking Schemes, Keywords, and Common Mistakes → Verified Board PYQs → Adaptive Practice Drills → Mistake Book.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={() => onNavigate('literature')}
                className="px-5 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 font-semibold text-xs tracking-wide transition-colors"
              >
                Open Chapter 1: A Letter to God
              </button>
              <button
                onClick={() => onNavigate('pyqs')}
                className="px-5 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 font-semibold text-xs tracking-wide transition-colors"
              >
                Browse Verified Board PYQs (2019–2025)
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
