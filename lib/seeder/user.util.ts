import { faker } from "@faker-js/faker";
import { sample } from "lodash";
import * as bcrypt from "bcrypt";

const emailSymbols = ["-", ".", "_"];

export const createFakeUser = async () => {
  const randomFirstName = faker.person.firstName();
  const randomSurname = faker.person.lastName();
  const email = `${randomFirstName}${sample(
    emailSymbols
  )}${randomSurname}@testemail.co.uk`.toLowerCase();
  const hashedPassword = await bcrypt.hash("password111", 10);
  const role = "PARENT";

  return {
    firstName: randomFirstName,
    surname: randomSurname,
    email,
    password: hashedPassword,
    role,
  };
};
