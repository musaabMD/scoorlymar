'use client';

import React from 'react';

const StudyTab = ({ examContent }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 overflow-auto">
      <div dangerouslySetInnerHTML={{ __html: examContent.prep }} />
    </div>
  );
};

export default StudyTab;