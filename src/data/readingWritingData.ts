import { ReadingPassage, WritingItem } from '../types';

export const READING_PASSAGES_DATA: ReadingPassage[] = [
  {
    id: 'rd-pass-1',
    title: 'The Silent Architecture of Habit Formation',
    type: 'Discursive',
    wordCount: 420,
    passageText: `Habits are the invisible architecture of daily life. Research in neuroscience indicates that nearly forty percent of our daily actions are not conscious decisions, but automatic routines prompted by environmental cues. When an individual engages in an action repeatedly, the human brain constructs synaptic pathways in the basal ganglia, an ancient neurological structure responsible for procedural memory. This biological efficiency conserves precious mental energy for creative contemplation and higher-order problem-solving.\n\nHowever, this mental shortcut operates as a double-edged sword. The basal ganglia does not distinguish between empowering rituals and debilitating addictions; it executes the ingrained loop—cue, routine, reward—with mechanical indifference. An adolescent who instinctively reaches for a smartphone upon experiencing a minor wave of boredom is responding to a neurological loop that conditions the brain toward instant, fragmented gratification.\n\nTo dismantle an unwanted habit, modern cognitive psychologists advocate not forceful suppression, but systematic substitution. The golden rule of habit change posits that you can never truly extinguish a bad habit; you can only alter the routine while keeping the cue and reward intact. If the cue is fatigue and the habitual routine is unmindful social media scrolling, substituting the routine with a brisk five-minute stroll or deep respiratory exercises delivers a comparable psychological relief without fracturing cognitive stamina.\n\nUltimately, mastery over one's academic and personal pursuits stems not from heroic, sporadic bursts of willpower, but from the deliberate design of one's environment. When you eliminate friction toward beneficial habits—such as keeping your textbooks on a clean desk and placing distracting digital devices in another room—your subconscious mind effortlessly gravitates toward focused scholarship. We are, as Aristotle famously perceived, what we repeatedly do. Excellence, therefore, is not an isolated act, but an enduring habit.`,
    questions: [
      {
        id: 'q-rd-1-01',
        chapterId: 'reading',
        chapterTitle: 'Reading Section',
        book: 'First Flight (Prose)',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Board Standard',
        sourceType: 'official_sample_paper',
        verifiedYear: 2024,
        verificationStatus: 'published',
        question: 'Why does the author describe habit formation as a "double-edged sword" in paragraph 2?',
        options: [
          'Because habits require expensive medical intervention to maintain',
          'Because the basal ganglia executes destructive routines with the same mechanical efficiency as beneficial ones',
          'Because habits only function when a person is physically injured',
          'Because habits eliminate the human capacity for logical reasoning'
        ],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: Because the basal ganglia executes destructive routines with the same mechanical efficiency as beneficial ones.',
        explanation: 'Paragraph 2 clarifies that the neurological loop operates with mechanical indifference without differentiating between empowering rituals and debilitating habits.',
        keywordsToInclude: ['mechanical efficiency', 'both beneficial and destructive'],
        markingPoints: ['1 mark for identifying the dual nature of habit automation.'],
        commonMistake: 'Selecting Option D which exaggerates the claim.',
        howToImprove: 'Rely directly on textual evidence rather than extreme inferences.',
        whyThisQuestionMatters: 'Classic discursive inference question.'
      },
      {
        id: 'q-rd-1-02',
        chapterId: 'reading',
        chapterTitle: 'Reading Section',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 2,
        difficulty: 'Board Standard',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        question: 'What is the "golden rule of habit change" as articulated in the passage? How should an adolescent apply it?',
        modelAnswer: 'The golden rule of habit change states that an unwanted habit cannot be forcefully extinguished; instead, the routine must be substituted with a constructive alternative while keeping the initial cue and the resulting reward intact. An adolescent seeking to stop mindlessly scrolling during boredom should substitute that routine with a 5-minute walk or breathing exercises, satisfying the need for mental relief without degrading cognitive focus.',
        explanation: 'Two-part answer: definition of the golden rule and practical adolescent application.',
        keywordsToInclude: ['substituting the routine', 'keeping cue and reward intact', 'constructive alternative'],
        markingPoints: [
          '1 mark: Explaining the golden rule of substitution.',
          '1 mark: Providing practical application (walk/breathing instead of phone).'
        ],
        commonMistake: 'Only writing about willpower without explaining cue, routine, and reward.',
        howToImprove: 'Structure the response with the exact psychological framework mentioned in the passage.',
        whyThisQuestionMatters: 'Demonstrates comprehension of informational text structure.'
      }
    ]
  },
  {
    id: 'rd-pass-2',
    title: 'Adolescent Screen Time and Cognitive Focus (Statistical Case-Study)',
    type: 'Case-based factual',
    wordCount: 235,
    passageText: `A comprehensive survey conducted in 2024 by the National Educational Research Consortium across 1,500 secondary school students revealed significant correlations between daily recreational screen duration and academic concentration spans.\n\nData indicates that students utilizing digital screens for under 90 minutes daily exhibited a mean uninterrupted study focus span of 42 minutes, maintaining an average standardized assessment score of 84.6%. Conversely, adolescents reporting 4 to 6 hours of daily recreational screen exposure demonstrated an average focused duration of merely 14 minutes, accompanied by a 22% increase in reported examination anxiety and a mean assessment score of 62.1%.\n\nFurthermore, when survey participants engaged in a 14-day "digital detox" protocol—restricting non-essential smartphone interactions to 45 minutes prior to bedtime—78% of the cohort reported measurable improvements in sleep latency (falling asleep within 15 minutes), while 69% registered improved verbal retention in classroom recall tests.\n\nThe findings conclude that passive digital consumption degrades neuro-cognitive stamina, whereas active digital learning under structured pedagogical guidance does not produce comparable cognitive declines.`,
    questions: [
      {
        id: 'q-rd-2-01',
        chapterId: 'reading',
        chapterTitle: 'Reading Section',
        book: 'First Flight (Prose)',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'official_sample_paper',
        verifiedYear: 2025,
        verificationStatus: 'published',
        question: 'According to the survey data, by what percentage did examination anxiety increase among students with 4 to 6 hours of daily screen exposure?',
        options: ['14%', '22%', '42%', '78%'],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: 22%',
        explanation: 'Paragraph 2 explicitly notes: "...accompanied by a 22% increase in reported examination anxiety...".',
        keywordsToInclude: ['22% increase'],
        markingPoints: ['1 mark for exact factual data retrieval.'],
        commonMistake: 'Confusing 22% with the 14-minute focus span or 42 minutes.',
        howToImprove: 'Cross-reference numbers with their respective descriptive labels in factual passages.',
        whyThisQuestionMatters: 'Direct statistical data retrieval in case-based passage.'
      }
    ]
  }
];

export const WRITING_ITEMS_DATA: WritingItem[] = [
  // 1. Formal Letter: Letter to the Editor
  {
    id: 'wr-letter-editor-1',
    title: 'Letter to the Editor: Menace of Reckless Driving and Inadequate Traffic Signage',
    type: 'Formal Letter',
    category: 'Letter to Editor',
    formatGuidelines: [
      { section: 'Sender\'s Address', weightage: 'Part of 1M Format', tips: ['Write in 2-3 lines without commas at end of lines', 'Example: 42, Green Enclave, New Delhi - 110016'] },
      { section: 'Date', weightage: 'Part of 1M Format', tips: ['Write in expanded format: 27 September 2026', 'Avoid 27/09/2026'] },
      { section: 'Receiver\'s Designation & Address', weightage: 'Part of 1M Format', tips: ['The Editor, The Times of India / The Hindustan Times, New Delhi'] },
      { section: 'Subject', weightage: 'Part of 1M Format', tips: ['Brief, underlined or bold, capitalized appropriately', 'Example: Concern over reckless driving near school zones'] },
      { section: 'Salutation', weightage: 'Part of 1M Format', tips: ['Sir / Madam (Avoid Respected Sir)'] },
      { section: 'Body of the Letter', weightage: '2M Content + 2M Expression', tips: ['Para 1: Reference to newspaper columns and statement of problem', 'Para 2: Concrete causes, impact on public, statistics/details', 'Para 3: Constructive remedies and appeal to authorities'] },
      { section: 'Complimentary Close', weightage: 'Part of 1M Format', tips: ['Yours faithfully / Yours sincerely (Never use apostrophe: NOT Your\'s)', 'Signature and Full Name'] }
    ],
    modelPrompt: 'You are Aarav/Aanya, a resident of 14, Mall Road, Shimla. You are deeply perturbed by the growing menace of reckless speeding and lack of pedestrian zebra crossings near schools during peak morning hours. Write a formal letter in 100-120 words to the Editor of a national daily drawing the attention of the municipal and traffic authorities toward this grave civic hazard.',
    modelAnswer: `14, Mall Road\nShimla - 171001\n\n27 September 2026\n\nThe Editor\nThe National Herald\nShimla\n\nSubject: Growing menace of reckless speeding near school zones\n\nSir,\n\nThrough the esteemed columns of your widely circulated daily, I wish to draw the urgent attention of the municipal council and traffic police authorities toward the perilous safety hazard posed by speeding vehicles near school zones in our city.\n\nDuring morning and afternoon peak hours, motorists routinely disregard the 25 km/h speed limit along Mall Road. The complete absence of functional speed breakers, faded zebra crossings, and lack of dedicated pedestrian signals turn the daily commute of school children into an ordeal. Several near-fatal accidents have been witnessed outside St. Mary\'s Convent over the past month alone.\n\nTo avert an irreversible catastrophe, I urge the traffic administration to construct rubberized speed bumps, repaint crosswalks with reflective thermoplastic paint, and deploy traffic marshals during school arrival and dismissal hours.\n\nI hope this appeal galvanizes the concerned authorities into immediate remedial action.\n\nYours faithfully,\nAanya Sharma\n(Concerned Citizen)`,
    markingBreakdown: [
      { criterion: 'Format', marks: 1, description: 'Sender address, date, receiver address, subject, salutation, complimentary close, sender name.' },
      { criterion: 'Content', marks: 2, description: 'Clear statement of civic issue, concrete hazards, constructive pragmatic recommendations.' },
      { criterion: 'Expression', marks: 2, description: 'Grammatical accuracy, formal dignified register, coherence, appropriate vocabulary within 100-120 words.' }
    ],
    highScoringPhrases: [
      '"Through the esteemed columns of your widely circulated daily..."',
      '"I wish to draw the urgent attention of the concerned authorities toward..."',
      '"To avert an irreversible catastrophe..."',
      '"I hope this appeal galvanizes the administration into immediate remedial action."'
    ],
    commonErrors: [
      'Writing "Your\'s faithfully" with an apostrophe (Gross grammatical error).',
      'Exceeding word count beyond 130 words.',
      'Demanding the Editor to fix the roads instead of urging authorities through his platform.',
      'Using informal colloquial slang like "Hi" or "Thanks a lot".'
    ]
  },

  // 2. Analytical Paragraph
  {
    id: 'wr-analytical-para-1',
    title: 'Analytical Paragraph: Comparative Analysis of Renewable Energy Adoption (2020 vs 2026)',
    type: 'Analytical Paragraph',
    category: 'Data / Chart Analysis',
    formatGuidelines: [
      { section: 'Introductory Statement', weightage: 'Part of Content', tips: ['Paraphrase the given chart topic in 1 concise sentence', 'State what the data illustrates'] },
      { section: 'Data Comparison & Key Trends', weightage: 'Main Body', tips: ['Group data logically (highest, lowest, significant surges)', 'Use comparative vocabulary: whereas, in sharp contrast, witnessed a surge of, eclipsed'] },
      { section: 'Concluding Overview', weightage: 'Synthesis', tips: ['Summarize the overarching pattern or future implication without personal bias'] }
    ],
    modelPrompt: 'The chart below presents data on renewable energy sources adopted by metropolitan households in India between 2020 and 2026 (Solar: 18% → 46%; Wind & Hybrid: 12% → 28%; Biomass: 8% → 9%; Fossil dependency: 62% → 17%). Write an analytical paragraph in 100-120 words summarizing the information by selecting and reporting the main features, and making comparisons where relevant.',
    modelAnswer: `The provided data delineates a monumental shift in household energy adoption across metropolitan India from 2020 to 2026, highlighting a progressive transition toward sustainable power.\n\nMost noticeably, rooftop solar energy witnessed an exponential surge, skyrocketing from a modest 18% in 2020 to an impressive 46% by 2026, establishing itself as the predominant domestic energy source. Similarly, wind and hybrid installations experienced more than twofold growth, rising steadily from 12% to 28%. In sharp contrast, biomass adoption remained virtually stagnant, inching up marginally from 8% to 9%.\n\nConsequently, conventional fossil fuel dependency collapsed dramatically, shrinking from a dominant 62% in 2020 to a mere 17% in 2026.\n\nOverall, the figures underscore an encouraging decarbonization trend, driven by rapid solar integration and robust governmental clean energy incentives.`,
    markingBreakdown: [
      { criterion: 'Content', marks: 2, description: 'Accurate reporting of key figures, high and low extremes, and notable comparisons.' },
      { criterion: 'Organization & Structure', marks: 2, description: 'Clear three-part structure: introduction, comparison of trends, overall summary.' },
      { criterion: 'Accuracy & Language', marks: 1, description: 'Precision of comparative terminology, tense consistency, and zero subjective rambling.' }
    ],
    highScoringPhrases: [
      '"The provided data delineates..."',
      '"witnessed an exponential surge..."',
      '"In sharp contrast to..."',
      '"experienced a twofold expansion..."',
      '"Overall, the figures underscore an encouraging trend..."'
    ],
    commonErrors: [
      'Giving personal opinions ("I think solar is very good") instead of analyzing given figures.',
      'Copying all numbers blindly in a boring list without drawing analytical contrasts.',
      'Failing to include an overarching concluding sentence.'
    ]
  }
];
