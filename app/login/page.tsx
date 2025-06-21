"use client";

import { loginSchema } from "@/server/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { trpc } from "../_trpc/client";
import {
  Flex,
  Stack,
  Avatar,
  Heading,
  Box,
  FormControl,
  InputGroup,
  InputLeftElement,
  Input,
  FormErrorMessage,
  Button,
  Alert,
  AlertIcon,
} from "@chakra-ui/react";
import Link from "next/link";
import { FiMail, FiLock } from "react-icons/fi";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  type LoginFormData = z.infer<typeof loginSchema>;

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "ruebencee@gmail.com",
      password: "Password11",
    },
  });

  const loginMutation = trpc.login.handleLogin.useMutation();

  const onSubmit = async (data: LoginFormData) => {
    const response = await loginMutation.mutateAsync(data);
    router.push("/dashboard");
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

              <Button
                type="submit"
                colorScheme="brand"
                isLoading={loginMutation.isPending}
              >
                Login
              </Button>

              {loginMutation.error && (
                <Alert status="error">
                  <AlertIcon />
                  {loginMutation.error.message}
                </Alert>
              )}

              {false && (
                <Alert status="success">
                  <AlertIcon />
                  Registered successfully! You will be able to login in{" "}
                  {countdown}
                </Alert>
              )}
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Not yet registered?{" "}
        <Link color="brand.500" href="/register">
          Sign up
        </Link>
      </Box>
    </Flex>
  );
}
