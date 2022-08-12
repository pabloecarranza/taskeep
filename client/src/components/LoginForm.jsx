import React from "react";

import {
  Box,
  Button,
  Center,
  Text,
  Flex,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Spinner,
} from "@chakra-ui/react";
import { AiOutlineUserAdd, AiOutlineUser } from "react-icons/all";

import { useSignInMutation, useSignUpMutation } from "../features/api/apiSlice";

export const LoginForm = () => {
  const [signUp, setSignUp] = React.useState(false);
  const [show, setShow] = React.useState(false);
  const [credentials, setCredentials] = React.useState({
    username: "",
    password: "",
    email: "",
  });

  const [SignIn, SignInResponse] = useSignInMutation();
  const [SignUp, SignUpResponse] = useSignUpMutation();

  const handleClick = () => setShow(!show);
  const handleClickType = () => {
    setSignUp(!signUp);
  };
  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async () => {
    if (
      credentials.username.length === 0 ||
      credentials.password.length === 0
    ) {
      setCredentials({
        username: "",
        password: "",
        email: "",
      });
      return alert("el campo no puede estar vacio");
    } else if (!signUp) {
      SignIn(credentials)
        .unwrap()
        .then((respon) => {
          console.log(respon);
        })
        .catch((error) => {
          console.log(error.data);
        });
      setCredentials({
        username: "",
        password: "",
        email: "",
      });
    } else {
      SignUp(credentials)
        .unwrap()
        .then((respon) => {
          console.log(respon);
        })
        .catch((error) => {
          console.log(error.data);
        });
      setCredentials({
        username: "",
        password: "",
        email: "",
      });
    }
  };

  return (
    <Box w="30vw" h="80vh" boxShadow="dark-lg" p="6" rounded="md" bg="#1A202C">
      {SignInResponse.isLoading || SignUpResponse.isLoading ? (
        <Center pt="50%">
          <Spinner size="xl" color="blue.500" />
        </Center>
      ) : (
        <>
          {signUp ? (
            <>
              <Center flexDir="column" h="30%">
                <Box>
                  <AiOutlineUserAdd size="50px" />
                </Box>
                <Text fontSize="2xl">Create an Account</Text>
                <Box>
                  <Text>
                    Already have an account?
                    <Button
                      colorScheme="blue"
                      variant="link"
                      ml="7px"
                      onClick={handleClickType}
                    >
                      Log In.
                    </Button>
                  </Text>
                </Box>
              </Center>
              <Flex h="70%" flexDir="column" justifyContent="space-between">
                <Box>
                  <FormControl isRequired pt="5px">
                    <FormLabel>User Name</FormLabel>
                    <Input
                      name="username"
                      type="username"
                      value={credentials.username}
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired pt="5px">
                    <FormLabel>Email</FormLabel>
                    <Input
                      name="email"
                      type="email"
                      value={credentials.email}
                      placeholder="email"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired pt="5px">
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        name="password"
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={handleClick}
                          colorScheme="blue"
                          variant="ghost"
                        >
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </Box>
                <Button size="lg" colorScheme="blue" onClick={handleSubmit}>
                  Create Account
                </Button>
              </Flex>
            </>
          ) : (
            <>
              <Center flexDir="column" h="40%">
                <Box>
                  <AiOutlineUser size="50px" />
                </Box>
                <Text fontSize="2xl">Sign In</Text>
                <Box>
                  <Text>
                    You don&apos;t have an account?
                    <Button
                      colorScheme="blue"
                      variant="link"
                      ml="7px"
                      onClick={handleClickType}
                    >
                      Sign Up.
                    </Button>
                  </Text>
                </Box>
              </Center>
              <Flex h="60%" flexDir="column" justifyContent="space-between">
                <Box>
                  <FormControl isRequired>
                    <FormLabel>User Name</FormLabel>
                    <Input
                      name="username"
                      type="username"
                      value={credentials.username}
                      placeholder="Name"
                      onChange={handleChange}
                    />
                  </FormControl>
                  <FormControl isRequired pt="10px">
                    <FormLabel>Password</FormLabel>
                    <InputGroup size="md">
                      <Input
                        name="password"
                        type={show ? "text" : "password"}
                        placeholder="Password"
                        value={credentials.password}
                        onChange={handleChange}
                      />
                      <InputRightElement width="4.5rem">
                        <Button
                          h="1.75rem"
                          size="sm"
                          onClick={handleClick}
                          colorScheme="blue"
                          variant="ghost"
                        >
                          {show ? "Hide" : "Show"}
                        </Button>
                      </InputRightElement>
                    </InputGroup>
                  </FormControl>
                </Box>
                <Button size="lg" colorScheme="blue" onClick={handleSubmit}>
                  Log In
                </Button>
              </Flex>
            </>
          )}
        </>
      )}
    </Box>
  );
};
