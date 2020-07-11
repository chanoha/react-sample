import App from '../components/App';
import MainVisual from '../components/organism/MainVisual/MainVisual';
import { Normalize } from 'styled-normalize';
// import styled from 'styled-components';
import Acordion from '../components/molecule/Acordion';
import ItemList from '../components/organism/ItemList';

export default () => (
  <App>
    <Normalize />
    <MainVisual />
    <Acordion />
    <ItemList />
  </App>
);
