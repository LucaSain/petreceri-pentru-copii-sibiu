import React from "react";
import { BentoGrid, BentoGridItem } from "../ui/bento-grid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
  IconConfetti,
  IconStars,
} from "@tabler/icons-react";

export default function Showcase() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold py-10 z-[10] relative">
        Serviciile noastre
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-[10] relative flex flex-col gap-4 justify-center px-4 sm:grid">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={item.className}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </>
  );
}
const Skeleton = ({ children }: { children?: React.ReactNode }) => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl    dark:bg-dot-white/[0.2] bg-dot-black/[0.2]  dark:border-white/[0.2] bg-neutral-100 dark:bg-black">
    {children}
  </div>
);
const items = [
  {
    title: "Mascotele Mikey si Minnie",
    description: "450 lei - o ora | 200 lei - 30 min",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="minnie.png" />
      </Skeleton>
    ),
    className: "col-span-2 bg-secondary",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ateliere creative",
    description: "300 lei / ora / 1 animator - max. 15 copii",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="ateliere.png" />
      </Skeleton>
    ),
    className: "row-span-2 bg-primary",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jocuri interactive",
    description: "300 lei / ora / 1 animator",
    className: "col-span-2 bg-accent",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="jocuri.png" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Modelaj de baloane",
    description: "300 lei / ora / 1 animator",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="modelaj.png" />
      </Skeleton>
    ),
    className: "bg-info bg-opacity-50",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Pictură pe față",
    description: "300 lei / ora / 1 animator",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="picturafata.png" />
      </Skeleton>
    ),
    className: "col-span-2 bg-primary",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Arcade de baloane și alte decoruri",
    description: "75 lei metru liniar",
    className: "col-span-2 bg-warning bg-opacity-50",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="arcade.png" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Alte servicii prin parteneri pentru evenimentul tau",
    description: "Iti trimitem o oferta separata daca doresti",
    className: "bg-secondary",
    header: (
      <Skeleton>
        <IconConfetti className="w-full h-full text-secondary" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
];
