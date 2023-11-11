import React from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { IncomeChart } from '../components/IncomeChart';
import { ExpenseChart } from '../components/ExpenseChart';

export const Analytics = () => {
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
        <Flex
          w={'100%'}
          justify={'center'}
          align={'center'}
          gap={'1rem'}
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
          borderRadius={'5px'}
          p={'2rem'}
          mt={'2rem'}
        >
          <Box w={'50%'}>
            <IncomeChart />
          </Box>

          <Box w={'50%'}>
            <ExpenseChart />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
