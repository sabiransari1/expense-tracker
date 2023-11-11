import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Box } from '@chakra-ui/react';

export const ExpenseChart = ({}) => {
  // let incomeArr = Object.keys(income)?.map((key) => income[key]);

  return (
    <Box>
      <Doughnut
        data={{
          labels: [
            'Food & Drinks',
            'Shopping',
            'Housing',
            'Bills',
            'Vehicle & Transport',
            'Lifestyle',
          ],
          datasets: [
            {
              label: 'Expense Chart',
              data: [1, 2, 3, 4, 5, 6],
              backgroundColor: ['red', 'yellow', 'green',"gray","wheat","pink","blue"],
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
              text: 'Expense Chart',
            },
          },
        }}
      />
    </Box>
  );
};
