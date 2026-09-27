import React, { useState } from 'react';
import { 
  Search, 
  Filter, 
  Bookmark, 
  ChevronDown, 
  ChevronUp, 
  Award, 
  CheckCircle2, 
  RefreshCw, 
  AlertCircle,
  HelpCircle,
  Sparkles
} from 'lucide-react';
import { QuestionModel } from '../types';
import { ALL_QUESTIONS_DATA } from '../data/questionsBankData';

interface QuestionBankPageProps {
  onBookmarkQuestion: (question: QuestionModel) => void;
  isBookmarked: (id: string) => boolean;
  onLogMistake: (question: QuestionModel, studentAnswer: string) => void;
  initialSearch?: string;
}

export const QuestionBankPage: React.FC<QuestionBankPageProps> = ({
  onBookmarkQuestion,
  isBookmarked,
  onLogMistake,
  initialSearch = ''
}) => {
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [selectedBook, setSelectedBook] = useState('all');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState('all');
  const [selectedMarks, setSelectedMarks] = useState('all');
  const [selectedSource, setSelectedSource] = useState('all');

  // Expanded questions state
  const [expandedMap, setExpandedMap] = useState<Record<string, boolean>>({});

  const toggleExpand = (id: string) => {
    setExpandedMap(prev => ({ ...prev, [id]: !prev[id] }));
  };

  const filteredQuestions = ALL_QUESTIONS_DATA.filter(q => {
    if (selectedBook !== 'all' && q.book !== selectedBook) return false;
    if (selectedType !== 'all' && q.type !== selectedType) return false;
    if (selectedDifficulty !== 'all' && q.difficulty !== selectedDifficulty) return false;
    if (selectedMarks !== 'all' && q.marks !== parseInt(selectedMarks)) return false;
    if (selectedSource !== 'all' && q.sourceType !== selectedSource) return false;

    if (searchTerm.trim()) {
      const s = searchTerm.toLowerCase();
      const match = q.question.toLowerCase().includes(s) ||
                    q.chapterTitle.toLowerCase().includes(s) ||
                    (q.modelAnswer && q.modelAnswer.toLowerCase().includes(s)) ||
                    (q.topic && q.topic.toLowerCase().includes(s));
      if (!match) return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              Universal Question Repository
            </span>
            <span className="text-xs text-slate-500">
              Comprehensive Class 10 Question Bank
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Question Bank
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Search across MCQs, Short Answers, Long Answers, Extracts, and Competency Questions.
          </p>
        </div>

        <div className="flex items-center gap-2 text-xs">
          <span className="px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-700 font-semibold shadow-xs">
            Total Available: {ALL_QUESTIONS_DATA.length} Questions
          </span>
        </div>
      </div>

      {/* Search & Filter Bar */}
      <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
        {/* Search Input */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search questions by chapter, character, theme, keyword, or year..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs sm:text-sm focus:outline-none focus:border-blue-400"
          />
          <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3.5" />
        </div>

        {/* Filter Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-xs">
          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Book / Section</label>
            <select
              value={selectedBook}
              onChange={(e) => setSelectedBook(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
            >
              <option value="all">All Books & Sections</option>
              <option value="First Flight (Prose)">First Flight (Prose)</option>
              <option value="First Flight (Poetry)">First Flight (Poetry)</option>
              <option value="Footprints Without Feet">Footprints Without Feet</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Question Type</label>
            <select
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
            >
              <option value="all">All Question Types</option>
              <option value="MCQ">MCQ (1 Mark)</option>
              <option value="Short Answer">Short Answer (3 Marks)</option>
              <option value="Long Answer">Long Answer (6 Marks)</option>
              <option value="Extract Based">Extract Based (5 Marks)</option>
              <option value="Competency Based">Competency Based</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Marks</label>
            <select
              value={selectedMarks}
              onChange={(e) => setSelectedMarks(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
            >
              <option value="all">All Marks</option>
              <option value="1">1 Mark</option>
              <option value="3">3 Marks</option>
              <option value="5">5 Marks</option>
              <option value="6">6 Marks</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Difficulty</label>
            <select
              value={selectedDifficulty}
              onChange={(e) => setSelectedDifficulty(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
            >
              <option value="all">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Board Standard">Board Standard</option>
            </select>
          </div>

          <div>
            <label className="text-[11px] font-semibold text-slate-500 block mb-1">Source Type</label>
            <select
              value={selectedSource}
              onChange={(e) => setSelectedSource(e.target.value)}
              className="w-full p-2 bg-slate-50 border border-slate-200 rounded-lg text-slate-800"
            >
              <option value="all">All Sources</option>
              <option value="official_board">Official Board PYQ</option>
              <option value="official_sample_paper">Official Sample Paper</option>
              <option value="board_style">Board-Style Practice</option>
              <option value="platform_practice">Platform Practice</option>
            </select>
          </div>
        </div>
      </div>

      {/* Questions Results List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-slate-500 px-1">
          <span>Results: <strong>{filteredQuestions.length}</strong> questions found</span>
          {searchTerm && (
            <button 
              onClick={() => setSearchTerm('')} 
              className="text-blue-600 font-medium hover:underline"
            >
              Clear Search Query
            </button>
          )}
        </div>

        {filteredQuestions.map((q, idx) => {
          const isExpanded = !!expandedMap[q.id];
          const bookmarked = isBookmarked(q.id);

          return (
            <div 
              key={q.id}
              className="bg-white rounded-xl border border-slate-200 p-5 shadow-xs transition-all space-y-3"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-bold text-slate-400">#{idx + 1}</span>
                  <span className="text-xs font-bold text-slate-800">{q.chapterTitle}</span>
                  <span className="text-[10px] text-slate-400">•</span>
                  <span className="text-xs text-slate-500">{q.type}</span>

                  {q.verifiedYear && (
                    <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900">
                      CBSE {q.verifiedYear}
                    </span>
                  )}
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                    {q.marks}M
                  </span>
                  <button
                    onClick={() => onBookmarkQuestion(q)}
                    className={`p-1 rounded ${bookmarked ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'}`}
                  >
                    <Bookmark className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {q.contextExtract && (
                <div className="p-3 bg-slate-50 rounded-lg text-xs italic font-serif text-slate-800 border-l-2 border-blue-500">
                  {q.contextExtract}
                </div>
              )}

              <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                {q.question}
              </h3>

              <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                <button
                  onClick={() => toggleExpand(q.id)}
                  className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1"
                >
                  {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  {isExpanded ? 'Hide Solution' : 'View Model Answer & Marking Scheme'}
                </button>
              </div>

              {isExpanded && (
                <div className="p-4 bg-slate-50 rounded-xl space-y-3 text-xs border border-slate-200">
                  <div>
                    <span className="font-bold text-slate-500 block uppercase tracking-wider text-[10px] mb-1">
                      Model Answer:
                    </span>
                    <div className="p-3 bg-white rounded-lg border border-slate-200 font-serif text-slate-800 leading-relaxed whitespace-pre-line">
                      {q.modelAnswer}
                    </div>
                  </div>

                  {q.markingPoints && q.markingPoints.length > 0 && (
                    <div className="space-y-1">
                      <span className="font-bold text-emerald-700 block uppercase tracking-wider text-[10px]">
                        Marking Points:
                      </span>
                      <ul className="space-y-0.5 list-disc pl-4 text-slate-700">
                        {q.markingPoints.map((mp, mIdx) => (
                          <li key={mIdx}>{mp}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {q.commonMistake && (
                    <div className="p-2.5 bg-red-50 text-red-900 rounded-lg border border-red-200">
                      <strong>Common Mistake:</strong> {q.commonMistake}
                    </div>
                  )}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};
