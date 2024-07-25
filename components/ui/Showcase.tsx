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
import {
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalTrigger,
} from "./animated-modal";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Showcase() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold py-10 z-[10] relative">
        Serviciile noastre
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-[10] relative flex flex-col gap-4 justify-center px-4 sm:grid">
        {items.map((item, i) => (
          <Modal key={i}>
            <BentoGridItem
              title={item.title}
              description={item.description}
              header={item.header}
              className={item.className}
              icon={item.icon}
            />
            <ModalBody>
              <ModalContent>
                <h4 className="text-lg md:text-2xl text-neutral-600 dark:text-neutral-100 font-bold text-center mb-8">
                  {item.title} {"  "}🎉
                </h4>
                <div className="flex justify-center items-center">
                  {[1, 4].map((image, idx) => (
                    <div
                      key={"images" + idx}
                      style={{
                        rotate: Math.random() * 20 - 10 + "deg",
                      }}
                      className="rounded-xl -mr-4 mt-4 p-1 bg-white dark:bg-neutral-800 dark:border-neutral-700 border border-neutral-100 flex-shrink-0 overflow-hidden"
                    >
                      <Image
                        src="/minnie.png"
                        alt="bali images"
                        width="500"
                        height="500"
                        className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0"
                      />
                    </div>
                  ))}
                </div>
                <div className="py-10 flex flex-wrap items-start justify-start max-w-sm mx-auto prose prose-sm">
                  <ul className="">
                    {item.data.map((data, i) => (
                      <li key={item.title + i}>{data}</li>
                    ))}
                  </ul>
                </div>
              </ModalContent>
              <ModalFooter className="gap-4">
                <button className="px-2 py-1 bg-gray-200 text-black dark:bg-black dark:border-black dark:text-white border border-gray-300 rounded-md text-sm w-28">
                  Cancel
                </button>
                <button className="bg-black text-white dark:bg-white dark:text-black text-sm px-2 py-1 rounded-md border border-black w-28">
                  Book Now
                </button>
              </ModalFooter>
            </ModalBody>
          </Modal>
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
    data: [],
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="minnie.png" />
      </Skeleton>
    ),
    text: "Mascotele intampina invitatii, fac poze, la cerere pot face o sesiune de dans cu playlistul nostru - o ora",
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
    text: "Copiii vor confecționa un obiect pe care îl vor lua acasă opțiuni atelier",
    data: [
      "atelier magneți de frigider",
      "atelier de pictat pietre/inimi/forme de ipsos",
      "atelier baloane uriașe de săpun (aici iau acasă doar amintiri)",
      "atelier de măști",
      "atelier de percutie",
      "atelier de semn de carte",
      "atelier de origami",
      "atelier de pictat pe panza",
      "atelier de facut bratari",
      "atelier de papusi din ziar",
      "atelier de teatru social",
    ],
    className: "row-span-2 bg-primary",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jocuri interactive",
    description: "300 lei / ora / 1 animator",
    text: "Specialiștii noștri în jocuri stabilesc legături între copii, îi învăța lucrul în echipă și bunele maniere, creând spațiul pentru prietenie. Un animator gestionează perfect un număr de 15 copii. Putem conduce jocuri cu orice număr de copii. Chiar si peste 100.",
    className: "col-span-2 bg-accent",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="jocuri.png" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
    data: [],
  },
  {
    title: "Modelaj de baloane",
    description: "300 lei / ora / 1 animator",
    text: "Animatorul nostru va modela baloane în forme de animale, flori, personaje de desene animate, etc. pentru copii",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="modelaj.png" />
      </Skeleton>
    ),
    className: "bg-info bg-opacity-50",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
    data: [],
  },
  {
    title: "Pictură pe față",
    description: "300 lei / ora / 1 animator",
    text: "Colaborăm cu absolvenții școlilor de artă și artiști în artele vizuale pentru a asigura o calitate extraordinară a picturii",
    data: [],
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
    className: "col-span-1 bg-warning bg-opacity-50",
    text: "Spune-ne mai multe despre evenimentul tău și îți facem o ofertă personalizată",
    data: [],
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="arcade.png" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Loc de joacă",
    description: "taxa fixa 300 lei + animator 100 lei / ora",
    text: "Peste 100 de jucării și jocuri pe care le instalăm în spațiul tău",
    className: "col-span-1 bg-accent bg-opacity-50",
    header: (
      <Skeleton>
        <img className="object-cover w-full rounded-xl" src="arcade.png" />
      </Skeleton>
    ),
    data: [
      "Zona de joacă acoperită cu covorașe de rafie de 6 metri pătrați",
      "3 corturi pentru copii",
      "jucării mici (mașinuțe, drumuri, papuși, etc.) si mari (camioane, casă de marcat, produse de jucărie pentru ea, stație de meșteșugărit, etc.)",
      "jocuri de grup și de pereche (fotbal de masă, joc cu aruncatul maimuțelor, baschet de masă, două porți de fotbal cu mingi, etc.)",
    ],

    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Alte servicii prin parteneri pentru evenimentul tau",
    description: "Iti trimitem o oferta separata daca doresti",
    className: "bg-secondary",
    text: "Pentru a face evenimentul tău mai special, colaborăm cu parteneri de încredere care oferă servicii de calitate. În funcție de tematica evenimentului tău, îți putem oferi:",
    data: [
      "Show de magie - Eugenius Magic din Venezuela",
      "Show de magie - Magicianul Mihai din Sibiu",
      "Tobogane gonflabile: 3.5 - 4.5 - 6 metri",
      "Castele gonflabile",
    ],
    header: (
      <Skeleton>
        <IconConfetti className="w-full h-full text-secondary" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
];
