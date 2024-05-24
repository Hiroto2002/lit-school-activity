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

    console.log(votes);

    return Response.json({ data: votes, status: 200, message: "success" });
  } catch (error) {
    console.log(error);
    return Response.json({ error: error, status: 500, message: "error" });
  }
}
