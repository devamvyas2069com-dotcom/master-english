import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Bookmark, 
  AlertCircle, 
  Award,
  Layers,
  FileText
} from 'lucide-react';
import { Chapter, BookType } from '../types';
import { CHAPTERS_DATA, OFFICIAL_CBSE_SYLLABUS_INDEX } from '../data/chaptersData';

interface LiteratureDashboardProps {
  onSelectChapter: (chapterId: string, initialTab?: string) => void;
  bookmarksCount: number;
  mistakesCount: number;
  onNavigate: (tab: string) => void;
}

export const LiteratureDashboard: React.FC<LiteratureDashboardProps> = ({
  onSelectChapter,
  bookmarksCount,
  mistakesCount,
  onNavigate
}) => {
  const [activeSection, setActiveSection] = useState<'all' | 'ff-prose' | 'ff-poetry' | 'fwf' | 'archived'>('all');
  const [searchFilter, setSearchFilter] = useState('');

  // Group chapters
  const firstFlightProse = OFFICIAL_CBSE_SYLLABUS_INDEX.filter(c => c.book === 'First Flight (Prose)' && c.status === 'Active Prescribed');
  const firstFlightPoetry = OFFICIAL_CBSE_SYLLABUS_INDEX.filter(c => c.book === 'First Flight (Poetry)' && c.status === 'Active Prescribed');
  const footprints = OFFICIAL_CBSE_SYLLABUS_INDEX.filter(c => c.book === 'Footprints Without Feet' && c.status === 'Active Prescribed');
  const archived = OFFICIAL_CBSE_SYLLABUS_INDEX.filter(c => c.status === 'Archived / Dropped');

  // Filtered list
  const filteredIndex = OFFICIAL_CBSE_SYLLABUS_INDEX.filter(item => {
    const matchesSearch = item.title.toLowerCase().includes(searchFilter.toLowerCase()) ||
                          item.authorOrPoet.toLowerCase().includes(searchFilter.toLowerCase());
    if (!matchesSearch) return false;

    if (activeSection === 'ff-prose') return item.book === 'First Flight (Prose)' && item.status === 'Active Prescribed';
    if (activeSection === 'ff-poetry') return item.book === 'First Flight (Poetry)' && item.status === 'Active Prescribed';
    if (activeSection === 'fwf') return item.book === 'Footprints Without Feet' && item.status === 'Active Prescribed';
    if (activeSection === 'archived') return item.status === 'Archived / Dropped';
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              CBSE Section C • 40 Marks
            </span>
            <span className="text-xs text-slate-500">
              Prescribed Textbooks: First Flight & Footprints Without Feet
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Literature Hub
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Original educational notes, character profiles, themes, verified board PYQs and 1-page quick revision.
          </p>
        </div>

        {/* Quick Literature Toolbar */}
        <div className="flex items-center gap-2 flex-wrap">
          <button
            onClick={() => onNavigate('bookmarks')}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
          >
            <Bookmark className="w-3.5 h-3.5 text-blue-600" />
            Bookmarks ({bookmarksCount})
          </button>
          <button
            onClick={() => onNavigate('mistakes')}
            className="px-3 py-1.5 rounded-lg border border-slate-200 bg-white text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
          >
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            Mistakes ({mistakesCount})
          </button>
          <button
            onClick={() => onNavigate('pyqs')}
            className="px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs font-semibold hover:bg-blue-700 transition-colors flex items-center gap-1.5"
          >
            <Award className="w-3.5 h-3.5" />
            Verified PYQs (2019-2025)
          </button>
        </div>
      </div>

      {/* Continue Reading Bar */}
      <div className="p-4 bg-white rounded-xl border border-blue-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <span className="text-[11px] font-semibold text-blue-700 uppercase tracking-wider block">
              Continue Reading
            </span>
            <h4 className="text-sm font-bold text-slate-900">
              A Letter to God — G.L. Fuentes
            </h4>
            <span className="text-xs text-slate-500">
              Last studied: 10 Important Board Questions • 78% Completed
            </span>
          </div>
        </div>

        <div className="flex items-center gap-2 self-end sm:self-auto">
          <button
            onClick={() => onSelectChapter('ff-prose-1', 'notes')}
            className="px-3 py-1.5 bg-blue-600 text-white text-xs font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Study Notes
          </button>
          <button
            onClick={() => onSelectChapter('ff-prose-1', 'questions')}
            className="px-3 py-1.5 border border-slate-300 text-slate-700 text-xs font-semibold rounded-lg hover:bg-slate-50 transition-colors"
          >
            10 Questions
          </button>
        </div>
      </div>

      {/* Search & Textbook Filter Tabs */}
      <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        {/* Textbook Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold text-slate-600">
          <button
            onClick={() => setActiveSection('all')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeSection === 'all' ? 'bg-slate-900 text-white' : 'bg-white border border-slate-200 hover:bg-slate-100'
            }`}
          >
            All Textbooks ({OFFICIAL_CBSE_SYLLABUS_INDEX.length})
          </button>
          <button
            onClick={() => setActiveSection('ff-prose')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeSection === 'ff-prose' ? 'bg-blue-600 text-white' : 'bg-white border border-slate-200 hover:bg-slate-100'
            }`}
          >
            First Flight (Prose) ({firstFlightProse.length})
          </button>
          <button
            onClick={() => setActiveSection('ff-poetry')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeSection === 'ff-poetry' ? 'bg-emerald-600 text-white' : 'bg-white border border-slate-200 hover:bg-slate-100'
            }`}
          >
            First Flight (Poetry) ({firstFlightPoetry.length})
          </button>
          <button
            onClick={() => setActiveSection('fwf')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeSection === 'fwf' ? 'bg-violet-600 text-white' : 'bg-white border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Footprints Without Feet ({footprints.length})
          </button>
          <button
            onClick={() => setActiveSection('archived')}
            className={`px-3 py-2 rounded-lg transition-colors whitespace-nowrap ${
              activeSection === 'archived' ? 'bg-amber-600 text-white' : 'bg-white border border-slate-200 hover:bg-slate-100'
            }`}
          >
            Older / Archived ({archived.length})
          </button>
        </div>

        {/* Chapter Search Filter */}
        <div className="relative min-w-[220px]">
          <input
            type="text"
            placeholder="Filter by chapter or author..."
            value={searchFilter}
            onChange={(e) => setSearchFilter(e.target.value)}
            className="w-full pl-8 pr-3 py-2 text-xs bg-white border border-slate-200 rounded-lg focus:outline-none focus:border-blue-400"
          />
          <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5" />
        </div>
      </div>

      {/* Chapters Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filteredIndex.map((item) => {
          const detailedData = CHAPTERS_DATA.find(c => c.id === item.id);
          const progress = detailedData?.progressPercent || 0;
          const isArchived = item.status === 'Archived / Dropped';

          return (
            <div 
              key={item.id}
              className={`p-5 rounded-xl border bg-white shadow-xs transition-all flex flex-col justify-between ${
                isArchived 
                  ? 'border-amber-200 bg-amber-50/20' 
                  : 'border-slate-200 hover:border-blue-400 hover:shadow-sm'
              }`}
            >
              <div>
                {/* Book & Status Tag */}
                <div className="flex items-center justify-between text-[11px] mb-2">
                  <span className="font-semibold text-slate-500">
                    {item.book}
                  </span>
                  {isArchived ? (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-amber-100 text-amber-900 border border-amber-300">
                      Older / Not in Current Syllabus
                    </span>
                  ) : (
                    <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-emerald-50 text-emerald-700 border border-emerald-200">
                      Active 2026-27
                    </span>
                  )}
                </div>

                {/* Chapter Title & Author */}
                <h3 className="text-base font-bold text-slate-900 mb-1 leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-500 mb-4">
                  By {item.authorOrPoet}
                </p>

                {/* Progress bar */}
                <div className="space-y-1 mb-5">
                  <div className="flex justify-between text-[11px] font-medium text-slate-600">
                    <span>Progress</span>
                    <span className="font-bold text-slate-800">{isArchived ? '0%' : `${progress}%`}</span>
                  </div>
                  <div className="w-full bg-slate-100 rounded-full h-1.5">
                    <div 
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        isArchived ? 'bg-amber-400' : 'bg-blue-600'
                      }`}
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>
              </div>

              {/* Action Buttons: Study, Questions, PYQs */}
              <div className="grid grid-cols-3 gap-1.5 pt-3 border-t border-slate-100 text-xs font-semibold">
                <button
                  onClick={() => onSelectChapter(item.id, 'notes')}
                  className="py-1.5 px-2 rounded-md bg-blue-50 text-blue-700 hover:bg-blue-100 transition-colors text-center"
                >
                  Study Notes
                </button>
                <button
                  onClick={() => onSelectChapter(item.id, 'questions')}
                  className="py-1.5 px-2 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-center"
                >
                  10 Questions
                </button>
                <button
                  onClick={() => onSelectChapter(item.id, 'pyqs')}
                  className="py-1.5 px-2 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-center"
                >
                  PYQs
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
