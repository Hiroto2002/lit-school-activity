import { Mentor } from "@/constants/mentor";
import React, { useState } from "react";
import Image from "next/image";
import { PostButton } from "./PostButton";
import { DbResponse } from "@/types";

type Props = Mentor & {
  handleSetCount: (id: number, count: number) => void;
};

export const MentorFrame = (props: Props) => {
  const { name, avatar, id, count, handleSetCount } = props;
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const handleSetIsActive = () => {
    setIsActive((prev) => !prev);
  };
  const handleSetIsHover = () => {
    setIsHover((prev) => !prev);
  };
  const handlePost = async (id: number) => {
    handleSetIsActive();
    try {
      const response = await fetch("/api/v1/vote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify([{ userId: id }]),
      });

      const result = (await response.json()) as DbResponse<number>;

      handleSetIsActive();
      if (result.status === 200) {
        handleSetCount(id, result.data);
      }
    } catch (e) {
      console.error(e);
      handleSetIsActive();
    }
  };

  return (
    <div
      className="flex flex-col relative items-center mb-16"
      onMouseEnter={handleSetIsHover}
      onMouseLeave={handleSetIsHover}
    >
      <p className="text-white font-black text-2xl z-10 absolute top-[11.55px]">
        {name}
      </p>
      <svg
        width="180"
        height="64"
        viewBox="0 0 180 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute top-0"
      >
        <g filter="url(#filter0_i_518_541)">
          <path
            d="M155.117 63.8937L27.4008 62.6463C22.3143 62.5966 17.6341 59.8581 15.0989 55.4481C9.37178 45.4855 4.9358 34.8346 1.89789 23.752L1.41654 21.9959C-1.32573 11.9919 6.11484 2.09138 16.4869 1.94318L82.5 1L162.98 0.191152C172.912 0.0913386 180.534 8.96961 178.932 18.7715L177.461 27.7667C176.003 36.6866 173.521 45.4861 170.12 53.8598C167.647 59.9449 161.685 63.9579 155.117 63.8937Z"
            fill="#353535"
          />
        </g>
        <path
          d="M155.131 62.3938L27.4155 61.1463C22.8606 61.1019 18.6696 58.6496 16.3994 54.7005C10.7356 44.8482 6.34879 34.3153 3.34452 23.3554L2.86317 21.5994C0.380237 12.5414 7.11716 3.57721 16.5083 3.44303L82.5151 2.49992L82.5214 2.49985L162.995 1.69108C171.996 1.60062 178.903 9.64655 177.451 18.5295L175.981 27.5247C174.541 36.3331 172.09 45.0244 168.73 53.2952C166.487 58.816 161.077 62.4518 155.131 62.3938Z"
          stroke="#252525"
          strokeWidth="3"
        />
        <defs>
          <filter
            id="filter0_i_518_541"
            x="0.84375"
            y="0.190308"
            width="178.302"
            height="63.7041"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="BackgroundImageFix"
              result="shape"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-6" dy="-6" />
            <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.145098 0 0 0 0 0.145098 0 0 0 0 0.145098 0 0 0 1 0"
            />
            <feBlend
              mode="normal"
              in2="shape"
              result="effect1_innerShadow_518_541"
            />
          </filter>
        </defs>
      </svg>
      <Image
        src={avatar}
        alt={name}
        width={320}
        height={320}
        className="mt-8 rounded-2xl"
        style={{ border: "4px solid #252525" }}
      />
      {isHover && (
        <div
          className="mt-8 rounded-2xl w-80 h-80 bg-[#000000aa] absolute flex  justify-center"
          style={{ border: "4px solid #252525" }}
        >
          <p className="text-white text-5xl relative top-20">
            {count > 5 ? count : "?"}
          </p>
        </div>
      )}
      <PostButton id={id} isActive={isActive} handlePost={handlePost} />
    </div>
  );
};
