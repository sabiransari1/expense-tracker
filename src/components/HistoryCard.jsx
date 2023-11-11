import React from 'react';
import { Box, Button, Flex, Heading, Text } from '@chakra-ui/react';

export const HistoryCard = ({ id, task, amount, date }) => {
  return (
    <Flex p={'1rem'} justify={'space-between'} align={'center'}>
      {/* 1 */}
      <Flex justify={'space-between'} align={'center'} gap={'1rem'}>
        {/* 1 */}
        <Box
          w={'100px'}
          h={'100px'}
          bgColor={'wheat'}
          borderRadius={'5px'}
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
        ></Box>

        {/* 2 */}
        <Box>
          <Heading>{task}</Heading>
          <Text>{date}</Text>
        </Box>
      </Flex>

      {/* 2 */}
      <Flex direction={'column'} gap={'.2rem'}>
        <Heading>{amount}</Heading>
        <Button>Edit</Button>
        <Button>Delete</Button>
      </Flex>
    </Flex>
  );
};
