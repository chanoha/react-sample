import styled from 'styled-components';
import AcordionTitle from '../atom/AcordionTitle';
// import ExpandOpen from '../atom/ic_expand_more_24px.svg';

const Acordion = () => (
    <AcordionStyle>
        <AcordionTitle title='Profile' />
    </AcordionStyle>
);

const AcordionStyle = styled.div`
    background: #F0F0F0;
    margin: 10px 10px;
    padding: 10px;
    text-align: center;
    cursor: pointer;
`;

// const AcordionExpandOpen = styled(ExpandOpen)`
//     width: 20px;
//     height: 20px;
//     display: inline-block;
// `;

export default Acordion;
