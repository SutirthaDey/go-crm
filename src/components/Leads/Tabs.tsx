import clsx from "clsx";
import React from "react";

const tabs = [
  { name: "Summary", id: 1 },
  { name: "Task List", id: 2 },
  { name: "Deal Analysis", id: 3 },
  { name: "Related", id: 4 },
  { name: "Activity log", id: 5 },
];

interface TabsProps {
  activeTab: number;
  setActiveTab: (id: number) => void;
}

const Tabs: React.FC<TabsProps> = ({ activeTab, setActiveTab }) => {
  return (
    <div className="h-20 mt-2 border-b-1 border-solid border-gray-100 flex items-end overflow-auto">
      <div className="flex items-center justify-center gap-5 cursor-pointer">
        {tabs.map((tab) => (
          <div
            className={clsx(
              "flex items-center gap-2 p-4 box text-sm",
              tab.id === activeTab
                ? "border-b-2 border-blue-600 bg-white text-blue-600"
                : "border-b-2 border-transparent text-[#565E6CFF] "
            )}
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
          >
            <p>{tab.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
