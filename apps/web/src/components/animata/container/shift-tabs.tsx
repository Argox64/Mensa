import { useState } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps {
  item: string;
  index: number;
  activeIndex: number;
  onTabClick: (index: number) => void;
}

const Button = ({ item, index, activeIndex, onTabClick }: ButtonProps) => {
  return (
    <div
      className={cn("rounded-lg bg-black", {
        "border-b-2 border-b-indigo-500": index === activeIndex,
      })}
      onClick={() => onTabClick(index)}
    >
      <div
        className={cn(
          "flex h-10 cursor-pointer items-center justify-center rounded-md border-2 bg-white p-3 transition-all",
          {
            "border-2 border-indigo-500 text-indigo-600": index === activeIndex,
            "origin-top-right ease-in hover:rotate-6": index !== activeIndex,
          }
        )}
      >
        <p className="p-2 text-center">{item}</p>
      </div>
    </div>
  );
};

export default function ShiftTabs({
  items,
  onTabClick,
}: {
  items: string[];
  onTabClick: (index: number) => void;
}) {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-2">
      {items.map((item, index) => (
        <Button
          key={`shift_tab_${index}`}
          item={item}
          index={index}
          activeIndex={activeTab}
          onTabClick={(idx) => {
            setActiveTab(idx);
            onTabClick(idx); // Envoie l'index sélectionné au parent
          }}
        />
      ))}
    </div>
  );
}
