import styled from 'styled-components';

const H1 = props => (
    <H1style>{props.title}</H1style>
);

const H1style = styled.h1`
    margin: 0px;
    padding: 10px 0px 0px 10px;
    font-size: 30px;
    font-weight: bold;
    font-style: italic;
`;

export default H1;
