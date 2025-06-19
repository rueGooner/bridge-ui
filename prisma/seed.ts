import { createFakeUser } from "../lib/seeder/user.util";
import { PrismaClient } from "./generated/prisma";
const prisma = new PrismaClient();

async function main() {
  const user = await createFakeUser();
  console.log(user);
}

main().catch((e) => {
  process.exit(1);
});
