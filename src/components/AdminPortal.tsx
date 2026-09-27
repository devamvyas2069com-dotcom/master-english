import React, { useState } from 'react';
import { 
  ShieldCheck, 
  Settings, 
  CheckCircle2, 
  Clock, 
  UserPlus, 
  Layers, 
  Award, 
  Lock, 
  AlertCircle,
  FileCheck
} from 'lucide-react';
import { SyllabusYear, ContentStatus } from '../types';

interface AdminPortalProps {
  syllabusYear: SyllabusYear;
  onUpdateSyllabusYear: (year: SyllabusYear) => void;
}

export const AdminPortal: React.FC<AdminPortalProps> = ({
  syllabusYear,
  onUpdateSyllabusYear
}) => {
  const [activeAdminTab, setActiveAdminTab] = useState<'syllabus' | 'pipeline' | 'students'>('syllabus');

  // New student state
  const [studentName, setStudentName] = useState('');
  const [studentRoll, setStudentRoll] = useState('');
  const [studentSchool, setStudentSchool] = useState('Delhi Public School, R.K. Puram');
  const [createdNotice, setCreatedNotice] = useState<string | null>(null);

  // Content Verification Pipeline items mock
  const [pipelineItems, setPipelineItems] = useState([
    {
      id: 'pipe-1',
      title: 'A Letter to God — 2024 Board Question #3 (Set 2/1/1)',
      chapter: 'A Letter to God',
      author: 'Mrs. S. Rao',
      status: 'review' as ContentStatus,
      type: 'Official Board PYQ'
    },
    {
      id: 'pipe-2',
      title: 'Nelson Mandela — 6M Competency Question on Oppressor Liberation',
      chapter: 'Nelson Mandela: Long Walk to Freedom',
      author: 'Dr. V. Sen',
      status: 'verified' as ContentStatus,
      type: 'Official Sample Paper 2024-25'
    },
    {
      id: 'pipe-3',
      title: 'Reported Speech — Commands & Requests Dialogue Fill',
      chapter: 'Reported Speech',
      author: 'Mrs. S. Rao',
      status: 'published' as ContentStatus,
      type: 'Board-Style Practice'
    },
    {
      id: 'pipe-4',
      title: 'The Hack Driver — Archived Content Tag Verification',
      chapter: 'The Hack Driver',
      author: 'Curriculum Team',
      status: 'published' as ContentStatus,
      type: 'Archived Chapter'
    }
  ]);

  const advancePipeline = (id: string) => {
    setPipelineItems(prev => prev.map(item => {
      if (item.id === id) {
        let nextStatus: ContentStatus = 'published';
        if (item.status === 'draft') nextStatus = 'review';
        else if (item.status === 'review') nextStatus = 'verified';
        else if (item.status === 'verified') nextStatus = 'published';
        return { ...item, status: nextStatus };
      }
      return item;
    }));
  };

  const handleCreateStudent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!studentName.trim()) return;

    const newId = `STD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setCreatedNotice(`Student successfully created! ID: ${newId} | Initial Passcode: CBSE2026`);
    setStudentName('');
    setStudentRoll('');
    setTimeout(() => setCreatedNotice(null), 5000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 space-y-8 bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 border-b border-slate-200 pb-6">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-semibold px-2 py-0.5 rounded bg-amber-100 text-amber-900 border border-amber-300">
              Board Coordinator Clearance
            </span>
            <span className="text-xs text-slate-500">
              Academic Control & Verification Cell
            </span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Admin Governance Portal
          </h1>
          <p className="text-slate-600 text-sm mt-1">
            Control prescribed syllabus years, manage the DRAFT → REVIEW → VERIFIED → PUBLISHED pipeline, and create student accounts.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex items-center gap-1 p-1 bg-slate-100 rounded-xl text-xs font-semibold">
          <button
            onClick={() => setActiveAdminTab('syllabus')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeAdminTab === 'syllabus' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Syllabus Control
          </button>
          <button
            onClick={() => setActiveAdminTab('pipeline')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeAdminTab === 'pipeline' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Verification Pipeline
          </button>
          <button
            onClick={() => setActiveAdminTab('students')}
            className={`px-3 py-1.5 rounded-lg transition-all ${
              activeAdminTab === 'students' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
            }`}
          >
            Student Enrollment
          </button>
        </div>
      </div>

      {/* SYLLABUS CONTROL TAB */}
      {activeAdminTab === 'syllabus' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-lg font-bold text-slate-900">
              CBSE Academic Year Configuration
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Selecting an academic year dynamically toggles active vs. archived NCERT chapters, poems, and grammar topics.
            </p>
          </div>

          <div className="max-w-md space-y-3">
            <label className="text-xs font-bold text-slate-700 block">
              Active Academic Curriculum Year
            </label>
            <select
              value={syllabusYear}
              onChange={(e) => onUpdateSyllabusYear(e.target.value as SyllabusYear)}
              className="w-full p-3 bg-slate-50 border border-slate-300 rounded-xl text-xs sm:text-sm font-semibold text-slate-900 focus:outline-none focus:border-blue-500"
            >
              <option value="2026-27">Academic Year 2026-27 (Current Prescribed)</option>
              <option value="2025-26">Academic Year 2025-26</option>
              <option value="2024-25">Academic Year 2024-25</option>
            </select>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-200 space-y-1">
              <span className="font-bold text-emerald-900 block">19 Prescribed Active Chapters</span>
              <p className="text-emerald-800">First Flight Prose (9) + Poems (10) + Footprints (9)</p>
            </div>
            <div className="p-4 bg-amber-50 rounded-xl border border-amber-200 space-y-1">
              <span className="font-bold text-amber-900 block">1 Archived Chapter</span>
              <p className="text-amber-800">"The Hack Driver" labeled: Older / Not in Current Syllabus</p>
            </div>
            <div className="p-4 bg-blue-50 rounded-xl border border-blue-200 space-y-1">
              <span className="font-bold text-blue-900 block">Grammar Topics Active</span>
              <p className="text-blue-800">Determiners, Tenses, Modals, Concord, Reported Speech</p>
            </div>
          </div>
        </div>
      )}

      {/* VERIFICATION PIPELINE TAB */}
      {activeAdminTab === 'pipeline' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-lg font-bold text-slate-900">
              PYQ Verification Pipeline (DRAFT → REVIEW → VERIFIED → PUBLISHED)
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Strict Rule: Every question must pass through independent faculty verification before receiving the "Asked in CBSE Board Exam" verified badge.
            </p>
          </div>

          {/* Stepper visual */}
          <div className="grid grid-cols-4 gap-2 text-center text-xs font-semibold py-2">
            <div className="p-2.5 rounded-lg bg-slate-100 text-slate-700">1. DRAFT</div>
            <div className="p-2.5 rounded-lg bg-amber-100 text-amber-900">2. REVIEW</div>
            <div className="p-2.5 rounded-lg bg-blue-100 text-blue-900">3. VERIFIED</div>
            <div className="p-2.5 rounded-lg bg-emerald-100 text-emerald-900">4. PUBLISHED</div>
          </div>

          <div className="space-y-3">
            {pipelineItems.map((item) => (
              <div 
                key={item.id}
                className="p-4 bg-slate-50 rounded-xl border border-slate-200 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="font-bold text-slate-900">{item.title}</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-white border border-slate-200 text-slate-600">
                      {item.type}
                    </span>
                  </div>
                  <span className="text-slate-500">Author: {item.author} • Chapter: {item.chapter}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className={`px-2.5 py-1 rounded-full uppercase text-[10px] font-bold ${
                    item.status === 'published' ? 'bg-emerald-100 text-emerald-900' :
                    item.status === 'verified' ? 'bg-blue-100 text-blue-900' :
                    item.status === 'review' ? 'bg-amber-100 text-amber-900' : 'bg-slate-200 text-slate-800'
                  }`}>
                    {item.status}
                  </span>

                  {item.status !== 'published' && (
                    <button
                      onClick={() => advancePipeline(item.id)}
                      className="px-3 py-1 bg-slate-900 text-white rounded-lg text-xs font-semibold hover:bg-slate-800 transition-colors"
                    >
                      Advance →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* STUDENT ENROLLMENT TAB */}
      {activeAdminTab === 'students' && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-xs space-y-6">
          <div className="border-b border-slate-100 pb-3">
            <h2 className="text-lg font-bold text-slate-900">
              Student Registration & Credential Provisioning
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              Requirement: Students must be created by admin. Never use frontend-only authentication.
            </p>
          </div>

          {createdNotice && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-xl flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>{createdNotice}</span>
            </div>
          )}

          <form onSubmit={handleCreateStudent} className="max-w-xl space-y-4 text-xs sm:text-sm">
            <div>
              <label className="font-semibold text-slate-700 block mb-1">Full Student Name</label>
              <input
                type="text"
                required
                placeholder="e.g. Rohan Mehra"
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="font-semibold text-slate-700 block mb-1">Class 10 Board Roll Number</label>
                <input
                  type="text"
                  placeholder="e.g. 10245"
                  value={studentRoll}
                  onChange={(e) => setStudentRoll(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>

              <div>
                <label className="font-semibold text-slate-700 block mb-1">Affiliated School</label>
                <input
                  type="text"
                  value={studentSchool}
                  onChange={(e) => setStudentSchool(e.target.value)}
                  className="w-full p-2.5 bg-slate-50 border border-slate-200 rounded-lg text-xs"
                />
              </div>
            </div>

            <button
              type="submit"
              className="px-5 py-2.5 bg-blue-600 text-white font-semibold text-xs rounded-lg hover:bg-blue-700 transition-colors flex items-center gap-1.5"
            >
              <UserPlus className="w-4 h-4" /> Provision Student Account
            </button>
          </form>
        </div>
      )}
    </div>
  );
};
