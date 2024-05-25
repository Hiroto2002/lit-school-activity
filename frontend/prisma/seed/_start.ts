import { prisma } from "../db";
import { vote } from "./vote";
import { user } from "./user";

async function main() {
  await prisma.vote.deleteMany();
  await prisma.user.deleteMany();
  await user();
  // await vote();
}

main()
  .catch((e) => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });
