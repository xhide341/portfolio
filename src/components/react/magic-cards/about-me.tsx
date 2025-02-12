import { MagicCard } from "../magic-card.tsx";
import InfoIcon from "../../icons/info-icon.tsx";

export default function AboutMe() {
  return (
    <MagicCard
      className="w-full h-full relative select-none text-pretty"
>
    <div className="p-4">
      <h2
        id="about-me-title"
        className="flex text-lg font-bold items-center gap-1 tracking-normal"
      >
        <InfoIcon />
        About Me
      </h2>
      <div className="p-1 text-justify leading-relaxed">
        <p className="text-sm text-black-500 py-1">
          I am a full stack web developer with a focus on user experience and
          performance. I am...
        </p>
        <ul className="text-sm p-2 gap-2 text-black-500 list-disc list-inside">
          <li>a BSIT graduate</li>
          <li>familiar with both php and javascript ecosystems</li>
          <li>into all things that make the world an interesting place</li>
        </ul>
        <p className="text-sm text-black-500 py-1">
          I've dabbled with laravel, nextjs, astro, and react. I'm especially
          curious to explore tech stacks that take a strong stance on development
          practices.
        </p>
        <p className="text-sm text-black-500 py-1">
          I'm also enthusiastic about AI and its ability to help developers build
          better products. On that note, I have experience integrating AI using
          langchain.
        </p>
      </div>
    </div>
  </MagicCard>
  );
}

