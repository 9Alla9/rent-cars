import { useDispatch, useSelector } from 'react-redux';
import { selectAdverts, selectFavorites } from '../../redux/car/Selectors';
import { useEffect, useState } from 'react';
import {
  CarItem,
  Grid,
  GridWrap,
  LoadMoreStyled,
} from '../Gallery/Gallery.styled';
import GalleryItem from '../GalleryItem/GalleryItem';
import { getAllAdverts } from '../../redux/car/Operations';
import { NotFoundMessage } from './Favorite.styled';
import Button from '../Buttons/Button';
import { Link } from 'react-router-dom';

function Favorite() {
  const [visibleCount, setVisibleCount] = useState(8);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);

  const adverts = useSelector(selectAdverts);
  const favoriteId = useSelector(selectFavorites);
  const favoriteAdverts = adverts.filter(item => favoriteId.includes(item.id));
  const handleLoadMore = () => {
    setVisibleCount(prevVisibleCount => prevVisibleCount + 8);
  };

  if (favoriteAdverts.length !== 0) {
    return (
      <GridWrap>
        <Grid>
          {favoriteAdverts.slice(0, visibleCount).map(item => (
            <CarItem key={item.id}>
              <GalleryItem data={item} />
            </CarItem>
          ))}
        </Grid>
        {visibleCount < favoriteAdverts.length && (
          <LoadMoreStyled type="button" onClick={handleLoadMore}>
            Load more
          </LoadMoreStyled>
        )}
      </GridWrap>
    );
  } else {
    return (
      <NotFoundMessage>
        <span>No favorite cars found.</span>
        <Link to="/catalog">
          <Button width={280} text="rent cars" />
        </Link>
      </NotFoundMessage>
    );
  }
}

export default Favorite;
