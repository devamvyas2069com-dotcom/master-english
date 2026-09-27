import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
import { GoogleGenAI } from '@google/genai';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = Number(process.env.PORT) || 3000;

app.use(express.json());

// Mock persistent in-memory database with realistic CBSE Class 10 Data
interface User {
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

const USERS: User[] = [
  {
    id: 'usr-std-1',
    name: 'Aryan Sharma',
    role: 'student',
    studentId: 'STD-2026-1042',
    school: 'Delhi Public School, R.K. Puram',
    grade: 'Class 10',
    section: 'A',
    rollNo: '10142',
    email: 'aryan.sharma@school.edu',
    hasPasskey: true,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80',
    streak: 14,
    questionsSolved: 348,
    testsCompleted: 9,
    accuracy: 86.4,
    overallProgress: 74
  },
  {
    id: 'usr-std-2',
    name: 'Ananya Verma',
    role: 'student',
    studentId: 'STD-2026-1088',
    school: 'Kendriya Vidyalaya, IIT Powai',
    grade: 'Class 10',
    section: 'B',
    rollNo: '10188',
    email: 'ananya.v@school.edu',
    hasPasskey: false,
    streak: 8,
    questionsSolved: 215,
    testsCompleted: 6,
    accuracy: 82.1,
    overallProgress: 63
  },
  {
    id: 'usr-tch-1',
    name: 'Mrs. Sunita Rao (PGT English)',
    role: 'teacher',
    teacherId: 'TCH-801',
    school: 'CBSE Regional Resource Center',
    grade: 'Senior Secondary',
    section: 'Curriculum Team',
    email: 'sunita.rao@cbseeducation.org',
    hasPasskey: true,
    streak: 45,
    questionsSolved: 1200,
    testsCompleted: 40,
    accuracy: 99.1,
    overallProgress: 100
  },
  {
    id: 'usr-adm-1',
    name: 'Dr. V. Sen (Academic Director)',
    role: 'admin',
    adminId: 'ADM-001',
    school: 'CBSE Examination Evaluation Board',
    grade: 'Administration',
    section: 'Syllabus & Quality Cell',
    email: 'v.sen@cbseboards.org',
    hasPasskey: true,
    streak: 60,
    questionsSolved: 3500,
    testsCompleted: 120,
    accuracy: 100,
    overallProgress: 100
  }
];

// Current academic year syllabus status
let currentAcademicYear = '2026-27';

// API Endpoints

// 1. Authentication
app.post('/api/auth/login', (req, res) => {
  const { identifier, password, role } = req.body;
  if (!identifier) {
    return res.status(400).json({ error: 'Username, Student ID or Email required' });
  }

  // Find user by studentId, teacherId, adminId, email or lowercase name
  const cleanId = String(identifier).trim().toLowerCase();
  const user = USERS.find(u => 
    (u.studentId && u.studentId.toLowerCase() === cleanId) ||
    (u.teacherId && u.teacherId.toLowerCase() === cleanId) ||
    (u.adminId && u.adminId.toLowerCase() === cleanId) ||
    u.email.toLowerCase() === cleanId ||
    u.name.toLowerCase().includes(cleanId)
  ) || USERS[0]; // Fallback to student for smooth demo

  // If specific role requested and found user doesn't match, find matching role
  let matchedUser = user;
  if (role && user.role !== role) {
    const roleUser = USERS.find(u => u.role === role);
    if (roleUser) matchedUser = roleUser;
  }

  return res.json({
    token: `token_${matchedUser.id}_${Date.now()}`,
    user: matchedUser
  });
});

app.post('/api/auth/passkey-login', (req, res) => {
  const { studentId } = req.body;
  const user = USERS.find(u => u.hasPasskey && (!studentId || u.studentId === studentId)) || USERS[0];
  return res.json({
    success: true,
    token: `passkey_token_${user.id}_${Date.now()}`,
    user
  });
});

app.get('/api/auth/me', (req, res) => {
  // Returns currently active user (default student)
  return res.json({ user: USERS[0] });
});

// 2. Syllabus Control
app.get('/api/syllabus', (req, res) => {
  res.json({
    currentAcademicYear,
    officialReference: 'CBSE Curriculum 2026-27 (Code 184)',
    boardExamPattern: '80 Marks Theory + 20 Marks Internal Assessment',
    readingMarks: 20,
    writingGrammarMarks: 20,
    literatureMarks: 40
  });
});

app.post('/api/syllabus/update-year', (req, res) => {
  const { year } = req.body;
  if (year) {
    currentAcademicYear = year;
  }
  res.json({ success: true, currentAcademicYear });
});

// 3. AI Assistant endpoint using @google/genai
app.post('/api/ai/ask', async (req, res) => {
  try {
    const { question, chapterTitle, bookTitle, contextType } = req.body;

    if (!question) {
      return res.status(400).json({ error: 'Question is required' });
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      // Fallback structured educational response if API key is not yet set
      return res.json({
        answer: `In the CBSE Class 10 English curriculum for "${chapterTitle || 'this topic'}", the core concept revolves around the author's primary theme.\n\n• **Key Analysis**: The character's actions reflect their moral conflict and social reality.\n• **Board Exam Tip**: In your answer, use exact textual vocabulary and structure in 2-3 concise paragraphs (for 3-mark questions: 40-50 words; for 6-mark questions: 100-120 words).\n• **Model Sentence**: The author conveys that faith, while noble, must be grounded in compassion and understanding.`,
        sources: ['CBSE Official NCERT Class 10 English Reference', 'Marking Scheme Guidelines']
      });
    }

    const ai = new GoogleGenAI();
    const systemPrompt = `You are the master English tutor and senior board evaluator for CBSE Class 10 English Language & Literature (Code 184).
Context: The student is studying "${chapterTitle || 'CBSE Class 10 English'}" from the book "${bookTitle || 'Official Textbook'}".
Format rules:
1. Provide accurate, high-scoring, concise academic explanations suitable for a Class 10 student.
2. Structure answers with:
   - Direct explanation
   - Key textual evidence / character traits
   - Essential CBSE keywords to include in the board exam
   - A common error students make and how to avoid it.
3. Keep the tone academic, encouraging, and razor-sharp. Never hallucinate facts outside the NCERT text.`;

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: [
        {
          role: 'user',
          parts: [{ text: `${systemPrompt}\n\nStudent Question: ${question}` }]
        }
      ]
    });

    const answerText = response.text || 'Unable to generate response at this moment.';
    return res.json({
      answer: answerText,
      sources: [`CBSE NCERT Textbook: ${bookTitle || 'First Flight'}`, 'Official Marking Scheme Guidelines']
    });
  } catch (error: any) {
    console.error('AI API error:', error);
    return res.status(500).json({
      error: 'Failed to process AI query',
      details: error?.message || 'Server error'
    });
  }
});

// Setup Vite middleware in dev or static files in production
async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa'
    });
    app.use(vite.middlewares);
  } else {
    app.use(express.static(path.resolve(__dirname, 'dist')));
    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'dist', 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`[English Master 10] Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch(err => {
  console.error('Failed to start server:', err);
});
