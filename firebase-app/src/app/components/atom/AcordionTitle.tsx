import styled from 'styled-components';

const AcordionTitle = (props) => (
    <AcordionTitleStyle>{props.title}</AcordionTitleStyle>
);

const AcordionTitleStyle = styled.span`
    font-size: 14px;
    font-family: roboto;
`;

export default AcordionTitle;
