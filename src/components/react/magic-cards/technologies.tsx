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
        <div className="flex flex-col gap-2 text-sm font-medium p-2">
          <div className="flex flex-row gap-2">
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5">NextJS</p>
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5">Laravel</p>
          </div>
          <div className="flex flex-row gap-2">
            <p className="w-1/3 text-center border rounded-full border-gray-300 p-1.5">Typescript</p>
            <p className="w-1/3 text-center border rounded-full border-gray-300 p-1.5">React</p>
            <p className="w-1/3 text-center border rounded-full border-gray-300 p-1.5">Livewire</p>
          </div>
          <p className="w-full text-center border rounded-full border-gray-300 p-1.5">Langchain</p>
          <div className="flex flex-row gap-2">
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5">Tailwind</p>
            <p className="w-1/2 text-center border rounded-full border-gray-300 p-1.5">Astro</p>
          </div>
          <p className="w-full text-center border rounded-full border-gray-300 p-1.5">Docker</p>
        </div>
      </div>
    </MagicCard>
  );
}