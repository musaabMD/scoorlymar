'use client';

const Profile = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 border border-gray-200 max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
      
      <div className="space-y-6">
        {/* Profile Header */}
        <div className="flex items-center space-x-4">
          <div className="w-20 h-20 bg-blue-500 rounded-full flex items-center justify-center">
            <span className="text-2xl font-bold text-white">JS</span>
          </div>
          <div>
            <h3 className="text-xl font-semibold">John Smith</h3>
            <p className="text-gray-600">Medical Student</p>
            <p className="text-blue-600 text-sm">Edit Profile</p>
          </div>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 bg-gray-50 rounded-lg p-4">
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">84%</p>
            <p className="text-sm text-gray-600">Average Score</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">126</p>
            <p className="text-sm text-gray-600">Questions</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-gray-800">8</p>
            <p className="text-sm text-gray-600">Study Hours</p>
          </div>
        </div>
        
        {/* Settings List */}
        <div className="space-y-2">
          <h4 className="font-medium text-gray-700">Settings</h4>
          
          <div className="border-t border-gray-100">
            {[
              'Account Settings',
              'Notification Preferences',
              'Study Goals',
              'Privacy',
              'Help & Support',
              'Terms of Service',
              'Log Out'
            ].map((item, index) => (
              <div key={index} className="flex justify-between items-center py-3 px-1 border-b border-gray-100">
                <span className="text-gray-700">{item}</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;