import { Vote } from "@prisma/client";
import { prisma } from "../db";

export const vote = async () => {
  const vote: Omit<Vote, "id">[] = [
    {
      userId: 1,
      createdAt: new Date(),
    },
    {
      userId: 2,
      createdAt: new Date(),
    },
    {
      userId: 3,
      createdAt: new Date(),
    },
    {
      userId: 4,
      createdAt: new Date(),
    },
    {
      userId: 5,
      createdAt: new Date(),
    },
  ];
  await prisma.vote.createMany({
    data: vote.map((val) => val),
  });
};
