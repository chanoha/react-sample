import App from '../components/App';
import React from 'react';
import { Normalize } from 'styled-normalize';
import { H1 } from './TitleStyle';

export default () => (
  <App>
    <Normalize />
    <p>Top Page</p>
    <H1>style text</H1>
  </App>
);
