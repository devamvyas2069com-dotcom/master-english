import { QuestionModel } from '../types';
import { CHAPTERS_DATA } from './chaptersData';
import { GRAMMAR_TOPICS_DATA } from './grammarData';
import { READING_PASSAGES_DATA } from './readingWritingData';

// Consolidate questions across Literature, Grammar, and Reading
export const ALL_QUESTIONS_DATA: QuestionModel[] = [
  // Literature questions from chapters
  ...CHAPTERS_DATA.flatMap(ch => ch.tenImportantQuestions),
  
  // Grammar board & practice questions
  ...GRAMMAR_TOPICS_DATA.flatMap(g => [...g.boardQuestions, ...g.practiceQuestions]),
  
  // Reading questions
  ...READING_PASSAGES_DATA.flatMap(r => r.questions),

  // Additional Verified Board PYQs for Cross-Chapter Practice
  {
    id: 'q-pyq-combo-01',
    chapterId: 'ff-prose-1',
    chapterTitle: 'A Letter to God',
    book: 'First Flight (Prose)',
    type: 'Competency Based',
    marks: 6,
    difficulty: 'Board Standard',
    sourceType: 'official_board',
    verifiedYear: 2023,
    repeatedYears: [2021, 2023],
    paperCode: 'CBSE 2/4/1 (Compartment / Main)',
    verificationStatus: 'published',
    question: 'How does the story "A Letter to God" depict the conflict between humans and nature on one hand, and between humans themselves on the other?',
    modelAnswer: 'The story presents a twin-layered conflict:\n1. Conflict between Humans and Nature: Depicted through Lencho\'s agricultural dependence on rain. While he welcomes the rain as "new coins", nature transforms into a destructive tempest of hail, laying waste to his labor. Human vulnerability in the face of nature\'s unpredictable ferocity is vividly laid bare.\n\n2. Conflict between Humans Themselves: Emerges from a breakdown of faith and understanding between people. The compassionate postmaster and his staff perform an unheralded act of charity to protect Lencho\'s faith. However, Lencho\'s deep-seated distrust of fellow humans leads him to conclude that the clerks stole his thirty pesos. The suspicion, ingratitude, and prejudice within human society illustrate the tragic interpersonal divide.',
    explanation: 'Deconstructs the narrative into ecological vulnerability versus psychological cynicism.',
    keywordsToInclude: ['conflict between humans and nature', 'interpersonal conflict', 'unpredictable ferocity', 'cynical distrust', 'ingratitude'],
    markingPoints: [
      '2.5 marks: Conflict with nature (rain turned to hail, destruction of harvest).',
      '2.5 marks: Conflict among humans (Lencho\'s suspicion of benefactors).',
      '1 mark: Synthesis and thematic lesson.'
    ],
    commonMistake: 'Focusing exclusively on the hailstorm and ignoring the post office accusation.',
    howToImprove: 'Divide long answers into two clear sub-headings matching the question\'s wording.',
    whyThisQuestionMatters: 'Flagship CBSE analytical question testing structural thematic insight.'
  },
  {
    id: 'q-pyq-combo-02',
    chapterId: 'ff-prose-2',
    chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
    book: 'First Flight (Prose)',
    type: 'Long Answer',
    marks: 6,
    difficulty: 'Board Standard',
    sourceType: 'official_board',
    verifiedYear: 2024,
    paperCode: 'CBSE 2/2/3',
    verificationStatus: 'published',
    question: 'How did Mandela\'s "hunger for freedom" change his life? Trace his journey from a frightened young lawyer to a bold rebel and statesman.',
    modelAnswer: 'In his youth, Mandela\'s desire for freedom was limited to personal liberties—running in the fields, staying out at night, and pursuing his chosen profession. However, as he matured in Johannesburg, he realized that not only was his own liberty restricted, but the freedom of every Black South African was systematically crushed by Apartheid.\n\nThis awakening transformed his personal desire into a greater "hunger for the freedom of his people". This selfless hunger produced a radical metamorphosis:\n1. It transformed a law-abiding attorney into a bold political rebel.\n2. It drove a family-loving husband away from his home to live like a hunted criminal.\n3. It compelled a life-loving young man to endure twenty-seven grueling years of imprisonment on Robben Island.\n\nUltimately, this hunger refined Mandela into a magnanimous statesman who refused to succumb to vengeance, championing reconciliation and non-racial democracy.',
    explanation: 'Chronological and psychological analysis of Mandela\'s self-transcendence.',
    keywordsToInclude: ['hunger for freedom', 'boyhood illusions', 'law-abiding attorney to rebel', 'twenty-seven years in prison', 'magnanimous statesman'],
    markingPoints: [
      '2 marks: Contrast between boyish/student freedom and collective freedom.',
      '2 marks: Concrete changes (attorney to rebel, family man to monk/exile).',
      '2 marks: Evolution into a forgiving statesman.'
    ],
    commonMistake: 'Omitting the specific transformations (e.g. husband becoming homeless, lawyer turning rebel).',
    howToImprove: 'Use Mandela\'s exact rhetorical pairings: "transformed a frightened young man into a bold one".',
    whyThisQuestionMatters: 'Repeatedly tested in CBSE 6-mark evaluative questions.'
  },
  {
    id: 'q-pyq-combo-03',
    chapterId: 'fwf-prose-1',
    chapterTitle: 'A Triumph of Surgery',
    book: 'Footprints Without Feet',
    type: 'Short Answer',
    marks: 3,
    difficulty: 'Medium',
    sourceType: 'official_board',
    verifiedYear: 2023,
    paperCode: 'CBSE 2/1/2',
    verificationStatus: 'published',
    question: 'How was Tricki treated in the surgery for the first two days?',
    modelAnswer: 'For the first two days at the surgery, Dr. Herriot kept a watchful eye on Tricki but administered no medicinal treatment or pills. Tricki was given no food whatsoever, only an abundance of fresh, cool drinking water. By the close of the second day, he began to exhibit mild interest in his surroundings, and on the third day, he whimpered when he heard the other dogs outside.',
    explanation: 'Details the initial non-pharmaceutical hydration and fasting protocol.',
    keywordsToInclude: ['no medicine', 'no food for two days', 'plenty of water', 'whimpered at other dogs'],
    markingPoints: [
      '1.5 marks: Stating the fasting protocol and water administration.',
      '1.5 marks: Tricki\'s gradual recovery of curiosity and senses on day 2 and 3.'
    ],
    commonMistake: 'Stating that the doctor operated on Tricki.',
    howToImprove: 'Reiterate that no surgery or medicine was used.',
    whyThisQuestionMatters: 'Tests accurate plot recall regarding medical facts.'
  }
];

// Helper to select personalized practice questions avoiding duplicates & balancing difficulty
export function getPersonalizedPracticeSet(
  attemptedQuestionIds: string[],
  weakTopics: string[] = [],
  count: number = 5
): QuestionModel[] {
  // Filter out recently attempted
  const unattempted = ALL_QUESTIONS_DATA.filter(q => !attemptedQuestionIds.includes(q.id));
  
  // Prioritize weak topics if available
  let pool = unattempted;
  if (weakTopics.length > 0) {
    const weakPool = unattempted.filter(q => 
      weakTopics.some(topic => 
        q.chapterTitle.toLowerCase().includes(topic.toLowerCase()) || 
        (q.topic && q.topic.toLowerCase().includes(topic.toLowerCase()))
      )
    );
    if (weakPool.length >= count) {
      pool = weakPool;
    }
  }

  // Shuffle and pick balanced selection
  const shuffled = [...pool].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}
