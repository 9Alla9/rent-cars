import ReactModal from 'react-modal';

const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(18, 20, 23, 0.5)',
};
const contentStyles = {
  position: 'relative',
  margin: '0 auto',
  WebkitOverflowScrolling: 'touch',
  outline: 'none',
  overflow: 'hidden',
};

const Modal = ({ isOpen, onRequestClose, children }) => {
  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={0.3}
      style={{ overlay: overlayStyles, content: contentStyles }}
      contentLabel="Car Modal"
      portalClassName="ReactModalPortal"
      overlayClassName="ReactModal__Overlay"
      className="ReactModal__Content"
      bodyOpenName="ReactModal__Body--open"
      htmlOpenName="ReactModal__Html--open"
      ariaApp={false}
      shouldFocusAfterRender={true}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      shouldReturnFocusAfterClose={true}
      role="dialog"
      preventScroll={false}
      parentSelector={() => document.body}
      aria={{
        labelledby: 'heading',
        describedby: 'full_description',
      }}
      overlayElement={(props, contentElement) => (
        <div {...props}>{contentElement}</div>
      )}
      contentElement={props => <div {...props}>{children}</div>}
    ></ReactModal>
  );
};

export default Modal;
