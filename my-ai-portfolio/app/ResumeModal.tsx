// ResumeModal.tsx

import React from "react";

const ResumeModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl p-6">
        <h2 className="text-xl font-bold">My Resume</h2>
        <p>Here is my resume...</p>
        <button onClick={onClose} className="bg-red-500 text-white px-4 py-2 rounded">
          Close
        </button>
      </div>
    </div>
  );
};

export default ResumeModal;
