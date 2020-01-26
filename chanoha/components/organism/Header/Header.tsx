import Link from 'next/Link';
import styled from 'styled-components';
// import { createGenerateClassName } from '@material-ui/styles';

const linkStyle = {
    marginRight: 15
};

const Component = styled.div`
    margin: 30px;
`;

const Header = () => (
    <div>
        <Component>
            <Link href="/">
                <a style={linkStyle}>Home</a>
            </Link>
            <Link href="/about">
                <a style={linkStyle}>About</a>
            </Link>
        </Component>
    </div>
);

export default Header;