import React from 'react';
import { 
  Award, 
  FileText, 
  BookOpen, 
  PenTool, 
  CheckCircle2, 
  ArrowRight, 
  Clock, 
  Sparkles,
  TrendingUp,
  Target
} from 'lucide-react';
import { SyllabusYear } from '../types';

interface BoardPrepDashboardProps {
  onNavigate: (tab: string, chapterId?: string) => void;
  syllabusYear: SyllabusYear;
}

export const BoardPrepDashboard: React.FC<BoardPrepDashboardProps> = ({
  onNavigate,
  syllabusYear
}) => {
  const cards = [
    {
      id: 'pyqs',
      title: 'PYQs (Past 6 Years)',
      badge: 'Verified CBSE Papers',
      badgeColor: 'bg-blue-100 text-blue-900',
      description: 'Chapter-wise board questions from 2019 to 2024 with verified marking schemes and paper set codes.',
      actionText: 'Browse 2019-2024 Papers',
      actionTab: 'pyqs'
    },
    {
      id: 'sample-papers',
      title: 'Official CBSE Sample Papers',
      badge: `${syllabusYear} Blueprint`,
      badgeColor: 'bg-emerald-100 text-emerald-900',
      description: 'Official 80-mark Sample Question Papers with exact marking schemes and word-limit compliance guides.',
      actionText: 'Solve Official SQP',
      actionTab: 'mock-tests'
    },
    {
      id: 'mock-tests',
      title: 'Full 80-Mark Mock Tests',
      badge: 'Timed Simulation',
      badgeColor: 'bg-violet-100 text-violet-900',
      description: '3-hour timed board simulations covering Reading (20M), Writing & Grammar (20M), and Literature (40M).',
      actionText: 'Start Timed Mock',
      actionTab: 'mock-tests'
    },
    {
      id: 'most-tested',
      title: 'Most Tested Board Concepts',
      badge: 'High Yield',
      badgeColor: 'bg-amber-100 text-amber-900',
      description: 'Key themes repeated across multiple board years: Mandela\'s courage, Lencho\'s situational irony, and reported speech.',
      actionText: 'View Recurring Themes',
      actionTab: 'question-bank'
    },
    {
      id: 'chapter-revision',
      title: 'Chapter 1-Page Rapid Revision',
      badge: 'Literature Section C',
      badgeColor: 'bg-blue-100 text-blue-900',
      description: '1-page summaries, crucial events, and 5 key questions for all 19 prescribed First Flight & Footprints chapters.',
      actionText: 'Open 1-Page Summaries',
      actionTab: 'literature'
    },
    {
      id: 'grammar-revision',
      title: 'Grammar Fast Revision & Traps',
      badge: 'Section B (10 Marks)',
      badgeColor: 'bg-emerald-100 text-emerald-900',
      description: 'Quick checklists for concord exceptions, modal nuances, tense sequences, and reported speech rules.',
      actionText: 'Review Grammar Rules',
      actionTab: 'grammar'
    },
    {
      id: 'writing-revision',
      title: 'Writing Skills Formats & Models',
      badge: 'Section B (10 Marks)',
      badgeColor: 'bg-rose-100 text-rose-900',
      description: '1M Format, 2M Content, 2M Expression templates for Formal Letters and Data-Driven Analytical Paragraphs.',
      actionText: 'Master Writing Formats',
      actionTab: 'reading-writing'
    },
    {
      id: 'final-revision',
      title: 'Final 24-Hour Exam Checklist',
      badge: 'Examiner Advice',
      badgeColor: 'bg-slate-900 text-white',
      description: 'Pre-exam guidelines: word counts, paragraph structuring, time management, and presentation hacks.',
      actionText: 'Read Final Checklist',
      actionTab: 'literature'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="border-b border-slate-200 pb-6">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
            CBSE Class 10 Central Board Examination
          </span>
          <span className="text-xs text-slate-500">
            Official Curriculum {syllabusYear}
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
          Board Preparation Command Center
        </h1>
        <p className="text-slate-600 text-sm mt-1 max-w-3xl">
          Everything required to secure 95%+ in CBSE Class 10 English Language & Literature (Code 184): verified past papers, marking schemes, examiner tips, and rapid revision sheets.
        </p>
      </div>

      {/* Required Eight Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {cards.map((c) => (
          <div
            key={c.id}
            className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className={`px-2 py-0.5 rounded text-[10px] font-bold ${c.badgeColor}`}>
                  {c.badge}
                </span>
              </div>
              <h3 className="text-base font-bold text-slate-900 mb-2 leading-snug">
                {c.title}
              </h3>
              <p className="text-xs text-slate-500 leading-relaxed mb-6">
                {c.description}
              </p>
            </div>

            <button
              onClick={() => onNavigate(c.actionTab)}
              className="w-full py-2.5 px-3 bg-slate-50 hover:bg-blue-50 text-slate-800 hover:text-blue-700 font-semibold text-xs rounded-xl border border-slate-200 hover:border-blue-300 transition-colors flex items-center justify-between"
            >
              <span>{c.actionText}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        ))}
      </div>

      {/* Board Examination Time Management Guide */}
      <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
        <h2 className="text-lg font-bold text-slate-900">
          Official 3-Hour Time Allocation Strategy (Total: 180 Minutes)
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 text-xs">
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-blue-700 block uppercase">15 Mins Reading</span>
            <p className="text-slate-600">Scan passages, select letter prompt, identify literature extracts.</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-emerald-700 block uppercase">45 Mins Section A</span>
            <p className="text-slate-600">Reading Comprehension: Discursive (25m) + Case-based (20m).</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-violet-700 block uppercase">45 Mins Section B</span>
            <p className="text-slate-600">Writing (Letter 18m, Para 15m) + Grammar (12m).</p>
          </div>
          <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-1">
            <span className="font-bold text-amber-700 block uppercase">60 Mins Section C</span>
            <p className="text-slate-600">Literature Textbooks + 15 Mins Final Proofreading.</p>
          </div>
        </div>
      </div>
    </div>
  );
};
