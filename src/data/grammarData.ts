import { GrammarTopic, QuestionModel } from '../types';

export const GRAMMAR_TOPICS_DATA: GrammarTopic[] = [
  // ==========================================
  // 1. REPORTED SPEECH (COMMANDS, REQUESTS, STATEMENTS, QUESTIONS)
  // ==========================================
  {
    id: 'grammar-reported-speech',
    title: 'Reported Speech',
    subtitle: 'Direct & Indirect Speech: Statements, Questions, Commands & Requests',
    syllabusCategory: 'CBSE Class 10 Grammar Section (10 Marks Total)',
    progressPercent: 72,
    estimatedMinutes: 10,
    concept: 'Reported speech (indirect speech) is how we convey what someone said without quoting their exact words verbatim. In CBSE Class 10, reported speech is tested primarily through dialogue conversion, editing sentences, and gap-filling. The conversion hinges on three fundamental adjustments: change of reporting verbs, systematic backshifting of tenses (when the reporting verb is in past tense), and transformation of pronouns and time/place adverbs.',
    rules: [
      {
        rule: 'Rule 1: Tense Backshifting (Past Reporting Verb)',
        explanation: 'If the reporting verb is in the past tense (e.g. said, told), the verb of the reported speech shifts backward in time: Simple Present → Simple Past, Present Continuous → Past Continuous, Present Perfect → Past Perfect, Simple Past → Past Perfect.',
        correctExample: '"I am working," said Ravi. → Ravi said that he was working.',
        incorrectExample: 'Ravi said that he is working. (Incorrect tense shift)'
      },
      {
        rule: 'Rule 2: Universal Truths & Habitual Facts (Exception)',
        explanation: 'If the reported sentence expresses a universal truth, scientific law, or mathematical fact, the tense remains unchanged regardless of the reporting verb.',
        correctExample: 'The teacher said, "The earth orbits the sun." → The teacher said that the earth orbits the sun.',
        incorrectExample: 'The teacher said that the earth orbited the sun. (Do not backshift universal truths)'
      },
      {
        rule: 'Rule 3: Imperatives (Commands & Requests)',
        explanation: 'For orders, advice, warnings, and requests, use reporting verbs like ordered, commanded, requested, advised, warned, followed by "to + base verb" (infinitive). For negative commands, use "not to + base verb" or "forbade + to + base verb".',
        correctExample: 'The doctor said to him, "Do not smoke." → The doctor advised him not to smoke (or forbade him to smoke).',
        incorrectExample: 'The doctor requested him that he should not smoke.'
      },
      {
        rule: 'Rule 4: Interrogatives (Wh- vs. Yes/No Questions)',
        explanation: 'In reported questions, the word order becomes assertive (subject before auxiliary). For Wh- questions, retain the question word (why, what, where). For Yes/No questions, introduce "if" or "whether". Never use "that" with question words.',
        correctExample: '"Where do you live?" she asked. → She asked where I lived.',
        incorrectExample: 'She asked that where I lived. / She asked where did I live. (Double inversion error)'
      },
      {
        rule: 'Rule 5: Time and Place Adverbial Shifts',
        explanation: 'Spatial and temporal proximity words shift to distance: now → then, today → that day, yesterday → the previous day / the day before, tomorrow → the next day / the following day, here → there, this → that.',
        correctExample: '"I will finish this today," he promised. → He promised that he would finish that that day.',
        incorrectExample: 'He promised that he would finish this today.'
      }
    ],
    examples: [
      {
        context: 'Statements (Assertive)',
        sentence: 'Ananya: "I have finished reading the entire chapter on Nelson Mandela."',
        explanation: 'Becomes: Ananya mentioned that she had finished reading the entire chapter on Nelson Mandela. (have finished → had finished, I → she)'
      },
      {
        context: 'Dialogue Conversion (CBSE Board Exam Format)',
        sentence: 'Father: "Why are you looking so stressed today?"\nSon: "I have my English board mock test tomorrow."',
        explanation: 'Conversion: The father asked his son why he was looking so stressed that day. The son replied that he had his English board mock test the next day.'
      },
      {
        context: 'Commands & Requests',
        sentence: 'Teacher: "Submit your analytical paragraph by 3 PM."',
        explanation: 'Conversion: The teacher instructed the students to submit their analytical paragraph by 3 PM.'
      },
      {
        context: 'Yes/No Question with Modals',
        sentence: 'Visitor: "Can you guide me to the Union Buildings?"',
        explanation: 'Conversion: The visitor inquired if/whether I could guide him to the Union Buildings.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "that" before Wh- questions (e.g. He asked that where was I going).',
        correction: 'He asked where I was going.',
        reason: 'Wh- words serve as conjunctions themselves; using "that" creates an ungrammatical double conjunction.'
      },
      {
        mistake: 'Inverting subject and verb in indirect questions (e.g. He asked me what did I want).',
        correction: 'He asked me what I wanted.',
        reason: 'Indirect questions become declarative statements; the subject precedes the verb without auxiliary "did".'
      },
      {
        mistake: 'Saying "told to me" instead of "told me" or "said to me".',
        correction: 'He told me... OR He said to me...',
        reason: '"Tell" is a transitive verb that takes an immediate direct object without the preposition "to".'
      },
      {
        mistake: 'Backshifting universal facts (e.g. Teacher said water boiled at 100°C).',
        correction: 'Teacher said water boils at 100°C.',
        reason: 'Scientific realities and perennial truths never alter their tense.'
      }
    ],
    quickRevisionPoints: [
      'Reporting verb past? Backshift present tenses to past tenses.',
      'Simple Past becomes Past Perfect (wrote → had written).',
      'Past Continuous becomes Past Perfect Continuous (was reading → had been reading).',
      'Will → would, Can → could, May → might, Shall → should.',
      'Questions: No question mark in reported speech; word order is subject + verb.',
      'Imperatives: Convert to to + infinitive (e.g. "Run!" → ordered him to run).'
    ],
    boardQuestions: [
      {
        id: 'q-gram-rs-01',
        chapterId: 'grammar-reported-speech',
        chapterTitle: 'Reported Speech',
        book: 'First Flight (Prose)',
        topic: 'Reported Speech Dialogue',
        type: 'Short Answer',
        marks: 1,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/1/1',
        verificationStatus: 'published',
        question: 'Report the dialogue between a librarian and a student by completing the sentence:\nLibrarian: "Can you return the book by Monday morning?"\nStudent: "I have just started reading it and need two more days."\nThe librarian asked the student ____________. The student replied that he had just started reading it and needed two more days.',
        modelAnswer: 'if he/she could return the book by Monday morning (or whether he/she could return the book by Monday morning)',
        explanation: 'Yes/No modal question converted using "if/whether", modal "can" backshifted to "could", pronoun "you" becomes "he/she".',
        keywordsToInclude: ['if/whether', 'could return', 'by Monday morning'],
        markingPoints: ['1 mark for correct conjunction and modal shift without inversion.'],
        commonMistake: 'Writing "that if can he return" or keeping "can" in present tense.',
        howToImprove: 'Always check: 1. if/whether, 2. pronoun, 3. backshifted modal, 4. base verb.',
        whyThisQuestionMatters: 'Exact 1-mark sentence completion format in CBSE Section B Grammar.'
      },
      {
        id: 'q-gram-rs-02',
        chapterId: 'grammar-reported-speech',
        chapterTitle: 'Reported Speech',
        book: 'First Flight (Prose)',
        topic: 'Reported Speech Question',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Medium',
        sourceType: 'official_board',
        verifiedYear: 2023,
        paperCode: 'CBSE 2/3/1',
        verificationStatus: 'published',
        question: 'Identify the correct indirect speech for:\nThe tourist said, "Where is the nearest railway station?"',
        options: [
          'The tourist asked that where the nearest railway station was.',
          'The tourist inquired where was the nearest railway station.',
          'The tourist inquired where the nearest railway station was.',
          'The tourist asked whether where the railway station is.'
        ],
        correctOptionIndex: 2,
        modelAnswer: 'Option C: The tourist inquired where the nearest railway station was.',
        explanation: 'In indirect questions, the sentence is assertive: "where" is followed by the subject ("the nearest railway station") and then the verb ("was"). No "that" is allowed.',
        keywordsToInclude: ['inquired where', 'subject before verb'],
        markingPoints: ['1 mark for correct assertive word order.'],
        commonMistake: 'Selecting Option B which incorrectly maintains question inversion (where was the station).',
        howToImprove: 'Remember that indirect questions end with a period, not a question mark.',
        whyThisQuestionMatters: 'Repeatedly tested trap in CBSE objective grammar.'
      }
    ],
    practiceQuestions: [
      {
        id: 'q-gram-rs-03',
        chapterId: 'grammar-reported-speech',
        chapterTitle: 'Reported Speech',
        book: 'First Flight (Prose)',
        topic: 'Imperatives Conversion',
        type: 'Short Answer',
        marks: 1,
        difficulty: 'Board Standard',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'Convert the following instruction into indirect speech:\nThe traffic police officer said to the driver, "Show me your valid driving license immediately."',
        modelAnswer: 'The traffic police officer ordered the driver to show him/her his/her valid driving license immediately.',
        explanation: 'Reporting verb "said to" becomes "ordered/instructed", followed by infinitive "to show", and pronoun "me" becomes "him/her".',
        keywordsToInclude: ['ordered/instructed', 'to show', 'him/her'],
        markingPoints: ['1 mark for appropriate reporting verb, infinitive connector, and pronoun change.'],
        commonMistake: 'Writing "ordered that he should show".',
        howToImprove: 'Use "to + verb" for positive imperatives and "not to + verb" for negative imperatives.',
        whyThisQuestionMatters: 'Essential imperative transformation format.'
      },
      {
        id: 'q-gram-rs-04',
        chapterId: 'grammar-reported-speech',
        chapterTitle: 'Reported Speech',
        book: 'First Flight (Prose)',
        topic: 'Editing / Error Correction',
        type: 'Short Answer',
        marks: 1,
        difficulty: 'Hard',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        question: 'Identify the error in the reported sentence and supply the correction:\n"The doctor asked the patient that how long had he been suffering from fever."',
        modelAnswer: 'Error: "that how long had he"\nCorrection: "how long he had"\nFull corrected sentence: The doctor asked the patient how long he had been suffering from fever.',
        explanation: 'Remove the superfluous conjunction "that" before "how long", and invert "had he" to assertive order "he had".',
        keywordsToInclude: ['Error: that / had he', 'Correction: how long he had'],
        markingPoints: ['0.5 mark for identifying the error, 0.5 mark for providing the correct form.'],
        commonMistake: 'Only fixing the word order while retaining "that".',
        howToImprove: 'Examine both conjunctions and subject-verb order in reported questions.',
        whyThisQuestionMatters: 'Class 10 CBSE grammar editing question standard.'
      }
    ]
  },

  // ==========================================
  // 2. SUBJECT-VERB CONCORD
  // ==========================================
  {
    id: 'grammar-subject-verb-concord',
    title: 'Subject-Verb Concord',
    subtitle: 'Agreement in Number and Person across Complex Sentence Structures',
    syllabusCategory: 'CBSE Class 10 Grammar Section (10 Marks Total)',
    progressPercent: 85,
    estimatedMinutes: 10,
    concept: 'Subject-Verb Concord (or Agreement) dictates that a singular subject takes a singular verb, while a plural subject takes a plural verb. While basic agreement is straightforward, CBSE board examinations specifically evaluate exceptions involving correlative conjunctions (neither...nor, either...or), collective nouns acting as units versus individuals, expressions of quantity, and parenthetical phrases (as well as, along with, together with).',
    rules: [
      {
        rule: 'Rule 1: Proximity with Either...Or / Neither...Nor',
        explanation: 'When two subjects are connected by "either...or", "neither...nor", or "not only...but also", the verb agrees with the subject nearest to it (the rule of proximity).',
        correctExample: 'Neither the teacher nor the students were present in the laboratory.',
        incorrectExample: 'Neither the teacher nor the students was present in the laboratory.'
      },
      {
        rule: 'Rule 2: Parenthetical Expressions (as well as, along with)',
        explanation: 'When a subject is joined with another noun using phrases like "as well as", "along with", "together with", "in addition to", or "accompanied by", the verb agrees ONLY with the first (original) subject.',
        correctExample: 'The captain, along with all his crew members, was awarded the gallantry medal.',
        incorrectExample: 'The captain, along with all his crew members, were awarded the gallantry medal.'
      },
      {
        rule: 'Rule 3: Indefinite Pronouns',
        explanation: '"Each", "every", "everyone", "someone", "anybody", "nobody", "either", and "neither" are grammatically singular and require singular verbs.',
        correctExample: 'Each of the participants has submitted their project.',
        incorrectExample: 'Each of the participants have submitted their project.'
      },
      {
        rule: 'Rule 4: Plural in Form but Singular in Meaning',
        explanation: 'Nouns such as mathematics, physics, economics, measles, mumps, and news end in \'s\' but represent single concepts and take singular verbs.',
        correctExample: 'Mathematics is considered a foundational science.',
        incorrectExample: 'Mathematics are considered a foundational science.'
      },
      {
        rule: 'Rule 5: "A number of" vs. "The number of"',
        explanation: '"A number of + plural noun" takes a plural verb (meaning many). "The number of + plural noun" takes a singular verb (referring to the single numerical statistic).',
        correctExample: 'The number of applicants has increased this year. / A number of students were waiting.',
        incorrectExample: 'The number of applicants have increased this year.'
      }
    ],
    examples: [
      {
        context: 'Collective Noun as a Single Unit',
        sentence: 'The jury has reached a unanimous verdict.',
        explanation: 'The jury acts as a single collective unit, requiring singular verb "has". If divided in opinion, it takes plural "were divided".'
      },
      {
        context: 'Distributive Quantifiers',
        sentence: 'Every boy and girl in the school is expected to wear the formal uniform.',
        explanation: 'When two nouns are preceded by "every", the verb is strictly singular.'
      },
      {
        context: 'Correlative Proximity',
        sentence: 'Either the principal or the teachers are going to supervise the hall.',
        explanation: 'The verb "are" agrees with the nearest noun "teachers".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using plural verbs after "one of the..." (e.g. One of my friends are coming).',
        correction: 'One of my friends is coming.',
        reason: 'The true subject is "One", which is singular; "of my friends" is merely a prepositional phrase.'
      },
      {
        mistake: 'Treating "along with" as "and" (e.g. The Prime Minister, along with his ministers, have arrived).',
        correction: 'The Prime Minister, along with his ministers, has arrived.',
        reason: '"Along with" does not compound subjects; the verb must match the primary singular subject.'
      }
    ],
    quickRevisionPoints: [
      'Singular subject → singular verb (with -s/es in simple present).',
      'Rule of proximity: Agree with closest subject in neither...nor / either...or.',
      'Phrases like "as well as", "together with" ignore intervening nouns—match the first subject.',
      '"Each", "every", "none of the" (formal) take singular verbs.',
      '"The number of" = singular; "A number of" = plural.'
    ],
    boardQuestions: [
      {
        id: 'q-gram-svc-01',
        chapterId: 'grammar-subject-verb-concord',
        chapterTitle: 'Subject-Verb Concord',
        book: 'First Flight (Prose)',
        topic: 'Concord in Sentences',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/1/2',
        verificationStatus: 'published',
        question: 'Select the correct option to fill in the blank:\nThe committee ________ divided in their opinions regarding the new grading policy.',
        options: ['is', 'are', 'was', 'has'],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: are',
        explanation: 'When members of a collective noun act individually or are divided in their opinions (indicated by "in their opinions"), the collective noun takes a plural verb.',
        keywordsToInclude: ['are', 'collective noun divided'],
        markingPoints: ['1 mark for identifying plural agreement in divided collective nouns.'],
        commonMistake: 'Selecting "is" or "was" assuming committee is always singular.',
        howToImprove: 'Look for context clues like "their opinions" indicating plurality.',
        whyThisQuestionMatters: 'Frequently tested nuance of collective nouns in board exams.'
      }
    ],
    practiceQuestions: [
      {
        id: 'q-gram-svc-02',
        chapterId: 'grammar-subject-verb-concord',
        chapterTitle: 'Subject-Verb Concord',
        book: 'First Flight (Prose)',
        topic: 'Parenthetical Agreement',
        type: 'Short Answer',
        marks: 1,
        difficulty: 'Medium',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'Fill in the blank with the correct form of the verb given in bracket:\nThe scientist, accompanied by his research assistants, ________ (have/has) submitted the patent application.',
        modelAnswer: 'has',
        explanation: '"Accompanied by" introduces parenthetical information. The primary subject is "The scientist", which is singular; hence "has" is correct.',
        keywordsToInclude: ['has', 'singular subject'],
        markingPoints: ['1 mark for correct singular auxiliary.'],
        commonMistake: 'Writing "have" because of "research assistants".',
        howToImprove: 'Mentally cross out the phrase between commas to isolate the true subject.',
        whyThisQuestionMatters: 'Essential CBSE grammar gap-filling rule.'
      }
    ]
  },

  // ==========================================
  // 3. TENSES
  // ==========================================
  {
    id: 'grammar-tenses',
    title: 'Tenses',
    subtitle: 'Aspectual Time Frames: Present, Past, Future & Narrative Consistency',
    syllabusCategory: 'CBSE Class 10 Grammar Section (10 Marks Total)',
    progressPercent: 68,
    estimatedMinutes: 12,
    concept: 'In CBSE Class 10, tense mastery is evaluated through paragraph editing, gap filling, and diary entries. Questions focus on distinguishing between Simple Past and Present Perfect, using the Past Perfect for the earlier of two completed past actions, and using appropriate continuous forms to depict ongoing states.',
    rules: [
      {
        rule: 'Rule 1: Simple Past vs. Present Perfect',
        explanation: 'If a specific past time marker is stated (e.g. yesterday, in 1994, two days ago, last week), you MUST use Simple Past, NOT Present Perfect.',
        correctExample: 'Nelson Mandela was inaugurated as President in 1994.',
        incorrectExample: 'Nelson Mandela has been inaugurated as President in 1994.'
      },
      {
        rule: 'Rule 2: Past Perfect for Dual Past Actions',
        explanation: 'When two events occurred in the past, the earlier event takes the Past Perfect (had + V3), while the later event takes the Simple Past (V2).',
        correctExample: 'The rain had destroyed the cornfield before Lencho wrote the letter.',
        incorrectExample: 'The rain destroyed the cornfield before Lencho had written the letter.'
      },
      {
        rule: 'Rule 3: Since and For with Perfect Continuous',
        explanation: 'To express an action that began in the past and continues into the present, use Present Perfect Continuous (has/have been + V-ing). Use "since" for a specific point in time and "for" for a duration.',
        correctExample: 'She has been preparing for the board exams since November.',
        incorrectExample: 'She is preparing for the board exams since November.'
      }
    ],
    examples: [
      {
        context: 'Present Perfect for Recent Result',
        sentence: 'I have just finished the first draft of my formal letter.',
        explanation: 'Indicates a recently completed action with present relevance.'
      },
      {
        context: 'Past Perfect Temporal Sequence',
        sentence: 'When Dr. Herriot reached the house, Tricki had already collapsed.',
        explanation: 'Tricki\'s collapse occurred prior to Herriot\'s arrival.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using Present Continuous with "since/for" (e.g. I am living here since five years).',
        correction: 'I have been living here for five years.',
        reason: '"Since/for" indicating duration requires Perfect or Perfect Continuous aspect, not simple continuous.'
      }
    ],
    quickRevisionPoints: [
      'Specific past time marker = Simple Past (V2).',
      'First of two past actions = Past Perfect (had + V3).',
      'Unbroken action continuing now = Present Perfect Continuous.',
      '"Since" = point in time (since 2020); "For" = duration (for 3 years).'
    ],
    boardQuestions: [
      {
        id: 'q-gram-ten-01',
        chapterId: 'grammar-tenses',
        chapterTitle: 'Tenses',
        book: 'First Flight (Prose)',
        topic: 'Tense in Context',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/2/1',
        verificationStatus: 'published',
        question: 'Fill in the blank with the correct option:\nBy the time the ambulance arrived at the scene, the local bystanders ________ first aid to the injured driver.',
        options: ['administered', 'had administered', 'have administered', 'were administering'],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: had administered',
        explanation: 'The administration of first aid took place before the ambulance arrived. The earlier of two past actions requires the Past Perfect ("had administered").',
        keywordsToInclude: ['had administered', 'Past Perfect'],
        markingPoints: ['1 mark for correct past perfect form.'],
        commonMistake: 'Selecting simple past "administered".',
        howToImprove: 'Identify "By the time" as a classic indicator of the earlier past action.',
        whyThisQuestionMatters: 'Core tense concept tested in CBSE gap filling.'
      }
    ],
    practiceQuestions: [
      {
        id: 'q-gram-ten-02',
        chapterId: 'grammar-tenses',
        chapterTitle: 'Tenses',
        book: 'First Flight (Prose)',
        topic: 'Tense Editing',
        type: 'Short Answer',
        marks: 1,
        difficulty: 'Medium',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'Supply the correct form of the verb in bracket:\nIndia ________ (win) its independence in 1947 after decades of heroic struggle.',
        modelAnswer: 'won',
        explanation: 'Because a specific past year ("in 1947") is specified, only the Simple Past tense ("won") is grammatically correct.',
        keywordsToInclude: ['won'],
        markingPoints: ['1 mark for simple past.'],
        commonMistake: 'Writing "has won".',
        howToImprove: 'Never use present perfect with explicit past historical years.',
        whyThisQuestionMatters: 'Standard error identification test.'
      }
    ]
  },

  // ==========================================
  // 4. MODALS
  // ==========================================
  {
    id: 'grammar-modals',
    title: 'Modals',
    subtitle: 'Modal Auxiliaries of Obligation, Possibility, Ability, Permission & Advice',
    syllabusCategory: 'CBSE Class 10 Grammar Section (10 Marks Total)',
    progressPercent: 75,
    estimatedMinutes: 8,
    concept: 'Modals are auxiliary verbs that express the speaker\'s attitude toward the action: ability (can, could), permission (may, can), possibility (might, may), necessity and obligation (must, have to, should, ought to), and willingness/habit (will, would). In CBSE Class 10, exams assess subtle nuances between formal obligations, moral duties, and conditional advice.',
    rules: [
      {
        rule: 'Rule 1: Must vs. Should vs. Ought to',
        explanation: '"Must" indicates compulsory obligation or strong internal conviction. "Should" conveys subjective advice or recommendation. "Ought to" signifies objective moral duty or societal obligation.',
        correctExample: 'You must carry your admit card to the examination hall. / We ought to respect public property.',
        incorrectExample: 'You should carry your admit card (too weak for mandatory rule).'
      },
      {
        rule: 'Rule 2: May vs. Might (Degree of Possibility)',
        explanation: '"May" indicates a strong or realistic possibility (approx. 50%). "Might" expresses a remote, weak, or improbable possibility (approx. 20-30%).',
        correctExample: 'The sky is overcast; it may rain this afternoon. / He works rarely; he might pass if lucky.',
        incorrectExample: 'The sky is dark; it might rain (too weak for clear evidence).'
      },
      {
        rule: 'Rule 3: Modals with Base Verbs',
        explanation: 'Modal auxiliaries are directly followed by the base form of the verb (V1) without "to" (except ought to, have to, used to). They never take \'-s\' in third person singular.',
        correctExample: 'He can swim across the river.',
        incorrectExample: 'He cans swim / He can to swim.'
      }
    ],
    examples: [
      {
        context: 'Formal Permission',
        sentence: 'May I enter the principal\'s chamber, please?',
        explanation: '"May" is the most polite and formal modal for seeking permission.'
      },
      {
        context: 'Past Habitual Action',
        sentence: 'In his youth, Nelson Mandela would run across the open fields of Qunu.',
        explanation: '"Would" expresses repeated past routine behavior.'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "must to" or "can to" (e.g. You must to study).',
        correction: 'You must study.',
        reason: 'Pure modals take bare infinitives without "to".'
      }
    ],
    quickRevisionPoints: [
      'Must = compulsion/strict legal rule.',
      'Ought to = moral/ethical duty.',
      'Should = advice/best practice.',
      'May = formal permission, realistic possibility.',
      'Can = general ability, informal permission.'
    ],
    boardQuestions: [
      {
        id: 'q-gram-mod-01',
        chapterId: 'grammar-modals',
        chapterTitle: 'Modals',
        book: 'First Flight (Prose)',
        topic: 'Modal of Obligation',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/3/3',
        verificationStatus: 'published',
        question: 'Choose the appropriate modal auxiliary:\nEvery candidate ________ produce their original board admit card before entering the hall.',
        options: ['might', 'could', 'must', 'may'],
        correctOptionIndex: 2,
        modelAnswer: 'Option C: must',
        explanation: 'Carrying an admit card to a board examination is a compulsory official mandate; therefore, the modal of strict obligation "must" is required.',
        keywordsToInclude: ['must', 'compulsory mandate'],
        markingPoints: ['1 mark for correct modal selection.'],
        commonMistake: 'Selecting "should" or "may" which denote optional suggestions.',
        howToImprove: 'Identify the regulatory tone of institutional notices.',
        whyThisQuestionMatters: 'Common institutional instruction tested in CBSE Section B.'
      }
    ],
    practiceQuestions: [
      {
        id: 'q-gram-mod-02',
        chapterId: 'grammar-modals',
        chapterTitle: 'Modals',
        book: 'First Flight (Prose)',
        topic: 'Modal of Moral Duty',
        type: 'Short Answer',
        marks: 1,
        difficulty: 'Medium',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'Fill in the blank with an appropriate modal auxiliary:\nCitizens ________ to uphold and protect the sovereignty and integrity of the country.',
        modelAnswer: 'ought',
        explanation: 'Because "to" is explicitly present after the blank and the sentence describes a fundamental constitutional moral duty, "ought" (forming "ought to") is required.',
        keywordsToInclude: ['ought'],
        markingPoints: ['1 mark for ought.'],
        commonMistake: 'Writing "must" without noticing the following "to".',
        howToImprove: 'Always inspect the word immediately following the blank.',
        whyThisQuestionMatters: 'Evaluates awareness of modal collocations.'
      }
    ]
  },

  // ==========================================
  // 5. DETERMINERS
  // ==========================================
  {
    id: 'grammar-determiners',
    title: 'Determiners',
    subtitle: 'Articles, Demonstratives, Quantifiers, Distributives & Possessives',
    syllabusCategory: 'CBSE Class 10 Grammar Section (10 Marks Total)',
    progressPercent: 80,
    estimatedMinutes: 8,
    concept: 'Determiners are words placed before nouns to specify their reference: definite/indefinite articles (a, an, the), demonstratives (this, that, these, those), possessives (my, your, their), and quantifiers (few, a few, the few, little, a little, the little, much, many, each, every, some, any). Board exams focus primarily on quantifier contrasts and the definite article with unique references.',
    rules: [
      {
        rule: 'Rule 1: Few vs. A Few vs. The Few (Countable Nouns)',
        explanation: '"Few" has a negative meaning (almost none). "A few" has a positive meaning (some, at least a small number). "The few" means the particular small number that exists.',
        correctExample: 'Few people survived the avalanche. / A few friends came to visit. / He lost the few coins he had.',
        incorrectExample: 'He has few friends, so he is never lonely. (Contradiction)'
      },
      {
        rule: 'Rule 2: Little vs. A Little vs. The Little (Uncountable Nouns)',
        explanation: '"Little" means virtually none (negative). "A little" means some amount (positive). "The little" refers to all of that small specific quantity.',
        correctExample: 'There was little hope of saving the crop. / Give me a little water. / He spent the little money he earned.',
        incorrectExample: 'She drank few water. ("water" is uncountable; use little)'
      },
      {
        rule: 'Rule 3: Much vs. Many',
        explanation: '"Many" is used with plural countable nouns; "Much" is used with singular uncountable nouns.',
        correctExample: 'Many students attended the session. / Much patience is required.',
        incorrectExample: 'Much students attended.'
      },
      {
        rule: 'Rule 4: Some vs. Any',
        explanation: '"Some" is typically used in affirmative sentences and polite requests/offers expecting a yes. "Any" is used in negative sentences and general questions.',
        correctExample: 'Would you like some tea? / I did not find any errors in your draft.',
        incorrectExample: 'I don\'t have some books.'
      }
    ],
    examples: [
      {
        context: 'Quantifier in Despair Context',
        sentence: 'Lencho had little hope left when the hail continued for an hour.',
        explanation: '"Little" conveys the near-total absence of hope with an uncountable noun.'
      },
      {
        context: 'Definite Article with Superlatives',
        sentence: 'Nelson Mandela was the greatest statesman of twentieth-century Africa.',
        explanation: 'Superlative adjectives strictly require the definite article "the".'
      }
    ],
    commonMistakes: [
      {
        mistake: 'Using "few" with uncountable nouns (e.g. He has few knowledge).',
        correction: 'He has little knowledge.',
        reason: 'Knowledge is uncountable, so "little" must be used instead of "few".'
      }
    ],
    quickRevisionPoints: [
      'Countable = few / a few / many.',
      'Uncountable = little / a little / much.',
      'Few / Little = negative (scarcely any).',
      'A few / A little = positive (some).',
      'Any = negative clauses & questions; Some = positive statements & offers.'
    ],
    boardQuestions: [
      {
        id: 'q-gram-det-01',
        chapterId: 'grammar-determiners',
        chapterTitle: 'Determiners',
        book: 'First Flight (Prose)',
        topic: 'Quantifier Selection',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Medium',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/1/3',
        verificationStatus: 'published',
        question: 'Select the correct determiner to complete the sentence:\nAlthough the debate was intense, ________ participants were able to arrive at a common consensus.',
        options: ['few', 'a few', 'little', 'much'],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: a few',
        explanation: '"Participants" is a countable plural noun. Because they did arrive at a consensus, a positive quantity ("a few") is required. "Little" is for uncountable nouns.',
        keywordsToInclude: ['a few', 'positive countable'],
        markingPoints: ['1 mark for correct quantifier.'],
        commonMistake: 'Selecting "few" which would imply failure to reach consensus.',
        howToImprove: 'Distinguish between negative "few" (hardly any) and positive "a few" (some).',
        whyThisQuestionMatters: 'Tests logical semantic coherence in determiners.'
      }
    ],
    practiceQuestions: [
      {
        id: 'q-gram-det-02',
        chapterId: 'grammar-determiners',
        chapterTitle: 'Determiners',
        book: 'First Flight (Prose)',
        topic: 'Determiner Editing',
        type: 'Short Answer',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'Identify the error in the sentence and supply the correction:\n"There isn\'t some milk left in the refrigerator for breakfast."',
        modelAnswer: 'Error: some\nCorrection: any\nCorrected sentence: There isn\'t any milk left in the refrigerator for breakfast.',
        explanation: 'In negative sentences (with "isn\'t"), "any" is the appropriate determiner rather than "some".',
        keywordsToInclude: ['Error: some', 'Correction: any'],
        markingPoints: ['0.5 mark for error, 0.5 mark for correction.'],
        commonMistake: 'Changing "isn\'t" to "is" instead of fixing the determiner.',
        howToImprove: 'Keep the verb negative and substitute "some" with "any".',
        whyThisQuestionMatters: 'Fundamental negative polarity rule.'
      }
    ]
  }
];
