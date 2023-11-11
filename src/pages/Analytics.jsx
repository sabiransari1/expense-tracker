import React, { useEffect, useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { IncomeChart } from '../components/IncomeChart';
import { ExpenseChart } from '../components/ExpenseChart';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/userdata/action';

export const Analytics = () => {
  const currUser = useSelector((store) => store.userReducer.currUser);
  const usersData = useSelector((store) => store.userdataReducer.usersData);
  const [userData, setUserData] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);

  useEffect(() => {
    let userDatax = usersData?.reduce((acc, item) => {
      if (item.userId === currUser.id) {
        acc.push(item);
      }

      return acc;
    }, []);

    setUserData((prev) => (prev = userDatax));
  }, [usersData]);

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
