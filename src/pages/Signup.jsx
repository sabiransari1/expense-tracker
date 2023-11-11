import React, { useState } from 'react';
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
import { useDispatch } from 'react-redux';
import { postUser } from '../redux/user/action';

export const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const toast = useToast();

  const handleSignup = () => {
    let user = {
      fullName,
      email,
      password,
    };

    dispatch(postUser(user));
    setFullName('');
    setEmail('');
    setPassword('');

    toast({
      title: 'User Signup Successful',
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
        <Box w={'50%'} p={'1rem'}>
          {/* <FormControl> */}
          <FormControl>
            <VStack spacing={'1rem'}>
              <Input
                type={'text'}
                placeholder={'Enter Full Name'}
                variant={'filled'}
                isRequired
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
              />

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
                onClick={handleSignup}
              >
                Signup
              </Button>
            </VStack>
          </FormControl>
        </Box>
      </Flex>
    </Box>
  );
};
