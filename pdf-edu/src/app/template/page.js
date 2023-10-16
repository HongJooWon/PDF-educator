// pages/community.js
import React from 'react';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';

function CommunityPage() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="container mx-auto flex">
        <Sidebar />
        <main className="p-4 flex-1">
          <h2 className="text-2xl font-bold">메인 컨텐츠 박스</h2>
          <p>메인 컨텐츠 내용...</p>
        </main>
      </div>
    </div>
  );
}

export default CommunityPage;