"use client";
import { DescriptionArticle } from "@/components/root/DescriptionArticle";
import { MentorFrame } from "@/components/root/MentorFrame";
import { RankFrame } from "@/components/root/RankFrame";
import { Mentor, MENTORS } from "@/constants/mentor";
import Image from "next/image";
import { useState } from "react";

type Rank<T> = [T, T, T];
export default function Home() {
  const [ranks, setRanks] = useState<Rank<Mentor>>([
    MENTORS[1],
    MENTORS[0],
    MENTORS[2],
  ]);
  return (
    <main
      className="flex flex-col justify-center items-center  w-full bg-[#EFEFEF]"
      // style={{ height: "calc(100vh - 4.5rem)" }}
    >
      <section className="flex w-full justify-center items-center mb-28">
        <Image
          src="/img/key-visual.png"
          width={1512}
          height={800}
          alt="キービジュアル"
        />
      </section>
      <section className="flex items-center flex-col gap-[53px] w-full">
        <p className="relative font-black text-[#252525]">
          <span
            className="absolute -top-[18px] -left-[26.92px] "
            style={{
              display: "inline-block",
              transform: "rotate(-5deg)",
            }}
          >
            そもそも
          </span>
          <span className="text-[40px] ">メンター総選挙とは</span>
        </p>
        <div className="flex flex-row gap-[20px]">
          {DESCRIPTION.map((desc, index) => (
            <DescriptionArticle
              {...desc}
              key={index}
              isEven={index % 2 === 0}
            />
          ))}
        </div>
      </section>
      <section>
        <div className="w-[1512px]  h-[1020px] relative flex flex-col items-center">
          <Image
            src="/img/rankBg.svg"
            width={1512}
            height={940}
            alt="rankbg"
            className="absolute top-[79px]"
          />
          <div className="relative top-[243px] flex flex-col items-center">
            <Image
              alt="right-dj"
              src={"/img/leftDj.png"}
              width={377}
              height={197}
              className=""
            />
            <p className="relative -top-[96px] text-[2.5rem] text-white">
              ランキング
            </p>
            <div className="flex gap-[44px]">
              {ranks.map((mentor, index) => (
                <RankFrame
                  name={mentor.name}
                  count={RANK_COLOR[index].id}
                  avatar={mentor.avatar}
                  colors={RANK_COLOR[index]}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center relative gap-4">
        <p className="absolute top-[103px] text-[36px] font-black text-white z-10">
          投票はこちら
        </p>
        <Image
          alt="right-dj"
          src={"/img/rightDj.png"}
          width={374}
          height={197}
          className="relative left-[18px] "
        />
        <p className="w-[436px] text-center mb-8">
          プレゼンを見て気になったメンターや
          <br />
          推しメンターにたくさん投票し1位にしよう！！
        </p>
        <div className="flex flex-row gap-[20px] flex-wrap max-w-[1000px] mb-[100px]">
          {MENTORS.map((mentor) => (
            <MentorFrame
              key={mentor.id}
              id={mentor.id}
              name={mentor.name}
              avatar={mentor.avatar}
              count={mentor.count}
            />
          ))}
        </div>
      </section>
    </main>
  );
}

export type Description = {
  title: string;
  description: string;
  color: string;
};
const DESCRIPTION: Description[] = [
  {
    title: "メンターが1分プレゼン",
    description:
      "どのメンターが最強かな？？プレゼンをみて考えてみよう！プレゼン後に投票を行うよ〜！",
    color: "#029BE1",
  },
  {
    title: "みんなで投票をしよう！",
    description:
      "投票はこのサイトの下の方にあるよ！「投票」ボタンをたくさん押してみよう！",
    color: "#FCC500",
  },
  {
    title: "最強メンターは誰だ！",
    description:
      "投票数が1番多かった人が名古屋日Aのイケイケ最強メンター任命！！！",
    color: "#E83E37",
  },
];

export type RankColor = { id: number; color: string; deepColor: string };
const RANK_COLOR: RankColor[] = [
  { id: 2, color: "#029BE1", deepColor: "#0283B6" },
  { id: 1, color: "#FCC500", deepColor: "#E0AF03" },
  { id: 3, color: "#E83E37", deepColor: "#CF2821" },
];
