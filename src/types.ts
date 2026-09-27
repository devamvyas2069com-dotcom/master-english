export type SyllabusYear = '2026-27' | '2025-26' | '2024-25';

export type BookType = 'First Flight (Prose)' | 'First Flight (Poetry)' | 'Footprints Without Feet';

export type QuestionType = 
  | 'MCQ' 
  | 'Short Answer' 
  | 'Long Answer' 
  | 'Extract Based' 
  | 'Case Based' 
  | 'Competency Based';

export type SourceType = 
  | 'official_board' 
  | 'official_sample_paper' 
  | 'board_style' 
  | 'platform_practice' 
  | 'teacher_created' 
  | 'ai_generated';

export type ContentStatus = 'draft' | 'review' | 'verified' | 'published';

export type DifficultyLevel = 'Easy' | 'Medium' | 'Hard' | 'Board Standard';

export interface UserProfile {
  id: string;
  name: string;
  role: 'student' | 'teacher' | 'admin';
  studentId?: string;
  teacherId?: string;
  adminId?: string;
  school: string;
  grade: string;
  section: string;
  rollNo?: string;
  email: string;
  hasPasskey: boolean;
  avatar?: string;
  streak: number;
  questionsSolved: number;
  testsCompleted: number;
  accuracy: number;
  overallProgress: number;
}

export interface CharacterInfo {
  name: string;
  role: string;
  traits: string[];
  description: string;
  keyQuotes?: string[];
}

export interface LiteraryDevice {
  name: string;
  example: string;
  explanation: string;
}

export interface StanzaAnalysis {
  stanzaNumber: number;
  lines: string;
  summary: string;
  poeticDevices: string[];
  examSignificance: string;
}

export interface QuestionModel {
  id: string;
  chapterId: string;
  chapterTitle: string;
  book: BookType;
  topic?: string;
  type: QuestionType;
  marks: number;
  difficulty: DifficultyLevel;
  sourceType: SourceType;
  verifiedYear?: number;
  repeatedYears?: number[];
  paperCode?: string;
  sourceReference?: string;
  verificationStatus: ContentStatus;
  question: string;
  contextExtract?: string;
  options?: string[];
  correctOptionIndex?: number;
  modelAnswer: string;
  explanation: string;
  keywordsToInclude: string[];
  markingPoints: string[];
  commonMistake: string;
  howToImprove: string;
  whyThisQuestionMatters?: string;
  relatedQuestionIds?: string[];
}

export interface Chapter {
  id: string;
  title: string;
  authorOrPoet: string;
  book: BookType;
  isPoem: boolean;
  isArchived?: boolean; // For removed/older chapters
  chapterNumber: number;
  estimatedReadTimeMinutes: number;
  progressPercent: number;
  
  // Overview & Context
  background?: string;
  setting?: string;
  tone?: string;
  mood?: string;
  rhymeScheme?: string;
  
  // Summaries
  detailedSummary: string[];
  shortSummary: string;
  
  // Core Concepts
  mainThemes: string[];
  centralIdea: string;
  centralMessage: string;
  
  // Characters & Devices
  characters?: CharacterInfo[];
  literaryDevices?: LiteraryDevice[];
  stanzas?: StanzaAnalysis[];
  
  // Events & Causality
  importantEvents?: { event: string; cause: string; effect: string }[];
  keyConcepts: string[];
  importantExamPoints: string[];
  vocabulary: { word: string; meaning: string; contextInText: string }[];
  commonConfusions?: string[];
  
  // Quick Revision Modes
  fiveMinRevision: string[];
  tenMinRevision: string[];
  thirtyMinRevision: string[];
  
  // One-page revision
  onePageRevision: {
    plotOrGist: string;
    keyThemes: string[];
    crucialMoments: string[];
    vitalVocabulary: string[];
    fiveKeyQuestions: string[];
    pyqReferences: string[];
  };
  
  // 10 Important Questions
  tenImportantQuestions: QuestionModel[];
}

export interface GrammarTopic {
  id: string;
  title: string;
  subtitle: string;
  syllabusCategory: string;
  progressPercent: number;
  estimatedMinutes: number;
  concept: string;
  rules: { rule: string; explanation: string; correctExample: string; incorrectExample: string }[];
  examples: { context: string; sentence: string; explanation: string }[];
  commonMistakes: { mistake: string; correction: string; reason: string }[];
  quickRevisionPoints: string[];
  boardQuestions: QuestionModel[];
  practiceQuestions: QuestionModel[];
}

export interface ReadingPassage {
  id: string;
  title: string;
  type: 'Discursive' | 'Case-based factual';
  wordCount: number;
  passageText: string;
  questions: QuestionModel[];
}

export interface WritingItem {
  id: string;
  title: string;
  type: 'Formal Letter' | 'Analytical Paragraph';
  category: 'Letter to Editor' | 'Complaint' | 'Inquiry' | 'Placing Order' | 'Data / Chart Analysis';
  formatGuidelines: { section: string; weightage: string; tips: string[] }[];
  modelPrompt: string;
  modelAnswer: string;
  markingBreakdown: { criterion: string; marks: number; description: string }[];
  highScoringPhrases: string[];
  commonErrors: string[];
}

export interface MistakeRecord {
  id: string;
  questionId: string;
  question: QuestionModel;
  studentAnswer: string;
  dateAttempted: string;
  timesWrong: number;
  resolved: boolean;
}

export interface TestAttemptResult {
  testId: string;
  title: string;
  category: string;
  date: string;
  totalQuestions: number;
  score: number;
  maxScore: number;
  accuracy: number;
  timeSpentSeconds: number;
  correctCount: number;
  incorrectCount: number;
  skippedCount: number;
  weakTopics: string[];
  strongTopics: string[];
  recommendedChapters: string[];
  questionsToRevise: QuestionModel[];
}
