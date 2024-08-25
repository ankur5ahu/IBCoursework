"use client";

import React from 'react';
import { useStore } from '@/store/useStore';
import CourseCard from '@/components/CourseCard';
import Link from 'next/link';

const CourseWorkList: React.FC = () => {
  const { files } = useStore();

  return (
    <div className="my-10">
      <p className="text-lg font-medium text-neutrals-700">My coursework</p>

      {files.length > 0 ? (
        <div className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {files.map((file, index) => (
            <Link href={`/coursework/${index}`} key={index}>
              <CourseCard
                title={file.essayTitle}
                description={file.essayTitle}
                subject={file.subject}
                stars={Math.floor(Math.random() * 10) + 1}
                words={Math.floor(Math.random() * 3000) + 1000}
                time={Math.floor(Math.random() * 30) + 10}
                language="English"
              />
            </Link>
          ))}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center h-[200px]">
          {/* <img src="/noCoursework.png" alt="No coursework" className="w-48 mb-4" /> */}
          <p className="text-neutrals-500">No coursework available.</p>
        </div>
      )}

      {files.length > 2 && (
        <p className="font-medium text-neutrals-500 text-center cursor-pointer">View all</p>
      )}
    </div>
  );
};

export default CourseWorkList;