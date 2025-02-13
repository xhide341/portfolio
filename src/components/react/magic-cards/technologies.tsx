import { MagicCard } from "../magic-card.tsx";
import CodeBlockIcon from "../../icons/code-block-icon.tsx";

export default function Technologies() {
  return (
    <MagicCard className="w-full">
      <div className="p-4">
        <h2
          id="technologies-title"
          className="flex text-lg font-bold items-center gap-1 tracking-wide mb-2"
        >
          <CodeBlockIcon />
          Tech Stack
        </h2>
        <div className="flex flex-col gap-2 text-xs font-medium p-2 relative animate-fade-in">
          <div className="flex flex-row gap-2 relative z-10">
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">NextJS</p>
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">Laravel</p>
          </div>
          <div className="flex flex-row gap-2 relative z-10">
            <p className="w-1/3 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">Typescript</p>
            <p className="w-1/3 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">React</p>
            <p className="w-1/3 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">Livewire</p>
          </div>
          <div className="flex flex-row gap-2 relative z-10">
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">Astro</p>
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">Android Studio</p>
          </div>
          <div className="flex flex-row gap-2 relative z-10">
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">Tailwind</p>
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform">Langchain</p>
          </div>
          <p className="w-full text-center border rounded-full border-gray-300 p-1.5 bg-white hover:scale-105 transition-transform relative z-10">Docker</p>
        </div>
      </div>
    </MagicCard>
  );
}