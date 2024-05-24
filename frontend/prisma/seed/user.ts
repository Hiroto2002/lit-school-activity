import { User, Vote } from "@prisma/client";
import { prisma } from "../db";
import { MENTORS } from "../../src/constants/mentor";

export const user = async () => {
  const users: Omit<User, "id">[] = MENTORS.map((mentor) => ({
    name: mentor.name,
    avatar: mentor.avatar,
    count: mentor.count,
    createdAt: new Date(),
  }));
  await prisma.user.createMany({
    data: users.map((user) => user),
  });
};
