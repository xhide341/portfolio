import { MagicCard } from "../magic-card.tsx";
import DeployedCodeIcon from "../../icons/deployed-code-icon.tsx";
import PublicIcon from "../../icons/public-icon.tsx";
import GithubIcon from "../../icons/github-icon.tsx";
import NextJsIcon from "../../icons/nextjs-icon.tsx";
import ReactIcon from "../../icons/react-icon.tsx";
import PrismaIcon from "../../icons/prisma-icon.tsx";
import NextAuthIcon from "../../icons/nextauth-icon.tsx";
import PostgreSQLIcon from "../../icons/postgresql-icon.tsx";
import LangchainIcon from "../../icons/langchain-icon.tsx";
import LaravelIcon from "../../icons/laravel-icon.tsx";
import LivewireIcon from "../../icons/livewire-icon.tsx";
import AlpineJsIcon from "../../icons/alpinejs-icon.tsx";
import FrankenphpIcon from "../../icons/frankenphp-icon.tsx";

export default function Projects() {
  return (
    <MagicCard className="w-full h-full">
      <div className="p-4">
        <h2
          id="projects-title"
          className="flex text-lg font-bold items-center gap-1 tracking-wide"
          aria-label="Projects"
        >
          <DeployedCodeIcon aria-hidden="true" />
          Projects
        </h2>
        <p className="text-xs text-gray-500 p-0 ml-2">
          Note: None of these projects are cloned/forked.
        </p>
        <hr className="my-2 text-gray-300" />
        <div className="pl-2 flex gap-2 p-1 justify-between items-center w-full">
          <div className="flex gap-2 items-center">
            <h3 className="text-sm font-bold text-black-500 p-0 m-0">ASTRA AI</h3>
            <p className="text-xs text-black-500 p-0 m-0" aria-hidden="true">
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex self-end gap-1 items-center">
              <a
                href="https://astra-ai-iota.vercel.app"
                target="_blank"
                className="align-self-center vertical-align-middle inline-flex"
                aria-label="Visit ASTRA AI website"
              >
                <PublicIcon aria-hidden="true" />
              </a>
              <a
                href="https://github.com/xhide341/astra-ai"
                target="_blank"
                className="align-self-end vertical-align-middle inline-flex"
                aria-label="View ASTRA AI on GitHub"
              >
                <GithubIcon aria-hidden="true" />
              </a>
            </div>
            <div className="flex self-end gap-1 items-center">
              <NextJsIcon aria-hidden="true" />
              <ReactIcon aria-hidden="true" />
              <div className="tooltip">
                <p className="text-xs rounded-md border border-gray-300 p-1">Zustand</p>
                <div className="tooltiptext">Zustand</div>
              </div>
              <PrismaIcon aria-hidden="true" />
              <NextAuthIcon aria-hidden="true" />
              <PostgreSQLIcon aria-hidden="true" />
              <LangchainIcon aria-hidden="true" />
            </div>
          </div>
        </div>
        <hr className="my-2 text-gray-300" />
        <div className="pl-2 flex gap-2 p-1 justify-between items-center">
          <div className="flex gap-2 items-center">
            <h3 className="text-sm font-bold text-black-500 p-0 m-0">Event Sphere</h3>
            <p className="text-xs text-black-500 p-0 m-0" aria-hidden="true">
            </p>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex self-end gap-1 items-center">
              <a
                href="https://github.com/xhide341/eventsphere"
                target="_blank"
                className="align-self-end vertical-align-middle inline-flex"
                aria-label="View Event Sphere on GitHub"
              >
                <GithubIcon aria-hidden="true" />
              </a>
            </div>
            <div className="flex self-end gap-1 items-center">
              <LaravelIcon aria-hidden="true" />
              <LivewireIcon aria-hidden="true" />
              <AlpineJsIcon aria-hidden="true" />
              <div className="tooltip">
                <p className="text-xs rounded-md border border-gray-300 p-1">FilamentPHP</p>
                <div className="tooltiptext">FilamentPHP</div>
              </div>
              <FrankenphpIcon aria-hidden="true" />
            </div>
          </div>
        </div>
      </div>
    </MagicCard>
  );
}
