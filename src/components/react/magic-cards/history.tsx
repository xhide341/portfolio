
import { MagicCard } from "../magic-card.tsx";
import HistoryIcon from "../../icons/history-icon.tsx";

export default function History() {
  return (
    <MagicCard className="w-full h-full" role="region" aria-labelledby="about-me-title">
      <div className="p-4">
        <h2
          id="about-me-title"
          className="flex text-lg font-bold items-center gap-1 tracking-wide"
    >
      <HistoryIcon />
      Education History
    </h2>
    <div className="relative ml-2 space-y-6 mt-2">
      <div
        className="absolute left-1.5 top-1.5 h-[calc(100%-.5rem)] w-px bg-gray-300"
      >
      </div>
      <div className="relative pl-6">
        <div
          className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-1 border-black bg-white"
        >
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">
            Bachelor of Science in Information Technology
          </h3>
          <p className="text-xs text-gray-600">
            La Consolacion University Philippines
            <span className="block text-xs text-gray-600 mt-1">2020-2024</span>
          </p>
        </div>
      </div>
      <div className="relative pl-6">
        <div
          className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-1 border-black bg-white"
        >
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">High School Diploma</h3>
          <p className="text-xs text-gray-600">
            Colegio de Calumpit Institute
            <span className="block text-xs text-gray-600 mt-1">2014-2020</span>
          </p>
        </div>
      </div>
      <div className="relative pl-6">
        <div
          className="absolute left-0 top-1.5 w-3 h-3 rounded-full border-1 border-black bg-white"
        >
        </div>
        <div className="space-y-1">
          <h3 className="text-sm font-semibold">Elementary School</h3>
          <p className="text-xs text-gray-600">
            Pungo Elementary School
            <span className="block text-xs text-gray-600 mt-1">2008-2014</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  </MagicCard>
  );
}
