import React, { useState, useEffect } from 'react';
import { ArrowLeft, Search, Book, FileText, Filter, Pin, XCircle, BookOpen, CheckSquare, Stethoscope } from 'lucide-react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { useRouter } from 'next/navigation';

const ExamDetailHeader = ({
  exam,
  activeTab,
  setActiveTab,
  showPinned,
  setShowPinned,
  pinnedCount
}) => {
  const router = useRouter();
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  
  // Mock filter states
  const [subject, setSubject] = useState("cardiology");
  const [review, setReview] = useState("review_all");

  // Content type options
  const contentTypes = [
    { label: "Prep Notes", value: "prep", icon: BookOpen },
    { label: "MCQs", value: "mcqs", icon: FileText },
    { label: "Summary", value: "review", icon: CheckSquare }
  ];

  // Mock data for filters
  const subjects = [
    { label: "Cardiology", value: "cardiology" },
    { label: "Neurology", value: "neurology" },
    { label: "Immunology", value: "immunology" },
    { label: "Pharmacology", value: "pharmacology" }
  ];
  
  const topics = [
    { label: "Heart Failure", value: "heart_failure" },
    { label: "Arrhythmias", value: "arrhythmias" },
    { label: "Stroke", value: "stroke" },
    { label: "Antibiotics", value: "antibiotics" }
  ];
  
  const reviewOptions = [
    { label: "Review All", value: "review_all", icon: Book },
    { label: "Review Pinned", value: "review_pinned", icon: Pin },
    { label: "Review Incorrect", value: "review_incorrect", icon: XCircle }
  ];

  // Handle scroll event to make header sticky
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 64) { // Height of the title bar
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle back button click
  const handleBack = () => {
    router.push('/');
  };

  // Handle content type change
  const handleContentTypeChange = (value) => {
    setActiveTab(value);
    if (value !== 'mcqs') {
      setShowPinned(false);
    }
  };

  const handleSubjectChange = (value) => {
    setSubject(value);
  };

  const renderSearchBar = (isMobile = false) => (
    <div className="relative flex-1">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Input
        type="text"
        placeholder="Search questions..."
        className={`w-full pl-10 pr-4 py-2 rounded-lg bg-white border-gray-200 ${isMobile ? 'text-sm' : ''}`}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </div>
  );

  const renderFilters = (isMobile = false) => {
    // Get content type display info
    const selectedContentType = contentTypes.find(ct => ct.value === activeTab) || contentTypes[0];
    const ContentTypeIcon = selectedContentType.icon;

    // Get display text for subject filter
    const subjectDisplayText = subjects.find(s => s.value === subject)?.label || "All Subjects";

    // Get display and icon for review
    const selectedReview = reviewOptions.find(o => o.value === review) || reviewOptions[0];
    const ReviewIcon = selectedReview.icon;

    return (
      <div className={`flex gap-2 ${isMobile ? 'w-full flex-col' : 'justify-center'}`}>
        {/* Content Type Filter */}
        <div className="relative">
          <Select 
            value={activeTab}
            onValueChange={handleContentTypeChange}
          >
            <SelectTrigger className={`${isMobile ? 'w-full' : 'w-40'} h-10 text-sm font-medium bg-white`}>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500 mb-0.5">Content</span>
                <div className="flex items-center">
                  <ContentTypeIcon className="w-4 h-4 mr-1.5" />
                  <span className="truncate">{selectedContentType.label}</span>
                </div>
              </div>
            </SelectTrigger>
            <SelectContent>
              {contentTypes.map(item => {
                const Icon = item.icon;
                return (
                  <SelectItem key={item.value} value={item.value}>
                    <div className="flex items-center gap-2">
                      <Icon className="w-4 h-4" />
                      {item.label}
                    </div>
                  </SelectItem>
                );
              })}
            </SelectContent>
          </Select>
        </div>

        {/* Subject Filter */}
        <div className="relative">
          <Select 
            value={subject}
            onValueChange={handleSubjectChange}
          >
            <SelectTrigger className={`${isMobile ? 'w-full' : 'w-40'} h-10 text-sm bg-white`}>
              <div className="flex flex-col items-start">
                <span className="text-xs text-gray-500 mb-0.5">Subject</span>
                <div className="flex items-center">
                  <Book className="w-4 h-4 mr-1.5" />
                  <span className="truncate">{subjectDisplayText}</span>
                </div>
              </div>
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Subjects</SelectItem>
              <div className="h-px bg-gray-200 my-1"></div>
              {subjects.map(item => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Status Filter */}
        <Select value={review} onValueChange={setReview}>
          <SelectTrigger className={`${isMobile ? 'w-full' : 'w-40'} h-10 text-sm bg-white`}>
            <div className="flex flex-col items-start">
              <span className="text-xs text-gray-500 mb-0.5">Filter</span>
              <div className="flex items-center">
                <ReviewIcon className="w-4 h-4 mr-1.5" />
                <span className="truncate">{selectedReview.label}</span>
              </div>
            </div>
          </SelectTrigger>
          <SelectContent>
            {reviewOptions.map(item => {
              const Icon = item.icon;
              return (
                <SelectItem key={item.value} value={item.value}>
                  <div className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </div>
                </SelectItem>
              );
            })}
          </SelectContent>
        </Select>
      </div>
    );
  };

  return (
    <>
      {/* Main header that doesn't scroll */}
      <div className="w-full bg-white shadow-md">
        {/* Title bar with app name, logo and exam name */}
        <div className="flex items-center justify-between p-4 border-b">
          <div className="flex items-center gap-3">
            <button
              onClick={handleBack}
              className="text-blue-600 hover:text-blue-800"
            >
              <ArrowLeft size={18} />
            </button>
            
            {/* App logo and name */}
            <div className="flex items-center mr-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center mr-2">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-lg text-blue-600">Scoorly</span>
            </div>
            
            {/* Separator */}
            <div className="h-6 w-px bg-gray-300 hidden sm:block"></div>
            
            {/* Exam name with icon */}
            <div className="flex items-center ml-2 hidden sm:flex">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-full flex items-center justify-center mr-2">
                <Stethoscope size={16} strokeWidth={1.5} color="white" />
              </div>
              <h1 className="text-lg font-semibold text-slate-900">
                ANCC AGACNP-BC
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky filters section */}
      <div className={`w-full bg-white border-b ${isSticky ? 'sticky top-0 z-50 shadow-lg transition-shadow duration-300' : ''}`}>
        {/* Content Type Tabs - Mobile Only */}
        <div className="sm:hidden flex border-b">
          {contentTypes.map(contentType => (
            <button
              key={contentType.value}
              className={`flex-1 py-3 flex flex-col items-center justify-center 
                ${activeTab === contentType.value 
                  ? 'text-blue-600 border-b-2 border-blue-500' 
                  : 'text-gray-500 border-b-2 border-transparent'}`}
              onClick={() => handleContentTypeChange(contentType.value)}
            >
              <contentType.icon size={20} className="mb-1" />
              <span className="text-xs font-medium">{contentType.label}</span>
            </button>
          ))}
        </div>

        {/* Search and filters */}
        <div className="px-2 md:px-4 py-3 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            {/* Mobile view: search bar and filter toggle */}
            <div className="block md:hidden">
              <div className="flex items-center gap-2 mb-3">
                {renderSearchBar(true)}
                <button 
                  onClick={() => setShowMobileFilters(!showMobileFilters)}
                  className="flex-shrink-0 p-2 bg-white rounded-lg border border-gray-200"
                >
                  <Filter className="w-5 h-5 text-gray-500" />
                </button>
              </div>
              
              {showMobileFilters && (
                <div className="space-y-3 mt-2 p-3 bg-white rounded-lg border border-gray-200">
                  {renderFilters(true)}
                </div>
              )}
            </div>

            {/* Desktop view: filters and search in one row */}
            <div className="hidden md:flex flex-col items-center gap-4">
              <div className="w-full flex justify-center mb-3">
                {renderFilters()}
              </div>
              <div className="w-full max-w-xl">
                {renderSearchBar()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExamDetailHeader;