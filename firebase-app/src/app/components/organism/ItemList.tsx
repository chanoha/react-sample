import Item from '../molecule/Item';
import styled from 'styled-components';

const ItemList = () => (
    <ItemUlStyle>
        <ItemLiStyle><Item /></ItemLiStyle>
        <ItemLiStyle><Item /></ItemLiStyle>
    </ItemUlStyle>
);

const ItemLiStyle = styled.li`
    margin: 0px 10px 10px 0px;
`;

const ItemUlStyle = styled.ul`
    list-style: none;
    display: flex;
`;

export default ItemList;
