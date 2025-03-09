'use client';

const EmptyState = ({ icon, title, description, buttonText, buttonAction }) => {
  return (
    <div className="text-center p-8 rounded-lg bg-white shadow-sm border border-gray-100">
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600 mb-6">{description}</p>
      {buttonText && buttonAction && (
        <button
          className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
          onClick={buttonAction}
        >
          {buttonText}
        </button>
      )}
    </div>
  );
};

export default EmptyState;