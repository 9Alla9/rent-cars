import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 44px;
  width: 168px;
  border-radius: 12px;
  background: #3470ff;
  color: #fff;
  white-space: nowrap;
  padding:12px, 50px, 12px, 50px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.43;

  &:hover,
  &:focus {
    background: #0b44cd;
  }
  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
`;