'use client';

import React from 'react';
import EmptyState from '@/components/EmptyState';

const EmptyStateTab = ({ icon, title, description, buttonText, buttonAction }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 border border-gray-200">
      <EmptyState
        icon={icon}
        title={title}
        description={description}
        buttonText={buttonText}
        buttonAction={buttonAction}
      />
    </div>
  );
};

export default EmptyStateTab;