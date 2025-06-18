-- CreateEnum
CREATE TYPE "RegistrationStep" AS ENUM ('CREATE_FAMILY', 'INVITE_OTHER_ADULTS', 'COMPLETE');

-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('ADMIN', 'PARENT', 'TEACHER', 'SUPPORT', 'CARER', 'MEDICAL');

-- CreateEnum
CREATE TYPE "RelationshipType" AS ENUM ('PARENT', 'TEACHER', 'SOCIAL_WORKER', 'DOCTER', 'NURSE', 'GUARDIAN');

-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneNumber" TEXT NOT NULL,
    "registrationStep" "RegistrationStep" NOT NULL DEFAULT 'CREATE_FAMILY',
    "role" "UserRole" NOT NULL DEFAULT 'PARENT',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Dependent" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "surname" TEXT NOT NULL,
    "schoolName" TEXT NOT NULL,
    "dateOfBirth" TIMESTAMP(3) NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Dependent_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "UserDependent" (
    "userId" INTEGER NOT NULL,
    "dependentId" INTEGER NOT NULL,
    "relationship" "RelationshipType" NOT NULL,

    CONSTRAINT "UserDependent_pkey" PRIMARY KEY ("userId","dependentId")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_phoneNumber_key" ON "User"("phoneNumber");

-- AddForeignKey
ALTER TABLE "UserDependent" ADD CONSTRAINT "UserDependent_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserDependent" ADD CONSTRAINT "UserDependent_dependentId_fkey" FOREIGN KEY ("dependentId") REFERENCES "Dependent"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
