import Select from 'react-select';
import { useState } from 'react';
import {
  FilterContainer,
  SelectWrapper,
  MileageInputsWrapper,
  MileageInputLeft,
  MileageInputRight,
  Label,
  InputsWrapper,
  ButtonsWrapper,
  FilterButton,
} from './Filter.styled';

import { useTranslation } from 'react-i18next';

const Filter = ({
  makeFilter,
  priceFilter,
  mileageFilter,
  setMakeFilter,
  setPriceFilter,
  setMileageFilter,
  handleReset,
  makes,
  onApplyFilters,
  children,
}) => {
  const { t } = useTranslation();

  const [makeMenuIsOpen, setMakeMenuIsOpen] = useState(false);
  const [priceMenuIsOpen, setPriceMenuIsOpen] = useState(false);

  const handleMakeChange = selectedOption => {
    setMakeFilter(selectedOption ? selectedOption.value : '');
  };

  const handlePriceChange = selectedOption => {
    setPriceFilter(selectedOption ? selectedOption.value : '');
  };

  const handleMakeKeyDown = event => {
    if (event.key === 'Enter') {
      setMakeMenuIsOpen(!makeMenuIsOpen);
    }
  };

  const handlePriceKeyDown = event => {
    if (event.key === 'Enter') {
      setPriceMenuIsOpen(!priceMenuIsOpen);
    }
  }

  const priceOptions = [];
  for (let price = 30; price <= 500; price += 10) {
    priceOptions.push({ label: price, value: price });
  }

  const makeOptions = [...makes].sort().map(make => ({
    label: make,
    value: make,
  }));
  return (
    <FilterContainer>
      <SelectWrapper>
        <MileageInputsWrapper>
          <Label htmlFor="brand">{t('brandInput')}</Label>
          <Select
            inputId="brand"
            options={makeOptions}
            value={makeFilter ? { label: makeFilter, value: makeFilter } : null}
            onChange={handleMakeChange}
            menuIsOpen={makeMenuIsOpen}
            onMenuOpen={() => setMakeMenuIsOpen(true)}
            onMenuClose={() => setMakeMenuIsOpen(false)}
            placeholder={t('brandPlaceholder')}
            onKeyDown={handleMakeKeyDown}
          />
        </MileageInputsWrapper>
        <MileageInputsWrapper>
          <Label htmlFor="price">{t('priceInput')}</Label>
          <Select
            inputId="price"
            options={priceOptions}
            value={
              priceFilter ? { label: priceFilter, value: priceFilter } : null
            }
            onChange={handlePriceChange}
            menuIsOpen={priceMenuIsOpen}
            onMenuOpen={() => setPriceMenuIsOpen(true)}
            onMenuClose={() => setPriceMenuIsOpen(false)}
            placeholder={t('pricePlaceholder')}
            onKeyDown={handlePriceKeyDown}
          />
        </MileageInputsWrapper>
      </SelectWrapper>
      <MileageInputsWrapper>
        <Label htmlFor="mileage">{t('mileageInput')}</Label>
        <InputsWrapper>
          <MileageInputLeft
            id="mileage"
            type="text"
            value={mileageFilter.min}
            onChange={e =>
              setMileageFilter({
                ...mileageFilter,
                min: e.target.value,
              })
            }
            placeholder={t('leftPlaceholder')}
          />
          <MileageInputRight
            type="text"
            value={mileageFilter.max}
            onChange={e =>
              setMileageFilter({
                ...mileageFilter,
                max: e.target.value,
              })
            }
            placeholder={t('rightPlaceholder')}
          />
        </InputsWrapper>
      </MileageInputsWrapper>

      <ButtonsWrapper>
        <FilterButton
          type="button"
          onClick={() => {
            onApplyFilters();
          }}
        >
          {t('search')}
        </FilterButton>
        <FilterButton type="button" onClick={handleReset}>
          {t('reset')}
        </FilterButton>
      </ButtonsWrapper>
      {children}
    </FilterContainer>
  );
};

export default Filter;