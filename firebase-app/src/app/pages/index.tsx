import App from '../components/App';
import MainVisual from '../components/organism/MainVisual/MainVisual';
import { Normalize } from 'styled-normalize';
import styled from 'styled-components';

export default () => (
  <App>
    <Normalize />
    <MainVisual />
    <p>Top Page</p>
    <H1>style text</H1>
  </App>
);

const H1 = styled.h1`
    font-size: 50px;
    color: blue;
    text-align: center;
`;
