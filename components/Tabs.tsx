import React from 'react';

type Tab = {
    label: string;
    value: string;
}

type TabsProps = {
    tabs: Tab[];
    selectedTab: string;
    onTabSelect: (value: string) => void;
};

const Tabs: React.FC<TabsProps> = ({ tabs, selectedTab, onTabSelect }) => {
    return (
        <div className="flex flex-wrap gap-[6px]">
            {tabs.map((tab) => (
                <div
                    key={tab.value}
                    className={`px-3 py-1 rounded-xl text-base cursor-pointer font-medium ${
                        selectedTab === tab.value
                            ? "bg-white text-[#6947bf] "
                            : "text-[#98a1bb]"
                    }`}
                    onClick={() => onTabSelect(tab.value)}
                >
                    {tab.label}
                </div>
            ))}
        </div>
    );
};

export default Tabs;