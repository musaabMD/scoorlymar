// USMLEBlueprint.js - With expandable subtopics
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

export default function USMLEBlueprint() {
  // State to track which topics are expanded
  const [expandedTopics, setExpandedTopics] = useState({});

  // Toggle expanded state for a topic
  const toggleTopic = (index) => {
    setExpandedTopics(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  // USMLE Step 2 CK exam blueprint data with ranges and subtopics
  const examData = {
    name: "USMLE Step 2 CK",
    topics: [
      { 
        name: 'Internal Medicine', 
        range: '65-75', 
        percentage: '18-22',
        subtopics: [
          { name: 'Cardiology', range: '15-20' },
          { name: 'Pulmonology', range: '10-15' },
          { name: 'Gastroenterology', range: '10-15' },
          { name: 'Nephrology', range: '8-12' },
          { name: 'Endocrinology', range: '8-12' },
          { name: 'Hematology/Oncology', range: '7-10' },
          { name: 'Infectious Disease', range: '7-10' }
        ]
      },
      { 
        name: 'Surgery', 
        range: '55-65', 
        percentage: '16-19',
        subtopics: [
          { name: 'General Surgery', range: '15-20' },
          { name: 'Trauma', range: '10-15' },
          { name: 'Orthopedics', range: '10-15' },
          { name: 'Urology', range: '5-10' },
          { name: 'Neurosurgery', range: '5-8' },
          { name: 'Vascular Surgery', range: '5-8' },
          { name: 'Transplantation', range: '3-6' }
        ]
      },
      { 
        name: 'Pediatrics', 
        range: '50-60', 
        percentage: '14-17',
        subtopics: [
          { name: 'Neonatology', range: '10-15' },
          { name: 'Development', range: '8-12' },
          { name: 'Pediatric Infectious Disease', range: '8-12' },
          { name: 'Pediatric Emergencies', range: '8-12' },
          { name: 'Congenital Disorders', range: '7-10' },
          { name: 'Adolescent Medicine', range: '5-8' }
        ]
      },
      { 
        name: 'Obstetrics & Gynecology', 
        range: '45-55', 
        percentage: '13-16',
        subtopics: [
          { name: 'Pregnancy & Delivery', range: '15-20' },
          { name: 'Fetal Development', range: '8-12' },
          { name: 'Gynecological Disorders', range: '8-12' },
          { name: 'Menstrual Disorders', range: '6-10' },
          { name: 'Infertility', range: '5-8' },
          { name: 'Gynecological Oncology', range: '5-8' }
        ]
      },
      { 
        name: 'Psychiatry', 
        range: '35-45', 
        percentage: '10-13',
        subtopics: [
          { name: 'Mood Disorders', range: '8-12' },
          { name: 'Anxiety Disorders', range: '7-10' },
          { name: 'Psychotic Disorders', range: '6-10' },
          { name: 'Substance Use Disorders', range: '5-8' },
          { name: 'Personality Disorders', range: '3-6' },
          { name: 'Child & Adolescent Psychiatry', range: '3-6' }
        ]
      },
      { 
        name: 'Family Medicine', 
        range: '25-35', 
        percentage: '7-10',
        subtopics: [
          { name: 'Preventive Care', range: '6-10' },
          { name: 'Chronic Disease Management', range: '6-10' },
          { name: 'Geriatrics', range: '5-8' },
          { name: 'Palliative Care', range: '3-6' },
          { name: 'Sports Medicine', range: '2-5' },
          { name: 'Community Medicine', range: '2-4' }
        ]
      },
      { 
        name: 'Emergency Medicine', 
        range: '20-30', 
        percentage: '6-9',
        subtopics: [
          { name: 'Trauma', range: '5-8' },
          { name: 'Cardiovascular Emergencies', range: '4-7' },
          { name: 'Respiratory Emergencies', range: '3-6' },
          { name: 'Toxicology', range: '3-5' },
          { name: 'Environmental Emergencies', range: '2-4' },
          { name: 'Triage & Initial Assessment', range: '2-4' }
        ]
      },
      { 
        name: 'Preventive Medicine & Public Health', 
        range: '15-25', 
        percentage: '4-7',
        subtopics: [
          { name: 'Biostatistics', range: '4-7' },
          { name: 'Epidemiology', range: '4-7' },
          { name: 'Healthcare Systems', range: '3-5' },
          { name: 'Occupational Medicine', range: '2-4' },
          { name: 'Global Health', range: '1-3' },
          { name: 'Ethics', range: '1-3' }
        ]
      }
    ]
  };

  // Estimate total questions based on midpoint of ranges
  const totalQuestions = "340-360";
  
  return (
    <Card className="max-w-3xl mx-auto border bg-white rounded-xl shadow-sm overflow-hidden">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-8">
        <CardTitle className="text-3xl font-bold">{examData.name}</CardTitle>
        <CardDescription className="text-blue-100 text-lg mt-1">Examination Blueprint</CardDescription>
        <Badge className="mt-4 bg-white text-blue-800 hover:bg-blue-50">
          Total: {totalQuestions} Questions
        </Badge>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="mb-4">
          <div className="flex items-center justify-between px-4 py-2 font-medium text-sm text-gray-500">
            <div className="flex-grow">Topic</div>
            <div className="flex-shrink-0 w-24 text-center">Range</div>
            <div className="flex-shrink-0 w-24 text-center">%</div>
          </div>
        </div>
        
        <div className="space-y-3">
          {examData.topics.map((topic, idx) => {
            const isExpanded = expandedTopics[idx] || false;
            
            return (
              <div key={idx} className="border-b last:border-b-0">
                {/* Main topic row - clickable to expand */}
                <div 
                  className="flex items-center p-3 rounded-lg transition-colors hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleTopic(idx)}
                >
                  {/* Square Ordered Number */}
                  <div className="flex-shrink-0 w-10 h-10 rounded-md bg-blue-600 text-white font-bold flex items-center justify-center mr-4 shadow-sm">
                    {idx + 1}
                  </div>
                  
                  {/* Topic Information */}
                  <div className="flex-grow flex items-center">
                    <h3 className="font-medium text-gray-900 text-lg">{topic.name}</h3>
                    <div className="ml-2">
                      {isExpanded ? 
                        <ChevronUp className="h-5 w-5 text-gray-500" /> : 
                        <ChevronDown className="h-5 w-5 text-gray-500" />
                      }
                    </div>
                  </div>
                  
                  {/* Range */}
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="font-bold text-blue-700">{topic.range}</div>
                  </div>
                  
                  {/* Percentage */}
                  <div className="flex-shrink-0 w-24 text-center">
                    <div className="font-bold text-gray-700">{topic.percentage}%</div>
                  </div>
                </div>
                
                {/* Subtopics section - visible when expanded */}
                {isExpanded && (
                  <div className="bg-gray-50 pl-14 pr-4 py-3 border-t border-gray-100">
                    <div className="mb-2 text-sm font-medium text-gray-600">Subtopics</div>
                    <div className="space-y-2">
                      {topic.subtopics.map((subtopic, subIdx) => (
                        <div key={subIdx} className="flex items-center p-2 hover:bg-gray-100 rounded-md">
                          <div className="flex-grow text-gray-800">{subtopic.name}</div>
                          <div className="flex-shrink-0 w-20 text-right text-blue-600 font-medium">{subtopic.range}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}