import { Chapter, QuestionModel, BookType } from '../types';

export const CHAPTERS_DATA: Chapter[] = [
  // ==========================================
  // 1. A LETTER TO GOD (FIRST FLIGHT PROSE)
  // ==========================================
  {
    id: 'ff-prose-1',
    title: 'A Letter to God',
    authorOrPoet: 'Gregorio López y Fuentes',
    book: 'First Flight (Prose)',
    isPoem: false,
    chapterNumber: 1,
    estimatedReadTimeMinutes: 18,
    progressPercent: 78,
    background: 'Written during the agrarian crises in Latin America, illustrating the profound peasant faith in divine providence amidst harsh climate vulnerabilities.',
    setting: 'A solitary house on the crest of a low hill overlooking the river and a field of ripe corn dotted with kidney bean flowers.',
    tone: 'Compassionate, ironic, and satirical regarding human limitations and divine innocence.',
    shortSummary: 'Lencho, a hardworking and simple peasant, loses his entire corn crop to a sudden devastating hailstorm. With unshakeable faith in God, he writes a letter requesting 100 pesos. The kind postmaster and his employees contribute 70 pesos out of charity. Upon receiving less than requested, Lencho suspects the postal employees of theft, calling them a "bunch of crooks", creating a poignant situational irony.',
    detailedSummary: [
      'Lencho is an industrious farmer living in a solitary valley. He anticipates a gentle shower to nourish his ripe cornfield. While eating supper with his family, large drops of rain begin to fall, which he joyfully likens to new silver coins.',
      'Suddenly, strong winds arise, transforming the rain into a destructive hailstorm that rages for an hour. The hail covers the entire landscape like a sheet of white salt, stripping leaves from trees and destroying the blossoms and corn completely.',
      'Confronted with imminent starvation, Lencho recalls that no one dies of hunger because God sees everything, even what is deep in one\'s conscience. Driven by childlike conviction, he writes a letter addressed directly to God asking for 100 pesos to sow his field again.',
      'At the local post office, the postman laughs upon seeing the address, but the postmaster quickly turns serious, marveling at the depth of the sender\'s faith. Not wanting to shake such faith, the postmaster collects contributions from his staff and gives part of his own salary, amassing 70 pesos.',
      'The following Sunday, Lencho arrives to collect his letter. Rather than feeling overwhelmed with gratitude, he becomes furious upon counting only 70 pesos, firmly believing God could neither commit an arithmetic error nor deny his request.',
      'He immediately pens a second letter asking God to send the remaining thirty pesos directly through other means, cautioning that the post office employees are a "bunch of crooks".'
    ],
    mainThemes: [
      'Absolute vs. Blind Faith: The transformative power yet naivety of unshakeable faith.',
      'Situational Irony: The benefactors are vilified as thieves by the beneficiary.',
      'Human Altruism and Empathy: Unheralded kindness demonstrated by everyday working strangers.',
      'Vulnerability of Agrarian Life: Complete reliance of peasant livelihoods upon fickle nature.'
    ],
    centralIdea: 'Man\'s faith in God can move mountains, but human perception of fellow humans often remains clouded by prejudice, suspicion, and ignorance of genuine kindness.',
    centralMessage: 'Compassion and charity are supreme human virtues that need no public acclaim, even when misinterpreted by the recipient.',
    characters: [
      {
        name: 'Lencho',
        role: 'Protagonist / Agrarian Peasant',
        traits: ['Hardworking', 'Deeply religious', 'Innocent yet naive', 'Obstinate', 'Unquestioning'],
        description: 'An ox of a man working tirelessly in his fields, possessing profound, unquestioning faith in the Almighty, but blinded to the benevolence of fellow humans.',
        keyQuotes: ['"God, if you don\'t help me, my family and I will go hungry this year."', '"Send me the rest, since I need it very much. But don\'t send it through the mail, because the post office employees are a bunch of crooks."']
      },
      {
        name: 'The Postmaster',
        role: 'Catalyst of Compassion',
        traits: ['Fat and amiable', 'Empathetic', 'Generous', 'Discreet', 'Reverent'],
        description: 'A good-hearted public official who is deeply touched by Lencho\'s faith. Rather than dismissing it as madness, he sacrifices his own funds to sustain another human\'s belief.',
        keyQuotes: ['"What faith! I wish I had the faith of the man who wrote this letter."']
      }
    ],
    importantEvents: [
      {
        event: 'The Sudden Hailstorm',
        cause: 'Unpredictable atmospheric shifts transforming a pleasant rain into violent hail.',
        effect: 'Total annihilation of Lencho\'s corn crop, plunging his family into economic distress.'
      },
      {
        event: 'Writing the Letter to God',
        cause: 'Lencho\'s unshakeable belief that God alone can rescue his household from starvation.',
        effect: 'Brought the letter to the town post office, initiating the postmaster\'s altruistic response.'
      },
      {
        event: 'The Collection and Second Letter',
        cause: 'The postmaster\'s inability to gather more than 70 pesos, and Lencho\'s assumption of divine infallibility.',
        effect: 'Lencho labels the kind postal staff as "a bunch of crooks" in his final missive.'
      }
    ],
    keyConcepts: [
      'Metaphor of Raindrops: Lencho refers to 10-cent and 5-cent pieces to symbolize economic prosperity.',
      'Situational Irony: The divergence between what is expected (gratitude towards benefactors) and what occurs (accusation of theft).',
      'The Conflict of Innocence vs. Wisdom: Lencho is morally pure but socially unenlightened.'
    ],
    importantExamPoints: [
      'Always highlight the contrast between Lencho\'s faith in God and his distrust of humanity.',
      'Explain situational irony clearly: postal workers gave charity, yet were branded as crooks.',
      'Describe the postmaster\'s character: fat, amiable, noble, seeking no personal glory.',
      'Mention the specific amounts: 100 pesos requested, 70 pesos collected, 30 pesos deficit.'
    ],
    vocabulary: [
      { word: 'Downpour', meaning: 'Heavy rainfall in a short span', contextInText: 'The earth needed a downpour or at least a shower.' },
      { word: 'Draped', meaning: 'Covered or wrapped with cloth/layer', contextInText: 'The field was draped in a curtain of rain.' },
      { word: 'Plague of locusts', meaning: 'A destructive swarm of insects attacking crops', contextInText: 'Even a plague of locusts would have left more than this.' },
      { word: 'Conscience', meaning: 'Inner sense of right and wrong', contextInText: 'God whose eyes see everything, even what is deep in one\'s conscience.' },
      { word: 'Amiable', meaning: 'Friendly, good-natured and pleasant', contextInText: 'The postmaster—a fat, amiable fellow.' },
      { word: 'Solitary', meaning: 'Existing alone; isolated', contextInText: 'In that solitary house in the middle of the valley.' }
    ],
    commonConfusions: [
      'Confusion: Thinking Lencho was ungrateful to God. Clarification: Lencho never doubted God; he firmly believed God sent all 100 pesos and humans stole 30.',
      'Confusion: Assuming the postmaster signed his own name. Clarification: He signed only "God" so as not to shatter Lencho\'s illusion.'
    ],
    fiveMinRevision: [
      'Lencho is a peasant whose cornfield is destroyed by hail after a promising shower.',
      'He writes a letter requesting 100 pesos from God to prevent his family from starving.',
      'The postmaster reads it, is moved by Lencho\'s faith, and mobilizes 70 pesos.',
      'Lencho receives the money, counts 70, and believes postal employees embezzled 30 pesos.',
      'Core literary device: Situational irony.'
    ],
    tenMinRevision: [
      'Plot: From rain anticipation → destructive hailstorm → faith in divine assistance → post office charity → ironic accusations.',
      'Themes: Naive faith, situational irony, selfless charity versus cynical distrust.',
      'Character contrast: Lencho (single-minded, rustic, mistrustful of people) vs. Postmaster (broad-minded, empathetic, altruistic).',
      'Symbolism: Raindrops as silver coins; hail as white salt covering hope; letter as bridge between mortal desperation and faith.'
    ],
    thirtyMinRevision: [
      'Comprehensive study of Lencho\'s emotional arc from ecstasy to sorrow to moral determination.',
      'Detailed examination of the postmaster\'s decision-making: preserving faith as a social and spiritual anchor.',
      'Analysis of how G.L. Fuentes critiques human distrust: Lencho readily trusts an unseen entity but doubts concrete human goodness.',
      'Practice writing 6-mark thematic questions connecting faith and human empathy.'
    ],
    onePageRevision: {
      plotOrGist: 'A hardworking farmer loses crops to hail, sends a letter to God for 100 pesos. Generous post office workers raise 70 pesos. Farmer suspects them of theft and asks God not to use the post office.',
      keyThemes: ['Immense faith in God', 'Irony of human situations', 'Unsung charity and generosity', 'Agrarian helplessness'],
      crucialMoments: ['Hailstorm covering valley like salt', 'Writing the letter to God', 'Postmaster collecting his salary', 'Second letter calling staff crooks'],
      vitalVocabulary: ['Downpour', 'Draped', 'Amiable', 'Conscience', 'Pestilence/Plague', 'Resolution'],
      fiveKeyQuestions: [
        'Why did Lencho write a letter to God?',
        'How did the postmaster react to Lencho\'s letter?',
        'Bring out the situational irony in the chapter\'s conclusion.',
        'Contrast Lencho\'s attitude towards nature before and after the storm.',
        'Did Lencho attempt to find out who sent him the money? Why or why not?'
      ],
      pyqReferences: [
        'CBSE Board Exam 2024: 6-Mark character comparison of Lencho & Postmaster',
        'CBSE Board Exam 2023: 3-Mark question on why postmaster signed "God"',
        'CBSE Board Exam 2020: 3-Mark question on Lencho\'s reaction on counting money'
      ]
    },
    tenImportantQuestions: [
      {
        id: 'q-ff-1-01',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/1/1 (Delhi & Outside Delhi)',
        verificationStatus: 'published',
        question: 'Why did the postmaster send money to Lencho? Why did he sign the letter "God"?',
        modelAnswer: 'The postmaster was deeply moved by Lencho\'s unshakeable and childlike faith in God. He did not want this pristine spiritual conviction to be shattered by an unanswered letter. Therefore, he organized a charitable contribution from his employees and donated part of his own salary. He signed the letter simply as "God" to ensure that Lencho\'s belief in divine intervention remained completely intact, attributing the aid directly to the Almighty rather than human charity.',
        explanation: 'Focus on two distinct parts: reasons for collecting money (preserving faith) and reason for signing "God" (sustaining Lencho\'s belief in divine responsiveness).',
        keywordsToInclude: ['unshakeable faith', 'preserve conviction', 'charity', 'signed "God"', 'divine intervention'],
        markingPoints: [
          '1.5 marks: Postmaster moved by intense faith; wanted to preserve it.',
          '1.5 marks: Signed "God" so Lencho would credit divine providence.'
        ],
        commonMistake: 'Students often omit the second part of the question regarding why he signed "God".',
        howToImprove: 'Always break two-pronged board questions into two clear analytical points.',
        whyThisQuestionMatters: 'Tests understanding of the postmaster\'s psychological motivation and thematic core of compassion.'
      },
      {
        id: 'q-ff-1-02',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Long Answer',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2023,
        paperCode: 'CBSE Set 2 (Term 2 / Annual)',
        verificationStatus: 'published',
        question: 'Bring out the irony in the ending of the story "A Letter to God". How does this irony highlight human nature?',
        modelAnswer: 'The ending of "A Letter to God" presents a classic example of situational irony—where the outcome is diametrically opposed to what is expected. After receiving seventy pesos instead of the hundred he requested, Lencho firmly believes that God could not have made an error. Consequently, he assumes that the postal employees stole the missing thirty pesos.\n\nThe profound irony lies in the fact that the very individuals who sacrificed their earnings out of noble benevolence are branded by Lencho as a "bunch of crooks". While the postmaster expected a surge of heartfelt gratitude, he received bitter condemnation.\n\nThis irony powerfully critiques human nature: Lencho places unbounded, blind trust in an unseen divine entity, yet exhibits cynical suspicion toward his fellow human beings. It reveals that simplicity and innocence, when untempered by worldly understanding, can breed narrow-mindedness and ingratitude.',
        explanation: 'Define situational irony accurately, state the specific contrast in the story, and evaluate what it teaches about human perception.',
        keywordsToInclude: ['situational irony', 'diametrically opposed', 'benevolence', 'bunch of crooks', 'blind faith vs cynical distrust'],
        markingPoints: [
          '2 marks: Accurate definition and identification of situational irony at the conclusion.',
          '2 marks: Explicit contrast between postmaster\'s noble deed and Lencho\'s condemnation.',
          '2 marks: Insight into human nature (faith in unseen vs suspicion of fellow humans).'
        ],
        commonMistake: 'Summarizing the entire plot instead of focusing on the analytical nature of irony and human psychology.',
        howToImprove: 'Dedicate one paragraph to defining the irony, one to the specific characters, and one to thematic commentary.',
        whyThisQuestionMatters: 'Frequently repeated high-value competency question evaluating higher-order thinking (HOTS).'
      },
      {
        id: 'q-ff-1-03',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/4/3',
        verificationStatus: 'published',
        question: 'Why did Lencho compare the raindrops to new coins?',
        options: [
          'Because they were shiny and round like metal discs',
          'Because the rain promised a bountiful harvest that would bring prosperity',
          'Because he found ancient coins scattered in the muddy field',
          'Because the clouds looked like bags of money in the sky'
        ],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: Because the rain promised a bountiful harvest that would bring prosperity.',
        explanation: 'To a farmer, adequate rain directly translates into a healthy crop yield and consequent financial income; thus rain equals coins.',
        keywordsToInclude: ['bountiful harvest', 'economic prosperity', 'metaphor of coins'],
        markingPoints: ['1 mark for identifying the economic significance of rain to an agrarian peasant.'],
        commonMistake: 'Selecting Option A due to surface visual resemblance.',
        howToImprove: 'Interpret literary metaphors through the character\'s economic reality.',
        whyThisQuestionMatters: 'Standard extract-level MCQ tested repeatedly in CBSE Section C.'
      },
      {
        id: 'q-ff-1-04',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'official_board',
        verifiedYear: 2022,
        repeatedYears: [2020, 2022],
        paperCode: 'CBSE Term 1 Board Series',
        verificationStatus: 'published',
        question: 'What were Lencho\'s feelings when the hailstorm stopped? How did he describe the devastation to his sons?',
        modelAnswer: 'When the tempestuous hailstorm finally ceased, Lencho stood in the middle of his devastated field with a soul filled with profound sorrow. He lamented to his sons that even a dreaded plague of locusts would have spared more crop than the hail did. The merciless storm had left nothing—neither a leaf on the trees nor a single blossom on the plants. He foresaw with acute dread that their family would endure severe starvation throughout the year.',
        explanation: 'Focus on Lencho\'s emotional transition from anticipation to grief, and his evocative comparison with a locust attack.',
        keywordsToInclude: ['soul filled with sadness', 'plague of locusts', 'stripped trees', 'starvation'],
        markingPoints: [
          '1.5 marks: Emotional state (despair, grief).',
          '1.5 marks: Description of the loss (comparison to locusts, famine).'
        ],
        commonMistake: 'Forgetting the exact comparison to the "plague of locusts".',
        howToImprove: 'Memorize core textual imagery used by the author to denote scale of ruin.',
        whyThisQuestionMatters: 'Tests recall of direct descriptive metaphors from the text.'
      },
      {
        id: 'q-ff-1-05',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Competency Based',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'official_sample_paper',
        verifiedYear: 2025,
        paperCode: 'CBSE SQP 2024-25 / 2025-26',
        verificationStatus: 'published',
        question: 'Imagine you are the postmaster. After reading Lencho\'s second letter, write a diary entry expressing your feelings about his accusation and the nature of human faith.',
        modelAnswer: 'Date: 24th July, 19XX\nDear Diary,\n\nToday, a wave of bittersweet contemplation washed over me. When Lencho opened his envelope on Sunday and counted the seventy hard-earned pesos we contributed, I watched from my office, eagerly expecting a glow of pure delight and relief on his weathered face. Instead, his brow furrowed with fury.\n\nA few minutes ago, I retrieved his second letter from the mailbox. Rather than receiving a note of benediction, we were branded as a "bunch of crooks" who embezzled his divine remittance! Initially, a pang of hurt stung my heart. My clerks gave up portions of their modest salaries, and I parted with a substantial share of mine.\n\nYet, as I sit here under the dim lamp, my hurt has given way to profound awe. What colossal, unblemished faith this man possesses! He could believe that the heavens command bank ledgers, but could not fathom that God could err by thirty pesos. His cynicism towards humanity is regrettable, but his faith in the Almighty remains immortal. I do not regret our act of charity; kindness should never seek applause to be worthwhile.\n\n— The Postmaster',
        explanation: 'Creative competency response embodying the postmaster\'s voice, empathy, maturity, and absence of spite.',
        keywordsToInclude: ['bittersweet', 'bunch of crooks', 'unblemished faith', 'altruism without applause', 'empathy'],
        markingPoints: [
          '2 marks: Format of diary entry and appropriate authentic voice.',
          '2 marks: Reflection on the accusation and workers\' sacrifice.',
          '2 marks: Mature philosophical takeaway on faith vs. human nature.'
        ],
        commonMistake: 'Portraying the postmaster as angry, vengeful or demanding the money back.',
        howToImprove: 'Maintain consistent character integrity; the postmaster is inherently noble and philosophical.',
        whyThisQuestionMatters: 'Modern CBSE boards heavily feature competency-based diary entries and informal letters.'
      },
      {
        id: 'q-ff-1-06',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Easy',
        sourceType: 'official_board',
        verifiedYear: 2020,
        paperCode: 'CBSE All India 2020',
        verificationStatus: 'published',
        question: 'Did Lencho try to find out who had sent the money to him? Why or why not?',
        modelAnswer: 'No, Lencho did not make the slightest attempt to investigate who had sent the money. His belief in God was so complete, childlike, and absolute that the possibility of any human agent sending the money never even crossed his mind. He was utterly convinced that God had answered his letter directly, because God sees everything and cares for every desperate soul.',
        explanation: 'Addresses Lencho\'s psychological certitude and absence of doubt.',
        keywordsToInclude: ['not the slightest attempt', 'absolute conviction', 'divine certainty'],
        markingPoints: ['1.5 marks: Direct negative confirmation.', '1.5 marks: Reason rooted in unshakeable faith.'],
        commonMistake: 'Stating that he asked the postman.',
        howToImprove: 'Be assertive about Lencho\'s absolute certainty.',
        whyThisQuestionMatters: 'Clear demonstration of Lencho\'s defining character trait.'
      },
      {
        id: 'q-ff-1-07',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Extract Based',
        marks: 5,
        difficulty: 'Board Standard',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        contextExtract: '"The field was white, as if covered with salt. Not a leaf remained on the trees. The corn was totally destroyed. The flowers were gone from the plants. Lencho\'s soul was filled with sadness."',
        question: 'Answer the following: (i) Why was the field white? (ii) What does "covered with salt" signify? (iii) Identify the emotion in the last sentence and explain why.',
        modelAnswer: '(i) The field was white because a relentless hailstorm had blanketed the entire landscape with frozen hail pellets.\n(ii) "Covered with salt" is a vivid visual simile that signifies not just whiteness, but total sterility and desolation—just as salt destroys plant life and leaves soil barren, the hail left no greenery alive.\n(iii) The emotion is deep despair and bereavement, as the destruction of the crop meant his family would face complete starvation in the upcoming year.',
        explanation: 'Three-tiered extract breakdown assessing factual recall, symbolic interpretation, and emotional inference.',
        keywordsToInclude: ['frozen hail', 'visual simile', 'sterility and desolation', 'despair', 'starvation'],
        markingPoints: [
          '1.5 marks: Reason for white appearance.',
          '1.5 marks: Significance of the salt metaphor.',
          '2 marks: Identification of sadness and causal context.'
        ],
        commonMistake: 'Taking "covered with salt" literally as mineral salt.',
        howToImprove: 'Explicitly designate literary devices like similes and their thematic undertones.',
        whyThisQuestionMatters: 'Exact style of CBSE Section C 5-mark extract questions.'
      },
      {
        id: 'q-ff-1-08',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'teacher_created',
        verificationStatus: 'verified',
        question: 'How does the author portray the post office employees as unsung heroes?',
        modelAnswer: 'The author portrays the post office staff as quiet champions of humanity. Despite being ordinary wage-earners, they respond to a stranger\'s absurd letter not with scorn, but with tangible compassion. They collectively surrender parts of their hard-earned salaries for an "act of charity," demanding no praise, recognition, or receipt. Their silent generosity contrasts sharply with the public cynicism common in bureaucratic offices.',
        explanation: 'Examines the post office staff as an archetype of collective goodness.',
        keywordsToInclude: ['unsung heroes', 'act of charity', 'silent generosity', 'tangible compassion'],
        markingPoints: [
          '1.5 marks: Financial sacrifice despite modest incomes.',
          '1.5 marks: Selfless anonymity without seeking glory.'
        ],
        commonMistake: 'Focusing exclusively on the postmaster rather than the whole staff.',
        howToImprove: 'Recognize the postmaster\'s employees and friends who also contributed.',
        whyThisQuestionMatters: 'Broadens character analysis beyond Lencho.'
      },
      {
        id: 'q-ff-1-09',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Competency Based',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        question: 'There are two kinds of conflict in the story: between humans and nature, and between humans themselves. How are these illustrated?',
        modelAnswer: '1. Human vs. Nature Conflict: Illustrated when Lencho\'s desperate hopes for a gentle shower are obliterated by nature\'s violent fury in the form of a devastating hailstorm, rendering human agricultural labor powerless.\n2. Human vs. Human Conflict: Illustrated when Lencho, blinded by his own assumptions, distrusts the very people who aided him, accusing the compassionate postal workers of theft.',
        explanation: 'Addresses dual conflict themes commonly tested in analytical literature questions.',
        keywordsToInclude: ['human vs nature', 'human vs human', 'hailstorm destroying labor', 'cynical accusation'],
        markingPoints: [
          '1.5 marks: Elucidation of Human vs Nature.',
          '1.5 marks: Elucidation of Human vs Human.'
        ],
        commonMistake: 'Only mentioning the hailstorm and omitting interpersonal conflict.',
        howToImprove: 'Structure answers with clear numbered headings for multiple components.',
        whyThisQuestionMatters: 'Featured in official NCERT textbook exercises and board marking keys.'
      },
      {
        id: 'q-ff-1-10',
        chapterId: 'ff-prose-1',
        chapterTitle: 'A Letter to God',
        book: 'First Flight (Prose)',
        type: 'Long Answer',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'Lencho had complete faith in God, but lacked faith in humanity. Evaluate how faith without empathy or discernment can lead to flawed conclusions.',
        modelAnswer: 'Faith is frequently celebrated as a guiding light, yet "A Letter to God" demonstrates that when faith becomes obstinate and divorced from discernment, it produces tragic misjudgments.\n\nLencho possessed an unquestioning belief in divine providence. When his livelihood was shattered, he did not sink into apathy; he turned toward the Almighty with the innocent confidence of a child. However, this profound vertical faith in God was coupled with an utter absence of horizontal faith in fellow human beings.\n\nBecause Lencho could not imagine that humans could be capable of selfless charity, he refused to consider that mortals had assisted him. Furthermore, his unyielding certainty that God was incapable of delivering an incomplete sum compelled him to seek an earthly scapegoat. He immediately assumed the postal clerks were thieves.\n\nThus, Fuentes demonstrates that faith without discernment transforms into blind dogmatism. Genuine spirituality requires both trust in a higher order and the emotional maturity to recognize and honor goodness within human society.',
        explanation: 'Philosophical evaluation of how blind religious faith can warp interpersonal ethics.',
        keywordsToInclude: ['vertical faith vs horizontal faith', 'dogmatism', 'scapegoat', 'discernment', 'emotional maturity'],
        markingPoints: [
          '2 marks: Analysis of Lencho\'s faith in God.',
          '2 marks: Examination of his immediate suspicion of humans.',
          '2 marks: Critical evaluation of the perils of faith without discernment.'
        ],
        commonMistake: 'Merely recounting Lencho\'s actions without thematic critique.',
        howToImprove: 'Use mature analytical vocabulary like "vertical vs horizontal faith", "dogmatism", and "discernment".',
        whyThisQuestionMatters: 'Matches 2026-27 CBSE emphasis on value-based competency evaluation.'
      }
    ]
  },

  // ==========================================
  // 2. NELSON MANDELA: LONG WALK TO FREEDOM (FIRST FLIGHT PROSE)
  // ==========================================
  {
    id: 'ff-prose-2',
    title: 'Nelson Mandela: Long Walk to Freedom',
    authorOrPoet: 'Nelson Rolihlahla Mandela',
    book: 'First Flight (Prose)',
    isPoem: false,
    chapterNumber: 2,
    estimatedReadTimeMinutes: 22,
    progressPercent: 65,
    background: 'Extracted from Nelson Mandela\'s celebrated autobiography recounting his historic inauguration as South Africa\'s first Black President on 10 May 1994, marking the official end of three centuries of brutal white minority Apartheid rule.',
    setting: 'The sandstone amphitheatre formed by the Union Buildings in Pretoria, surrounded by international leaders from over 140 nations.',
    tone: 'Solemn, triumphant, reflective, magnanimous, and deeply patriotic.',
    shortSummary: 'On a bright May day in 1994, Nelson Mandela is sworn in as the first democratically elected Black President of South Africa. He pays homage to thousands of unnamed freedom fighters whose sacrifices paved the way. Mandela reflects on the meaning of courage—not the absence of fear, but triumph over it—and reveals that an oppressor is just as enslaved as the oppressed, locked behind the bars of prejudice and hatred.',
    detailedSummary: [
      'The morning of 10th May 1994 dawned bright and clear in Pretoria. For decades, the Union Buildings had been the seat of white supremacy, but today it welcomed a rainbow gathering of international dignities to witness the birth of a democratic, non-racial government.',
      'Mandela was accompanied by his daughter Zenani. Mr. de Klerk was sworn in as second deputy president, Thabo Mbeki as first deputy president, and finally Nelson Mandela pledged to uphold the constitution and devote himself to the well-being of the republic and its people.',
      'A spectacular display of South African jets, helicopters, and troop carriers roared over the Union Buildings in precise formation, signifying not only military precision but the military\'s allegiance to a new, freely elected democracy.',
      'Two national anthems were sung: \'Nkosi Sikelel\' iAfrika\' by the whites and \'Die Stem\' by the blacks, symbolizing the harmonious fusion of two previously divided cultures.',
      'Mandela looked back with grief and respect at the legendary freedom stalwarts—Oliver Tambo, Walter Sisulu, Chief Luthuli, Yusuf Dadoo, Bram Fischer, and Robert Sobukwe—men of extraordinary courage, wisdom, and generosity created by the crucible of oppression.',
      'He reflected on the dual obligations of every human being: first to family, parents, wife, and children; second to his community, people, and country. In an apartheid state, fulfilling both obligations was impossible for a Black person.',
      'Mandela concludes with a profound moral philosophy: freedom is indivisible. The oppressor who steals another person\'s liberty is himself a prisoner of hatred and prejudice. Both the oppressor and the oppressed are robbed of their humanity.'
    ],
    mainThemes: [
      'The True Meaning of Courage: Courage is not the absence of fear, but victory over it.',
      'Emancipation of Both Oppressor and Oppressed: Hatred enslaves the perpetrator as deeply as injustice enslaves the victim.',
      'Twin Obligations: The agonizing conflict between familial duty and civic responsibility in an unjust regime.',
      'The Indomitable Human Spirit: The darkest oppression refines the character into pure gold.'
    ],
    centralIdea: 'True freedom encompasses not merely the shedding of political chains, but living in a way that respects, preserves, and enhances the freedom of all humanity.',
    centralMessage: 'Hatred is learned; therefore, love can be taught even more easily, for love comes more naturally to the human heart than its opposite.',
    characters: [
      {
        name: 'Nelson Mandela',
        role: 'Protagonist / Statesman / Global Icon',
        traits: ['Resolute', 'Magnanimous', 'Self-sacrificing', 'Philosophical', 'Forgiving'],
        description: 'A dedicated patriot who endured twenty-seven years of incarceration on Robben Island, emerging without malice to forge a reconciled nation.',
        keyQuotes: [
          '"I learned that courage was not the absence of fear, but the triumph over it."',
          '"A man who takes away another man\'s freedom is a prisoner of hatred."'
        ]
      },
      {
        name: 'The Freedom Stalwarts',
        role: 'Comrades in the Struggle (Tambos, Sisulus, Luthulis)',
        traits: ['Unflinching bravery', 'Boundless generosity', 'Steadfast commitment'],
        description: 'Generations of freedom fighters whose collective sacrifices created the foundation upon which the new South Africa was built.'
      }
    ],
    importantEvents: [
      {
        event: 'The Inauguration Ceremony (10 May 1994)',
        cause: 'Decades of anti-apartheid struggle leading to the first non-racial democratic elections.',
        effect: 'Transition of South Africa from a global pariah into an emblem of human reconciliation.'
      },
      {
        event: 'Singing of Dual National Anthems',
        cause: 'Deliberate policy of racial reconciliation embracing both Black and White heritage.',
        effect: 'Laying the foundation for the "Rainbow Nation" where all identities are respected.'
      },
      {
        event: 'Mandela\'s Realization of Transitory Freedom',
        cause: 'Recognizing as a young man that his boyhood freedom was an illusion.',
        effect: 'Transformation from a frightened young lawyer into a bold rebel fighting for national liberation.'
      }
    ],
    keyConcepts: [
      'Apartheid: The official political policy of systemic racial segregation and discrimination enforced by the National Party in South Africa from 1948 to 1994.',
      'Twin Obligations: An individual\'s simultaneous responsibility toward personal kin and wider society.',
      'Indivisibility of Freedom: Chains on any one person are chains on all; chains on all are chains on the leader.'
    ],
    importantExamPoints: [
      'Mandela\'s definition of courage: triumph over fear, not lack of fear.',
      'The depth of oppression creates heights of character—Mandela compares heroes to pure diamonds.',
      'The oppressor is a prisoner of hatred, prejudice, and narrow-mindedness.',
      'Remember the date and venue: 10 May 1994, Sandstone Amphitheatre, Union Buildings, Pretoria.'
    ],
    vocabulary: [
      { word: 'Apartheid', meaning: 'A political system separating people according to race', contextInText: 'The policy of apartheid created a deep and lasting wound.' },
      { word: 'Emancipation', meaning: 'The process of being set free from legal, social, or political restrictions', contextInText: 'We have, at last, achieved our political emancipation.' },
      { word: 'Magnanimity', meaning: 'Generosity and forgiveness toward a rival or less powerful person', contextInText: 'His magnanimity transformed enemies into partners.' },
      { word: 'Besieged', meaning: 'Surrounded closely by', contextInText: 'I was pleasantly besieged by dignitaries and world leaders.' },
      { word: 'Incline', meaning: 'Natural tendency or disposition', contextInText: 'Every man has natural inclinations towards good.' }
    ],
    fiveMinRevision: [
      'Inauguration: 10 May 1994 in Pretoria amphitheatre as first democratic Black President.',
      'Significance: Replaced white supremacy with a non-racial democracy.',
      'Courage defined: Triumph over fear, not the absence of fear.',
      'Twin obligations: To family and to country; impossible under apartheid.',
      'Oppressor & Oppressed: Both must be liberated; hatred imprisons the oppressor.'
    ],
    tenMinRevision: [
      'Event details: Oath taken with Zenani, de Klerk, Mbeki; flypast of military jets.',
      'National anthems: "Nkosi Sikelel\' iAfrika" and "Die Stem" sung together.',
      'Freedom stalwarts: Oliver Tambo, Walter Sisulu, etc., whose oppression bred heights of noble character.',
      'Evolution of freedom: Boyhood illusions → student desires for personal freedom → hunger for the collective freedom of all his people.'
    ],
    thirtyMinRevision: [
      'Philosophical analysis of Mandela\'s moral universe: Why love is more natural than hate.',
      'Evaluation of the state\'s destruction of family bonds in totalitarian racial regimes.',
      'Critical examination of how Mandela avoided bitterness and vengeance after 27 years in prison.',
      'Preparation for 6-mark character sketch and thematic essays.'
    ],
    onePageRevision: {
      plotOrGist: 'Mandela is inaugurated President in 1994, reflects on the end of apartheid, salutes freedom martyrs, redefines courage, explains twin obligations, and concludes that oppressor and oppressed both need liberation.',
      keyThemes: ['Courage as triumph over fear', 'Twin obligations', 'Indivisibility of freedom', 'Human resilience'],
      crucialMoments: ['Pledging oath at amphitheatre', 'Two national anthems sung', 'Salute to fallen comrades', 'Insight on the oppressor\'s imprisonment'],
      vitalVocabulary: ['Apartheid', 'Emancipation', 'Amphitheatre', 'Besieged', 'Prejudice', 'Indivisible'],
      fiveKeyQuestions: [
        'What does Mandela mean when he says he is simply the sum of all those African patriots?',
        'How does Mandela define courage?',
        'What are the "twin obligations" every man has in life?',
        'Why does Mandela say that the oppressor must be liberated just as surely as the oppressed?',
        'How did Mandela\'s understanding of freedom change with age and experience?'
      ],
      pyqReferences: [
        'CBSE Board Exam 2024: 6-Mark question on "Twin obligations and how apartheid prevented them"',
        'CBSE Board Exam 2023: 3-Mark question on Mandela\'s definition of courage',
        'CBSE Board Exam 2020: 3-Mark question on the significance of the two national anthems'
      ]
    },
    tenImportantQuestions: [
      {
        id: 'q-ff-2-01',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/2/1',
        verificationStatus: 'published',
        question: 'What does Nelson Mandela mean by "an extraordinary human disaster"? What is the "glorious human achievement" he speaks of?',
        modelAnswer: 'By "an extraordinary human disaster," Mandela refers to the prolonged, atrocious practice of Apartheid in South Africa, where a white minority subjected the Black majority to inhumane racial oppression, stripping them of fundamental human dignity. The "glorious human achievement" refers to the establishment of the country\'s first non-racial, democratic government where all citizens, irrespective of skin color, enjoy equal liberty and constitutional protection.',
        explanation: 'Contrasts the historical trauma of apartheid with the triumph of democratic equality.',
        keywordsToInclude: ['Apartheid', 'racial discrimination', 'stripping of dignity', 'non-racial democracy', 'glorious achievement'],
        markingPoints: [
          '1.5 marks: Explanation of the disaster (Apartheid regime).',
          '1.5 marks: Explanation of the achievement (democratic, non-racial state).'
        ],
        commonMistake: 'Giving generic answers without naming the specific system of Apartheid.',
        howToImprove: 'Explicitly utilize historical terminology: Apartheid, racial subjugation, non-racial democracy.',
        whyThisQuestionMatters: 'Fundamental question from opening paragraphs of Mandela\'s inaugural address.'
      },
      {
        id: 'q-ff-2-02',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Long Answer',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2023,
        paperCode: 'CBSE Term 2 Examination',
        verificationStatus: 'published',
        question: '"Freedom is indivisible; the chains on any one of my people were the chains on all of them, the chains on all of my people were the chains on me." Elaborate on Mandela\'s concept of freedom and why the oppressor also needs liberation.',
        modelAnswer: 'Nelson Mandela\'s conception of freedom transcended simple individual liberties; he viewed freedom as organic, universal, and indivisible.\n\nMandela recognized that as long as even a single compatriot remained shackled by systemic racism, poverty, or injustice, his own personal freedom was merely a facade. True liberty cannot exist in isolation while one\'s brethren suffer degradation.\n\nFurthermore, Mandela offers a groundbreaking ethical perspective regarding the oppressor. He argues that a person who deprives another of their basic human rights is himself ensnared in a cage of hatred, bigotry, and prejudice. The oppressor is stripped of his essential humanity just as violently as the victim is stripped of his dignity.\n\nTherefore, the mission of liberation must be twofold: it must emancipate the victim from physical and political tyranny, and it must emancipate the oppressor from the psychological prison of hatred. Only when both are freed can a truly just and enlightened society endure.',
        explanation: 'Deep philosophical inquiry into the mutual dehumanization caused by tyranny.',
        keywordsToInclude: ['indivisible', 'organic', 'facade of freedom', 'prisoner of hatred', 'mutual dehumanization', 'liberation of oppressor'],
        markingPoints: [
          '2 marks: Explanation of why freedom is indivisible among countrymen.',
          '2 marks: Detailed analysis of the oppressor\'s psychological imprisonment.',
          '2 marks: Conclusion synthesizing the mutual restoration of humanity.'
        ],
        commonMistake: 'Ignoring the oppressor aspect and only discussing Mandela\'s prison time.',
        howToImprove: 'Balance the discussion equally between the oppressed population and the moral cage of the oppressor.',
        whyThisQuestionMatters: 'One of the most frequently asked 6-mark evaluative questions in CBSE Class 10.'
      },
      {
        id: 'q-ff-2-03',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'official_board',
        verifiedYear: 2023,
        paperCode: 'CBSE 2/3/2',
        verificationStatus: 'published',
        question: 'How did Mandela\'s understanding of courage change as he observed his comrades in the struggle?',
        modelAnswer: 'Mandela observed men and women continually risk and sacrifice their lives for an ideal. He witnessed comrades endure horrific torture and brutal abuse without breaking, displaying an indomitable strength that baffled the imagination. Through them, he learned that courage is not the absence of fear, but the triumph over it. A brave man is not someone who never feels frightened, but the one who conquers that fear.',
        explanation: 'Focus on Mandela\'s redefinition of bravery based on observed reality.',
        keywordsToInclude: ['triumph over fear', 'not the absence of fear', 'comrades in struggle', 'indomitable strength'],
        markingPoints: [
          '1.5 marks: Observation of comrades facing torture/danger.',
          '1.5 marks: Redefinition of courage as triumph over fear.'
        ],
        commonMistake: 'Defining courage simply as fearless without highlighting "triumph over fear".',
        howToImprove: 'Quote or closely paraphrase Mandela\'s exact words: "not the absence of fear, but the triumph over it".',
        whyThisQuestionMatters: 'Direct conceptual question regularly included in 3-mark short answers.'
      },
      {
        id: 'q-ff-2-04',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Extract Based',
        marks: 5,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2022,
        paperCode: 'CBSE Board Examination Set 1',
        verificationStatus: 'published',
        contextExtract: '"In life, every man has twin obligations—obligations to his family, to his parents, to his wife and children; and he has an obligation to his people, his community, his country. In a civil and humane society, each man is able to fulfil those obligations according to his own inclinations and abilities. But in a country like South Africa, it was almost impossible for a man of my birth and colour to fulfil both of those obligations."',
        question: 'Answer the following: (i) What are the twin obligations described? (ii) Why could a man of Mandela\'s colour not fulfil them in South Africa? (iii) What happened to a Black person who attempted to live as a human being?',
        modelAnswer: '(i) The twin obligations are: first, personal duties to family, parents, wife, and children; second, social and civic duties to one\'s community and nation.\n(ii) In South Africa, the state-sponsored Apartheid machinery ruthlessly punished and isolated any Black person who sought to live with basic civic dignity, making harmonious personal and political existence impossible.\n(iii) A Black person who attempted to fulfill duty to his people was inevitably ripped away from his family, isolated from his home, and forced to live an outlaw existence in secrecy and rebellion.',
        explanation: 'Detailed extract analysis of social alienation under Apartheid.',
        keywordsToInclude: ['twin obligations', 'Apartheid machinery', 'ripped from family', 'outlaw existence'],
        markingPoints: [
          '1.5 marks: Stating both obligations correctly.',
          '1.5 marks: Apartheid barrier for Black citizens.',
          '2 marks: Fate of dissenters (exile, isolation, outlaw life).'
        ],
        commonMistake: 'Vaguely defining obligations without naming family and country.',
        howToImprove: 'Explicitly categorize: 1. Obligation to family; 2. Obligation to country.',
        whyThisQuestionMatters: 'Essential extract question from Section C of CBSE exam.'
      },
      {
        id: 'q-ff-2-05',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Easy',
        sourceType: 'official_sample_paper',
        verifiedYear: 2024,
        paperCode: 'CBSE SQP 2023-24',
        verificationStatus: 'published',
        question: 'Why were two national anthems sung on the day of the inauguration?',
        modelAnswer: 'Two national anthems were sung to symbolize the historic reconciliation of two races that had been divided by centuries of hatred. The white population sang \'Nkosi Sikelel\' iAfrika\', while the black population sang \'Die Stem\', the old anthem of the republic. This act affirmed that both cultures were equally valued in the new, unified democratic South Africa.',
        explanation: 'Emphasizes national integration and the intentional bridging of cultural divides.',
        keywordsToInclude: ['reconciliation', 'equality of cultures', 'Nkosi Sikelel\' iAfrika', 'Die Stem', 'unified South Africa'],
        markingPoints: [
          '1.5 marks: Naming or acknowledging both anthems (white and black heritage).',
          '1.5 marks: Signifying racial reconciliation and mutual respect.'
        ],
        commonMistake: 'Forgetting the names of the two anthems or the symbolic reason.',
        howToImprove: 'Link the action directly to Mandela\'s overarching theme of non-racial unity.',
        whyThisQuestionMatters: 'Very common factual and symbolic question in board tests.'
      },
      {
        id: 'q-ff-2-06',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/1/2',
        verificationStatus: 'published',
        question: 'According to Nelson Mandela, what is the greatest wealth of his country?',
        options: [
          'Its rich gold and platinum deposits',
          'Its abundant diamonds hidden deep beneath the soil',
          'Its people, who are finer and truer than the purest diamonds',
          'Its majestic wildlife and sprawling landscapes'
        ],
        correctOptionIndex: 2,
        modelAnswer: 'Option C: Its people, who are finer and truer than the purest diamonds.',
        explanation: 'Mandela expressly notes that while South Africa is blessed with mineral riches, its people represent its greatest, purest wealth.',
        keywordsToInclude: ['finer and truer than diamonds', 'human wealth'],
        markingPoints: ['1 mark for correct selection.'],
        commonMistake: 'Selecting diamonds or gold because South Africa is famous for mining.',
        howToImprove: 'Recall Mandela\'s metaphor comparing human character to refined diamonds.',
        whyThisQuestionMatters: 'Frequently appearing 1-mark objective question.'
      },
      {
        id: 'q-ff-2-07',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Competency Based',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'official_sample_paper',
        verifiedYear: 2025,
        paperCode: 'CBSE SQP 2024-25',
        verificationStatus: 'published',
        question: 'Mandela states: "The policy of apartheid created a deep and lasting wound in my country and my people... But the decades of oppression and brutality had another, unintended, effect." What was this unintended effect? How does suffering shape human greatness?',
        modelAnswer: 'The unintended effect of decades of ruthless oppression was the creation of men of extraordinary character, intellect, and courage—figures such as Oliver Tambo, Walter Sisulu, Chief Luthuli, Yusuf Dadoo, and Bram Fischer. Mandela asserts that profound depths of oppression are necessary to forge such towering heights of human character.\n\nSuffering acts as a purifying furnace. When individuals are subjected to brutal indignity, they are forced to discard trivial concerns and anchor themselves in unwavering moral resilience. The constant confrontation with systemic cruelty galvanized their courage, broadened their capacity for empathy, and inspired an unyielding commitment to justice.\n\nMandela likens this process to mineral refining: South Africa possesses rich reserves of precious gems, but its human beings, refined through the fires of collective suffering, are finer, truer, and more precious than the purest diamonds.',
        explanation: 'Analyzes the paradox of oppression breeding moral stalwarts.',
        keywordsToInclude: ['unintended effect', 'depths of oppression create heights of character', 'purifying furnace', 'stalwarts', 'purest diamonds'],
        markingPoints: [
          '2 marks: Identification of the unintended effect (emergence of great leaders).',
          '2 marks: Philosophical elaboration on how suffering refines character.',
          '2 marks: Reference to Mandela\'s diamond metaphor and historical examples.'
        ],
        commonMistake: 'Merely listing the names of leaders without analyzing how suffering transformed them.',
        howToImprove: 'Connect the historical names to the philosophical concept of resilience and moral growth.',
        whyThisQuestionMatters: 'High-order analytical competency question frequently prioritized by CBSE evaluators.'
      },
      {
        id: 'q-ff-2-08',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'teacher_created',
        verificationStatus: 'verified',
        question: 'What did the spectacular flypast of South African jets symbolize to the gathering?',
        modelAnswer: 'The precision flypast of military jets and helicopters symbolized two monumental truths: first, it demonstrated pinpoint military precision and technical excellence; second, and more importantly, it signaled the armed forces\' sworn allegiance to the newly inaugurated democratic government, proving that military power would now protect rather than suppress human rights.',
        explanation: 'Dual significance: display of competence and democratic loyalty.',
        keywordsToInclude: ['military precision', 'allegiance to democracy', 'protection of human rights'],
        markingPoints: [
          '1.5 marks: Demonstration of military discipline and order.',
          '1.5 marks: Pledge of loyalty to democratic governance.'
        ],
        commonMistake: 'Describing it merely as an air show without mentioning democratic allegiance.',
        howToImprove: 'Always articulate the political and constitutional significance of military ceremonies.',
        whyThisQuestionMatters: 'Demonstrates comprehension of symbolic details during the inauguration.'
      },
      {
        id: 'q-ff-2-09',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2020,
        paperCode: 'CBSE Board Exam 2020',
        verificationStatus: 'published',
        question: 'Why did Nelson Mandela describe himself as "simply the sum of all those African patriots" who had gone before him?',
        modelAnswer: 'Mandela acknowledged that the monumental victory of democracy was not his personal accomplishment alone, but the culmination of endless struggles and sacrifices made by thousands of unnamed African patriots. Because those courageous men and women were no longer alive to witness the fruition of their efforts, Mandela felt their collective spirit, legacy, and sacrifices coursing through him as he assumed office.',
        explanation: 'Highlights Mandela\'s humility and deep reverence for historical predecessors.',
        keywordsToInclude: ['sum of African patriots', 'culmination of struggles', 'humility', 'legacy of sacrifice'],
        markingPoints: [
          '1.5 marks: Acknowledgment that victory belonged to generations of patriots.',
          '1.5 marks: Expressing personal humility as a conduit of their collective sacrifice.'
        ],
        commonMistake: 'Failing to explain Mandela\'s humility.',
        howToImprove: 'Emphasize that Mandela rejected personal vanity, viewing himself as an inheritor of their mantle.',
        whyThisQuestionMatters: 'Highlights the moral stature and modesty of Mandela.'
      },
      {
        id: 'q-ff-2-10',
        chapterId: 'ff-prose-2',
        chapterTitle: 'Nelson Mandela: Long Walk to Freedom',
        book: 'First Flight (Prose)',
        type: 'Competency Based',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        question: 'Mandela says that love comes more naturally to the human heart than hate. How does this optimism serve as a beacon for humanity?',
        modelAnswer: 'Mandela observes that no infant is born hating another person on the basis of skin color, religion, or background. Because hatred is an acquired, taught prejudice, it follows logically that human beings can be taught to love with far greater ease, since love resonates inherently with human nature. This profound optimism reassures humanity that even in the darkest dungeons of inhumanity, the spark of human decency cannot be permanently extinguished.',
        explanation: 'Explores the innate morality of humankind versus learned social prejudices.',
        keywordsToInclude: ['love comes naturally', 'hatred is learned', 'spark of human decency', 'optimism'],
        markingPoints: [
          '1.5 marks: Argument that hatred is taught and love is instinctive.',
          '1.5 marks: Optimistic conclusion regarding the indomitable nature of goodness.'
        ],
        commonMistake: 'Writing emotional rhetoric without quoting Mandela\'s psychological premise.',
        howToImprove: 'Base your response firmly on the premise: "If they can learn to hate, they can be taught to love".',
        whyThisQuestionMatters: 'Exemplifies CBSE\'s modern value-based competency evaluation.'
      }
    ]
  },

  // ==========================================
  // 3. DUST OF SNOW (FIRST FLIGHT POEM)
  // ==========================================
  {
    id: 'ff-poem-1',
    title: 'Dust of Snow',
    authorOrPoet: 'Robert Frost',
    book: 'First Flight (Poetry)',
    isPoem: true,
    chapterNumber: 1,
    estimatedReadTimeMinutes: 12,
    progressPercent: 90,
    background: 'Written by Robert Frost, this deceptively simple eight-line lyric challenges conventional poetic associations of ominous nature symbols, revealing how an unexpected natural event can redeem an otherwise despondent day.',
    tone: 'Reflective, transformative, and subtly grateful.',
    rhymeScheme: 'abab cdcd',
    shortSummary: 'A crow sitting on a poisonous hemlock tree shakes down a shower of fine snow particles onto the despondent poet. This sudden, gentle touch of nature instantly dispels his dark mood and saves the remainder of his day from regret and despair.',
    detailedSummary: [
      'The speaker is walking through a snowy winter landscape in a deeply depressed and regretful frame of mind.',
      'He pauses beneath a hemlock tree—a plant renowned for its toxicity and commonly associated in literature with gloom and fatality.',
      'A crow—another creature traditionally viewed as an ill omen and harsh harbinger of sorrow—perches or moves on the branch.',
      'The crow\'s sudden movement shakes loose a powdery shower of fine snow particles ("dust of snow") that falls directly upon the poet.',
      'This spontaneous physical sensation abruptly shocks the poet out of his self-absorbed melancholia, providing a fresh perspective.',
      'The poem concludes with the poet recognizing that this small moment has redeemed his heart and saved a portion of the day that he had otherwise held in rue.'
    ],
    mainThemes: [
      'Nature\'s Healing Power: Even the simplest, most fleeting natural phenomenon can heal mental distress.',
      'Subversion of Traditional Ominous Symbols: The crow and hemlock tree, both harbingers of death, become agents of joy.',
      'Redemption of Time: A solitary transformative instant can rescue an entire day from waste and despair.'
    ],
    centralIdea: 'Nature does not conform to human superstitions; even so-called inauspicious entities can serve as catalysts for profound spiritual rejuvenation.',
    centralMessage: 'We must remain open to life\'s spontaneous, small miracles, for nature possesses an effortless ability to lift human despair.',
    literaryDevices: [
      { name: 'Alliteration', example: '"Has given my heart"', explanation: 'Repetition of the \'h\' sound creates a rhythmic, melodic heartbeat effect.' },
      { name: 'Alliteration', example: '"And saved some part"', explanation: 'Repetition of the \'s\' sound evokes the soft, soothing whisper of snow.' },
      { name: 'Inversion', example: '"The way a crow / Shook down on me"', explanation: 'The normal grammatical structure is inverted to emphasize the unexpected agency of the crow.' },
      { name: 'Synecdoche', example: '"Has given my heart / A change of mood"', explanation: 'The "heart" represents the entire emotional being of the poet.' },
      { name: 'Symbolism', example: 'Crow and Hemlock Tree', explanation: 'Traditionally represent death and sorrow, but here symbolize unexpected positive transformation.' }
    ],
    stanzas: [
      {
        stanzaNumber: 1,
        lines: 'The way a crow\nShook down on me\nThe dust of snow\nFrom a hemlock tree',
        summary: 'A crow on a poisonous hemlock tree shakes loose a fine dusting of snow onto the poet standing beneath.',
        poeticDevices: ['Inversion', 'Symbolism (crow, hemlock)', 'Rhyme: abab'],
        examSignificance: 'Sets up the conventional imagery of darkness, cold, and toxicity before subverting expectations.'
      },
      {
        stanzaNumber: 2,
        lines: 'Has given my heart\nA change of mood\nAnd saved some part\nOf a day I had rued.',
        summary: 'The physical touch of snow immediately alters the poet\'s emotional disposition, rescuing the day from sorrow.',
        poeticDevices: ['Alliteration (Has given my heart, saved some part)', 'Synecdoche (heart)', 'Rhyme: cdcd'],
        examSignificance: 'Reveals the central thematic turnaround: redemption through unheralded natural grace.'
      }
    ],
    keyConcepts: [
      'Contrast of Ill Omen vs. Joy: Frost intentionally avoids songbirds (nightingales, skylarks) and beautiful trees (oaks, maples) to prove that blessing can emerge from any corner of creation.',
      'The Meaning of "Rued": Held in sorrow, regret, or bitter remorse.',
      'Economy of Expression: Achieving profound philosophical resonance in merely twenty-four words.'
    ],
    importantExamPoints: [
      'Frost uses a crow and a hemlock tree instead of conventional pleasant nature symbols.',
      'Rhyme scheme: abab cdcd.',
      'Notice the two distinct alliterations: "Has given my heart" (h sound) and "saved some part" (s sound).',
      'The theme illustrates nature as a healer that transcends human prejudices.'
    ],
    vocabulary: [
      { word: 'Hemlock', meaning: 'A poisonous plant/tree with small white flowers', contextInText: 'From a hemlock tree.' },
      { word: 'Dust of snow', meaning: 'Tiny, powdery particles of snow', contextInText: 'The dust of snow.' },
      { word: 'Rued', meaning: 'Held in regret or sorrow', contextInText: 'Of a day I had rued.' }
    ],
    fiveMinRevision: [
      'Poet: Robert Frost. Form: 2 stanzas, 8 lines, abab cdcd.',
      'Setting: Winter scene under a poisonous hemlock tree.',
      'Creature: A crow (normally inauspicious).',
      'Action: Crow shakes down powdery snow on the poet.',
      'Outcome: Transformed poet\'s dark mood, saving a day previously rued.'
    ],
    tenMinRevision: [
      'Poetic subversion: Frost deliberately selects two symbols of ill omen (crow, hemlock) to become agents of positive salvation.',
      'Devices: Alliteration ("Has given my heart", "saved some part"), Synecdoche ("heart" for whole self), Inversion.',
      'Vocabulary: "Rued" means bitterly regretted.',
      'Philosophical takeaway: Tiny everyday occurrences hold the potential to reverse mental despair.'
    ],
    thirtyMinRevision: [
      'Comparative study with other nature poets (e.g. Wordsworth vs. Frost).',
      'Detailed analysis of Frost\'s spare modernist diction and rhythm.',
      'Examination of extract-based board questions across 2020-2024.',
      'Drafting 6-mark answers on how nature acts as a therapist in modern life.'
    ],
    onePageRevision: {
      plotOrGist: 'A brooding poet walking beneath a hemlock tree is dusted with snow shaken by a crow. The gentle touch breaks his depressive trance and saves the rest of his day from regret.',
      keyThemes: ['Healing power of nature', 'Subversion of omens', 'Redemption of time'],
      crucialMoments: ['Crow shaking branch', 'Snow falling on poet', 'Sudden shift from rue to relief'],
      vitalVocabulary: ['Hemlock', 'Dust of snow', 'Rued', 'Inversion'],
      fiveKeyQuestions: [
        'What is a "dust of snow"? What does the poet say has changed his mood?',
        'Why does Frost use a crow and a hemlock tree instead of a robin and a pine tree?',
        'What do the "crow" and "hemlock" symbolize in ordinary culture versus this poem?',
        'Explain the literary devices used in the second stanza.',
        'How does a brief natural occurrence alter human perspective?'
      ],
      pyqReferences: [
        'CBSE Board Exam 2024: 5-Mark extract question on rhyme scheme and poetic devices',
        'CBSE Board Exam 2023: 3-Mark question on the significance of the hemlock tree',
        'CBSE Board Exam 2021: 2-Mark question on the meaning of "rued"'
      ]
    },
    tenImportantQuestions: [
      {
        id: 'q-ff-poem-1-01',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Extract Based',
        marks: 5,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/1/3',
        verificationStatus: 'published',
        contextExtract: '"The way a crow\nShook down on me\nThe dust of snow\nFrom a hemlock tree\nHas given my heart\nA change of mood\nAnd saved some part\nOf a day I had rued."',
        question: 'Answer the following: (i) Identify the rhyme scheme of both stanzas. (ii) What literary device is present in "Has given my heart"? (iii) Explain the irony present in the poet\'s choice of natural elements.',
        modelAnswer: '(i) The rhyme scheme of the poem is abab cdcd.\n(ii) The literary device in "Has given my heart" is Alliteration (repetition of the \'h\' sound), as well as Synecdoche (where the "heart" represents the poet\'s entire emotional and psychological self).\n(iii) The irony lies in the poet\'s deliberate choice of a crow and a hemlock tree—both universally associated with darkness, poison, and bad omens—to deliver a pure, uplifting, and life-affirming moment that saves the poet from sorrow.',
        explanation: 'Multi-part board extract evaluating rhyme scheme, technical devices, and overarching thematic irony.',
        keywordsToInclude: ['abab cdcd', 'Alliteration', 'Synecdoche', 'thematic irony', 'crow and hemlock'],
        markingPoints: [
          '1 mark: Correct rhyme scheme (abab cdcd).',
          '2 marks: Correct identification and explanation of literary device.',
          '2 marks: Clear explanation of the subversion/irony of dark omens.'
        ],
        commonMistake: 'Forgetting to specify both stanzas\' rhymes or misidentifying synecdoche as metaphor.',
        howToImprove: 'Explicitly state the exact sounds repeated in alliteration and the representation in synecdoche.',
        whyThisQuestionMatters: 'Repeated verbatim across multiple board paper sets.'
      },
      {
        id: 'q-ff-poem-1-02',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'official_board',
        verifiedYear: 2023,
        paperCode: 'CBSE 2/2/2',
        verificationStatus: 'published',
        question: 'Why does Robert Frost choose a hemlock tree and a crow rather than more beautiful birds and trees?',
        modelAnswer: 'Poets typically feature sweet songbirds like cuckoos or nightingales and majestic trees like pines or oaks to evoke joy. Robert Frost deliberately subverts this aesthetic convention by choosing a crow (often perceived as ugly, harsh, and inauspicious) and a hemlock tree (a poisonous plant associated with suicide and death). By doing so, Frost illustrates that beauty, spiritual solace, and healing are not restricted to traditionally picturesque entities; the simplest and most unlikely facets of nature can dispel human gloom.',
        explanation: 'Contrasts conventional romantic tropes with Frost\'s realistic, modern sensibility.',
        keywordsToInclude: ['subverts convention', 'inauspicious symbols', 'poisonous hemlock', 'solace from unlikely sources'],
        markingPoints: [
          '1.5 marks: Contrast with conventional romantic symbols (nightingales, oaks).',
          '1.5 marks: Thematic purpose: nature\'s healing power exists everywhere.'
        ],
        commonMistake: 'Failing to explain what birds/trees poets usually use in contrast.',
        howToImprove: 'Begin by naming traditional poetic symbols (nightingale, rose) before contrasting with Frost.',
        whyThisQuestionMatters: 'Direct question from NCERT thinking about the poem section.'
      },
      {
        id: 'q-ff-poem-1-03',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/4/1',
        verificationStatus: 'published',
        question: 'What does the word "rued" mean in the context of the poem?',
        options: [
          'Celebrated joyfully',
          'Held in regret or sorrow',
          'Completely forgotten',
          'Spent in energetic physical labor'
        ],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: Held in regret or sorrow.',
        explanation: '"Rued" originates from the archaic term meaning to mourn, regret, or lament with bitterness.',
        keywordsToInclude: ['regret', 'sorrow', 'lament'],
        markingPoints: ['1 mark for correct vocabulary identification.'],
        commonMistake: 'Confusing "rued" with ruined or celebrated.',
        howToImprove: 'Always memorize the glossary given in NCERT chapter margins.',
        whyThisQuestionMatters: 'Standard vocabulary-in-context objective question.'
      },
      {
        id: 'q-ff-poem-1-04',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'official_board',
        verifiedYear: 2020,
        paperCode: 'CBSE All India 2020',
        verificationStatus: 'published',
        question: 'What was the mood of the poet before the dust of snow fell on him? How did the fall of snow change it?',
        modelAnswer: 'Prior to the fall of the snow, the poet was in a deeply somber, despondent, and regretful state of mind, feeling that the entire day had been ruined and wasted. The unexpected, gentle touch of the cold, powdery snow acted as a sudden sensory awakening. It broke the spell of his brooding melancholia, bringing a renewed sense of gratitude and emotional lightness that saved the rest of his day.',
        explanation: 'Traces the distinct emotional before-and-after trajectory.',
        keywordsToInclude: ['despondent and regretful', 'brooding melancholia', 'sensory awakening', 'emotional lightness'],
        markingPoints: [
          '1.5 marks: Accurate description of initial gloomy mood.',
          '1.5 marks: Explanation of the sudden positive transformation.'
        ],
        commonMistake: 'Simply stating "he was sad and became happy" without analytical depth.',
        howToImprove: 'Employ vivid descriptors like "despondent trance" and "sensory awakening".',
        whyThisQuestionMatters: 'Tests core understanding of emotional transition in the poem.'
      },
      {
        id: 'q-ff-poem-1-05',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Competency Based',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'official_sample_paper',
        verifiedYear: 2025,
        paperCode: 'CBSE Sample Question Paper 2024-25',
        verificationStatus: 'published',
        question: 'Small moments often have great significance. Elucidate this statement with reference to Robert Frost\'s "Dust of Snow". How can modern human beings apply this insight to combat stress?',
        modelAnswer: 'Robert Frost\'s "Dust of Snow" masterfully demonstrates that monumental emotional transformations do not always require catastrophic or grandiose events; life\'s smallest, most unpretentious occurrences can hold transformative power.\n\nIn the poem, an incident as mundane as a crow dislodging snow dust from a branch becomes the catalyst for profound mental renewal. The speaker had surrendered himself to brooding despair, considering his day ruined. Yet, the physical touch of nature severed his spiral of negative ruminations, instantly connecting him back to the living present.\n\nIn today\'s fast-paced, high-stress world, modern individuals frequently become engulfed by career anxieties, academic pressures, and emotional distress. Frost\'s poem serves as a vital reminder to pause and remain receptive to the understated beauty of our immediate surroundings. A brief walk amidst greenery, the rustle of leaves in the breeze, or the gentle touch of rain can disrupt cognitive burnout. By cultivating mindfulness and finding solace in simple natural moments, we can recalibrate our emotional health and rescue our days from regret.',
        explanation: 'Connects the poem\'s central insight to contemporary mental health and mindfulness.',
        keywordsToInclude: ['small moments have great significance', 'brooding despair', 'cognitive burnout', 'mindfulness', 'recalibrating emotional health'],
        markingPoints: [
          '2 marks: Detailed analysis of the small moment in the poem.',
          '2 marks: Explanation of the psychological turnaround.',
          '2 marks: Contemporary application to stress, mindfulness, and mental well-being.'
        ],
        commonMistake: 'Focusing solely on the poem without addressing the second half about modern life.',
        howToImprove: 'Ensure equal weight is given to the literary analysis and the real-world philosophical application.',
        whyThisQuestionMatters: 'Quintessential modern CBSE 6-mark competency question.'
      },
      {
        id: 'q-ff-poem-1-06',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Easy',
        sourceType: 'teacher_created',
        verificationStatus: 'verified',
        question: 'Identify and explain the alliteration in the poem "Dust of Snow".',
        modelAnswer: 'Robert Frost employs alliteration in two prominent instances in the second stanza:\n1. "Has given my heart" – The repetition of the aspirated \'h\' sound creates a gentle, rhythmic cadence mirroring the steadying pulse of the speaker\'s heart.\n2. "And saved some part" – The repetition of the soft \'s\' sibilant sound evokes the quiet, soothing descent of snow particles.',
        explanation: 'Detailed phonetic and literary analysis of poetic sound devices.',
        keywordsToInclude: ['Has given my heart', 'saved some part', 'aspirated \'h\'', 'sibilant \'s\''],
        markingPoints: [
          '1.5 marks: Identification and explanation of "Has given my heart".',
          '1.5 marks: Identification and explanation of "saved some part".'
        ],
        commonMistake: 'Mentioning only one instance or omitting the repeated sound.',
        howToImprove: 'Clearly underline or quote the specific letters being repeated.',
        whyThisQuestionMatters: 'Essential technical device question for CBSE board poetry tests.'
      },
      {
        id: 'q-ff-poem-1-07',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        question: 'How does the crow\'s action represent the unpredictable agency of nature?',
        modelAnswer: 'The poet does not clarify whether the crow shook the tree intentionally, was preening its feathers, landing, or taking flight. This ambiguity highlights that nature operates according to its own spontaneous rhythms, utterly indifferent to human melancholy. Yet, that uncalculated, random motion miraculously synchronized with the poet\'s emotional need, demonstrating nature\'s effortless and unexpected benevolence.',
        explanation: 'Explores the philosophical ambiguity of the crow\'s intent.',
        keywordsToInclude: ['unpredictable agency', 'spontaneous rhythms', 'ambiguity', 'synchronized with emotional need'],
        markingPoints: [
          '1.5 marks: Recognition of ambiguity in the crow\'s physical action.',
          '1.5 marks: Connection to nature\'s effortless and unprompted healing.'
        ],
        commonMistake: 'Assuming the crow was a trained or intentional helper.',
        howToImprove: 'Emphasize that nature\'s beauty lies precisely in its spontaneous uncalculated nature.',
        whyThisQuestionMatters: 'Demonstrates sophisticated textual interpretation.'
      },
      {
        id: 'q-ff-poem-1-08',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Competency Based',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        question: 'Contrast Frost\'s presentation of nature in "Dust of Snow" with traditional romantic nature poetry.',
        modelAnswer: 'Romantic poets like William Wordsworth depicted nature through serene lakes, golden daffodils, and sweet songbirds, elevating nature into an idealized temple. In contrast, Robert Frost adopts a modernist, unsentimental approach: he situates his epiphany amidst a bleak winter, a toxic hemlock tree, and an unglamorous crow. Frost demonstrates that genuine spiritual restoration does not require pristine vistas, but occurs in the gritty realities of everyday existence.',
        explanation: 'Literary comparison between Romantic idealism and Frost\'s Modernist realism.',
        keywordsToInclude: ['Romantic idealism', 'Modernist realism', 'Wordsworthian daffodils vs Frost\'s crow', 'unsentimental approach'],
        markingPoints: [
          '1.5 marks: Description of traditional romantic nature tropes.',
          '1.5 marks: Frost\'s subversion via winter, hemlock, and crow.'
        ],
        commonMistake: 'Giving a plot summary instead of a literary contrast.',
        howToImprove: 'Directly contrast specific symbols (daffodils/nightingale vs hemlock/crow).',
        whyThisQuestionMatters: 'HOTS question testing contextual literary awareness.'
      },
      {
        id: 'q-ff-poem-1-09',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'official_sample_paper',
        verifiedYear: 2024,
        paperCode: 'CBSE SQP Set 1',
        verificationStatus: 'published',
        question: 'What is the primary poetic effect of the brevity of the poem "Dust of Snow"?',
        options: [
          'It indicates that the author ran out of rhymes',
          'It mirrors the sudden, fleeting instant in which the mood was transformed',
          'It shows that the poem was left unfinished',
          'It proves the poet disliked long descriptions of winter'
        ],
        correctOptionIndex: 1,
        modelAnswer: 'Option B: It mirrors the sudden, fleeting instant in which the mood was transformed.',
        explanation: 'Form echoes content: just as the snowfall lasted only a second, the poem spans only eight concise lines.',
        keywordsToInclude: ['form echoes content', 'fleeting instant', 'concise structure'],
        markingPoints: ['1 mark for correct analytical deduction.'],
        commonMistake: 'Selecting Option C.',
        howToImprove: 'Recognize the relationship between poetic form and thematic tempo.',
        whyThisQuestionMatters: 'Assesses appreciation of literary craftsmanship.'
      },
      {
        id: 'q-ff-poem-1-10',
        chapterId: 'ff-poem-1',
        chapterTitle: 'Dust of Snow',
        book: 'First Flight (Poetry)',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'What message does Frost convey regarding human superstitions through this poem?',
        modelAnswer: 'Frost subtly mocks and demolishes human superstitions. Crows are stereotyped as omens of grief or death, while hemlock trees are shunned as poisonous. By allowing these very agents of superstition to deliver joy, solace, and spiritual renewal, Frost reminds us that negative associations exist solely in the biased human mind, not in nature itself.',
        explanation: 'Exposes how human superstition projects malice onto innocent natural entities.',
        keywordsToInclude: ['demolishes superstitions', 'biased human mind', 'agents of solace', 'innocent nature'],
        markingPoints: [
          '1.5 marks: Identifying human superstitions regarding crow and hemlock.',
          '1.5 marks: Showing how the poem dismantles these prejudices.'
        ],
        commonMistake: 'Failing to mention the word superstition.',
        howToImprove: 'Explicitly discuss how culture labels creatures as inauspicious.',
        whyThisQuestionMatters: 'Directly tests the moral core of the poem.'
      }
    ]
  },

  // ==========================================
  // 4. A TRIUMPH OF SURGERY (FOOTPRINTS WITHOUT FEET)
  // ==========================================
  {
    id: 'fwf-prose-1',
    title: 'A Triumph of Surgery',
    authorOrPoet: 'James Herriot',
    book: 'Footprints Without Feet',
    isPoem: false,
    chapterNumber: 1,
    estimatedReadTimeMinutes: 16,
    progressPercent: 82,
    background: 'Written by James Alfred Wight under the pen name James Herriot, based on his real-life experiences as a veterinary surgeon in rural Yorkshire, England.',
    setting: 'A wealthy British household and James Herriot\'s bustling veterinary surgery.',
    tone: 'Humorous, affectionate, satirical regarding pet pampering, and common-sense oriented.',
    shortSummary: 'Tricki, an excessively pampered small dog belonging to the wealthy and foolishly indulgent Mrs. Pumphrey, becomes dangerously obese and listless due to constant overfeeding of rich foods. Dr. James Herriot recognizes that Tricki requires no medicine, but strict diet and vigorous exercise. He admits the dog to his veterinary surgery, withholds food, gives abundant water, and allows him to run with other pack dogs. Within a fortnight, Tricki transforms into a lithe, muscular canine. Mrs. Pumphrey gratefully proclaims the cure "a triumph of surgery," oblivious to the common-sense remedy employed.',
    detailedSummary: [
      'Dr. James Herriot is shocked when he encounters Mrs. Pumphrey walking her Pekingese dog, Tricki. The dog has become bloated like a heated sausage with a leg at each corner, his eyes bloodshot and rheumy, his tongue lolling from his jaws.',
      'Mrs. Pumphrey anxiously explains that Tricki seemed malnourished and listless, so she supplemented his regular meals with malt, cod-liver oil, bowls of Horlicks, chocolates, and cream cakes.',
      'Herriot sternly warns her that unless she immediately cuts down his sweet treats and enforces strict physical exercise, Tricki will fall gravely ill.',
      'Within days, an urgent phone call arrives: Tricki has refused all food, suffered bouts of vomiting, and lies gasping on his rug. Herriot realizes that the only way to save the dog is to physically separate him from his doting mistress.',
      'Herriot hospitalizes Tricki for a fortnight, despite the household staff\'s tearful dramatics and trunks full of doggy coats, bowls, and cushions.',
      'At the surgery, Tricki is given no medicine; for two days, he receives only plenty of water. On the third day, he begins to take an interest in his surroundings and joins the energetic pack of greyhounds and mongrels in outdoor tussles.',
      'Meanwhile, Mrs. Pumphrey sends dozens of fresh eggs, bottles of wine, and brandy to enrich Tricki\'s blood, which Herriot and his partners happily consume for breakfast and dinner.',
      'After two weeks, Tricki has shed his flab and transformed into a flexible, robust animal. When Mrs. Pumphrey arrives in her chauffeur-driven car, Tricki leaps joyfully into her lap. Overwhelmed with tears, she cries, "Oh, Dr. Herriot, how can I ever thank you? This is a triumph of surgery!"'
    ],
    mainThemes: [
      'The Dangers of Blind Indulgence: Excessive, misguided affection can prove lethal to the recipient.',
      'Practical Common Sense over Medication: Healing often requires lifestyle correction rather than pharmaceutical intervention.',
      'Humorous Satire on Affluence: Wealthy pet owners projecting human luxuries and neurotic anxieties onto animals.'
    ],
    centralIdea: 'True love and care necessitate discipline and restraint; over-pampering and unguided indulgence inevitably lead to debility and disease.',
    centralMessage: 'Physical health and vitality stem from natural diet and vigorous movement, not luxurious indolence.',
    characters: [
      {
        name: 'Mrs. Pumphrey',
        role: 'Affluent and Indulgent Mistress',
        traits: ['Extremely wealthy', 'Foolishly doting', 'Impulsive', 'Tender-hearted', 'Gullible'],
        description: 'A loving but misguided woman who equates food and luxury with love, nearly killing her beloved pet with cod-liver oil and pastries.',
        keyQuotes: ['"He was so listless, Mr. Herriot. I thought he must be suffering from malnutrition."', '"Oh, Dr. Herriot, this is a triumph of surgery!"']
      },
      {
        name: 'Dr. James Herriot',
        role: 'Veterinary Surgeon / Narrator',
        traits: ['Practical', 'Compassionate', 'Tactful', 'Opportunistic in a harmless way', 'Pragmatic'],
        description: 'An astute vet who immediately diagnoses the root cause as overfeeding and prescribes discipline instead of surgery or drugs.',
        keyQuotes: ['"If you don\'t cut his food right down and give him more exercise, he will be really ill."', '"I made up a bed for him in a warm loose box next to where the other dogs slept."']
      },
      {
        name: 'Tricki',
        role: 'The Pampered Canine',
        traits: ['Greedy', 'Overweight initially', 'Playful and energetic once restored'],
        description: 'A small dog whose only fault was unbridled greed; he never refused food at any hour of the day or night.'
      }
    ],
    importantEvents: [
      {
        event: 'Herriot\'s Initial Warning on the Street',
        cause: 'Observing Tricki\'s sausage-like bloated body and rheumy eyes.',
        effect: 'Herriot predicts Tricki will collapse within a fortnight if diet is not curtailed.'
      },
      {
        event: 'Hospitalization at the Surgery',
        cause: 'Tricki collapses, vomiting and refusing all food.',
        effect: 'Separation from Mrs. Pumphrey enables natural fasting and pack socialization.'
      },
      {
        event: 'Mrs. Pumphrey\'s Luxury Care Packages',
        cause: 'Her belief that Tricki was convalescing from a major surgical trauma.',
        effect: 'Herriot and staff enjoy gourmet breakfasts of eggs, midday wine, and evening brandy.'
      },
      {
        event: 'The Dramatic Reunion',
        cause: 'Tricki\'s complete physical rehabilitation through natural play and diet.',
        effect: 'Mrs. Pumphrey hails the cure as "a triumph of surgery".'
      }
    ],
    keyConcepts: [
      'Irony of "A Triumph of Surgery": The cure was achieved with zero surgical procedures and zero drugs, relying purely on fasting, water, and exercise.',
      'Canine Socialization: Tricki learns pack dynamics, hunting rats, and competing for food bowl scraps.',
      'Psychological Dependency: Mrs. Pumphrey\'s reliance on pampering to satisfy her own emotional loneliness.'
    ],
    importantExamPoints: [
      'Tricki\'s only real fault was greed: he could not say no to food.',
      'Herriot gave him no medicinal drugs, only fasting for 2 days followed by water and balanced meals.',
      'The title is situational irony: no surgery was performed.',
      'Know the luxury items sent: eggs, wine, brandy, tweeds, separate day and night beds.'
    ],
    vocabulary: [
      { word: 'Bloated', meaning: 'Swollen with fluid or gas', contextInText: 'He had become hugely fat, like a bloated sausage.' },
      { word: 'Rheumy', meaning: 'Watery discharge from mucous membranes or eyes', contextInText: 'His eyes, bloodshot and rheumy, stared straight ahead.' },
      { word: 'Listless', meaning: 'Lacking energy or enthusiasm', contextInText: 'He seemed so listless, having no energy.' },
      { word: 'Convalescing', meaning: 'Recovering health and strength gradually after sickness', contextInText: 'The word \'convalescing\' seemed to do something to Mrs. Pumphrey.' },
      { word: 'Lithe', meaning: 'Flexible, graceful and supple', contextInText: 'He had been transformed into a flexible, lithe, hard-muscled animal.' }
    ],
    fiveMinRevision: [
      'Author: James Herriot (veterinarian).',
      'Characters: Tricki (pampered dog), Mrs. Pumphrey (rich owner), Dr. Herriot.',
      'Problem: Tricki becomes bloated and sick from eating cakes, Horlicks, and malt.',
      'Treatment: 2 days fasting + plenty of water + pack exercise. No medicine.',
      'Ending: Fully recovered dog; Mrs. Pumphrey ironically calls it a "triumph of surgery".'
    ],
    tenMinRevision: [
      'Herriot\'s tact: Realizes Mrs. Pumphrey cannot discipline herself; hospitalizes Tricki to enforce diet.',
      'Surgery life: Tricki sleeps on a warm box, runs with greyhounds, hunts rats in the barn.',
      'The comic feast: Herriot and assistants enjoy the eggs, wine, and brandy sent for Tricki.',
      'Irony: "Triumph of surgery" celebrates surgical technology when the cure was basic lifestyle medicine.'
    ],
    thirtyMinRevision: [
      'Detailed character study of Mrs. Pumphrey: Well-meaning love vs. destructive coddling.',
      'Herriot as a humane veterinarian: Clinical competence combined with gentle humor.',
      'Socio-economic commentary on pet ownership and wealth in 20th-century Britain.',
      'Drafting 6-mark answers on animal welfare and human indulgence.'
    ],
    onePageRevision: {
      plotOrGist: 'A ridiculously pampered dog collapses from overeating. A smart vet isolates him, feeds him nothing for two days except water, lets him play with the pack, and cures him. The rich owner hails it as a surgical triumph.',
      keyThemes: ['Destructive over-indulgence', 'Power of simple lifestyle medicine', 'Humorous situational irony'],
      crucialMoments: ['Bloated dog seen on street', 'Emergency phone call and hospital admission', 'Tricki joining pack play', 'Joyful leap into mistress\'s car'],
      vitalVocabulary: ['Bloated', 'Rheumy', 'Listless', 'Convalescing', 'Lithe', 'Pang'],
      fiveKeyQuestions: [
        'Why was Dr. Herriot really worried about Tricki?',
        'What was the real cure administered to Tricki at the surgery?',
        'Why did Mrs. Pumphrey send eggs, wine, and brandy, and who actually consumed them?',
        'Explain the irony in the title "A Triumph of Surgery".',
        'Is Mrs. Pumphrey\'s behavior merely eccentric, or emotionally harmful?'
      ],
      pyqReferences: [
        'CBSE Board Exam 2024: 6-Mark question on "How excess pampering harms pets and children"',
        'CBSE Board Exam 2023: 3-Mark question on Dr. Herriot\'s practical treatment',
        'CBSE Board Exam 2022: 3-Mark question on why Mrs. Pumphrey called it a triumph of surgery'
      ]
    },
    tenImportantQuestions: [
      {
        id: 'q-fwf-1-01',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/1/1',
        verificationStatus: 'published',
        question: 'Why did Mrs. Pumphrey take Tricki to the doctor? What was his primary problem?',
        modelAnswer: 'Mrs. Pumphrey contacted Dr. Herriot because Tricki had become completely listless, refused even his favorite delicacies, suffered continuous bouts of vomiting, and spent his days gasping for breath on his carpet. His primary problem was not any clinical disease, but acute obesity and digestive distress caused by unbridled greed and severe overfeeding by his overly indulgent mistress.',
        explanation: 'Identifies symptoms and diagnoses the underlying root cause.',
        keywordsToInclude: ['listless', 'refused food', 'vomiting', 'acute obesity', 'severe overfeeding'],
        markingPoints: [
          '1.5 marks: Stating physical symptoms (vomiting, refusal to eat, panting).',
          '1.5 marks: Identifying root cause (over-indulgence, greed, overfeeding).'
        ],
        commonMistake: 'Claiming Tricki had a virus or medical illness.',
        howToImprove: 'Explicitly specify that Tricki\'s only disease was overfeeding and lack of exercise.',
        whyThisQuestionMatters: 'Foundational question establishing the plot crisis.'
      },
      {
        id: 'q-fwf-1-02',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Long Answer',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2023,
        paperCode: 'CBSE 2/3/1',
        verificationStatus: 'published',
        question: 'Excess of everything is bad, even love and pampering. Substantiate this statement with reference to Mrs. Pumphrey and Tricki.',
        modelAnswer: 'Affection, when unguided by wisdom and discipline, can turn into a destructive force. This universal truth is vividly illustrated in "A Triumph of Surgery" through the character of Mrs. Pumphrey and her pampered dog, Tricki.\n\nMrs. Pumphrey possessed boundless love for Tricki, but her affection lacked common sense. Interpreting his lethargy as malnutrition, she supplemented his rich meals with malt, cod-liver oil, chocolates, cream cakes, and Horlicks. Denied physical exercise and stuffed with calories, Tricki became an unmoving, bloated mass, courting fatal cardiovascular and digestive collapse.\n\nHer indulgence was not malice, yet it caused severe physical agony to the creature she loved most. It was only when Dr. Herriot severed Tricki from this suffocating luxury, subjecting him to strict fasting, water, and vigorous canine play, that the dog regained health and zest for life.\n\nThis story delivers a profound lesson that extends beyond pet ownership to parenting and human relationships: genuine care requires setting boundaries and enforcing discipline. Coddling individuals with luxury while insulating them from effort and restraint inevitably breeds physical and psychological debility.',
        explanation: 'Thematic 6-mark analysis demonstrating how blind indulgence causes harm.',
        keywordsToInclude: ['boundless love without wisdom', 'bloated mass', 'destructive pampering', 'setting boundaries', 'genuine care requires discipline'],
        markingPoints: [
          '2 marks: Detailed account of Mrs. Pumphrey\'s excessive diet regime.',
          '2 marks: The physical suffering and collapse it inflicted on Tricki.',
          '2 marks: Philosophical conclusion on why true love requires discipline and boundaries.'
        ],
        commonMistake: 'Narrating the funny episodes at the surgery instead of answering the moral proposition.',
        howToImprove: 'Anchor the response directly around the opening quote: "Excess of everything is bad".',
        whyThisQuestionMatters: 'Top recurring 6-mark value-based question for Footprints Without Feet.'
      },
      {
        id: 'q-fwf-1-03',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Easy',
        sourceType: 'official_board',
        verifiedYear: 2022,
        paperCode: 'CBSE Term 2 Board Exam',
        verificationStatus: 'published',
        question: 'Why is the recovery of Tricki called "a triumph of surgery"? Explain the irony.',
        modelAnswer: 'The title and ending are deeply ironic. Mrs. Pumphrey calls Tricki\'s recovery "a triumph of surgery" because she firmly believes her dog was cured through complex surgical procedures and intensive medical therapy. In reality, Dr. Herriot never performed any surgery or administered a single tablet; he cured Tricki purely through common-sense fasting, copious water, and vigorous exercise with other dogs in his clinic.',
        explanation: 'Unpacks the situational irony between Mrs. Pumphrey\'s assumption and reality.',
        keywordsToInclude: ['situational irony', 'triumph of surgery', 'no medicine administered', 'fasting and exercise'],
        markingPoints: [
          '1.5 marks: Explaining Mrs. Pumphrey\'s mistaken belief in surgical intervention.',
          '1.5 marks: Stating the true nature of the cure (fasting, water, play).'
        ],
        commonMistake: 'Forgetting to use the word "irony" or explain both sides of the contrast.',
        howToImprove: 'Explicitly state the contrast: belief vs. reality.',
        whyThisQuestionMatters: 'Essential conceptual question regarding the book\'s title.'
      },
      {
        id: 'q-fwf-1-04',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Extract Based',
        marks: 5,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/2/3',
        verificationStatus: 'published',
        contextExtract: '"At the surgery, the household dogs surged round me. Tricki looked down at the noisy pack with dull eyes and, when put down, lay motionless on the carpet. The other dogs, after sniffing round him for a few seconds, decided he was an uninteresting object and ignored him."',
        question: 'Answer the following: (i) How did the household dogs initially react to Tricki? (ii) What was Tricki\'s physical and emotional state at this moment? (iii) How did this dynamic change over the subsequent days?',
        modelAnswer: '(i) The surgery dogs enthusiastically surged around Dr. Herriot, sniffed the inert Tricki for a few seconds, decided he was an uninteresting object, and walked away.\n(ii) Tricki was physically exhausted, heavily bloated, and emotionally despondent, unable even to raise his head or show curiosity.\n(iii) Within days of fasting and drinking water, Tricki regained energy, joined the pack in running across the yard, competed aggressively for food scraps, and became an active, accepted member of the gang.',
        explanation: 'Three-tiered extract checking observation, initial state, and pack socialization.',
        keywordsToInclude: ['uninteresting object', 'inert and bloated', 'pack socialization', 'competing for food'],
        markingPoints: [
          '1.5 marks: Dogs sniffing and ignoring him.',
          '1.5 marks: Tricki\'s dull, motionless state.',
          '2 marks: His transition into an energetic pack member.'
        ],
        commonMistake: 'Giving vague answers without textual phrases like "uninteresting object".',
        howToImprove: 'Incorporate direct textual keywords like "uninteresting object" and "noisy pack".',
        whyThisQuestionMatters: 'Standard extract question from CBSE Section C.'
      },
      {
        id: 'q-fwf-1-05',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'MCQ',
        marks: 1,
        difficulty: 'Easy',
        sourceType: 'official_board',
        verifiedYear: 2024,
        paperCode: 'CBSE 2/4/2',
        verificationStatus: 'published',
        question: 'What was the real reason behind Dr. Herriot\'s decision to hospitalize Tricki?',
        options: [
          'He wanted to conduct an expensive experimental surgery',
          'He wanted to enjoy Mrs. Pumphrey\'s wine and eggs',
          'He knew Tricki could only recover if completely isolated from Mrs. Pumphrey\'s overfeeding',
          'He needed a watch dog to protect his surgery clinic'
        ],
        correctOptionIndex: 2,
        modelAnswer: 'Option C: He knew Tricki could only recover if completely isolated from Mrs. Pumphrey\'s overfeeding.',
        explanation: 'Herriot realized that as long as Tricki stayed in Mrs. Pumphrey\'s house, her emotional weakness would prevent her from restricting his diet.',
        keywordsToInclude: ['isolate from owner', 'prevent overfeeding'],
        markingPoints: ['1 mark for identifying the psychological necessity of separation.'],
        commonMistake: 'Selecting Option B as a comedic distraction.',
        howToImprove: 'Focus on Herriot\'s primary veterinary motivation rather than incidental benefits.',
        whyThisQuestionMatters: 'Tests character motivation and clinical judgment.'
      },
      {
        id: 'q-fwf-1-06',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'teacher_created',
        verificationStatus: 'verified',
        question: 'How did Dr. Herriot and his partners benefit from Mrs. Pumphrey\'s anxiety during Tricki\'s convalescence?',
        modelAnswer: 'When informed that Tricki was convalescing, Mrs. Pumphrey began dispatching lavish care packages to rebuild his strength: two dozen fresh eggs daily, bottles of fine wine, and bottles of brandy. Knowing this rich food would undo Tricki\'s cure, Herriot and his partners enjoyed these delicacies themselves—eggs for breakfast, wine with lunch, and brandy by the fireside at night.',
        explanation: 'Explains the humorous feast enjoyed by the veterinary practice staff.',
        keywordsToInclude: ['care packages', 'eggs, wine and brandy', 'harmless opportunism', 'fireside evenings'],
        markingPoints: [
          '1.5 marks: Listing the luxury food items sent for the dog.',
          '1.5 marks: Explaining how the staff consumed them to protect Tricki\'s health.'
        ],
        commonMistake: 'Portraying Herriot as dishonest or fraudulent.',
        howToImprove: 'Frame it humorously as a harmless, practical measure to prevent Tricki from relapsing.',
        whyThisQuestionMatters: 'Demonstrates appreciation of the story\'s lighthearted British humor.'
      },
      {
        id: 'q-fwf-1-07',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'official_board',
        verifiedYear: 2020,
        paperCode: 'CBSE 2020 All India',
        verificationStatus: 'published',
        question: 'What advice had Dr. Herriot given to Mrs. Pumphrey initially? Did she follow it?',
        modelAnswer: 'Dr. Herriot had explicitly advised Mrs. Pumphrey to strictly cut down Tricki\'s sweet and carbohydrate intake, give him plenty of rigorous exercise, and keep him on a severely disciplined diet, warning that he would otherwise fall dangerously ill. Mrs. Pumphrey found it heart-wrenching to be so strict, relented after a few days, and continued to pamper him with chocolates and pastries.',
        explanation: 'Contrasts the doctor\'s medical advice with the owner\'s lack of willpower.',
        keywordsToInclude: ['cut down sweets', 'strict exercise', 'lack of willpower', 'relented'],
        markingPoints: [
          '1.5 marks: Stating Herriot\'s specific advice (diet and exercise).',
          '1.5 marks: Explaining Mrs. Pumphrey\'s failure to adhere to it.'
        ],
        commonMistake: 'Vaguely stating "she gave him food" without specifying Herriot\'s exact warning.',
        howToImprove: 'Cite both components of Herriot\'s advice: 1. Food reduction; 2. Physical exercise.',
        whyThisQuestionMatters: 'Tests plot recall and character weakness.'
      },
      {
        id: 'q-fwf-1-08',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Competency Based',
        marks: 6,
        difficulty: 'Board Standard',
        sourceType: 'board_style',
        verificationStatus: 'verified',
        question: 'Compare and contrast the lifestyle Tricki led at home with the environment he experienced at Dr. Herriot\'s surgery. How did the latter transform him?',
        modelAnswer: 'Tricki\'s life at Mrs. Pumphrey\'s residence stood in stark contrast to his environment at Dr. Herriot\'s surgery:\n\n1. At Mrs. Pumphrey\'s Mansion (Luxury & Stagnation): Tricki lived in suffocating luxury with bespoke tweed coats, rubber toys, separate day and night beds, and specialized bowls. He was fed cream cakes, cod-liver oil, and Horlicks at all hours, living a sedentary, solitary existence devoid of peer interaction or exercise. This caused him to degenerate into an unmoving, wheezing "bloated sausage".\n\n2. At the Veterinary Surgery (Simplicity & Activity): Tricki was stripped of all material luxury. He slept in a simple warm box next to other dogs, was subjected to a two-day water fast, and had to scramble for his share of communal food bowls. He became part of an active canine pack, running, wrestling, and hunting rats in the barn.\n\nTransformation: The lack of pampering, combined with natural pack hierarchy and constant movement, rejuvenated Tricki. Within a fortnight, he shed his excess subcutaneous fat, transformed into a lithe, muscular canine, and regained his natural animal vigor.',
        explanation: 'Structured comparative essay contrasting artificial domestic coddling with healthy natural socialization.',
        keywordsToInclude: ['bespoke luxury vs natural simplicity', 'bloated sausage', 'pack hierarchy', 'subcutaneous fat', 'lithe and hard-muscled'],
        markingPoints: [
          '2 marks: Detailed portrayal of domestic pampered lifestyle.',
          '2 marks: Detailed portrayal of surgery pack environment.',
          '2 marks: Analysis of physical and behavioral transformation.'
        ],
        commonMistake: 'Writing a chronological narrative instead of a thematic point-by-point contrast.',
        howToImprove: 'Use structured side-by-side headings (Home vs. Surgery) for high marks.',
        whyThisQuestionMatters: 'Essential 6-mark comparative question frequently evaluated by CBSE.'
      },
      {
        id: 'q-fwf-1-09',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Medium',
        sourceType: 'platform_practice',
        verificationStatus: 'verified',
        question: 'Why was Dr. Herriot tempted to keep Tricki as a permanent guest at the surgery?',
        modelAnswer: 'Dr. Herriot was sorely tempted to keep Tricki as a permanent guest because of the lavish bounty of care packages Mrs. Pumphrey continually sent to the clinic. Herriot and his staff enjoyed two fresh eggs every morning, fine vintage wine with lunch, and rich brandy beside the glowing fireplace at night. Keeping Tricki meant sustaining an unexpected, aristocratic lifestyle for the entire veterinary household.',
        explanation: 'Humorous acknowledgment of Herriot\'s temptation to keep the luxury supply going.',
        keywordsToInclude: ['permanent guest', 'lavish care packages', 'eggs, wine, brandy', 'aristocratic lifestyle'],
        markingPoints: [
          '1.5 marks: Mentioning the daily delivery of eggs, wine, and brandy.',
          '1.5 marks: Explaining the staff\'s humorous delight in this culinary luxury.'
        ],
        commonMistake: 'Thinking Herriot was attached to the dog emotionally rather than the food packages.',
        howToImprove: 'Clarify that the temptation was purely driven by the comic gourmet treats sent by the owner.',
        whyThisQuestionMatters: 'Demonstrates humor comprehension in the text.'
      },
      {
        id: 'q-fwf-1-10',
        chapterId: 'fwf-prose-1',
        chapterTitle: 'A Triumph of Surgery',
        book: 'Footprints Without Feet',
        type: 'Competency Based',
        marks: 3,
        difficulty: 'Board Standard',
        sourceType: 'official_sample_paper',
        verifiedYear: 2025,
        paperCode: 'CBSE SQP 2024-25',
        verificationStatus: 'published',
        question: 'Do you think Dr. Herriot was tactful as well as full of common sense? Justify your answer with two instances from the chapter.',
        modelAnswer: 'Yes, Dr. Herriot exemplified both professional tact and razor-sharp common sense:\n1. Common Sense: He recognized instantly that Tricki needed no expensive surgery, X-rays, or medications, but simple fasting, hydration, and exercise—tackling the root lifestyle cause.\n2. Tact: Knowing Mrs. Pumphrey\'s fragile emotional state, he never bluntly scolded or humiliated her for endangering the dog. Instead, he framed the hospital stay as a clinical necessity, ensuring her feelings remained unhurt while rescuing the animal.',
        explanation: 'Evaluates Herriot\'s dual qualities of practical intellect and interpersonal emotional intelligence.',
        keywordsToInclude: ['tact and common sense', 'root lifestyle cause', 'emotional intelligence', 'sparing owner\'s feelings'],
        markingPoints: [
          '1.5 marks: Demonstration of common sense (fasting instead of surgery).',
          '1.5 marks: Demonstration of tact (sparing Mrs. Pumphrey\'s feelings while taking control).'
        ],
        commonMistake: 'Failing to provide two distinct instances.',
        howToImprove: 'Clearly separate the response into: Instance 1 (Common Sense) and Instance 2 (Tact).',
        whyThisQuestionMatters: 'Direct question from NCERT "Think about it" section.'
      }
    ]
  },

  // ==========================================
  // 5. ARCHIVED CHAPTER: THE HACK DRIVER (NOT IN CURRENT SYLLABUS)
  // ==========================================
  {
    id: 'fwf-prose-archived-1',
    title: 'The Hack Driver',
    authorOrPoet: 'Sinclair Lewis',
    book: 'Footprints Without Feet',
    isPoem: false,
    chapterNumber: 8,
    estimatedReadTimeMinutes: 14,
    progressPercent: 0,
    isArchived: true, // Marked as older syllabus
    background: 'Written by Nobel laureate Sinclair Lewis, this humorous story depicts the gullibility of a city-bred junior lawyer duped by an affable village hack driver. NOTE: This chapter was removed in the NCERT rationalized syllabus for current CBSE board examinations.',
    setting: 'The fictional rustic town of New Mullion.',
    tone: 'Satirical, humorous, and ironic.',
    shortSummary: '[OLDER / NOT IN CURRENT SYLLABUS] A young lawyer is dispatched to the small town of New Mullion to serve a legal summons on Oliver Lutkins. Upon arrival, he meets a friendly hack driver who introduces himself as Bill Magnuson. Bill volunteers to drive the lawyer everywhere to find Lutkins, charging him handsomely while secretly being Lutkins himself. The next day, the lawyer returns with an associate, only to be laughed at by the entire town when the hack driver is revealed as Lutkins.',
    detailedSummary: [
      'Notice: This chapter has been archived as it was removed from the official CBSE Class 10 English Language & Literature syllabus.',
      'The protagonist is a junior lawyer at a firm who hates his job of serving legal summonses in the dirty corners of the city.',
      'He rejoices when sent to New Mullion to serve a summons on Oliver Lutkins, an elusive witness needed in an important court case.',
      'At the station, he meets Bill Magnuson, a cheerful hack driver who promises to help track Lutkins down.',
      'Bill escorts the naive lawyer to Fritz\'s shop, Gustaff\'s barbershop, Gray\'s poolroom, and Lutkins\' mother\'s farm, charging him hourly fees and lunch money.',
      'Everywhere they go, Bill enters first while instructing the lawyer to keep out of sight, concocting elaborate stories about how Lutkins just fled.',
      'The lawyer returns to the city delighted with Bill\'s rustic warmth, but his superiors are furious that Lutkins was not served.',
      'The firm dispatches a colleague who knows Lutkins back to New Mullion. At the platform, the lawyer proudly points out the helpful Bill, only to be told that Bill is none other than Oliver Lutkins himself!'
    ],
    mainThemes: [
      'Appearances vs. Reality: Superficial rustic warmth concealing streetwise deception.',
      'City Arrogance vs. Village Shrewdness: The educated urbanite outmaneuvered by the country rogue.',
      'Gullibility of Inexperience: Trusting strangers without independent verification.'
    ],
    centralIdea: 'One should never evaluate people by their external geniality; worldly innocence without caution makes one an easy target for deception.',
    centralMessage: 'Critical thinking and skepticism are indispensable shields against confidence tricksters.',
    keyConcepts: [
      'Syllabus Status: Archived / Removed from active 2026-27 CBSE examination scheme.',
      'Dramatic Irony: The audience and townspeople understand the ruse while the narrator remains oblivious.'
    ],
    importantExamPoints: [
      'IMPORTANT: This chapter is marked as "Older / Not in Current Syllabus" according to official CBSE circulars.',
      'If referenced in comparative questions, identify Sinclair Lewis as the author and Oliver Lutkins as the dual-identity hack driver.'
    ],
    vocabulary: [
      { word: 'Gullible', meaning: 'Easily persuaded to believe something; credulous', contextInText: 'The young lawyer was astonishingly gullible.' },
      { word: 'Summons', meaning: 'An official order to appear in a court of law', contextInText: 'Sent to serve a legal summons on Oliver Lutkins.' },
      { word: 'Affable', meaning: 'Friendly, good-natured, or easy to talk to', contextInText: 'The hack driver appeared cheerful and affable.' }
    ],
    fiveMinRevision: [
      'Archived chapter: Not tested in current 2026-27 CBSE board examinations.',
      'Protagonist: Naive junior lawyer sent to serve summons.',
      'Antagonist: Oliver Lutkins posing as Bill Magnuson the hack driver.',
      'Core irony: The lawyer spent the entire day looking for Lutkins with Lutkins himself.'
    ],
    tenMinRevision: [
      'Comprehensive overview retained for historical reference and student reading enjoyment.',
      'Key lesson: City sophistication is no guarantee against practical deception.',
      'Retained in platform archive per CBSE syllabus guidelines.'
    ],
    thirtyMinRevision: [
      'Optional enrichment reading for students seeking extra literary context.'
    ],
    onePageRevision: {
      plotOrGist: '[ARCHIVED CHAPTER] A naive young lawyer is led on a wild goose chase in New Mullion by a hack driver who pretends to help him find Oliver Lutkins, but is actually Lutkins himself.',
      keyThemes: ['Appearance vs reality', 'Urban gullibility', 'Rustic wit'],
      crucialMoments: ['Meeting Bill at station', 'Visiting Lutkins\' ferocious mother', 'The revelation on the station platform next day'],
      vitalVocabulary: ['Summons', 'Affable', 'Gullible', 'Subpoena'],
      fiveKeyQuestions: [
        'Why was the young lawyer sent to New Mullion?',
        'Who was Bill Magnuson in reality?',
        'How did Bill prevent the lawyer from speaking to the townspeople directly?',
        'Why did the lawyer\'s boss send another man with him the second time?',
        'What is the syllabus status of this chapter in current CBSE board examinations?'
      ],
      pyqReferences: [
        'Historical: Pre-2020 CBSE papers (chapter removed in recent rationalized syllabus).'
      ]
    },
    tenImportantQuestions: [
      {
        id: 'q-fwf-arch-01',
        chapterId: 'fwf-prose-archived-1',
        chapterTitle: 'The Hack Driver',
        book: 'Footprints Without Feet',
        type: 'Short Answer',
        marks: 3,
        difficulty: 'Easy',
        sourceType: 'teacher_created',
        verificationStatus: 'verified',
        question: 'Why is "The Hack Driver" categorized as an archived chapter in the current curriculum?',
        modelAnswer: '"The Hack Driver" by Sinclair Lewis was part of the Footprints Without Feet textbook for many years. However, under NCERT\'s rationalization of curriculum to reduce content load, this chapter was officially dropped and is no longer tested in the active CBSE Class 10 English Language & Literature (Code 184) board examinations. The platform preserves it in the archive for completeness and reference.',
        explanation: 'Explains syllabus rationalization by NCERT/CBSE.',
        keywordsToInclude: ['rationalization of curriculum', 'dropped from active syllabus', 'archived for reference'],
        markingPoints: ['1.5 marks: Stating NCERT rationalization.', '1.5 marks: Confirming omission from active board exam.'],
        commonMistake: 'Confusing it with active chapters like "The Necklace" or "Bholi".',
        howToImprove: 'Always verify the syllabus status before allocating revision hours.',
        whyThisQuestionMatters: 'Protects students from wasting time on dropped syllabus chapters.'
      }
    ]
  }
];

// Complete Syllabus Index for CBSE Class 10 (2026-27 Active vs Archived)
export interface SyllabusOverviewItem {
  id: string;
  title: string;
  book: BookType;
  authorOrPoet: string;
  status: 'Active Prescribed' | 'Archived / Dropped';
  boardMarksAllocation: string;
  hasDetailedSystem: boolean;
}

export const OFFICIAL_CBSE_SYLLABUS_INDEX: SyllabusOverviewItem[] = [
  // First Flight Prose
  { id: 'ff-prose-1', title: 'A Letter to God', book: 'First Flight (Prose)', authorOrPoet: 'G.L. Fuentes', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-2', title: 'Nelson Mandela: Long Walk to Freedom', book: 'First Flight (Prose)', authorOrPoet: 'Nelson Rolihlahla Mandela', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-3', title: 'Two Stories About Flying (His First Flight & Black Aeroplane)', book: 'First Flight (Prose)', authorOrPoet: 'Liam O’Flaherty & Frederick Forsyth', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-4', title: 'From the Diary of Anne Frank', book: 'First Flight (Prose)', authorOrPoet: 'Anne Frank', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-5', title: 'Glimpses of India (Baker from Goa, Coorg, Tea from Assam)', book: 'First Flight (Prose)', authorOrPoet: 'Lucio Rodrigues, Lokesh Abrol, Arup Datta', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-6', title: 'Mijbil the Otter', book: 'First Flight (Prose)', authorOrPoet: 'Gavin Maxwell', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-7', title: 'Madam Rides the Bus', book: 'First Flight (Prose)', authorOrPoet: 'Vallikkannan', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-8', title: 'The Sermon at Benares', book: 'First Flight (Prose)', authorOrPoet: 'Betty Renshaw', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-prose-9', title: 'The Proposal (Play)', book: 'First Flight (Prose)', authorOrPoet: 'Anton Chekhov', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },

  // First Flight Poetry
  { id: 'ff-poem-1', title: 'Dust of Snow', book: 'First Flight (Poetry)', authorOrPoet: 'Robert Frost', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-2', title: 'Fire and Ice', book: 'First Flight (Poetry)', authorOrPoet: 'Robert Frost', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-3', title: 'A Tiger in the Zoo', book: 'First Flight (Poetry)', authorOrPoet: 'Leslie Norris', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-4', title: 'How to Tell Wild Animals', book: 'First Flight (Poetry)', authorOrPoet: 'Carolyn Wells', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-5', title: 'The Ball Poem', book: 'First Flight (Poetry)', authorOrPoet: 'John Berryman', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-6', title: 'Amanda!', book: 'First Flight (Poetry)', authorOrPoet: 'Robin Klein', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-7', title: 'The Trees', book: 'First Flight (Poetry)', authorOrPoet: 'Adrienne Rich', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-8', title: 'Fog', book: 'First Flight (Poetry)', authorOrPoet: 'Carl Sandburg', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-9', title: 'The Tale of Custard the Dragon', book: 'First Flight (Poetry)', authorOrPoet: 'Ogden Nash', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'ff-poem-10', title: 'For Anne Gregory', book: 'First Flight (Poetry)', authorOrPoet: 'William Butler Yeats', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },

  // Footprints Without Feet
  { id: 'fwf-prose-1', title: 'A Triumph of Surgery', book: 'Footprints Without Feet', authorOrPoet: 'James Herriot', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-2', title: 'The Thief’s Story', book: 'Footprints Without Feet', authorOrPoet: 'Ruskin Bond', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-3', title: 'The Midnight Visitor', book: 'Footprints Without Feet', authorOrPoet: 'Robert Arthur', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-4', title: 'A Question of Trust', book: 'Footprints Without Feet', authorOrPoet: 'Victor Canning', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-5', title: 'Footprints Without Feet', book: 'Footprints Without Feet', authorOrPoet: 'H.G. Wells', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-6', title: 'The Making of a Scientist', book: 'Footprints Without Feet', authorOrPoet: 'Robert W. Peterson', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-7', title: 'The Necklace', book: 'Footprints Without Feet', authorOrPoet: 'Guy de Maupassant', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-8', title: 'Bholi', book: 'Footprints Without Feet', authorOrPoet: 'K.A. Abbas', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },
  { id: 'fwf-prose-9', title: 'The Book That Saved the Earth', book: 'Footprints Without Feet', authorOrPoet: 'Claire Boiko', status: 'Active Prescribed', boardMarksAllocation: 'Part of 40 Marks Literature Section', hasDetailedSystem: true },

  // Archived
  { id: 'fwf-prose-archived-1', title: 'The Hack Driver', book: 'Footprints Without Feet', authorOrPoet: 'Sinclair Lewis', status: 'Archived / Dropped', boardMarksAllocation: '0 Marks (Dropped in NCERT Rationalization)', hasDetailedSystem: true }
];
