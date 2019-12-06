import React from 'react';
import { render, fireEvent, getByTestId, cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';
import Display from './components/Display';
import Dashboard from './components/Dashboard';

afterEach(cleanup);

test('renders app properly', () => {
  render(<App/>);
});

test('renders display properly', () => {
  render(<Display/>);
});

test('renders dashboard properly', () => {
  render(<Dashboard/>);
});

test('contains a display component', () => {
  {getByTestId}(/display-id/i);
});

test('contains a dashboard component', () => {
  {getByTestId}(/dashboard/i);
});

// test('add strike functionality', () =>{
//   const {getByTestId} = render(<App />);
  
//   fireEvent.click(getByTestId('strike-btn'));
//   const strikeCounter = getByTestId('strike-data');

//   expect(strikeCounter).toHaveTextContent(1);
// });