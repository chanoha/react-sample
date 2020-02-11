import Link from 'next/link';
import { Header, HeaderLink } from '../../../pages/TitleStyle';

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
