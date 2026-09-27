import React, { useState } from 'react';
import { 
  FileText, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  BookOpen, 
  Send, 
  Layers, 
  BarChart, 
  Award, 
  ChevronDown, 
  ChevronUp,
  Bookmark
} from 'lucide-react';
import { ReadingPassage, WritingItem, QuestionModel } from '../types';
import { READING_PASSAGES_DATA, WRITING_ITEMS_DATA } from '../data/readingWritingData';

interface ReadingWritingSectionProps {
  onBookmarkQuestion?: (question: QuestionModel) => void;
  isBookmarked?: (id: string) => boolean;
}

export const ReadingWritingSection: React.FC<ReadingWritingSectionProps> = ({
  onBookmarkQuestion,
  isBookmarked
}) => {
  const [activeTab, setActiveTab] = useState<'reading' | 'writing'>('reading');
  const [selectedPassageId, setSelectedPassageId] = useState<string>(READING_PASSAGES_DATA[0].id);
  const [selectedWritingId, setSelectedWritingId] = useState<string>(WRITING_ITEMS_DATA[0].id);

  // Expanded answer states
  const [expandedAnswers, setExpandedAnswers] = useState<Record<string, boolean>>({});

  const toggleAnswer = (id: string) => {
    setExpandedAnswers(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const currentPassage = READING_PASSAGES_DATA.find(p => p.id === selectedPassageId) || READING_PASSAGES_DATA[0];
  const currentWriting = WRITING_ITEMS_DATA.find(w => w.id === selectedWritingId) || WRITING_ITEMS_DATA[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              CBSE Sections A & B • 30 Marks Total
            </span>
            <span className="text-xs text-slate-500">
              Reading Skills (20M) + Formal Writing Skills (10M)
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Reading Comprehension & Writing Skills
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Authentic discursive passages, statistical case studies, letter formats, and analytical paragraph rubrics.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveTab('reading')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'reading' ? 'bg-white text-blue-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Reading Section (20M)
          </button>
          <button
            onClick={() => setActiveTab('writing')}
            className={`px-4 py-2 rounded-lg transition-all ${
              activeTab === 'writing' ? 'bg-white text-blue-700 shadow-xs font-bold' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Writing Section (10M)
          </button>
        </div>
      </div>

      {/* READING SECTION */}
      {activeTab === 'reading' && (
        <div className="space-y-6">
          {/* Passage Selector Bar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {READING_PASSAGES_DATA.map(p => (
              <button
                key={p.id}
                onClick={() => setSelectedPassageId(p.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedPassageId === p.id 
                    ? 'bg-blue-50/50 border-blue-500 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold uppercase tracking-wider text-blue-700">{p.type} Passage</span>
                  <span className="text-slate-400">{p.wordCount} words</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {p.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Reading Display Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Passage Text (Left) */}
            <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-slate-100 text-slate-700">
                  {currentPassage.type} • {currentPassage.wordCount} Words
                </span>
                <span className="text-xs text-slate-500 flex items-center gap-1">
                  <Clock className="w-3.5 h-3.5" /> Read Time: ~4 mins
                </span>
              </div>

              <h2 className="text-lg font-bold text-slate-900">
                {currentPassage.title}
              </h2>

              <div className="text-xs sm:text-sm text-slate-700 font-serif leading-relaxed whitespace-pre-line space-y-3">
                {currentPassage.passageText}
              </div>
            </div>

            {/* Questions Column (Right) */}
            <div className="lg:col-span-5 space-y-4">
              <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block mb-1">
                  Comprehension Questions
                </span>
                <p className="text-xs text-slate-500">
                  Answer the following questions based on inference and vocabulary from the text.
                </p>
              </div>

              {currentPassage.questions.map((q, idx) => {
                const isExpanded = !!expandedAnswers[q.id];
                return (
                  <div key={q.id} className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-500">Question {idx + 1}</span>
                      <span className="font-semibold text-blue-700">{q.marks} Mark</span>
                    </div>

                    <p className="text-xs sm:text-sm font-semibold text-slate-900">
                      {q.question}
                    </p>

                    {q.options && (
                      <div className="space-y-1.5">
                        {q.options.map((opt, oIdx) => (
                          <div 
                            key={oIdx}
                            className={`p-2.5 rounded-lg border text-xs ${
                              isExpanded && oIdx === q.correctOptionIndex
                                ? 'bg-emerald-50 border-emerald-300 text-emerald-950 font-semibold'
                                : 'bg-slate-50 border-slate-200 text-slate-700'
                            }`}
                          >
                            {String.fromCharCode(65 + oIdx)}. {opt}
                          </div>
                        ))}
                      </div>
                    )}

                    <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                      <button
                        onClick={() => toggleAnswer(q.id)}
                        className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                      >
                        {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                        {isExpanded ? 'Hide Solution' : 'View Correct Answer & Explanation'}
                      </button>
                    </div>

                    {isExpanded && (
                      <div className="p-3 bg-slate-50 rounded-lg text-xs space-y-2 border border-slate-100">
                        <span className="font-bold text-emerald-700 block">Model Answer:</span>
                        <p className="font-serif text-slate-800">{q.modelAnswer}</p>
                        <p className="text-slate-500 text-[11px] pt-1 border-t border-slate-200">
                          <strong>Examiner Rationale:</strong> {q.explanation}
                        </p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* WRITING SECTION */}
      {activeTab === 'writing' && (
        <div className="space-y-6">
          {/* Writing Category Tabs */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WRITING_ITEMS_DATA.map(w => (
              <button
                key={w.id}
                onClick={() => setSelectedWritingId(w.id)}
                className={`p-4 rounded-xl border text-left transition-all ${
                  selectedWritingId === w.id 
                    ? 'bg-blue-50/50 border-blue-500 shadow-xs' 
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <div className="flex items-center justify-between text-xs mb-1">
                  <span className="font-bold uppercase tracking-wider text-blue-700">{w.type}</span>
                  <span className="text-slate-400">5 Marks</span>
                </div>
                <h3 className="text-sm font-bold text-slate-900 leading-snug">
                  {w.title}
                </h3>
              </button>
            ))}
          </div>

          {/* Writing Content Breakdown */}
          <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6">
            <div className="border-b border-slate-100 pb-4">
              <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
                {currentWriting.type} • {currentWriting.category}
              </span>
              <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                {currentWriting.title}
              </h2>
            </div>

            {/* Official CBSE Marking Breakdown (1M Format + 2M Content + 2M Expression) */}
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2">
              <span className="text-xs font-bold text-slate-900 block uppercase tracking-wider">
                Official CBSE Marking Criteria (Total 5 Marks):
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                {currentWriting.markingBreakdown.map((mb, idx) => (
                  <div key={idx} className="p-3 bg-white rounded-lg border border-slate-200 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="font-bold text-slate-900">{mb.criterion}</span>
                      <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-800 font-bold">{mb.marks}M</span>
                    </div>
                    <p className="text-slate-500 text-[11px] leading-tight">{mb.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Prompt */}
            <div className="p-4 bg-blue-50/40 rounded-xl border border-blue-200 text-xs sm:text-sm text-slate-800 space-y-1">
              <span className="font-bold text-blue-900 block text-xs uppercase tracking-wider">
                Sample Examination Prompt:
              </span>
              <p className="font-serif italic">{currentWriting.modelPrompt}</p>
            </div>

            {/* Full Model Answer */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-900 uppercase tracking-wider">
                  Model Answer (100–120 Words)
                </span>
                <span className="text-xs text-slate-400">
                  Target: 100-120 words
                </span>
              </div>
              <div className="p-6 bg-slate-50/70 rounded-xl border border-slate-200 text-xs sm:text-sm text-slate-800 font-serif leading-relaxed whitespace-pre-line">
                {currentWriting.modelAnswer}
              </div>
            </div>

            {/* High-Scoring Phrases & Common Errors */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50/50 rounded-xl border border-emerald-200 text-xs space-y-2">
                <span className="font-bold text-emerald-900 block flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" /> High-Scoring Vocabulary & Phrases
                </span>
                <ul className="space-y-1.5 list-disc pl-4 text-emerald-950 font-serif italic">
                  {currentWriting.highScoringPhrases.map((phrase, idx) => (
                    <li key={idx}>{phrase}</li>
                  ))}
                </ul>
              </div>

              <div className="p-4 bg-red-50/50 rounded-xl border border-red-200 text-xs space-y-2">
                <span className="font-bold text-red-900 block flex items-center gap-1.5">
                  <AlertCircle className="w-4 h-4 text-red-600" /> Common Pitfalls to Avoid
                </span>
                <ul className="space-y-1.5 list-disc pl-4 text-red-950">
                  {currentWriting.commonErrors.map((err, idx) => (
                    <li key={idx}>{err}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
