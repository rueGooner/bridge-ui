"use client";

import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  Link,
  Input,
  Select,
  Alert,
  AlertIcon,
  Flex,
  Stack,
  Avatar,
  Heading,
  InputGroup,
  InputLeftElement,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";
import { registerSchema } from "@/server/schemas/auth";
import { trpc } from "../_trpc/client";

import {
  FiLock,
  FiMail,
  FiSmartphone,
  FiUser,
  FiUserCheck,
} from "react-icons/fi";
import { useRouter } from "next/navigation";

type RegisterFormData = z.infer<typeof registerSchema>;

export default function Home() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur",
    defaultValues: {
      firstName: "Rueben",
      surname: "Cumberbatch",
      email: "ruebencee@gmail.com",
      phoneNumber: "07785382638",
      role: "PARENT",
      password: "Password11",
      passwordConfirmation: "Password11",
    },
  });

  const registerMutation = trpc.auth.handleRegistration.useMutation();
  const [success, setSuccess] = useState(false);

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerMutation.mutateAsync(data);
      setSuccess(true);
      setTimeout(() => {
        router.push("/dashboard");
      }, 2500);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Flex
      alignItems="center"
      backgroundColor="gray.200"
      flexDirection="column"
      height="100vh"
      justifyContent="center"
      width="100wh"
    >
      <Stack
        flexDirection="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
        spacing={4}
      >
        <Avatar bg="brand.500" />
        <Heading color="brand.400">Registration</Heading>
        <Box minW={{ base: "90%", md: "468px" }}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
              borderRadius="sm"
            >
              <FormControl isInvalid={!!errors.email}>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<FiMail color="gray.300" />}
                  />
                  <Input {...register("email")} placeholder="Email Address" />
                </InputGroup>
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.password}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="password"
                    {...register("password")}
                    placeholder="Password"
                  />
                </InputGroup>
                <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
              </FormControl>
              <FormControl isInvalid={!!errors.passwordConfirmation}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiLock color="gray.300" />
                  </InputLeftElement>
                  <Input
                    type="password"
                    {...register("passwordConfirmation")}
                    placeholder="Confirm Password"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.passwordConfirmation?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.firstName}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiUser color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("firstName")} placeholder="First Name" />
                </InputGroup>
                <FormErrorMessage>{errors.firstName?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.surname}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiUserCheck color="gray.300" />
                  </InputLeftElement>
                  <Input {...register("surname")} placeholder="Surname" />
                </InputGroup>
                <FormErrorMessage>{errors.surname?.message}</FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.phoneNumber}>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FiSmartphone color="gray.300" />
                  </InputLeftElement>
                  <Input
                    {...register("phoneNumber")}
                    placeholder="Phone Number"
                  />
                </InputGroup>
                <FormErrorMessage>
                  {errors.phoneNumber?.message}
                </FormErrorMessage>
              </FormControl>

              <FormControl isInvalid={!!errors.role}>
                <Box display="flex" alignItems="center" gap={2}>
                  <Select {...register("role")} placeholder="Select Role">
                    <option value="PARENT">Parent</option>
                    <option value="TEACHER">Teacher</option>
                    <option value="SOCIAL_WORKER">Social Worker</option>
                    <option value="DOCTOR">Doctor</option>
                    <option value="NURSE">Nurse</option>
                    <option value="GUARDIAN">Guardian</option>
                  </Select>
                </Box>
                <FormErrorMessage>{errors.role?.message}</FormErrorMessage>
              </FormControl>

              <Button
                type="submit"
                colorScheme="brand"
                isLoading={registerMutation.isPending}
              >
                Register
              </Button>

              {registerMutation.error && (
                <Alert status="error">
                  <AlertIcon />
                  {registerMutation.error.message}
                </Alert>
              )}

              {success && (
                <Alert status="success">
                  <AlertIcon />
                  Registered successfully!
                </Alert>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already registered?{" "}
        <Link color="brand.500" href="/login">
          Login
        </Link>
      </Box>
    </Flex>
  );
}
