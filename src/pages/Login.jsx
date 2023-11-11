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
import { useNavigate } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const users = useSelector((store) => store.userReducer.users);

  const dispatch = useDispatch();
  const toast = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getUsers);
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();

    let userCheck = users.reduce((acc, item) => {
      if (item.email === email && item.password === password) {
        acc = item;
      }

      return acc;
    }, {});

    if (Object.keys(userCheck).length) {
      dispatch(isAuth(userCheck));
      navigate('/dashboard');

      toast({
        title: 'User Login Successful',
        status: 'success',
        isClosable: true,
        position: 'top',
        duration: '1000',
      });

      setEmail('');
      setPassword('');
    } else {
      toast({
        title: 'Wrong Credentials, Please Login Again',
        status: 'error',
        isClosable: true,
        position: 'top',
        duration: '1000',
      });
    }
  };

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Flex p={'100px 5rem 5rem 5rem'} justify={'center'} align={'center'}>
        <Box w={'50%'} p={'1rem'}>
          {/* <FormControl> */}
          <form onSubmit={handleLogin}>
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

                <Button type={'submit'} w={'100%'} bgColor={'#a0caba'}>
                  Login
                </Button>
              </VStack>
            </FormControl>
          </form>
        </Box>
      </Flex>
    </Box>
  );
};
