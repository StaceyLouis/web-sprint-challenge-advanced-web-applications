import React from 'react';
import BubblePage from '../components/BubblePage';
import {render, screen, waitFor} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import axiosWithAuth from './utils/axiosWithAuth'

let colors = [
  {
    color: 'aliceblue',
    code: {
      hex: '#f0f8ff'
    },
    id: 1
  },
  {
    color: 'limegreen',
    code: {
      hex: '#99ddbc'
    },
    id: 2
  },
  {
    color: 'aqua',
    code: {
      hex: '#00ffff'
    },
    id: 3
  },
  {
    color: 'aquamarine',
    code: {
      hex: '#7fffd4'
    },
    id: 4
  },
  {
    color: 'lilac',
    code: {
      hex: '#9a99dd'
    },
    id: 5
  },
  {
    color: 'softpink',
    code: {
      hex: '#dd99ba'
    },
    id: 6
  },
  {
    color: 'bisque',
    code: {
      hex: '#dd9a99'
    },
    id: 7
  },
  {
    color: 'softyellow',
    code: {
      hex: '#dcdd99'
    },
    id: 8
  },
  {
    color: 'blanchedalmond',
    code: {
      hex: '#ffebcd'
    },
    id: 9
  },
  {
    color: 'blue',
    code: {
      hex: '#6093ca'
    },
    id: 10
  },
  {
    color: 'black',
    code: {
      hex: '#101010'
    },
    id: 22
  },
]

jest.mock('http://localhost:8000/api/colors')
test("Fetches data and renders the bubbles", async () => {
    render(<BubblePage colors={[]}/>)
  const colors = getByText(/colors/i);
  expect(getByText(/colors/i)).toBeInTheDocument();

  expect(getByText(/bubbles/i)).toBeInTheDocument();

});
