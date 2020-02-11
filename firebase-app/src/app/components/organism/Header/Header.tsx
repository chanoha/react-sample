import Link from 'next/link';
import { Header } from '../../../pages/TitleStyle';

export default ({ pathname }: { pathname?: any }) => (
    <Header>
      <header>
        <Link href='/'>
          <a className={pathname === '/' ? 'is-active' : ''}>Home</a>
        </Link>
        <Link href='/about'>
          <a className={pathname === '/about' ? 'is-active' : ''}>About</a>
        </Link>
      </header>
    </Header>
);
