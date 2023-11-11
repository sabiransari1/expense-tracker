import React, { useEffect } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';
import { Navbar } from '../components/Navbar';
import { Link } from 'react-router-dom';
import { HistoryCard } from '../components/HistoryCard';
import { useDispatch, useSelector } from 'react-redux';
import { getData } from '../redux/userdata/action';

export const History = () => {
  const currUser = useSelector((store) => store.userReducer.currUser);
  const userData = useSelector((store) => store.userdataReducer.userData);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData);
  }, []);

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
        <Box
          boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px;'}
          borderRadius={'5px'}
          p={'2rem'}
          mt={'2rem'}
        >
          {userData.length &&
            userData?.map((item) => <HistoryCard key={item.id} {...item} />)}
        </Box>
      </Box>
    </Box>
  );
};
