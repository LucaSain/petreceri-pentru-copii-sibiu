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
import { Modal, ModalBody, ModalContent, ModalFooter } from "./animated-modal";

import Image from "next/image";
import Link from "next/link";

export default function Showcase() {
  return (
    <>
      <h1 className="text-center text-4xl font-semibold py-10 z-[10] relative">
        Serviciile noastre
      </h1>
      <BentoGrid className="max-w-4xl mx-auto md:auto-rows-[20rem] z-[10] relative flex flex-col gap-4 justify-center px-4 sm:grid pb-10 sm:pb-20">
        {items.map((item, i) => (
          <Modal key={i}>
            <BentoGridItem
              id={i + "bento"}
              title={item.title}
              description={"Click aici pentru detalii"}
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
                  {item.imagini !== 0 &&
                    [1, 2, 3, 4].map((image, idx) => (
                      <div
                        key={"images" + idx}
                        style={{
                          rotate: Math.random() * 20 - 10 + "deg",
                        }}
                        className="rounded-xl -mr-4 mt-4 p-1  dark:border-neutral-700  border-neutral-100 flex-shrink-0 overflow-hidden"
                      >
                        <Image
                          src={`/${item.base}${idx + 1} Medium.jpeg`}
                          alt="imagine"
                          width="500"
                          height="500"
                          className="rounded-lg h-20 w-20 md:h-40 md:w-40 object-cover flex-shrink-0 "
                        />
                      </div>
                    ))}
                </div>
                <div className="py-10 flex flex-wrap items-start justify-start max-w-sm mx-auto prose prose-sm">
                  <p> {item.text} </p>
                </div>
              </ModalContent>
              <ModalFooter className="flex justify-around pb-2 pt-2 bg-inherit gap-3">
                <Link href="/contact" className="btn btn-primary">
                  Contact
                </Link>
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
    base: "mascote",
    description: "",
    data: [],
    header: (
      <Skeleton>
        <img
          className="object-cover w-full rounded-xl"
          src="minnie Large.jpeg"
        />
      </Skeleton>
    ),
    imagini: 4,
    text: "Mascotele Minnie și Mickey Mouse sunt iconice și aduc instantaneu un sentiment de bucurie și entuziasm la orice ocazie. Fie că este vorba de petreceri de aniversare, evenimente școlare sau alte festivități, prezența acestor personaje îndrăgite asigură o atmosferă magică și distractivă. Mai ales acompaniate de musica si dans!",
    className: "col-span-2 bg-secondary",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Ateliere creative",
    base: "ateliere",
    description: "300 lei / ora / 1 animator - max. 15 copii",
    header: (
      <Skeleton>
        <img
          className="object-cover w-full rounded-xl"
          src="ateliere Large.jpeg"
        />
      </Skeleton>
    ),
    imagini: 4,
    text: "Atelierele creative pentru copii sunt concepute pentru a oferi o experiență educativă și distractivă, în care cei mici pot să își exprime imaginația și să își dezvolte abilitățile artistice si motrice. Fiecare atelier este structurat pentru a încuraja explorarea, învățarea și dezvoltarea personală într-un mediu sigur și prietenos.",
    data: [
      // "atelier magneți de frigider",
      // "atelier de pictat pietre/inimi/forme de ipsos",
      // "atelier de măști",
      // "... multe altele! (click pe detalii pentru mai multe opțiuni)",
      // "atelier de origami",
      // "atelier de pictat pe panza",
      // "atelier de facut bratari",
      // "atelier de papusi din ziar",
      // "atelier de teatru social",
    ],
    className: "row-span-2 bg-primary",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Jocuri interactive",
    base: "jocuri",
    description: "300 lei / ora / 1 animator",
    text: "Specialiștii noștri în jocuri stabilesc legături între copii, îi învăța lucrul în echipă și bunele maniere, creând spațiul pentru prietenie. Un animator gestionează perfect un număr de 15 copii. Putem conduce jocuri cu orice număr de copii. Chiar si peste 100.",
    className: "col-span-2 bg-accent",
    imagini: 4,
    header: (
      <Skeleton>
        <img
          className="object-cover w-full rounded-xl"
          src="jocuri Large.jpeg"
        />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
    data: [],
  },
  {
    title: "Modelaj de baloane",
    base: "baloane",
    description: "300 lei / ora / 1 animator",
    text: "Baloanele modelabile pot să transforme orice ocazie într-o experiență veselă și colorată. Prin creativitate și îndemânare, artiștii noștri realizează figurine spectaculoase din baloane, aducând zâmbete pe fețele celor mici.",
    header: (
      <Skeleton>
        <img
          className="object-cover w-full rounded-xl"
          src="modelaj Large.jpeg"
        />
      </Skeleton>
    ),
    imagini: 0,
    className: "bg-info bg-neutral text-neutral-content border-0",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
    data: [],
  },
  {
    title: "Pictură pe față",
    base: "facepaint",
    description: "300 lei / ora / 1 animator",
    text: "Pictura pe față  a fost mereu indragita de copii! oferă o experiență captivantă și distractivă pentru cei mici, transformându-i în personajele lor preferate, fie că este vorba de supereroi, prințese, animale sau creaturi magice. Folosim numai vopsele de față de înaltă calitate, care sunt hipoalergenice și sigure pentru pielea delicată a copiilor. \n\n  Culorile se spală ușor cu apă și săpun.",
    data: [],
    imagini: 4,
    header: (
      <Skeleton>
        <img
          className="object-cover w-full rounded-xl"
          src="picturafata Large.jpeg"
        />
      </Skeleton>
    ),

    className: "col-span-2 bg-primary",
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Arcade de baloane și alte decoruri",
    base: "arcade",
    description: "75 lei metru liniar",
    className: "col-span-1 bg-accent",
    text: "Pentru cei ce isi doresc îmbogățirea spațiul de joacă va putem oferi decoruri tematice realizate din baloane. Spune-ne ce iti imaginezi si mainile noastre dibace pot da gata orice decor.",
    data: [],
    imagini: 4,
    header: (
      <Skeleton>
        <img
          className="object-cover w-full rounded-xl"
          src="arcade Large.jpeg"
        />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "Loc de joacă",
    base: "locjoaca",
    description: "taxa fixa 300 lei + animator 100 lei / ora",
    text: "Kids Corner este un spațiu special conceput pentru a oferi copiilor un mediu sigur, distractiv și educativ în timpul evenimentelor, festivalurilor, centrelor comerciale, restaurantelor și altor locații publice. Acest colț dedicat copiilor este gândit pentru a-i ține ocupați și fericiți, oferind activități variate care să stimuleze creativitatea și dezvoltarea lor.",
    className:
      "col-span-1 bg-gradient-to-br from-secondary via-secondary to-primary border-none",
    header: (
      <Skeleton>
        <img
          className="object-cover w-full rounded-xl"
          src="locjoaca Large.jpeg"
        />
      </Skeleton>
    ),
    imagini: 0,
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
    base: "parteneri",
    description: "Iti trimitem o oferta separata daca doresti",
    className: "bg-secondary",
    text: "Pentru a face evenimentul tău mai special, colaborăm cu parteneri de încredere care oferă servicii de calitate. În funcție de tematica evenimentului tău, îți putem oferi: show-uri de magie, tobogane gonflabile, castele gonflabile.",
    imagini: 0,
    header: (
      <Skeleton>
        <IconConfetti className="w-full h-full text-secondary" />
      </Skeleton>
    ),
    icon: <IconConfetti className="h-4 w-4 text-neutral-500" />,
  },
];
