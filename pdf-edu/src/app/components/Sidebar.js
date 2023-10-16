// components/Sidebar.js
import React from 'react';

function Sidebar() {
  return (
    <aside className="bg-gray-200 p-4">
      <h2 className="text-xl font-bold mb-2">사이드바</h2>
      <ul>
        <li className="mb-1"><a href="#">링크 1</a></li>
        <li className="mb-1"><a href="#">링크 2</a></li>
        <li className="mb-1"><a href="#">링크 3</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;