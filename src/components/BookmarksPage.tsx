import React from 'react';
import { Bookmark, Trash2, ArrowRight, BookOpen, Award } from 'lucide-react';
import { QuestionModel } from '../types';

interface BookmarksPageProps {
  bookmarkedQuestions: QuestionModel[];
  onRemoveBookmark: (id: string) => void;
  onNavigateChapter: (chapterId: string) => void;
}

export const BookmarksPage: React.FC<BookmarksPageProps> = ({
  bookmarkedQuestions,
  onRemoveBookmark,
  onNavigateChapter
}) => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              Personal Study Vault
            </span>
            <span className="text-xs text-slate-500">
              Saved High-Yield Board Questions
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Saved Bookmarks
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Questions and notes you've saved for last-minute revision before the board exam.
          </p>
        </div>

        <span className="text-xs px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold shadow-xs self-start sm:self-auto">
          {bookmarkedQuestions.length} Items Saved
        </span>
      </div>

      {bookmarkedQuestions.length === 0 ? (
        <div className="p-12 text-center bg-white rounded-2xl border border-slate-200 shadow-xs max-w-lg mx-auto space-y-4">
          <div className="w-12 h-12 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto">
            <Bookmark className="w-6 h-6" />
          </div>
          <h3 className="text-lg font-bold text-slate-900">No Bookmarks Saved Yet</h3>
          <p className="text-xs text-slate-500 leading-relaxed">
            While studying chapters or browsing verified board PYQs, click the bookmark icon on any question card to store it here for rapid recall.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {bookmarkedQuestions.map((q) => (
            <div 
              key={q.id}
              className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-3 hover:border-slate-300 transition-colors"
            >
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                <div className="flex items-center gap-2">
                  <span className="font-bold text-slate-900">{q.chapterTitle}</span>
                  <span className="text-slate-400">•</span>
                  <span className="text-slate-500">{q.book}</span>
                  {q.verifiedYear && (
                    <span className="px-2 py-0.5 rounded bg-blue-100 text-blue-900 font-bold text-[10px]">
                      CBSE {q.verifiedYear}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-3">
                  <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold text-[11px]">
                    {q.marks}M
                  </span>
                  <button
                    onClick={() => onRemoveBookmark(q.id)}
                    className="p-1 text-slate-400 hover:text-red-600 transition-colors"
                    title="Remove Bookmark"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                {q.question}
              </h3>

              <div className="p-3 bg-slate-50 rounded-xl text-xs space-y-1">
                <span className="font-bold text-slate-500 block uppercase tracking-wider text-[10px]">
                  Model Answer:
                </span>
                <p className="font-serif text-slate-800 leading-relaxed whitespace-pre-line">
                  {q.modelAnswer}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-xs">
                <button
                  onClick={() => onNavigateChapter(q.chapterId)}
                  className="font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  <BookOpen className="w-3.5 h-3.5" /> Open Full Chapter Notes
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
