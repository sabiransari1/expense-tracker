import React, { useState } from 'react';
import {
  Box,
  Button,
  Flex,
  FormControl,
  Input,
  Select,
  VStack,
  useToast,
} from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addData } from '../redux/userdata/action';

export const Tracker = () => {
  const [task, setTask] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');
  const currUser = useSelector((store) => store.userReducer.currUser);

  const dispatch = useDispatch();
  const toast = useToast();

  const handleAddData = () => {
    const data = {
      userId: currUser?.id,
      task,
      amount,
      date,
    };

    dispatch(addData(data));

    toast({
      title: 'Data Added Successfully',
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
        <Flex p={'100px 5rem 5rem 5rem'} justify={'center'} align={'center'}>
          <Box w={'100%'} p={'1rem'}>
            {/* <FormControl> */}
            <FormControl>
              <VStack
                spacing={'1rem'}
                boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
                borderRadius={'5px'}
                p={'2rem'}
              >
                {/* <Select>
                  <option>Choose Either Income or Expense</option>
                  <option>Income</option>
                  <option>Expense</option>
                </Select> */}

                <Select onChange={(e) => setTask(e.target.value)}>
                  <option value={''}>Income</option>
                  <option value={'Salary'}>Salary</option>
                  <option value={'Gifts'}>Gifts</option>
                  <option value={'Refunds'}>Refunds</option>
                  <option value={'Other'}>Other</option>
                </Select>

                <Select onChange={(e) => setTask(e.target.value)}>
                  <option value={''}>Expense</option>
                  <option value={'Food&Drinks'}>Food & Drinks</option>
                  <option value={'Shopping'}>Shopping</option>
                  <option value={'Housing'}>Housing</option>
                  <option value={'Bills'}>Bills</option>
                  <option value={'Vehicle&Transport'}>
                    Vehicle & Transport
                  </option>
                  <option value={'Lifestyle'}>Lifestyle</option>
                </Select>

                <Input
                  type="number"
                  placeholder="Enter Your Amount"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                />

                <Input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />

                <Button
                  type={'submit'}
                  w={'100%'}
                  bgColor={'#a0caba'}
                  onClick={handleAddData}
                >
                  Add Data
                </Button>
              </VStack>
            </FormControl>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
