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
  const [income, setIncome] = useState([]);
  const [expense, setExpense] = useState([]);

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

  useEffect(() => {
    let incomeArr = userData?.reduce(
      (acc, item) => {
        if (item.task === 'Salary') {
          acc.Salary += item.amount;
        } else if (item.task === 'Gifts') {
          acc.Gifts += item.amount;
        } else if (item.task === 'Refunds') {
          acc.Refunds += item.amount;
        } else if (item.task === 'Other') {
          acc.Other += item.amount;
        }

        return acc;
      },
      { Salary: 0, Gifts: 0, Refunds: 0, Other: 0 }
    );
    setIncome(incomeArr);

    let expenseArr = userData?.reduce(
      (acc, item) => {
        if (item.task === 'Food') {
          acc.Food += item.amount;
        } else if (item.task === 'Shopping') {
          acc.Shopping += item.amount;
        } else if (item.task === 'Housing') {
          acc.Housing += item.amount;
        } else if (item.task === 'Bills') {
          acc.Bills += item.amount;
        } else if (item.task === 'Vehicle') {
          acc.Vehicle += item.amount;
        } else if (item.task === 'Lifestyle') {
          acc.Lifestyle += item.amount;
        }

        return acc;
      },
      {
        Food: 0,
        Shopping: 0,
        Housing: 0,
        Bills: 0,
        Vehicle: 0,
        Lifestyle: 0,
      }
    );
    setExpense(expenseArr);
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
            <IncomeChart income={income} />
          </Box>

          <Box w={'50%'}>
            <ExpenseChart expense={expense} />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
