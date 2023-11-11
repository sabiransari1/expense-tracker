import React, { useEffect, useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { getUsers, isAuth } from '../redux/user/action';
import { Navigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((store) => store.userReducer.users);

  const dispatch = useDispatch();
  const toast = useToast();

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  const handleLogin = () => {
    let userCheck = users.filter((item) => item.password === password);

    if (userCheck.length) {
      dispatch(isAuth(userCheck));
      <Navigate to={'/dashboard'} />;
    }

    setEmail('');
    setPassword('');

    toast({
      title: 'User Login Successful',
      status: 'success',
      isClosable: true,
      position: 'top',
      duration: '1000',
    });
  };

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Flex p={'100px 5rem 5rem 5rem'} justify={'center'} align={'center'}>
        <Box
          w={"100%"}
          p={'1rem'}
        >
          {/* <FormControl> */}
          <FormControl>
            <VStack spacing={'1rem'}>
              <Input
                type={'email'}
                placeholder={'Enter Email'}
                variant={'filled'}
                isRequired
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />

              <Input
                type={'password'}
                placeholder={'Enter Password'}
                variant={'filled'}
                isRequired
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <Button
                type={'submit'}
                w={'100%'}
                bgColor={'#a0caba'}
                onClick={handleLogin}
              >
                Login
              </Button>
            </VStack>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};
