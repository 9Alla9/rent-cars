import { LoaderWrap } from './Loader.styled';
import { RotatingLines } from 'react-loader-spinner';

function Loader() {
  return (
    <LoaderWrap>
      <RotatingLines
        strokeWidth="4"
        animationDuration="0.75"
        width="200"
        visible={true}
      />
    </LoaderWrap>
  );
}

export default Loader;
