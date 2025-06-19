import { faker } from "@faker-js/faker";

export const createFakeDependent = (surname: string) => {
  return {
    firstName: faker.person.firstName(),
    surname,
    schoolName: `${faker.company.name()} School`,
    dateOfBirth: faker.date.birthdate({ min: 5, max: 18, mode: "age" }),
  };
};
