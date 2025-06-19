import { faker } from "@faker-js/faker";
import { createFakeUser } from "../lib/seeder/user.util";
import { PrismaClient, RelationshipType } from "./generated/prisma";
import { createFakeDependent } from "../lib/seeder/dependent.util";

const prisma = new PrismaClient();

async function main() {
  const dependentCount = faker.number.int({ min: 1, max: 5 });
  const fakedUser = await createFakeUser();
  const user = await prisma.user.create({ data: fakedUser });

  for (let index = 0; index < dependentCount; index++) {
    const fakeDependent = await createFakeDependent(user.surname);
    const dependent = await prisma.dependent.create({
      data: fakeDependent,
    });

    await prisma.userDependent.create({
      data: {
        userId: user.id,
        dependentId: dependent.id,
        relationship: RelationshipType.PARENT,
      },
    });
  }

  console.log(
    `Seeded user ${user.email} with ${dependentCount} dependents (surname: ${user.surname})`
  );
}

main()
  .catch((e) => {
    process.exit(1);
  })
  .finally(() => prisma.$disconnect);
