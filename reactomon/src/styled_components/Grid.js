import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  margin: 0px;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 15px;
  padding-top: 100px;
`;

/*const Row = styled.div`
  display: flex;
`;

const Col = styled.div`
  flex: ${(props) => props.size};
`;*/

export default Grid;
