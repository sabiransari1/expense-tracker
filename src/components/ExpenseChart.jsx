import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto';
import { Box } from '@chakra-ui/react';

export const ExpenseChart = ({ expense }) => {
  let expenseKeysArr = Object.keys(expense);
  let expenseValuesArr = Object.values(expense);

  return (
    <Box>
      <Doughnut
        data={{
          labels: expenseKeysArr,
          datasets: [
            {
              label: 'Expense Chart',
              data: expenseValuesArr,
              backgroundColor: [
                'red',
                'yellow',
                'green',
                'gray',
                'wheat',
                'pink',
                'blue',
              ],
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
