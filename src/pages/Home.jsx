import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllAdverts } from '../../redux/adverts/advertsOperations';
import { selectAdverts } from '../../redux/adverts/advertsSelectors';

function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllAdverts());
  }, [dispatch]);
  const adverts = useSelector(selectAdverts);
  return (
    <>
      <footer
        className="footer items-center p-4 bg-neutral text-neutral-content"
        style={{ backgroundColor: '#3470ff' }}
      >
        <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
          <FooterWrap>
            <p>
              Contact us:{' '}
              <FooterLinkStyled href="tel:+380730000000">
                +38 073 000 00 00
              </FooterLinkStyled>
            </p>
          </FooterWrap>
        </nav>
      </footer>
    </>
  );
}

export default Home;