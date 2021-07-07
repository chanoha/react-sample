import styled from 'styled-components';
import H1 from '../../atom/H1';

const MainVisual = () => (
    <MainVisualStyle>
        <H1 title='My Design' />
    </MainVisualStyle>
);

const MainVisualStyle = styled.div`
    background: #E3E3E3;
    width: 100%;
    height: 500px;
    color: #707070;
`;

export default MainVisual;
