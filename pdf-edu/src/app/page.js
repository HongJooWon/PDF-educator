'use client';

import React, { useState } from 'react';

export default function Home() {
  const [sliderValue, setSliderValue] = useState(5);
  const [file, setFile] = useState(null);

  function handleFileChange(e) {
    setFile(e.target.files[0]);
    console.log(e.target.files[0]); // 추출된 텍스트 출력
  }

  async function handleStartClick() {
    if (!file) return;

    const formData = new FormData();
    formData.append("pdf", file);

    const response = await fetch("/api/extractFile", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    console.log(data.text); // 추출된 텍스트 출력
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-14 rounded-lg shadow-md w-200">
        <h1 className="text-2xl mb-4">파일 업로드</h1>
        <p className="mb-4">아래의 버튼을 사용하여 파일을 업로드해주세요.</p>
        <label className="cursor-pointer bg-blue-500 text-white px-4 py-2 rounded">
          파일 선택
          <input type="file" className="hidden" onChange={handleFileChange} />
        </label>

        {/* Slider Div */}
        <div className="mt-6">
          <p className="mb-2">문제 수: {sliderValue}</p>
          <input
            type="range"
            min="5"
            max="30"
            value={sliderValue}
            onChange={(e) => setSliderValue(e.target.value)}
            className="w-full"
          />
        </div>

        {/* 시작하기 Button */}
        <div className="mt-6">
          <button className="bg-green-500 text-white px-4 py-2 rounded" onClick={handleStartClick}>
            시작하기
          </button>
        </div>
      </div>
    </div>
  );
}