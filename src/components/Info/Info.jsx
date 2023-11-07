import { useSelector } from 'react-redux';
import {
  AccessoriesStyled,
  DescriptionStyled,
  ModalAccessoriesWrap,
  ModalCarImg,
  ModalConditionsItem,
  ModalConditionsList,
  ModalDataItem,
  ModalDataList,
  ModalDataWrap,
  ModalStyledModel,
  ModalTitle,
  ModalTitleWrap,
  ModalWrap,
  SpanStyled,
  StyledXSVG,
} from './Info.styled';
import { selectAdvertById } from '../../redux/car/Selectors';
import Button from '../Buttons/Button';

function Info({ modalIsOpen, toggleModal, ...carData }) {
  const { id, city, country, altText } = carData;

  const advert = useSelector(state => selectAdvertById(state, id));
  if (!advert) {
    return <div>Авто не знайдено</div>;
  }
  const {
    year,
    make,
    model,
    type,
    description,
    img,
    rentalPrice,
    accessories,
    functionalities,
    fuelConsumption,
    engineSize,
    rentalConditions,
    mileage,
  } = advert;
  const conditionsArray = rentalConditions.split('\n');
  const [minAgeText, age] = conditionsArray[0]
    .split(': ')
    .map(item => item.trim());
  const formattedMileage = mileage.toLocaleString();
  const xIcon = (
    <StyledXSVG
      onClick={() => toggleModal()}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
    >
      <path d="M18 6L6 18" />
      <path d="M6 6L18 18" />
    </StyledXSVG>
  );

  return (
    <ModalWrap>
      {xIcon}
      <ModalCarImg src={img} alt={altText} />
      <ModalTitleWrap>
        <ModalTitle>
          {make}
          <ModalStyledModel> {model}</ModalStyledModel>, {year}
        </ModalTitle>
      </ModalTitleWrap>
      <ModalDataWrap>
        <ModalDataList>
          <ModalDataItem>{city}</ModalDataItem>
          <ModalDataItem>{country}</ModalDataItem>
          <ModalDataItem>{id}</ModalDataItem>
          <ModalDataItem>{year}</ModalDataItem>
          <ModalDataItem>{type}</ModalDataItem>
        </ModalDataList>
        <ModalDataList>
          <ModalDataItem>Fuel Consumption: {fuelConsumption}</ModalDataItem>
          <ModalDataItem>Engine Size: {engineSize}</ModalDataItem>
        </ModalDataList>
      </ModalDataWrap>
      <DescriptionStyled>{description}</DescriptionStyled>
      <AccessoriesStyled>Accessories and functionalities:</AccessoriesStyled>
      <ModalAccessoriesWrap>
        <ModalDataList>
          <ModalDataItem>{accessories[0]}</ModalDataItem>
          <ModalDataItem>{accessories[1]}</ModalDataItem>
          <ModalDataItem>{accessories[2]}</ModalDataItem>
        </ModalDataList>
        <ModalDataList>
          <ModalDataItem>{functionalities[0]}</ModalDataItem>
          <ModalDataItem>{functionalities[1]}</ModalDataItem>
          <ModalDataItem>{functionalities[2]}</ModalDataItem>{' '}
        </ModalDataList>
      </ModalAccessoriesWrap>
      <AccessoriesStyled>Rental Conditions: </AccessoriesStyled>
      <ModalConditionsList>
        <ModalConditionsItem>
          {minAgeText}: <SpanStyled>{age}</SpanStyled>
        </ModalConditionsItem>
        <ModalConditionsItem>{conditionsArray[1]}</ModalConditionsItem>
        <ModalConditionsItem>{conditionsArray[2]}</ModalConditionsItem>
        <ModalConditionsItem>
          Mileage: <SpanStyled>{formattedMileage}</SpanStyled>
        </ModalConditionsItem>
        <ModalConditionsItem>
          Price: <SpanStyled>{rentalPrice}</SpanStyled>
        </ModalConditionsItem>
      </ModalConditionsList>

      <Button width={168} text="Rental car" phoneNumber="+380730000000" />
    </ModalWrap>
  );
}

export default Info;
