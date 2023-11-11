import React from 'react';
import { Flex, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <Flex
      minW={'100vw'}
      minH={'70px'}
      justifyContent={'space-between'}
      align={'center'}
      p={'0rem 5rem'}
      position={'fixed'}
      zIndex={'1'}
      bgColor={'#a0caba'}
    >
      <Link to={'/'}>
        <Heading>Signup</Heading>
      </Link>
      <Link to={'/login'}>
        <Heading>Login</Heading>
      </Link>
      <Link to={'/dashboard'}>
        <Heading>Dashboard</Heading>
      </Link>
    </Flex>
  );
};
