import styled from 'styled-components';

export const Grid = styled.ul`
  display: grid;
  grid-template-columns: repeat(4, 274px);
  gap: 29px;
  row-gap: 50px;
  list-style: none;
  margin: 0px auto;
  margin-bottom: 100px;
`;

export const CarItem = styled.li`
  position: relative;
  width: 100%;
  height: 426px;
`;

export const GridWrap = styled.div`
  width: 100%;
  padding: 245px 128px;
  margin: 0px auto;
  display: flex;
  flex-direction: column;
`;

export const LoadMoreStyled = styled.button`
  color: #3470ff;
  font-weight: 500;
  line-height: 1.5;
  text-decoration-line: underline;
  &:hover,
  &:focus {
    color: #0b44cd;
  }
`;
