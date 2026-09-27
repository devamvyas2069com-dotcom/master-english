import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bookmark, 
  CheckCircle2, 
  Clock, 
  HelpCircle, 
  Sparkles, 
  Send, 
  BookOpen, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  AlertCircle, 
  FileText, 
  Share2, 
  Layers, 
  Menu, 
  X,
  Volume2
} from 'lucide-react';
import { Chapter, QuestionModel } from '../types';
import { CHAPTERS_DATA } from '../data/chaptersData';

interface ChapterDetailPageProps {
  chapterId: string;
  onBack: () => void;
  onBookmarkQuestion: (question: QuestionModel) => void;
  isBookmarked: (id: string) => boolean;
  onLogMistake: (question: QuestionModel, studentAnswer: string) => void;
  initialTab?: string;
}

export const ChapterDetailPage: React.FC<ChapterDetailPageProps> = ({
  chapterId,
  onBack,
  onBookmarkQuestion,
  isBookmarked,
  onLogMistake,
  initialTab = 'notes'
}) => {
  // Find current chapter or fallback to first
  const chapter = CHAPTERS_DATA.find(c => c.id === chapterId) || CHAPTERS_DATA[0];

  // Active section tab
  const [activeTab, setActiveTab] = useState<'notes' | 'revision-modes' | 'one-page' | 'questions' | 'practice' | 'ai-assistant'>(
    initialTab as any || 'notes'
  );

  // Quick revision mode
  const [revisionMode, setRevisionMode] = useState<'5min' | '10min' | '30min' | 'full'>('5min');

  // Question filter
  const [questionTypeFilter, setQuestionTypeFilter] = useState<'all' | 'MCQ' | 'Short Answer' | 'Long Answer' | 'Extract Based' | 'Competency Based'>('all');
  const [sourceFilter, setSourceFilter] = useState<'all' | 'official_board' | 'board_style' | 'official_sample_paper'>('all');

  // Expanded questions state
  const [expandedQuestionIds, setExpandedQuestionIds] = useState<Record<string, boolean>>({});

  // Mobile sidebar drawer
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // AI Study Assistant state
  const [aiPrompt, setAiPrompt] = useState('');
  const [aiLoading, setAiLoading] = useState(false);
  const [aiMessages, setAiMessages] = useState<Array<{ sender: 'user' | 'assistant'; text: string; sources?: string[] }>>([
    {
      sender: 'assistant',
      text: `Hello! I am your CBSE Class 10 English study mentor for "${chapter.title}". You can ask me to explain characters, analyze underlying themes, clarify board exam marking schemes, or generate custom practice questions.`
    }
  ]);

  // Practice test state inside chapter
  const [practiceAnswerIndex, setPracticeAnswerIndex] = useState<Record<string, number>>({});
  const [practiceSubmitted, setPracticeSubmitted] = useState(false);

  const toggleQuestionExpand = (qId: string) => {
    setExpandedQuestionIds(prev => ({ ...prev, [qId]: !prev[qId] }));
  };

  const handleAskAi = async (customText?: string) => {
    const query = customText || aiPrompt;
    if (!query.trim() || aiLoading) return;

    const userMsg = { sender: 'user' as const, text: query };
    setAiMessages(prev => [...prev, userMsg]);
    setAiPrompt('');
    setAiLoading(true);

    try {
      const response = await fetch('/api/ai/ask', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          question: query,
          chapterTitle: chapter.title,
          bookTitle: chapter.book
        })
      });

      const data = await response.json();
      setAiMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: data.answer || 'Analysis complete.',
          sources: data.sources || ['CBSE NCERT Class 10 Text']
        }
      ]);
    } catch (err) {
      setAiMessages(prev => [
        ...prev,
        {
          sender: 'assistant',
          text: 'Unable to connect to AI study mentor right now. Please review the verified chapter notes above.'
        }
      ]);
    } finally {
      setAiLoading(false);
    }
  };

  // Filter 10 Important Questions
  const filteredQuestions = chapter.tenImportantQuestions.filter(q => {
    if (questionTypeFilter !== 'all' && q.type !== questionTypeFilter) return false;
    if (sourceFilter !== 'all' && q.sourceType !== sourceFilter) return false;
    return true;
  });

  return (
    <div className="bg-slate-50 min-h-screen text-slate-900 pb-16">
      {/* Top Breadcrumb & Actions Bar */}
      <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button
              onClick={onBack}
              className="p-1.5 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <span className="text-xs text-slate-500 font-medium">
                {chapter.book} • Chapter {chapter.chapterNumber}
              </span>
              <h2 className="text-sm sm:text-base font-bold text-slate-900 leading-tight truncate max-w-[200px] sm:max-w-md">
                {chapter.title}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('ai-assistant')}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'ai-assistant' 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-blue-50 text-blue-700 hover:bg-blue-100'
              }`}
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ask AI Assistant</span>
              <span className="sm:hidden">AI</span>
            </button>

            {/* Mobile Sidebar Toggle */}
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="lg:hidden p-2 rounded-lg border border-slate-200 text-slate-600 hover:bg-slate-100"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Main Layout: Left Sidebar + Right Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-6 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Navigation Sidebar */}
        <aside className={`lg:col-span-3 lg:block ${sidebarOpen ? 'block fixed inset-0 z-50 bg-white p-6 overflow-y-auto' : 'hidden'}`}>
          {sidebarOpen && (
            <div className="flex items-center justify-between pb-4 border-b border-slate-200 mb-4 lg:hidden">
              <span className="font-bold text-sm text-slate-900">Chapter Contents</span>
              <button onClick={() => setSidebarOpen(false)} className="p-1 text-slate-500">
                <X className="w-5 h-5" />
              </button>
            </div>
          )}

          <div className="sticky top-36 space-y-4">
            <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs space-y-1">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block mb-2">
                Study Sections
              </span>

              <button
                onClick={() => { setActiveTab('notes'); setSidebarOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  activeTab === 'notes' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4" /> Full Original Notes
                </span>
                <span className="text-[10px] text-slate-400">18m</span>
              </button>

              <button
                onClick={() => { setActiveTab('one-page'); setSidebarOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  activeTab === 'one-page' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <FileText className="w-4 h-4" /> 1-Page Rapid Revision
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-1.5 py-0.5 rounded">High Yield</span>
              </button>

              <button
                onClick={() => { setActiveTab('revision-modes'); setSidebarOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  activeTab === 'revision-modes' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Clock className="w-4 h-4" /> Quick Revision Timers
                </span>
                <span className="text-[10px] text-slate-400">5 / 10 / 30m</span>
              </button>

              <button
                onClick={() => { setActiveTab('questions'); setSidebarOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  activeTab === 'questions' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4" /> 10 Important Questions
                </span>
                <span className="text-[10px] bg-blue-100 text-blue-800 px-1.5 py-0.5 rounded font-bold">10 Qs</span>
              </button>

              <button
                onClick={() => { setActiveTab('practice'); setSidebarOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  activeTab === 'practice' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2">
                  <HelpCircle className="w-4 h-4" /> Chapter Practice Test
                </span>
                <span className="text-[10px] text-slate-400">Quiz</span>
              </button>

              <button
                onClick={() => { setActiveTab('ai-assistant'); setSidebarOpen(false); }}
                className={`w-full text-left px-3 py-2 rounded-lg text-xs font-semibold flex items-center justify-between transition-colors ${
                  activeTab === 'ai-assistant' ? 'bg-blue-50 text-blue-700 font-bold' : 'text-slate-600 hover:bg-slate-100'
                }`}
              >
                <span className="flex items-center gap-2 text-blue-600">
                  <Sparkles className="w-4 h-4" /> Ask About This Chapter
                </span>
                <span className="text-[10px] text-blue-600 font-bold">AI</span>
              </button>
            </div>

            {/* Chapter Quick Facts */}
            <div className="p-4 bg-white rounded-xl border border-slate-200 text-xs space-y-2.5">
              <span className="font-bold text-slate-900 block">Chapter Blueprint</span>
              <div className="flex justify-between text-slate-600">
                <span>Author / Poet:</span>
                <strong className="text-slate-900 text-right">{chapter.authorOrPoet}</strong>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Textbook:</span>
                <span className="text-slate-800 font-medium">{chapter.book}</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Board Weightage:</span>
                <span className="text-blue-700 font-semibold">Section C (40M)</span>
              </div>
              <div className="flex justify-between text-slate-600">
                <span>Verified PYQs:</span>
                <span className="text-emerald-700 font-semibold">2024, 2023, 2022</span>
              </div>
            </div>
          </div>
        </aside>

        {/* Right Main Reading & Interaction Area */}
        <main className="lg:col-span-9 space-y-8">
          {/* TAB 1: FULL ORIGINAL NOTES */}
          {activeTab === 'notes' && (
            <div className="space-y-8 animate-in fade-in duration-150">
              {/* Chapter Overview Card */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 border border-blue-200">
                    Comprehensive Original Notes
                  </span>
                  <span className="text-xs text-slate-400">
                    Estimated Reading Time: {chapter.estimatedReadTimeMinutes} mins
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                  {chapter.title}
                </h1>
                <p className="text-sm font-medium text-slate-500">
                  By {chapter.authorOrPoet}
                </p>

                {chapter.setting && (
                  <div className="p-3 bg-slate-50 rounded-lg text-xs text-slate-600">
                    <strong>Setting:</strong> {chapter.setting}
                  </div>
                )}

                {chapter.background && (
                  <div className="text-xs text-slate-600 leading-relaxed border-l-2 border-blue-500 pl-3">
                    <strong>Background:</strong> {chapter.background}
                  </div>
                )}
              </div>

              {/* Short Summary & Central Idea */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-blue-700">
                    Short Summary (The Gist)
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {chapter.shortSummary}
                  </p>
                </div>

                <div className="p-5 bg-white rounded-xl border border-slate-200 shadow-xs space-y-2">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider text-emerald-700">
                    Central Idea & Core Message
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-2">
                    <strong>Central Idea:</strong> {chapter.centralIdea}
                  </p>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    <strong>Central Message:</strong> {chapter.centralMessage}
                  </p>
                </div>
              </div>

              {/* Detailed Summary Paragraphs */}
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                  Detailed Educational Summary
                </h3>
                <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
                  {chapter.detailedSummary.map((para, idx) => (
                    <p key={idx} className="pl-3 border-l-2 border-slate-200 hover:border-blue-400 transition-colors">
                      {para}
                    </p>
                  ))}
                </div>
              </div>

              {/* Characters / Stanzas Analysis */}
              {chapter.characters && chapter.characters.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Character Profiles & Traits Analysis
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {chapter.characters.map((char, idx) => (
                      <div key={idx} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-sm font-bold text-slate-900">{char.name}</h4>
                          <span className="text-[10px] font-medium px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                            {char.role}
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 leading-relaxed">{char.description}</p>
                        <div className="flex flex-wrap gap-1 pt-1">
                          {char.traits.map((trait, tIdx) => (
                            <span key={tIdx} className="text-[10px] font-semibold px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-700">
                              {trait}
                            </span>
                          ))}
                        </div>
                        {char.keyQuotes && char.keyQuotes.length > 0 && (
                          <div className="pt-2 text-[11px] italic text-slate-500 border-t border-slate-200">
                            Key Quote: {char.keyQuotes[0]}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Stanza Analysis (For Poetry) */}
              {chapter.isPoem && chapter.stanzas && (
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Stanza-by-Stanza Analysis & Rhyme Scheme
                  </h3>
                  <div className="space-y-4">
                    {chapter.stanzas.map((st) => (
                      <div key={st.stanzaNumber} className="p-4 bg-slate-50 rounded-xl border border-slate-200 grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <span className="text-[10px] font-bold text-slate-400 uppercase">
                            Stanza {st.stanzaNumber}
                          </span>
                          <pre className="font-serif text-xs text-slate-800 italic whitespace-pre-line leading-relaxed">
                            {st.lines}
                          </pre>
                        </div>
                        <div className="space-y-2 text-xs text-slate-600">
                          <p><strong>Analysis:</strong> {st.summary}</p>
                          <div className="flex flex-wrap gap-1">
                            {st.poeticDevices.map((dev, dIdx) => (
                              <span key={dIdx} className="px-2 py-0.5 rounded bg-white text-[10px] font-medium border border-slate-200">
                                {dev}
                              </span>
                            ))}
                          </div>
                          <p className="text-[11px] text-blue-700">
                            <strong>Exam Note:</strong> {st.examSignificance}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Literary Devices */}
              {chapter.literaryDevices && chapter.literaryDevices.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Key Literary & Poetic Devices
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {chapter.literaryDevices.map((dev, idx) => (
                      <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                        <span className="font-bold text-blue-700 block">{dev.name}</span>
                        <p className="italic text-slate-800 font-serif">{dev.example}</p>
                        <p className="text-slate-600 text-[11px]">{dev.explanation}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Important Events (Cause & Effect) */}
              {chapter.importantEvents && chapter.importantEvents.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Crucial Plot Events & Cause-Effect Dynamics
                  </h3>
                  <div className="space-y-3">
                    {chapter.importantEvents.map((ev, idx) => (
                      <div key={idx} className="p-4 bg-slate-50/60 rounded-xl border border-slate-200 text-xs space-y-1.5">
                        <h4 className="font-bold text-slate-900">{ev.event}</h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-slate-600 pt-1">
                          <p><strong>Cause:</strong> {ev.cause}</p>
                          <p><strong>Effect:</strong> {ev.effect}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Vocabulary with Textual Meaning */}
              {chapter.vocabulary && chapter.vocabulary.length > 0 && (
                <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4">
                  <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-3">
                    Important Textual Vocabulary
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {chapter.vocabulary.map((v, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-100 text-xs space-y-1">
                        <span className="font-bold text-slate-900">{v.word}</span>
                        <p className="text-slate-600">{v.meaning}</p>
                        <p className="text-[10px] text-slate-400 italic">"{v.contextInText}"</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Exam Points & Common Confusions */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="p-5 bg-blue-50/50 rounded-xl border border-blue-200 space-y-3">
                  <h4 className="text-xs font-bold text-blue-900 uppercase tracking-wider">
                    High-Scoring Exam Keywords & Points
                  </h4>
                  <ul className="text-xs text-blue-950 space-y-1.5 list-disc pl-4">
                    {chapter.importantExamPoints.map((pt, idx) => (
                      <li key={idx}>{pt}</li>
                    ))}
                  </ul>
                </div>

                {chapter.commonConfusions && (
                  <div className="p-5 bg-amber-50/50 rounded-xl border border-amber-200 space-y-3">
                    <h4 className="text-xs font-bold text-amber-900 uppercase tracking-wider">
                      Common Student Confusions (Examiner Warnings)
                    </h4>
                    <ul className="text-xs text-amber-950 space-y-2 list-disc pl-4">
                      {chapter.commonConfusions.map((c, idx) => (
                        <li key={idx}>{c}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 2: ONE-PAGE RAPID REVISION */}
          {activeTab === 'one-page' && (
            <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider">
                    Last-Minute Board Revision
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    1-Page Rapid Revision: {chapter.title}
                  </h2>
                </div>
                <button 
                  onClick={() => window.print()}
                  className="px-3 py-1.5 rounded-lg border border-slate-200 text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors"
                >
                  Print / Save PDF
                </button>
              </div>

              {/* 1-Page Summary Grid */}
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="text-xs font-bold text-slate-900 block mb-1">Plot / Stanza Gist:</span>
                  <p className="text-xs text-slate-700 leading-relaxed font-serif">
                    {chapter.onePageRevision.plotOrGist}
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                    <span className="font-bold text-slate-900 block">Core Themes:</span>
                    <ul className="space-y-1 list-disc pl-4 text-slate-700">
                      {chapter.onePageRevision.keyThemes.map((thm, idx) => (
                        <li key={idx}>{thm}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                    <span className="font-bold text-slate-900 block">Crucial Moments:</span>
                    <ul className="space-y-1 list-disc pl-4 text-slate-700">
                      {chapter.onePageRevision.crucialMoments.map((mom, idx) => (
                        <li key={idx}>{mom}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-200 text-xs space-y-2">
                  <span className="font-bold text-blue-900 block">5 High-Priority Board Questions to Remember:</span>
                  <ol className="space-y-1.5 list-decimal pl-4 text-blue-950 font-medium">
                    {chapter.onePageRevision.fiveKeyQuestions.map((q, idx) => (
                      <li key={idx}>{q}</li>
                    ))}
                  </ol>
                </div>

                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-1">
                  <span className="font-bold text-slate-900 block">Verified Board References:</span>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {chapter.onePageRevision.pyqReferences.map((ref, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded bg-white border border-slate-200 text-[11px] font-medium text-slate-700">
                        {ref}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: QUICK REVISION TIMERS (5, 10, 30 min) */}
          {activeTab === 'revision-modes' && (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider">
                    Timed Knowledge Consolidation
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    Quick Revision Modes
                  </h2>
                </div>

                {/* Timed Buttons */}
                <div className="flex items-center gap-1.5 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
                  <button
                    onClick={() => setRevisionMode('5min')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      revisionMode === '5min' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    5-Minute Recap
                  </button>
                  <button
                    onClick={() => setRevisionMode('10min')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      revisionMode === '10min' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    10-Minute Deep Dive
                  </button>
                  <button
                    onClick={() => setRevisionMode('30min')}
                    className={`px-3 py-1.5 rounded-md transition-all ${
                      revisionMode === '30min' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    30-Minute Mastery
                  </button>
                </div>
              </div>

              {/* Content depending on revisionMode */}
              <div className="space-y-3">
                {revisionMode === '5min' && (
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-blue-700 block">5 High-Impact Bullet Points:</span>
                    {chapter.fiveMinRevision.map((point, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {revisionMode === '10min' && (
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-emerald-700 block">10-Minute Conceptual Breakdown:</span>
                    {chapter.tenMinRevision.map((point, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}

                {revisionMode === '30min' && (
                  <div className="space-y-2">
                    <span className="text-xs font-semibold text-violet-700 block">30-Minute Complete Exam Preparation Track:</span>
                    {chapter.thirtyMinRevision.map((point, idx) => (
                      <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-violet-600 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* TAB 4: 10 IMPORTANT QUESTIONS PER CHAPTER */}
          {activeTab === 'questions' && (
            <div className="space-y-6 animate-in fade-in duration-150">
              <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <span className="text-[11px] font-bold text-blue-700 uppercase tracking-wider block">
                    Curated Board Question Bank
                  </span>
                  <h2 className="text-2xl font-extrabold text-slate-900">
                    10 Important Questions: {chapter.title}
                  </h2>
                  <p className="text-xs text-slate-500 mt-1">
                    Every question contains verified year tags, model answers, marking points, keywords, and examiner guidance.
                  </p>
                </div>

                {/* Filters */}
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <select
                    value={questionTypeFilter}
                    onChange={(e) => setQuestionTypeFilter(e.target.value as any)}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none"
                  >
                    <option value="all">All Types</option>
                    <option value="MCQ">MCQ (1 Mark)</option>
                    <option value="Short Answer">Short Answer (3 Marks)</option>
                    <option value="Long Answer">Long Answer (6 Marks)</option>
                    <option value="Extract Based">Extract Based (5 Marks)</option>
                    <option value="Competency Based">Competency (3/6 Marks)</option>
                  </select>

                  <select
                    value={sourceFilter}
                    onChange={(e) => setSourceFilter(e.target.value as any)}
                    className="px-2.5 py-1.5 rounded-lg border border-slate-200 bg-white font-medium text-slate-700 focus:outline-none"
                  >
                    <option value="all">All Sources</option>
                    <option value="official_board">Official Board PYQ</option>
                    <option value="official_sample_paper">Official Sample Paper</option>
                    <option value="board_style">Board-Style Practice</option>
                  </select>
                </div>
              </div>

              {/* Questions List */}
              <div className="space-y-4">
                {filteredQuestions.map((q, qIndex) => {
                  const isExpanded = !!expandedQuestionIds[q.id];
                  const bookmarked = isBookmarked(q.id);

                  return (
                    <div 
                      key={q.id}
                      className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden transition-all"
                    >
                      {/* Question Top Header */}
                      <div className="p-5">
                        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-bold text-slate-400">
                              Q{qIndex + 1}.
                            </span>

                            {/* Exact Source Label Required by Instructions */}
                            {q.sourceType === 'official_board' && q.verifiedYear ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-900 border border-blue-200">
                                Asked in CBSE Board Exam: {q.verifiedYear}
                              </span>
                            ) : q.sourceType === 'official_sample_paper' ? (
                              <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-emerald-100 text-emerald-900 border border-emerald-200">
                                Official CBSE Sample Paper {q.verifiedYear || '2024-25'}
                              </span>
                            ) : (
                              <span className="px-2 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700">
                                Board-Style Practice
                              </span>
                            )}

                            {q.repeatedYears && (
                              <span className="text-[10px] text-slate-500 font-medium">
                                Reported in: {q.repeatedYears.join(', ')}
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-2">
                            <span className="text-xs px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">
                              {q.marks} {q.marks === 1 ? 'Mark' : 'Marks'}
                            </span>
                            <span className="text-[10px] px-2 py-0.5 rounded bg-slate-50 text-slate-500 border border-slate-200">
                              {q.type}
                            </span>
                            <button
                              onClick={() => onBookmarkQuestion(q)}
                              title={bookmarked ? 'Saved to Bookmarks' : 'Bookmark Question'}
                              className={`p-1 rounded hover:bg-slate-100 ${bookmarked ? 'text-blue-600' : 'text-slate-400'}`}
                            >
                              <Bookmark className="w-4 h-4" />
                            </button>
                          </div>
                        </div>

                        {/* Context Extract if available */}
                        {q.contextExtract && (
                          <div className="mb-3 p-3 bg-slate-50 rounded-lg border-l-2 border-blue-500 text-xs italic font-serif text-slate-800">
                            {q.contextExtract}
                          </div>
                        )}

                        {/* Question Text */}
                        <h3 className="text-sm sm:text-base font-semibold text-slate-900 leading-snug">
                          {q.question}
                        </h3>

                        {/* MCQ Options if available */}
                        {q.options && (
                          <div className="mt-3 space-y-1.5">
                            {q.options.map((opt, oIdx) => (
                              <div 
                                key={oIdx}
                                className={`p-2.5 rounded-lg border text-xs flex items-center justify-between ${
                                  isExpanded && oIdx === q.correctOptionIndex
                                    ? 'bg-emerald-50 border-emerald-300 text-emerald-900 font-semibold'
                                    : 'bg-slate-50/50 border-slate-200 text-slate-700'
                                }`}
                              >
                                <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                                {isExpanded && oIdx === q.correctOptionIndex && (
                                  <span className="text-[10px] font-bold text-emerald-700">Correct Option</span>
                                )}
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Show / Hide Answer Button */}
                        <div className="mt-4 flex items-center justify-between pt-2 border-t border-slate-100">
                          <button
                            onClick={() => toggleQuestionExpand(q.id)}
                            className="text-xs font-semibold text-blue-600 hover:text-blue-800 flex items-center gap-1.5 transition-colors"
                          >
                            {isExpanded ? (
                              <>
                                <ChevronUp className="w-4 h-4" /> Hide Model Answer
                              </>
                            ) : (
                              <>
                                <ChevronDown className="w-4 h-4" /> Show Model Answer & Marking Scheme
                              </>
                            )}
                          </button>

                          {q.paperCode && (
                            <span className="text-[10px] text-slate-400 font-mono">
                              Code: {q.paperCode}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Expandable Model Answer & Marking Rubric */}
                      {isExpanded && (
                        <div className="px-5 pb-5 pt-3 bg-slate-50/70 border-t border-slate-100 space-y-4 animate-in fade-in duration-150">
                          {/* Model Answer */}
                          <div>
                            <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500 block mb-1">
                              Model Answer (CBSE Word Limit Standard)
                            </span>
                            <div className="p-4 bg-white rounded-lg border border-slate-200 text-xs sm:text-sm text-slate-800 leading-relaxed whitespace-pre-line font-serif">
                              {q.modelAnswer}
                            </div>
                          </div>

                          {/* Keywords to Include */}
                          {q.keywordsToInclude && q.keywordsToInclude.length > 0 && (
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-blue-700 block mb-1">
                                Essential Keywords to Include in Answer
                              </span>
                              <div className="flex flex-wrap gap-1.5">
                                {q.keywordsToInclude.map((kw, kIdx) => (
                                  <span key={kIdx} className="px-2 py-0.5 rounded bg-blue-100/80 text-blue-900 text-xs font-medium">
                                    {kw}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}

                          {/* Marking Points Breakdown */}
                          {q.markingPoints && q.markingPoints.length > 0 && (
                            <div>
                              <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-700 block mb-1">
                                Official Marking Scheme Breakdown
                              </span>
                              <ul className="text-xs text-slate-700 space-y-1 list-disc pl-4">
                                {q.markingPoints.map((mp, mIdx) => (
                                  <li key={mIdx}>{mp}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Common Mistake & How to Improve */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                            {q.commonMistake && (
                              <div className="p-3 bg-red-50/70 rounded-lg border border-red-200 text-red-900 space-y-1">
                                <span className="font-bold flex items-center gap-1 text-[11px]">
                                  <AlertCircle className="w-3.5 h-3.5 text-red-600" /> Common Mistake
                                </span>
                                <p>{q.commonMistake}</p>
                              </div>
                            )}

                            {q.howToImprove && (
                              <div className="p-3 bg-emerald-50/70 rounded-lg border border-emerald-200 text-emerald-900 space-y-1">
                                <span className="font-bold flex items-center gap-1 text-[11px]">
                                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" /> How to Improve
                                </span>
                                <p>{q.howToImprove}</p>
                              </div>
                            )}
                          </div>

                          {/* Why this question matters */}
                          {q.whyThisQuestionMatters && (
                            <div className="text-[11px] text-slate-500 italic">
                              <strong>Why this question matters:</strong> {q.whyThisQuestionMatters}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* TAB 5: CHAPTER PRACTICE TEST */}
          {activeTab === 'practice' && (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                    Interactive Mini Assessment
                  </span>
                  <h2 className="text-xl font-bold text-slate-900">
                    Chapter Practice Drill: {chapter.title}
                  </h2>
                </div>
                <span className="text-xs px-2.5 py-1 rounded bg-slate-100 text-slate-600 font-semibold">
                  Instant Feedback
                </span>
              </div>

              <div className="space-y-6">
                {chapter.tenImportantQuestions.slice(0, 3).map((pq, idx) => (
                  <div key={pq.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-bold text-slate-500">Question {idx + 1} of 3</span>
                      <span className="font-semibold text-slate-700">{pq.marks} Mark</span>
                    </div>

                    <p className="text-sm font-semibold text-slate-900">
                      {pq.question}
                    </p>

                    {pq.options ? (
                      <div className="space-y-2">
                        {pq.options.map((opt, oIdx) => {
                          const selected = practiceAnswerIndex[pq.id] === oIdx;
                          const isCorrect = pq.correctOptionIndex === oIdx;

                          return (
                            <button
                              key={oIdx}
                              disabled={practiceSubmitted}
                              onClick={() => setPracticeAnswerIndex(prev => ({ ...prev, [pq.id]: oIdx }))}
                              className={`w-full text-left p-3 rounded-lg border text-xs flex items-center justify-between transition-colors ${
                                practiceSubmitted
                                  ? isCorrect
                                    ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold'
                                    : selected
                                      ? 'bg-red-50 border-red-300 text-red-950'
                                      : 'bg-white border-slate-200 text-slate-600'
                                  : selected
                                    ? 'bg-blue-50 border-blue-500 text-blue-900 font-medium'
                                    : 'bg-white border-slate-200 hover:bg-slate-100/50 text-slate-800'
                              }`}
                            >
                              <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                              {practiceSubmitted && isCorrect && (
                                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                              )}
                            </button>
                          );
                        })}
                      </div>
                    ) : (
                      <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                        {practiceSubmitted ? (
                          <div className="space-y-2">
                            <span className="font-bold text-emerald-700 block">Model Answer:</span>
                            <p className="font-serif">{pq.modelAnswer}</p>
                          </div>
                        ) : (
                          <span className="italic text-slate-400">
                            Think through your answer using keywords before clicking "Submit and Verify".
                          </span>
                        )}
                      </div>
                    )}
                  </div>
                ))}

                <div className="pt-2 flex items-center justify-between">
                  <button
                    onClick={() => {
                      setPracticeSubmitted(true);
                      // Check for incorrect answers and log to mistake book
                      chapter.tenImportantQuestions.slice(0, 3).forEach(pq => {
                        if (pq.options && practiceAnswerIndex[pq.id] !== pq.correctOptionIndex) {
                          onLogMistake(pq, `Selected option ${practiceAnswerIndex[pq.id] !== undefined ? String.fromCharCode(65 + practiceAnswerIndex[pq.id]) : 'None'}`);
                        }
                      });
                    }}
                    className="px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-xs transition-colors"
                  >
                    Submit and Verify Answers
                  </button>

                  {practiceSubmitted && (
                    <button
                      onClick={() => {
                        setPracticeSubmitted(false);
                        setPracticeAnswerIndex({});
                      }}
                      className="px-4 py-2 rounded-lg border border-slate-200 text-xs font-medium text-slate-700 hover:bg-slate-50 transition-colors"
                    >
                      Reset Drill
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}

          {/* TAB 6: ASK ABOUT THIS CHAPTER (AI STUDY ASSISTANT) */}
          {activeTab === 'ai-assistant' && (
            <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800">
                    CBSE Curriculum Grounded
                  </span>
                  <span className="text-xs text-slate-400">Powered by Gemini 2.5</span>
                </div>
                <h2 className="text-xl font-bold text-slate-900">
                  Ask About: {chapter.title}
                </h2>
                <p className="text-xs text-slate-500 mt-1">
                  Get instant academic explanations, theme deep-dives, character motivations, and board exam model answers.
                </p>
              </div>

              {/* Pre-built Prompt Chips */}
              <div className="space-y-1.5">
                <span className="text-[11px] font-semibold text-slate-500 block">Suggested Board Questions:</span>
                <div className="flex flex-wrap gap-1.5">
                  {[
                    `Explain the main character's moral conflict in ${chapter.title}`,
                    `Give me a 6-mark board answer format for the central theme`,
                    `Why did the central turning point happen?`,
                    `What are the 5 essential keywords examiners look for?`,
                    `Test me with a board-style question on this chapter`
                  ].map((chip, idx) => (
                    <button
                      key={idx}
                      onClick={() => handleAskAi(chip)}
                      className="text-[11px] px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 hover:bg-blue-50 hover:text-blue-700 border border-slate-200 transition-colors text-left"
                    >
                      {chip}
                    </button>
                  ))}
                </div>
              </div>

              {/* Messages Thread */}
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 min-h-[300px] max-h-[460px] overflow-y-auto space-y-3">
                {aiMessages.map((msg, idx) => (
                  <div 
                    key={idx}
                    className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
                  >
                    <div 
                      className={`max-w-[85%] rounded-xl p-3.5 text-xs sm:text-sm leading-relaxed ${
                        msg.sender === 'user'
                          ? 'bg-blue-600 text-white rounded-br-none'
                          : 'bg-white border border-slate-200 text-slate-800 rounded-bl-none shadow-xs'
                      }`}
                    >
                      <p className="whitespace-pre-line">{msg.text}</p>
                      {msg.sources && (
                        <div className="mt-2 pt-2 border-t border-slate-100 text-[10px] text-slate-400">
                          Source: {msg.sources.join(' • ')}
                        </div>
                      )}
                    </div>
                  </div>
                ))}

                {aiLoading && (
                  <div className="flex items-center gap-2 text-xs text-slate-500 italic p-2">
                    <Sparkles className="w-4 h-4 animate-spin text-blue-600" />
                    Consulting CBSE Syllabus & Marking Guidelines...
                  </div>
                )}
              </div>

              {/* Input Bar */}
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder={`Ask anything about "${chapter.title}"...`}
                  value={aiPrompt}
                  onChange={(e) => setAiPrompt(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handleAskAi()}
                  className="flex-1 px-4 py-2.5 text-xs sm:text-sm bg-white border border-slate-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <button
                  onClick={() => handleAskAi()}
                  disabled={aiLoading || !aiPrompt.trim()}
                  className="px-4 py-2.5 bg-blue-600 hover:bg-blue-700 disabled:opacity-50 text-white rounded-lg transition-colors flex items-center gap-1.5 text-xs font-semibold"
                >
                  <Send className="w-3.5 h-3.5" />
                  Ask
                </button>
              </div>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};
