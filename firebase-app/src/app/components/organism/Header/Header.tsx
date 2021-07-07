import Link from 'next/link';
import styled from 'styled-components';

const HeaderLink = styled.a`
    color: #fff;
    margin: 0px 10px;
    cursor: pointer;
`;

const Header = styled.div`
    background-color: #333;
    padding: 10px;
`;

// export default ({ pathname }: { pathname?: any }) => (
export default () => (
  <Header>
    <header>
      <Link href='/'>
        <HeaderLink>Home</HeaderLink>
      </Link>
      <Link href='/about'>
        <HeaderLink>About</HeaderLink>
      </Link>
    </header>
  </Header>
);
