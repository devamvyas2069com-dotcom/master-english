import React, { useState } from 'react';
import { 
  PenTool, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  BookOpen, 
  Award, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ArrowRight,
  RefreshCw,
  Flame,
  Check,
  X
} from 'lucide-react';
import { GrammarTopic, QuestionModel } from '../types';
import { GRAMMAR_TOPICS_DATA } from '../data/grammarData';

interface GrammarSectionProps {
  onBookmarkQuestion: (question: QuestionModel) => void;
  isBookmarked: (id: string) => boolean;
  onLogMistake: (question: QuestionModel, studentAnswer: string) => void;
}

export const GrammarSection: React.FC<GrammarSectionProps> = ({
  onBookmarkQuestion,
  isBookmarked,
  onLogMistake
}) => {
  const [selectedTopicId, setSelectedTopicId] = useState<string>(GRAMMAR_TOPICS_DATA[0].id);
  const [activeGrammarSubTab, setActiveGrammarSubTab] = useState<'concept' | 'rules' | 'examples' | 'mistakes' | 'revision' | 'board-pyqs' | 'practice-test'>('concept');

  // Interactive Practice State
  const [answersState, setAnswersState] = useState<Record<string, number>>({});
  const [submittedState, setSubmittedState] = useState<Record<string, boolean>>({});

  const currentTopic = GRAMMAR_TOPICS_DATA.find(t => t.id === selectedTopicId) || GRAMMAR_TOPICS_DATA[0];

  const handleSelectOption = (qId: string, optIndex: number) => {
    if (submittedState[qId]) return;
    setAnswersState(prev => ({ ...prev, [qId]: optIndex }));
  };

  const handleSubmitQuestion = (question: QuestionModel) => {
    const selected = answersState[question.id];
    setSubmittedState(prev => ({ ...prev, [question.id]: true }));

    if (question.options && selected !== question.correctOptionIndex) {
      onLogMistake(question, `Option ${selected !== undefined ? String.fromCharCode(65 + selected) : 'None'}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              CBSE Section B • 10 Marks
            </span>
            <span className="text-xs text-slate-500">
              Official Curriculum: Determiners, Tenses, Modals, Concord & Reported Speech
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Grammar Mastery Hub
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Scannable rules, contrastive examples, common examiner traps, and verified board PYQs.
          </p>
        </div>

        <div className="flex items-center gap-3">
          <div className="p-3 bg-white rounded-xl border border-slate-200 text-xs flex items-center gap-3 shadow-xs">
            <span className="text-slate-500">Grammar Accuracy:</span>
            <span className="font-bold text-slate-900 text-sm">88.5%</span>
          </div>
        </div>
      </div>

      {/* Grammar Topics Navigation Bar (gramatica-style clean tiles) */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {GRAMMAR_TOPICS_DATA.map(topic => {
          const isSelected = topic.id === selectedTopicId;
          return (
            <button
              key={topic.id}
              onClick={() => {
                setSelectedTopicId(topic.id);
                setActiveGrammarSubTab('concept');
              }}
              className={`p-3.5 rounded-xl border text-left transition-all flex flex-col justify-between ${
                isSelected 
                  ? 'bg-blue-600 text-white border-blue-600 shadow-sm' 
                  : 'bg-white text-slate-800 border-slate-200 hover:border-blue-300'
              }`}
            >
              <div>
                <span className={`text-[10px] font-semibold uppercase tracking-wider block mb-1 ${
                  isSelected ? 'text-blue-100' : 'text-slate-400'
                }`}>
                  {topic.estimatedMinutes} mins read
                </span>
                <h4 className="text-xs sm:text-sm font-bold leading-tight">
                  {topic.title}
                </h4>
              </div>

              <div className="mt-3 pt-2 border-t flex items-center justify-between text-[11px] font-medium border-slate-200/40">
                <span className={isSelected ? 'text-blue-100' : 'text-slate-500'}>Progress</span>
                <span className="font-bold">{topic.progressPercent}%</span>
              </div>
            </button>
          );
        })}
      </div>

      {/* Current Topic Header Card */}
      <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <span className="text-xs font-bold text-blue-700 uppercase tracking-wider block mb-1">
            {currentTopic.syllabusCategory}
          </span>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900">
            {currentTopic.title}
          </h2>
          <p className="text-xs text-slate-500 mt-1">
            {currentTopic.subtitle}
          </p>
        </div>

        {/* Section Sub-Tabs */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 sm:pb-0 text-xs font-semibold bg-slate-100 p-1 rounded-xl">
          {[
            { id: 'concept', label: 'Concept' },
            { id: 'rules', label: 'Rules Table' },
            { id: 'examples', label: 'Examples' },
            { id: 'mistakes', label: 'Common Mistakes' },
            { id: 'revision', label: 'Quick Revision' },
            { id: 'board-pyqs', label: 'Board PYQs' },
            { id: 'practice-test', label: 'Practice & Test' }
          ].map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveGrammarSubTab(tab.id as any)}
              className={`px-3 py-1.5 rounded-lg transition-all whitespace-nowrap ${
                activeGrammarSubTab === tab.id
                  ? 'bg-white text-blue-700 shadow-xs font-bold'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* SUB-TAB 1: CONCEPT */}
      {activeGrammarSubTab === 'concept' && (
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
          <div className="space-y-3">
            <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
              Foundational Concept & Board Alignment
            </h3>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-normal">
              {currentTopic.concept}
            </p>
          </div>

          <div className="p-4 bg-blue-50/50 rounded-xl border border-blue-200 space-y-2">
            <span className="text-xs font-bold text-blue-900 block">How CBSE Tests This Topic:</span>
            <ul className="text-xs text-blue-950 space-y-1 list-disc pl-4">
              <li>Dialogue Conversion & Reporting (1-2 Marks)</li>
              <li>Error Detection & Correction in authentic paragraphs (1 Mark)</li>
              <li>Gap Filling with correct verb / modal / determiner forms (1 Mark)</li>
            </ul>
          </div>
        </div>
      )}

      {/* SUB-TAB 2: RULES TABLE (Correct vs Incorrect) */}
      {activeGrammarSubTab === 'rules' && (
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Grammar Rules & Structural Syntax
          </h3>

          <div className="space-y-4">
            {currentTopic.rules.map((rule, idx) => (
              <div key={idx} className="p-4 bg-slate-50/70 rounded-xl border border-slate-200 space-y-3">
                <div>
                  <h4 className="text-xs font-bold text-blue-700 uppercase tracking-wider">
                    {rule.rule}
                  </h4>
                  <p className="text-xs text-slate-700 mt-1 leading-relaxed">
                    {rule.explanation}
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs pt-1">
                  <div className="p-3 bg-emerald-50/80 rounded-lg border border-emerald-200 text-emerald-950 space-y-1">
                    <span className="font-bold flex items-center gap-1.5 text-[11px] text-emerald-800">
                      <Check className="w-3.5 h-3.5 text-emerald-600" /> Correct Usage
                    </span>
                    <p className="font-mono text-emerald-900">{rule.correctExample}</p>
                  </div>

                  <div className="p-3 bg-red-50/80 rounded-lg border border-red-200 text-red-950 space-y-1">
                    <span className="font-bold flex items-center gap-1.5 text-[11px] text-red-800">
                      <X className="w-3.5 h-3.5 text-red-600" /> Incorrect Usage (Error)
                    </span>
                    <p className="font-mono text-red-900">{rule.incorrectExample}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 3: EXAMPLES */}
      {activeGrammarSubTab === 'examples' && (
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Contextual Board-Style Examples
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {currentTopic.examples.map((ex, idx) => (
              <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                <span className="font-bold text-blue-700 block text-[11px] uppercase tracking-wider">
                  {ex.context}
                </span>
                <p className="font-medium text-slate-900 text-sm whitespace-pre-line font-serif">
                  {ex.sentence}
                </p>
                <p className="text-slate-600 pt-2 border-t border-slate-200 leading-relaxed">
                  <strong>Explanation:</strong> {ex.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 4: COMMON MISTAKES */}
      {activeGrammarSubTab === 'mistakes' && (
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            Frequent Board Traps & Mistakes to Avoid
          </h3>

          <div className="space-y-4">
            {currentTopic.commonMistakes.map((mis, idx) => (
              <div key={idx} className="p-4 bg-amber-50/40 rounded-xl border border-amber-200 space-y-2 text-xs">
                <div className="flex items-center gap-2 text-red-700 font-semibold">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>Trap: {mis.mistake}</span>
                </div>
                <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-emerald-800 font-medium">
                  <strong>Correction:</strong> {mis.correction}
                </div>
                <p className="text-slate-600 text-[11px] leading-relaxed">
                  <strong>Why students lose marks:</strong> {mis.reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 5: QUICK REVISION */}
      {activeGrammarSubTab === 'revision' && (
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-4 animate-in fade-in duration-150">
          <h3 className="text-base font-bold text-slate-900 border-b border-slate-100 pb-2">
            60-Second Quick Revision Checklist
          </h3>

          <div className="space-y-2">
            {currentTopic.quickRevisionPoints.map((pt, idx) => (
              <div key={idx} className="p-3 bg-slate-50 rounded-lg border border-slate-200 text-xs text-slate-800 flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>{pt}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 6: BOARD PYQS */}
      {activeGrammarSubTab === 'board-pyqs' && (
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-bold text-slate-900">
              Verified Official Board Exam Questions
            </h3>
            <span className="text-xs text-slate-500">
              CBSE 2024 & 2023 Board Papers
            </span>
          </div>

          <div className="space-y-4">
            {currentTopic.boardQuestions.map((bq, idx) => (
              <div key={bq.id} className="p-5 bg-slate-50/70 rounded-xl border border-slate-200 space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="px-2 py-0.5 rounded font-bold bg-blue-100 text-blue-900">
                    Asked in CBSE Board Exam: {bq.verifiedYear || 2024}
                  </span>
                  <span className="text-slate-400 font-mono text-[11px]">{bq.paperCode}</span>
                </div>

                <p className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-pre-line">
                  {bq.question}
                </p>

                {bq.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                    {bq.options.map((opt, oIdx) => (
                      <div key={oIdx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-slate-700">
                        {String.fromCharCode(65 + oIdx)}. {opt}
                      </div>
                    ))}
                  </div>
                )}

                <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs space-y-1.5">
                  <span className="font-bold text-emerald-700 block">Verified Model Answer:</span>
                  <p className="font-serif text-slate-800">{bq.modelAnswer}</p>
                  <p className="text-slate-500 text-[11px] pt-1 border-t border-slate-100">
                    <strong>Grammar Rule:</strong> {bq.explanation}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* SUB-TAB 7: PRACTICE TEST */}
      {activeGrammarSubTab === 'practice-test' && (
        <div className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-6 animate-in fade-in duration-150">
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <div>
              <span className="text-[11px] font-bold text-emerald-700 uppercase tracking-wider block">
                Interactive Practice & Mini Test
              </span>
              <h3 className="text-base font-bold text-slate-900">
                Test Your Understanding
              </h3>
            </div>
          </div>

          <div className="space-y-4">
            {[...currentTopic.boardQuestions, ...currentTopic.practiceQuestions].map((pq, idx) => {
              const selectedOpt = answersState[pq.id];
              const isSubmitted = submittedState[pq.id];

              return (
                <div key={pq.id} className="p-4 bg-slate-50 rounded-xl border border-slate-200 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <span className="font-bold text-slate-500">Question {idx + 1}</span>
                    <span className="font-semibold text-slate-700">{pq.marks} Mark</span>
                  </div>

                  <p className="text-xs sm:text-sm font-semibold text-slate-900 whitespace-pre-line">
                    {pq.question}
                  </p>

                  {pq.options ? (
                    <div className="space-y-1.5">
                      {pq.options.map((opt, oIdx) => {
                        const isChosen = selectedOpt === oIdx;
                        const isCorrect = pq.correctOptionIndex === oIdx;

                        return (
                          <button
                            key={oIdx}
                            disabled={isSubmitted}
                            onClick={() => handleSelectOption(pq.id, oIdx)}
                            className={`w-full text-left p-2.5 rounded-lg border text-xs flex items-center justify-between transition-colors ${
                              isSubmitted
                                ? isCorrect
                                  ? 'bg-emerald-50 border-emerald-400 text-emerald-950 font-semibold'
                                  : isChosen
                                    ? 'bg-red-50 border-red-300 text-red-950'
                                    : 'bg-white border-slate-200 text-slate-600'
                                : isChosen
                                  ? 'bg-blue-50 border-blue-500 text-blue-900 font-medium'
                                  : 'bg-white border-slate-200 hover:bg-slate-100/50 text-slate-800'
                            }`}
                          >
                            <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                            {isSubmitted && isCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="p-3 bg-white rounded-lg border border-slate-200 text-xs text-slate-600">
                      {isSubmitted ? (
                        <div className="space-y-1">
                          <span className="font-bold text-emerald-700 block">Model Correction:</span>
                          <p className="font-serif">{pq.modelAnswer}</p>
                        </div>
                      ) : (
                        <span className="italic text-slate-400">
                          Formulate the correction mentally, then click "Verify Answer".
                        </span>
                      )}
                    </div>
                  )}

                  {!isSubmitted ? (
                    <button
                      onClick={() => handleSubmitQuestion(pq)}
                      className="px-3 py-1.5 bg-blue-600 text-white font-semibold text-xs rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Verify Answer
                    </button>
                  ) : (
                    <div className="text-[11px] text-slate-500 pt-1">
                      <strong>Explanation:</strong> {pq.explanation}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};
