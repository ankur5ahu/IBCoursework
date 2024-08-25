"use client";

import React, { useState } from 'react';
import Tabs from '@/components/Tabs';
import CourseCard from '@/components/CourseCard';

const ExploreCourseWork: React.FC = () => {
  const [selectedTab, setSelectedTab] = useState("all");

  const tabs = [
    { label: "All", value: "all" },
    { label: "IA Example", value: "ia" },
    { label: "EE Example", value: "ee" },
    { label: "IO Example", value: "io" },
    { label: "Tok Example", value: "tok" },
  ];

  const exampleCoursework = [
    {
      title: "The Impact of Climate Change on Polar Bear Populations",
      subject: "Biology HL",
      type: "ee",
      stars: 2,
      words: 2500,
      time: 20,
    },
    {
      title: "Analysis of Sonnet 18 by William Shakespeare",
      subject: "English Literature HL",
      type: "ia",
      stars: 7,
      words: 1500,
      time: 15,
    },
    {
      title: "The Role of Artificial Intelligence in Modern Healthcare",
      subject: "Computer Science HL",
      type: "ee",
      stars: 5,
      words: 3000,
      time: 25,
    },
    {
      title: "Exploring the Ethical Implications of Gene Editing",
      subject: "TOK",
      type: "tok",
      stars: 6,
      words: 2000,
      time: 18,
    },
  ];

  const filteredCoursework = selectedTab === "all" 
    ? exampleCoursework 
    : exampleCoursework.filter(work => work.type === selectedTab);

  return (
    <div className="mt-8">
      <p className="text-lg font-medium text-neutrals-700">Explore coursework</p>
      <div className="my-3">
        <Tabs
          tabs={tabs}
          selectedTab={selectedTab}
          onTabSelect={setSelectedTab}
        />
      </div>
      <div className="my-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        {filteredCoursework.map((work, index) => (
          <CourseCard
            key={index}
            title={work.title}
            description={work.title}
            subject={work.subject}
            stars={work.stars}
            words={work.words}
            time={work.time}
            language="English"
          />
        ))}
      </div>
    </div>
  );
};

export default ExploreCourseWork;
