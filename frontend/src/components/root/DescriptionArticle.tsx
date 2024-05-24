import type { Description } from "@/app/(root)/page";
import React from "react";
import { DescriptionFrame } from "./DescriptionFrame";

type Props = Description & {
  isEven: boolean;
};
export const DescriptionArticle = ({
  title,
  description,
  isEven,
  color,
}: Props) => {
  return (
    <article className="flex flex-col justify-center items-center relative">
      <DescriptionFrame color={color} isEven={isEven}>
        {/* <h1 className="w-fit relative left-1/4">{title}</h1> */}
        <h1
          className="text-center text-2xl mb-4 font-black"
          style={{ color: color }}
        >
          {title}
        </h1>
        <p className="text-center max-w-60 ">{description}</p>
      </DescriptionFrame>
    </article>
  );
};

/* Rectangle 67 */
