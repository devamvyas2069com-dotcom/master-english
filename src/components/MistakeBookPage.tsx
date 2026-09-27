import React, { useState } from 'react';
import { 
  AlertCircle, 
  RotateCcw, 
  CheckCircle2, 
  Trash2, 
  ArrowRight, 
  BookOpen, 
  Sparkles 
} from 'lucide-react';
import { MistakeRecord, QuestionModel } from '../types';

interface MistakeBookPageProps {
  mistakes: MistakeRecord[];
  onRemoveMistake: (id: string) => void;
  onPracticeMistakes: () => void;
  onNavigateChapter: (chapterId: string) => void;
}

export const MistakeBookPage: React.FC<MistakeBookPageProps> = ({
  mistakes,
  onRemoveMistake,
  onPracticeMistakes,
  onNavigateChapter
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-200">
              Diagnostic Error Log
            </span>
            <span className="text-xs text-slate-500">
              Personalized Learning Optimization
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            My Mistake Book
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Questions you missed during chapter practice drills and mock tests are automatically recorded here for targeted re-testing.
          </p>
        </div>

        {mistakes.length > 0 && (
          <button
            onClick={onPracticeMistakes}
            className="px-5 py-2.5 bg-amber-600 hover:bg-amber-700 text-white font-semibold text-xs rounded-xl transition-colors shadow-xs flex items-center gap-2 self-start sm:self-auto"
          >
            <RotateCcw className="w-4 h-4" />
            PRACTICE MY MISTAKES ({mistakes.length})
          </button>
        )}
      </div>

      {/* Empty State */}
      {mistakes.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-xs max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">Your Mistake Book is Empty!</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            Whenever you miss a question in a practice quiz or mock test, our engine will record it here alongside the examiner's model answer so you can turn weaknesses into strengths.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {mistakes.map((record) => {
            const q = record.question;
            return (
              <div 
                key={record.id}
                className="p-6 bg-white rounded-2xl border border-amber-200 shadow-xs space-y-4"
              >
                {/* Header Row */}
                <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                  <div className="flex items-center gap-2 text-xs">
                    <span className="font-bold text-slate-900">{q.chapterTitle}</span>
                    <span className="text-slate-400">•</span>
                    <span className="text-slate-500">{q.book}</span>
                    <span className="px-2 py-0.5 rounded bg-amber-100 text-amber-900 text-[10px] font-semibold">
                      Missed {record.timesWrong} {record.timesWrong === 1 ? 'time' : 'times'}
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="text-[11px] text-slate-400">
                      Logged on {record.dateAttempted}
                    </span>
                    <button
                      onClick={() => onRemoveMistake(record.id)}
                      className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                      title="Mark as resolved & remove"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

                {/* Question */}
                <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                  {q.question}
                </h3>

                {/* Contrast: Student Answer vs Correct Answer */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                  <div className="p-3 bg-red-50/70 rounded-xl border border-red-200 text-red-950 space-y-1">
                    <span className="font-bold text-[11px] text-red-800 uppercase tracking-wider block">
                      Your Attempted Answer:
                    </span>
                    <p className="font-serif">{record.studentAnswer}</p>
                  </div>

                  <div className="p-3 bg-emerald-50/70 rounded-xl border border-emerald-200 text-emerald-950 space-y-1">
                    <span className="font-bold text-[11px] text-emerald-800 uppercase tracking-wider block">
                      Official Correct Model Answer:
                    </span>
                    <p className="font-serif font-medium">{q.modelAnswer}</p>
                  </div>
                </div>

                {/* Explanation */}
                <div className="p-3 bg-slate-50 rounded-xl text-xs text-slate-700 border border-slate-100 space-y-1">
                  <span className="font-bold text-slate-900 block">Why this is the correct answer:</span>
                  <p className="leading-relaxed">{q.explanation}</p>
                </div>

                {/* Actions */}
                <div className="flex items-center justify-between pt-2 text-xs">
                  <button
                    onClick={() => onNavigateChapter(q.chapterId)}
                    className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                  >
                    <BookOpen className="w-3.5 h-3.5" /> Review Full Chapter Notes
                  </button>

                  <button
                    onClick={() => onRemoveMistake(record.id)}
                    className="font-semibold text-emerald-700 hover:text-emerald-900 flex items-center gap-1"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5" /> I Understand This Now
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
