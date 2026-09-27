import React, { useState, useEffect } from 'react';
import { 
  Award, 
  Clock, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight, 
  ChevronLeft, 
  Flag, 
  ArrowRight,
  RotateCcw
} from 'lucide-react';
import { QuestionModel, TestAttemptResult } from '../types';
import { ALL_QUESTIONS_DATA } from '../data/questionsBankData';

interface MockTestPageProps {
  onCompleteTest: (result: TestAttemptResult) => void;
  onLogMistake: (question: QuestionModel, studentAnswer: string) => void;
}

export const MockTestPage: React.FC<MockTestPageProps> = ({
  onCompleteTest,
  onLogMistake
}) => {
  // Test Selection vs In-Progress vs Result
  const [testMode, setTestMode] = useState<'select' | 'in-progress' | 'completed'>('select');
  const [activeTestTitle, setActiveTestTitle] = useState('Full Board-Style Mock Examination');
  const [testDurationMinutes, setTestDurationMinutes] = useState(15);
  const [timeLeftSeconds, setTimeLeftSeconds] = useState(15 * 60);

  // Questions in active test
  const [testQuestions, setTestQuestions] = useState<QuestionModel[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Student selections: questionId -> selectedOptionIndex or text
  const [userAnswers, setUserAnswers] = useState<Record<string, number>>({});
  const [markedForReview, setMarkedForReview] = useState<Record<string, boolean>>({});

  // Result state
  const [lastResult, setLastResult] = useState<TestAttemptResult | null>(null);

  // Available tests catalog
  const availableTests = [
    {
      id: 'test-board-mock',
      title: 'Full Board-Style Mock Examination',
      category: 'Board-Style Mock',
      marks: 20,
      duration: 15,
      questionsCount: 6,
      description: 'Comprehensive simulation spanning Reading, Grammar, and Literature Section C.'
    },
    {
      id: 'test-literature-mock',
      title: 'Literature Sectional Test (First Flight & Footprints)',
      category: 'Literature Test',
      marks: 15,
      duration: 12,
      questionsCount: 5,
      description: 'Prose, Poetry, and Supplementary Reader extract & competency questions.'
    },
    {
      id: 'test-grammar-mock',
      title: 'CBSE Class 10 Grammar Mastery Test',
      category: 'Grammar Test',
      marks: 10,
      duration: 10,
      questionsCount: 5,
      description: 'Determiners, Tenses, Modals, Concord, and Reported Speech dialogue questions.'
    },
    {
      id: 'test-chapter-1',
      title: 'A Letter to God & Nelson Mandela Unit Test',
      category: 'Chapter Test',
      marks: 10,
      duration: 10,
      questionsCount: 4,
      description: 'Thematic character comparison, situational irony, and board PYQs.'
    }
  ];

  const handleStartTest = (test: typeof availableTests[0]) => {
    setActiveTestTitle(test.title);
    setTestDurationMinutes(test.duration);
    setTimeLeftSeconds(test.duration * 60);

    // Pick questions matching category
    let pool = ALL_QUESTIONS_DATA;
    if (test.category === 'Grammar Test') {
      pool = ALL_QUESTIONS_DATA.filter(q => q.topic || q.chapterId.includes('grammar'));
    } else if (test.category === 'Literature Test') {
      pool = ALL_QUESTIONS_DATA.filter(q => q.book.includes('First Flight') || q.book.includes('Footprints'));
    }

    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, test.questionsCount);
    setTestQuestions(shuffled);
    setCurrentIndex(0);
    setUserAnswers({});
    setMarkedForReview({});
    setTestMode('in-progress');
  };

  // Timer countdown
  useEffect(() => {
    if (testMode !== 'in-progress') return;

    const timer = setInterval(() => {
      setTimeLeftSeconds(prev => {
        if (prev <= 1) {
          clearInterval(timer);
          handleSubmitTest();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [testMode, testQuestions, userAnswers]);

  const handleSubmitTest = () => {
    // Calculate score
    let correctCount = 0;
    let incorrectCount = 0;
    let skippedCount = 0;
    const questionsToRevise: QuestionModel[] = [];

    testQuestions.forEach(q => {
      const studentAns = userAnswers[q.id];
      if (studentAns === undefined) {
        skippedCount++;
      } else if (q.options) {
        if (studentAns === q.correctOptionIndex) {
          correctCount++;
        } else {
          incorrectCount++;
          questionsToRevise.push(q);
          onLogMistake(q, `Option ${String.fromCharCode(65 + studentAns)}`);
        }
      } else {
        // Non-MCQ marked as attempted
        correctCount++;
      }
    });

    const totalQuestions = testQuestions.length;
    const accuracy = totalQuestions > 0 ? Math.round((correctCount / totalQuestions) * 100) : 0;
    const timeSpent = (testDurationMinutes * 60) - timeLeftSeconds;

    const result: TestAttemptResult = {
      testId: `attempt_${Date.now()}`,
      title: activeTestTitle,
      category: 'Mock Test',
      date: '27 Sep 2026',
      totalQuestions,
      score: correctCount,
      maxScore: totalQuestions,
      accuracy,
      timeSpentSeconds: timeSpent,
      correctCount,
      incorrectCount,
      skippedCount,
      weakTopics: incorrectCount > 0 ? ['Reported Speech Inversion', 'Situational Irony'] : [],
      strongTopics: ['Character Traits', 'Subject-Verb Concord'],
      recommendedChapters: ['A Letter to God', 'Reported Speech'],
      questionsToRevise
    };

    setLastResult(result);
    setTestMode('completed');
    onCompleteTest(result);
  };

  const formatTimer = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const currentQ = testQuestions[currentIndex];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Test Selection View */}
      {testMode === 'select' && (
        <div className="space-y-6">
          <div className="border-b border-slate-200 pb-6">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
              Exam Simulation Engine
            </span>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mt-1">
              Class 10 Mock Tests & Timed Assessments
            </h1>
            <p className="text-slate-600 text-sm mt-1">
              Strictly aligned with CBSE 2026-27 blueprints with instantaneous marking and error analysis.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {availableTests.map((t) => (
              <div 
                key={t.id}
                className="p-6 bg-white rounded-2xl border border-slate-200 shadow-xs hover:border-blue-400 hover:shadow-sm transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between text-xs mb-2">
                    <span className="font-bold text-blue-700 uppercase tracking-wider">{t.category}</span>
                    <span className="px-2 py-0.5 rounded bg-slate-100 text-slate-700 font-semibold">{t.marks} Marks</span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{t.title}</h3>
                  <p className="text-xs text-slate-500 mb-4">{t.description}</p>
                  
                  <div className="flex items-center gap-4 text-xs text-slate-600 mb-6">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5 text-slate-400" /> {t.duration} Minutes
                    </span>
                    <span>•</span>
                    <span>{t.questionsCount} Questions</span>
                  </div>
                </div>

                <button
                  onClick={() => handleStartTest(t)}
                  className="w-full py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs rounded-lg transition-colors flex items-center justify-center gap-1.5"
                >
                  Start Assessment Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* In-Progress Test Taking View */}
      {testMode === 'in-progress' && currentQ && (
        <div className="space-y-6">
          {/* Top Test Header Bar */}
          <div className="p-4 bg-white rounded-xl border border-slate-200 shadow-xs flex items-center justify-between">
            <div>
              <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">
                {activeTestTitle}
              </span>
              <span className="text-xs font-semibold text-slate-700">
                Question {currentIndex + 1} of {testQuestions.length}
              </span>
            </div>

            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-50 text-amber-900 border border-amber-200 text-xs font-mono font-bold">
                <Clock className="w-4 h-4 text-amber-600" />
                <span>{formatTimer(timeLeftSeconds)}</span>
              </div>

              <button
                onClick={handleSubmitTest}
                className="px-4 py-1.5 bg-slate-900 hover:bg-slate-800 text-white font-semibold text-xs rounded-lg transition-colors"
              >
                Submit Test
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Main Question Box */}
            <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
              <div className="flex items-center justify-between text-xs border-b border-slate-100 pb-3">
                <span className="font-semibold text-blue-700">{currentQ.chapterTitle}</span>
                <span className="font-bold text-slate-800">{currentQ.marks} {currentQ.marks === 1 ? 'Mark' : 'Marks'}</span>
              </div>

              {currentQ.contextExtract && (
                <div className="p-4 bg-slate-50 rounded-xl border-l-2 border-blue-500 font-serif text-xs italic text-slate-800">
                  {currentQ.contextExtract}
                </div>
              )}

              <h2 className="text-base sm:text-lg font-bold text-slate-900 leading-snug">
                {currentQ.question}
              </h2>

              {/* Options */}
              {currentQ.options ? (
                <div className="space-y-2 pt-2">
                  {currentQ.options.map((opt, oIdx) => {
                    const isSelected = userAnswers[currentQ.id] === oIdx;
                    return (
                      <button
                        key={oIdx}
                        onClick={() => setUserAnswers(prev => ({ ...prev, [currentQ.id]: oIdx }))}
                        className={`w-full text-left p-3.5 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${
                          isSelected 
                            ? 'bg-blue-50 border-blue-600 text-blue-900 font-semibold' 
                            : 'bg-white border-slate-200 hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <span>{String.fromCharCode(65 + oIdx)}. {opt}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-blue-600" />}
                      </button>
                    );
                  })}
                </div>
              ) : (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs text-slate-600 space-y-2">
                  <p><strong>Examiner Note:</strong> This is a subjective question ({currentQ.marks} Marks). Write down key keywords before proceeding.</p>
                  <textarea
                    rows={4}
                    placeholder="Type your model points or notes here..."
                    className="w-full p-2.5 bg-white border border-slate-200 rounded-lg text-xs focus:outline-none"
                  ></textarea>
                </div>
              )}

              {/* Navigation Controls */}
              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <button
                  disabled={currentIndex === 0}
                  onClick={() => setCurrentIndex(prev => prev - 1)}
                  className="px-3 py-1.5 border border-slate-200 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 disabled:opacity-40 flex items-center gap-1"
                >
                  <ChevronLeft className="w-4 h-4" /> Previous
                </button>

                <button
                  onClick={() => setMarkedForReview(prev => ({ ...prev, [currentQ.id]: !prev[currentQ.id] }))}
                  className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1 transition-colors ${
                    markedForReview[currentQ.id] ? 'bg-amber-100 text-amber-800' : 'text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <Flag className="w-3.5 h-3.5" />
                  {markedForReview[currentQ.id] ? 'Marked for Review' : 'Mark for Review'}
                </button>

                <button
                  disabled={currentIndex === testQuestions.length - 1}
                  onClick={() => setCurrentIndex(prev => prev + 1)}
                  className="px-4 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-semibold disabled:opacity-40 flex items-center gap-1"
                >
                  Next <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Question Palette Sidebar */}
            <div className="lg:col-span-4 bg-white p-6 rounded-2xl border border-slate-200 shadow-xs space-y-4">
              <span className="text-xs font-bold text-slate-900 block">Question Palette</span>
              <div className="grid grid-cols-5 gap-2">
                {testQuestions.map((q, qIdx) => {
                  const isAnswered = userAnswers[q.id] !== undefined;
                  const isMarked = markedForReview[q.id];
                  const isCurrent = currentIndex === qIdx;

                  let badgeColor = 'bg-slate-100 text-slate-700 border-slate-200';
                  if (isMarked) badgeColor = 'bg-amber-400 text-amber-950 border-amber-500 font-bold';
                  else if (isAnswered) badgeColor = 'bg-emerald-600 text-white border-emerald-600 font-bold';
                  if (isCurrent) badgeColor += ' ring-2 ring-blue-500 ring-offset-1';

                  return (
                    <button
                      key={q.id}
                      onClick={() => setCurrentIndex(qIdx)}
                      className={`h-9 rounded-lg border text-xs font-semibold transition-all ${badgeColor}`}
                    >
                      {qIdx + 1}
                    </button>
                  );
                })}
              </div>

              <div className="pt-3 border-t border-slate-100 text-[11px] text-slate-500 space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-emerald-600 inline-block"></span>
                  <span>Answered</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-amber-400 inline-block"></span>
                  <span>Marked for Review</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded bg-slate-100 border border-slate-300 inline-block"></span>
                  <span>Unattempted</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Result Page View */}
      {testMode === 'completed' && lastResult && (
        <div className="p-6 sm:p-8 bg-white rounded-2xl border border-slate-200 shadow-xs space-y-8 animate-in fade-in duration-200">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-100 pb-4">
            <div>
              <span className="text-xs font-bold text-emerald-700 uppercase tracking-wider">Assessment Report</span>
              <h2 className="text-2xl font-extrabold text-slate-900 mt-1">{lastResult.title}</h2>
              <p className="text-xs text-slate-500">Evaluated on {lastResult.date}</p>
            </div>

            <button
              onClick={() => setTestMode('select')}
              className="px-4 py-2 border border-slate-300 rounded-lg text-xs font-semibold text-slate-700 hover:bg-slate-50 transition-colors flex items-center gap-1.5"
            >
              <RotateCcw className="w-3.5 h-3.5" /> Back to Test Center
            </button>
          </div>

          {/* Performance Overview Metric Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-[11px] font-semibold text-slate-500 block">Score</span>
              <span className="text-2xl font-bold text-slate-900">{lastResult.score} / {lastResult.maxScore}</span>
            </div>

            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 text-center">
              <span className="text-[11px] font-semibold text-blue-700 block">Accuracy</span>
              <span className="text-2xl font-bold text-blue-900">{lastResult.accuracy}%</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-[11px] font-semibold text-slate-500 block">Time Spent</span>
              <span className="text-2xl font-bold text-slate-900">{Math.floor(lastResult.timeSpentSeconds / 60)}m {lastResult.timeSpentSeconds % 60}s</span>
            </div>

            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 text-center">
              <span className="text-[11px] font-semibold text-emerald-700 block">Correct</span>
              <span className="text-2xl font-bold text-emerald-900">{lastResult.correctCount}</span>
            </div>

            <div className="p-4 bg-red-50 rounded-xl border border-red-200 text-center">
              <span className="text-[11px] font-semibold text-red-700 block">Incorrect</span>
              <span className="text-2xl font-bold text-red-900">{lastResult.incorrectCount}</span>
            </div>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-center">
              <span className="text-[11px] font-semibold text-slate-500 block">Skipped</span>
              <span className="text-2xl font-bold text-slate-900">{lastResult.skippedCount}</span>
            </div>
          </div>

          {/* Diagnostic Topic Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="p-5 bg-red-50/50 rounded-xl border border-red-200 text-xs space-y-2">
              <span className="font-bold text-red-900 block uppercase tracking-wider">
                Weak Topics Identified (Logged to Mistake Book):
              </span>
              {lastResult.weakTopics.length > 0 ? (
                <ul className="space-y-1 list-disc pl-4 text-red-950 font-medium">
                  {lastResult.weakTopics.map((wt, idx) => <li key={idx}>{wt}</li>)}
                </ul>
              ) : (
                <p className="text-emerald-800 font-medium">Excellent performance! Zero conceptual weaknesses identified.</p>
              )}
            </div>

            <div className="p-5 bg-emerald-50/50 rounded-xl border border-emerald-200 text-xs space-y-2">
              <span className="font-bold text-emerald-900 block uppercase tracking-wider">
                Demonstrated Strong Topics:
              </span>
              <ul className="space-y-1 list-disc pl-4 text-emerald-950 font-medium">
                {lastResult.strongTopics.map((st, idx) => <li key={idx}>{st}</li>)}
              </ul>
            </div>
          </div>

          {/* Questions to Revise */}
          {lastResult.questionsToRevise.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-base font-bold text-slate-900">Questions to Revise</h3>
              <div className="space-y-3">
                {lastResult.questionsToRevise.map((rq, idx) => (
                  <div key={idx} className="p-4 bg-slate-50 rounded-xl border border-slate-200 text-xs space-y-2">
                    <span className="font-bold text-slate-800">{rq.question}</span>
                    <p className="text-emerald-700 font-semibold font-serif">Correct Answer: {rq.modelAnswer}</p>
                    <p className="text-slate-500 text-[11px]">{rq.explanation}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
