import { MagicCard } from "../magic-card.tsx";

export default function Quotes() {
  return (
    <MagicCard className="w-full h-full justify-center items-center">
      <p
        className="text-sm font-satoshi font-thin text-black-500 leading-relaxed italic p-4"
      >
        For when a man knows not what port he sails, no wind is favorable.
      </p>
    </MagicCard>
  );
}
