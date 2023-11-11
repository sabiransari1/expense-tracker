import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';

export const Dashboard = () => {

  return (
    <Box>
      {/* 1 */}
      <Navbar />

      {/* 2 */}
      <Box p={'100px 5rem 5rem 5rem'}>
        {/* 1 */}
        <Flex justify={'space-between'}>
          <Link to={'/tracker'}>
            <Button>Tracker</Button>
          </Link>

          <Link to={'/analytics'}>
            <Button>Analytics</Button>
          </Link>

          <Link to={'/history'}>
            <Button>History</Button>
          </Link>
        </Flex>

        {/* 2 */}
        <Box></Box>
      </Box>
    </Box>
  );
};
