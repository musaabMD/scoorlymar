'use client';
import EmptyState from '@/components/EmptyState';

const Chat = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-2xl mx-auto">
      <div className="flex flex-col items-center justify-center py-8">
        <EmptyState 
          icon="💬"
          title="Chat Coming Soon"
          description="We're working on an AI assistant to help you with your studies. Stay tuned for this exciting feature!"
          buttonText="Back to Study"
          buttonAction={() => console.log('Back to study')}
        />
      </div>
    </div>
  );
};

export default Chat;