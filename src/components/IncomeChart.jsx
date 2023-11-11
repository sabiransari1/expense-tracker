import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Box } from '@chakra-ui/react';

export const IncomeChart = ({ income }) => {
  let incomeKeysArr = Object.keys(income);
  let incomeValuesArr = Object.values(income);

  return (
    <Box>
      <Doughnut
        data={{
          labels: incomeKeysArr,
          datasets: [
            {
              label: 'Income Chart',
              data: incomeValuesArr,
              backgroundColor: ['red', 'yellow', 'green', 'wheat'],
            },
          ],
        }}
        options={{
          responsive: true,
          plugins: {
            legend: {
              position: 'bottom',
            },
            title: {
              display: true,
              text: 'Income Chart',
            },
          },
        }}
      />
    </Box>
  );
};
