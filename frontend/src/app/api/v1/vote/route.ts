import { Vote } from "@prisma/client";
import { prisma } from "../../../../../prisma/db";

type RequestBodyVote = {
  userId: number;
};
export async function POST(req: Request) {
  const data = (await req.json()) as RequestBodyVote[];

  if (data.length === 0) {
    return Response.json({ status: 400, message: "Bad Request" });
  }

  try {
    const votes = await prisma.vote.createMany({
      data: data,
    });

    const voteCount = await prisma.vote.count({
      where: {
        userId: data[0].userId,
      },
    });

    return Response.json({ data: voteCount, status: 200, message: "success" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error, status: 500, message: "error" });
  }
}

export async function GET(req: Request) {
  const data = await prisma.vote.groupBy({
    by: ["userId"],
    _count: {
      userId: true,
    },
  });
  const userVotesCount = data.map((group) => ({
    userId: group.userId,
    count: group._count.userId,
  }));

  return Response.json({
    data: userVotesCount,
    status: 200,
    message: "success",
  });
}
