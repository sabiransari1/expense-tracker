import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Box } from '@chakra-ui/react';

export const IncomeChart = ({}) => {
  // let incomeArr = Object.keys(income)?.map((key) => income[key]);

  return (
    <Box>
      <Doughnut
        data={{
          labels: ['Salary', 'Gifts', 'Refunds'],
          datasets: [
            {
              label: 'Income Chart',
              data: [1, 2, 3],
              backgroundColor: ["red","yellow","green"],
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
