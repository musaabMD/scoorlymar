import React from 'react';
import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Pin } from 'lucide-react';

const PrepNotesTab = ({ examContent }) => {
  // Array of subject tag colors
  const tagColors = {
    'Anatomy': 'bg-blue-500',
    'Physiology': 'bg-green-500',
    'Pathology': 'bg-red-500',
    'Pharmacology': 'bg-purple-500',
    'Diagnosis': 'bg-yellow-500',
    'Treatment': 'bg-orange-500',
    'General': 'bg-gray-500'
  };

  // Extract subject from heading or use default
  const getSubject = (heading) => {
    // Common subject areas - expand as needed
    const subjects = Object.keys(tagColors).filter(s => s !== 'General');
    for (const subject of subjects) {
      if (heading.includes(subject)) return subject;
    }
    return 'General';
  };

  // Transform prep notes to card format
  const prepNotes = examContent.prep.split('<li>').map((item, index) => {
    if (index === 0) return null; // Skip the first split which is just the header
    
    // Extract the heading from the item
    const headingMatch = item.match(/<strong>(.*?):<\/strong>/);
    const heading = headingMatch ? headingMatch[1] : `Note ${index}`;
    
    // Clean up the content
    const content = item
      .replace(/<\/li>[\s\S]*$/, '')
      .replace(/<strong>(.*?):<\/strong>/, '');
    
    // Determine subject tag
    const subject = getSubject(heading);
    
    return { 
      id: index, 
      heading, 
      content,
      subject
    };
  }).filter(Boolean);

  return (
    <div className="flex flex-col space-y-4 p-4">
      {prepNotes.map((note) => (
        <Card
          key={note.id}
          className="relative bg-white border border-gray-300 shadow-md rounded-lg overflow-hidden"
        >
          <CardHeader className="pb-2 pt-4 flex justify-between items-start border-b border-gray-200">
            <h3 className="font-bold text-lg text-gray-800">{note.heading}</h3>
            <Pin 
              size={20} 
              className="text-gray-600" 
              fill="#e53e3e" 
              strokeWidth={1.5}
            />
          </CardHeader>
          
          <CardContent className="py-4">
            <div 
              className="text-gray-700" 
              dangerouslySetInnerHTML={{ __html: note.content }}
            />
          </CardContent>
          
          <CardFooter className="pt-0 pb-3">
            <Badge className={`${tagColors[note.subject]} text-white`}>
              {note.subject}
            </Badge>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

export default PrepNotesTab;