import { prisma } from "../../prisma/db";
type RequestBodyVote = {
  userId: number;
};

let voteQueue: RequestBodyVote[] = [];

const processQueue = async () => {
  if (voteQueue.length > 0) {
    const batch = [...voteQueue];
    voteQueue = [];

    try {
      await prisma.vote.createMany({
        data: batch,
      });
      console.log("Batch insert successful:", batch.length);
    } catch (error) {
      console.error("Error during batch insert:", error);
    }
  }
};

// 10秒ごとにキューを処理
setInterval(processQueue, 10000);

export const addToQueue = (vote: RequestBodyVote) => {
  voteQueue.push(vote);
};
