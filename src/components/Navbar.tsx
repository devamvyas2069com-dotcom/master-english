import React, { useState } from 'react';
import { 
  BookOpen, 
  Search, 
  GraduationCap, 
  Bookmark, 
  AlertCircle, 
  User, 
  ShieldCheck, 
  CheckCircle2, 
  Layers, 
  FileText, 
  Sparkles,
  Menu,
  X
} from 'lucide-react';
import { UserProfile, SyllabusYear } from '../types';

interface NavbarProps {
  currentTab: string;
  setCurrentTab: (tab: string) => void;
  currentUser: UserProfile;
  onOpenLogin: () => void;
  bookmarksCount: number;
  mistakesCount: number;
  syllabusYear: SyllabusYear;
  onSearchSelect?: (term: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentTab,
  setCurrentTab,
  currentUser,
  onOpenLogin,
  bookmarksCount,
  mistakesCount,
  syllabusYear,
  onSearchSelect
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchOpen, setSearchOpen] = useState(false);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      if (onSearchSelect) onSearchSelect(searchQuery.trim());
      setCurrentTab('question-bank');
      setSearchOpen(false);
    }
  };

  const navLinks = [
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'literature', label: 'Literature' },
    { id: 'grammar', label: 'Grammar' },
    { id: 'reading-writing', label: 'Reading & Writing' },
    { id: 'pyqs', label: 'PYQs (Board)' },
    { id: 'question-bank', label: 'Question Bank' },
    { id: 'mock-tests', label: 'Mock Tests' },
    { id: 'board-prep', label: 'Board Prep' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      {/* Top Academic Notice Bar */}
      <div className="bg-slate-900 text-slate-300 text-xs py-1.5 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center px-1.5 py-0.5 rounded text-[10px] font-semibold bg-blue-600 text-white">
              CBSE CLASS 10
            </span>
            <span className="text-slate-300 hidden sm:inline">
              Curriculum Aligned: <strong className="text-white font-medium">English Language & Literature (Code 184)</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-xs">
            <span className="text-slate-400">
              Academic Year: <span className="text-blue-300 font-semibold">{syllabusYear}</span>
            </span>
            <span className="text-slate-600">|</span>
            {currentUser.role === 'admin' ? (
              <button 
                onClick={() => setCurrentTab('admin')} 
                className="text-amber-400 hover:text-amber-300 font-medium flex items-center gap-1"
              >
                <ShieldCheck className="w-3.5 h-3.5" /> Admin Console
              </button>
            ) : currentUser.role === 'teacher' ? (
              <button 
                onClick={() => setCurrentTab('teacher')} 
                className="text-blue-300 hover:text-white font-medium flex items-center gap-1"
              >
                <GraduationCap className="w-3.5 h-3.5" /> Teacher Portal
              </button>
            ) : (
              <span className="text-slate-400 hidden md:inline">
                Evaluation: 80 Marks Theory + 20 Marks Internal
              </span>
            )}
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <button 
              onClick={() => setCurrentTab('home')} 
              className="flex items-center gap-2.5 text-left group"
            >
              <div className="w-9 h-9 rounded-lg bg-blue-600 text-white flex items-center justify-center font-bold text-lg shadow-sm group-hover:bg-blue-700 transition-colors">
                <BookOpen className="w-5 h-5" />
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-slate-900 block leading-tight">
                  ENGLISH MASTER 10
                </span>
                <span className="text-[10px] uppercase tracking-wider text-slate-500 font-medium block">
                  CBSE Academic Excellence
                </span>
              </div>
            </button>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navLinks.map(link => {
              const isActive = currentTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => setCurrentTab(link.id)}
                  className={`px-3 py-1.5 text-sm font-medium rounded-md transition-colors ${
                    isActive 
                      ? 'text-blue-700 bg-blue-50 font-semibold' 
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100/70'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>

          {/* Quick Search & Utilities */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Input (Desktop) */}
            <form onSubmit={handleSearchSubmit} className="relative hidden md:block">
              <input
                type="text"
                placeholder="Search chapters, PYQs, characters..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-52 lg:w-64 pl-8 pr-3 py-1.5 text-xs bg-slate-100 hover:bg-slate-200/70 focus:bg-white text-slate-900 rounded-lg border border-transparent focus:border-blue-400 focus:outline-none transition-all"
              />
              <Search className="w-3.5 h-3.5 text-slate-400 absolute left-2.5 top-2.5 pointer-events-none" />
            </form>

            {/* Bookmarks Icon */}
            <button
              onClick={() => setCurrentTab('bookmarks')}
              title="Saved Bookmarks"
              className={`p-2 rounded-lg relative transition-colors ${
                currentTab === 'bookmarks' ? 'text-blue-700 bg-blue-50' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <Bookmark className="w-4 h-4" />
              {bookmarksCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-blue-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {bookmarksCount}
                </span>
              )}
            </button>

            {/* Mistake Book Icon */}
            <button
              onClick={() => setCurrentTab('mistakes')}
              title="My Mistake Book"
              className={`p-2 rounded-lg relative transition-colors ${
                currentTab === 'mistakes' ? 'text-amber-700 bg-amber-50' : 'text-slate-600 hover:bg-slate-100'
              }`}
            >
              <AlertCircle className="w-4 h-4 text-amber-600" />
              {mistakesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-amber-600 text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">
                  {mistakesCount}
                </span>
              )}
            </button>

            {/* User Account / Role Switcher */}
            <button
              onClick={onOpenLogin}
              className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-lg border border-slate-200 bg-white hover:bg-slate-50 transition-all text-xs text-left"
            >
              <div className="w-6 h-6 rounded-full bg-slate-200 flex items-center justify-center text-slate-700 font-semibold text-xs overflow-hidden">
                {currentUser.avatar ? (
                  <img src={currentUser.avatar} alt={currentUser.name} className="w-full h-full object-cover" />
                ) : (
                  <User className="w-3.5 h-3.5" />
                )}
              </div>
              <div className="hidden sm:block">
                <span className="font-semibold text-slate-800 block leading-tight text-xs truncate max-w-[100px]">
                  {currentUser.name.split(' ')[0]}
                </span>
                <span className="text-[10px] text-slate-500 capitalize block leading-tight">
                  {currentUser.role}
                </span>
              </div>
            </button>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-5 space-y-2">
          {/* Mobile search */}
          <form onSubmit={handleSearchSubmit} className="relative mb-3">
            <input
              type="text"
              placeholder="Search chapters, PYQs, characters..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-2 text-sm bg-slate-100 rounded-lg border border-slate-200 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-2.5 top-3" />
          </form>

          <div className="grid grid-cols-2 gap-1 text-sm font-medium">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => {
                  setCurrentTab(link.id);
                  setMobileMenuOpen(false);
                }}
                className={`text-left px-3 py-2 rounded-md ${
                  currentTab === link.id ? 'bg-blue-50 text-blue-700 font-semibold' : 'text-slate-700 hover:bg-slate-100'
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>

          <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
            <button 
              onClick={() => { setCurrentTab('teacher'); setMobileMenuOpen(false); }} 
              className="hover:text-blue-600"
            >
              Teacher Portal
            </button>
            <button 
              onClick={() => { setCurrentTab('admin'); setMobileMenuOpen(false); }} 
              className="hover:text-blue-600"
            >
              Admin Verification
            </button>
            <button 
              onClick={() => { onOpenLogin(); setMobileMenuOpen(false); }} 
              className="text-blue-600 font-medium"
            >
              Switch Role / Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
