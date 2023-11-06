import styled from 'styled-components';

export const ModalWrap = styled.div`
  width: 541px;
  min-height: 752px;
  border-radius: 24px;
  background: #fff;
  position: relative;
  padding: 40px;
  /* overflow-y: auto; */
`;

export const StyledXSVG = styled.svg`
  position: absolute;
  top: 16px;
  right: 16px;
  cursor: pointer;
  stroke: #121417;
  stroke-opacity: 0.8;
  stroke-width: 1.8;
  stroke-linecap: round;
  stroke-linejoin: round;
  width: 24px;
  height: 24px;
  fill: none;
  transition: stroke 0.3s ease;
  &:hover,
  &:focus {
    fill: #3470ff;
    stroke: #3470ff;
  }
`;
export const ModalCarImg = styled.img`
  width: 461px;
  height: 248px;
  object-fit: cover;
  border-radius: 14px;
  margin-bottom: 14px;
  background: lightgray 50%;
`;

export const ModalTitleWrap = styled.div`
  margin-bottom: 8px;
`;

export const ModalTitle = styled.h3`
  font-size: 18px;
  line-height: 1.33;
  font-weight: 500;
`;

export const ModalDataItem = styled.li`
  margin-right: 6px;
  display: inline-block;
  color: rgba(18, 20, 23, 0.5);
  font-size: 12px;
  line-height: 1.5;
  &:not(:last-child)::after {
    content: '';
    margin-left: 6px;
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 16px;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='2' height='16' viewBox='0 0 2 16' fill='none'%3E%3Cpath d='M1 0V16' stroke='%23121417' stroke-opacity='0.1'/%3E%3C/svg%3E");
  }
`;
export const ModalDataWrap = styled.div`
  margin-bottom: 14px;
`;
export const ModalAccessoriesWrap = styled.div`
  margin-bottom: 24px;
`;
export const ModalDataList = styled.ul`
  margin: 0;
`;

export const ModalStyledModel = styled.span`
  color: #3470ff;
`;

export const DescriptionStyled = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 24px;
`;
export const AccessoriesStyled = styled.p`
  color: #121417;
  font-size: 14px;
  line-height: 1.43;
  margin-bottom: 8px;
`;
export const ModalConditionsList = styled.ul`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;
export const ModalConditionsItem = styled.li`
  padding: 7px 14px;
  border-radius: 35px;
  background-color: #f9f9f9;
  color: #363535;
  font-size: 12px;
  line-height: 1.5;
  font-family: Montserrat;
  letter-spacing: -0.24px;
`;
export const SpanStyled = styled.span`
  color: #3470ff;
  font-family: Montserrat;
  font-weight: 600;
  letter-spacing: -0.24px;
`;
