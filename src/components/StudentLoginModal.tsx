import React, { useState } from 'react';
import { 
  X, 
  Lock, 
  User, 
  Fingerprint, 
  KeyRound, 
  ShieldCheck, 
  GraduationCap, 
  AlertCircle, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { UserProfile } from '../types';

interface StudentLoginModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentUser: UserProfile;
  onLoginSuccess: (user: UserProfile) => void;
}

export const StudentLoginModal: React.FC<StudentLoginModalProps> = ({
  isOpen,
  onClose,
  currentUser,
  onLoginSuccess
}) => {
  const [roleTab, setRoleTab] = useState<'student' | 'teacher' | 'admin'>('student');
  const [identifier, setIdentifier] = useState('STD-2026-1042');
  const [password, setPassword] = useState('passcode123');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [passkeyNotice, setPasskeyNotice] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleRoleSelect = (role: 'student' | 'teacher' | 'admin') => {
    setRoleTab(role);
    setError(null);
    setPasskeyNotice(null);
    if (role === 'student') {
      setIdentifier('STD-2026-1042');
      setPassword('student123');
    } else if (role === 'teacher') {
      setIdentifier('TCH-801');
      setPassword('teacher123');
    } else {
      setIdentifier('ADM-001');
      setPassword('admin123');
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ identifier, password, role: roleTab })
      });

      const data = await response.json();
      if (!response.ok || data.error) {
        throw new Error(data.error || 'Authentication failed');
      }

      onLoginSuccess(data.user);
      onClose();
    } catch (err: any) {
      setError(err.message || 'Server authentication error');
    } finally {
      setLoading(false);
    }
  };

  const handlePasskeyLogin = async () => {
    setLoading(true);
    setError(null);
    setPasskeyNotice('Verifying biometric credential on device...');

    try {
      const response = await fetch('/api/auth/passkey-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ studentId: identifier })
      });

      const data = await response.json();
      if (!response.ok || !data.success) {
        throw new Error('Passkey verification failed');
      }

      setTimeout(() => {
        onLoginSuccess(data.user);
        onClose();
      }, 700);
    } catch (err: any) {
      setError(err.message || 'Passkey authentication failed');
      setPasskeyNotice(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs">
      <div className="bg-white rounded-2xl border border-slate-200 shadow-xl max-w-md w-full overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="px-6 pt-6 pb-4 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-lg font-bold text-slate-900">
              Institutional Login Portal
            </h2>
            <p className="text-xs text-slate-500">
              CBSE Class 10 Centralized Academic System
            </p>
          </div>
          <button 
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Role Segmented Tabs */}
        <div className="px-6 pt-4">
          <div className="grid grid-cols-3 gap-1 p-1 bg-slate-100 rounded-lg text-xs font-semibold">
            <button
              type="button"
              onClick={() => handleRoleSelect('student')}
              className={`py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                roleTab === 'student' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <User className="w-3.5 h-3.5" />
              Student
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('teacher')}
              className={`py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                roleTab === 'teacher' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5" />
              Teacher
            </button>
            <button
              type="button"
              onClick={() => handleRoleSelect('admin')}
              className={`py-1.5 rounded-md transition-all flex items-center justify-center gap-1.5 ${
                roleTab === 'admin' ? 'bg-white text-blue-700 shadow-xs' : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <ShieldCheck className="w-3.5 h-3.5" />
              Admin
            </button>
          </div>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-4">
          {error && (
            <div className="p-3 bg-red-50 border border-red-200 text-red-700 text-xs rounded-lg flex items-start gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <span>{error}</span>
            </div>
          )}

          {passkeyNotice && (
            <div className="p-3 bg-blue-50 border border-blue-200 text-blue-700 text-xs rounded-lg flex items-center gap-2">
              <Fingerprint className="w-4 h-4 animate-pulse shrink-0" />
              <span>{passkeyNotice}</span>
            </div>
          )}

          <div className="space-y-1">
            <label className="text-xs font-semibold text-slate-700 block">
              {roleTab === 'student' ? 'Student ID / Roll No' : roleTab === 'teacher' ? 'Teacher ID' : 'Admin ID'}
            </label>
            <div className="relative">
              <input
                type="text"
                required
                value={identifier}
                onChange={(e) => setIdentifier(e.target.value)}
                placeholder={roleTab === 'student' ? 'e.g. STD-2026-1042' : 'Enter designated ID'}
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
              />
              <User className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-slate-700 block">
                Password / Passcode
              </label>
              <button 
                type="button"
                onClick={() => alert('Please contact your School Examination Incharge or Admin to reset student credentials.')}
                className="text-[11px] text-blue-600 hover:text-blue-800 font-medium"
              >
                Forgot Password?
              </button>
            </div>
            <div className="relative">
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter password or passcode"
                className="w-full pl-9 pr-3 py-2 text-sm bg-slate-50 border border-slate-200 rounded-lg focus:bg-white focus:border-blue-500 focus:outline-none transition-colors"
              />
              <Lock className="w-4 h-4 text-slate-400 absolute left-3 top-2.5" />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-2.5 bg-blue-600 text-white font-semibold text-sm rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-50"
          >
            {loading ? 'Authenticating with Board Server...' : `Sign in as ${roleTab.charAt(0).toUpperCase() + roleTab.slice(1)}`}
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Biometric Passkey Alternative */}
          <div className="relative py-2">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-slate-200"></div>
            </div>
            <div className="relative flex justify-center text-[11px] uppercase">
              <span className="bg-white px-2 text-slate-400 font-medium">Or Use Secure Passkey</span>
            </div>
          </div>

          <button
            type="button"
            onClick={handlePasskeyLogin}
            disabled={loading}
            className="w-full py-2.5 border border-slate-300 bg-slate-50 hover:bg-slate-100 text-slate-800 font-medium text-xs rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            <Fingerprint className="w-4 h-4 text-blue-600" />
            Sign in with Device Passkey / Biometrics
          </button>

          <p className="text-[11px] text-slate-400 text-center pt-2">
            Accounts are provisioned by CBSE Affiliated School Administrators.
          </p>
        </form>
      </div>
    </div>
  );
};
