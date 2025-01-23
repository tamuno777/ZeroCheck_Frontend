"use client";
import React, { useState } from "react";
import CheckInModal from "../components/Check-In";

const page = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="px-4 py-2 bg-black text-white rounded-lg hover:bg-black/90 transition-colors"
      >
        Check-In
      </button>
      <CheckInModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default page;
