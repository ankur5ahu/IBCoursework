import React, { useState } from 'react';
import ProgressBar from './ProgressBar';
import { ChevronDown, ChevronUp } from 'lucide-react';

type AccordionProps = {
  score: number;
  title: string;
  color: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, score, color }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-white rounded-3xl w-full max-w-[615px]">
      <div
        className="p-4 flex justify-between items-center cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="flex items-center space-x-4">
          <div className="w-[60px] flex-shrink-0">
            <ProgressBar value={score} maxValue={10} color={color} />
          </div>
          <div className="min-w-0">
            <p className="text-sm font-medium text-gray-500 truncate">{title}:</p>
            <p className="text-lg font-semibold text-gray-800 truncate">
              Understanding Knowledge Questions
            </p>
          </div>
        </div>
        {isOpen ? <ChevronUp className="flex-shrink-0" /> : <ChevronDown className="flex-shrink-0" />}
      </div>
      {isOpen && (
        <div className="p-4 pt-0 max-w-[600px]">
          <div className='border-b'></div>
          <p className="text-neutrals-700 text-sm font-light my-4">
            The essay identifies and focuses on the knowledge question
            regarding the resolvability of disputes over knowledge claims
            within disciplines.
          </p>
          <div className="font-bold mt-4 text-black">Strengths</div>
          <div className='bg-green-fill border border-green-border rounded-2xl p-4 mt-2'>
            <ul className="list-none text-neutrals-800 font-medium">
              <li className="relative pl-9 leading-0 mb-2">
                <span className="absolute left-0 top-1 w-8 h-8 bg-[url('/correct.svg')] bg-no-repeat"></span>
                Demonstrates a good understanding of the prescribed title and
                the associated knowledge questions.
              </li>
              <li className="relative pl-9">
                <span className="absolute left-0 top-1 w-8 h-8 bg-[url('/correct.svg')] bg-no-repeat"></span>
                Addresses the nature of disputes in both the Natural Sciences
                and Human Sciences effectively.
              </li>
            </ul>
          </div>
          
          <div className="font-bold mt-4 text-black">
            Scope of Improvement
          </div>
          <div className='bg-yellow-fill border border-yellow-500/50 rounded-2xl p-4 mt-2'>
            <ul className="list-none text-neutrals-800">
              <li className="relative pl-9 mb-2">
                <span className="absolute left-0 top-1 w-8 h-8 bg-[url('/warn.svg')] bg-no-repeat"></span>
                Could further explore the implications of these disputes on the
                reliability of knowledge in these areas.
              </li>
              <li className="relative pl-9">
                <span className="absolute left-0 top-1 w-8 h-8 bg-[url('/warn.svg')] bg-no-repeat"></span>
                May benefit from a more in-depth analysis of specific examples
                to support the arguments presented.
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Accordion;