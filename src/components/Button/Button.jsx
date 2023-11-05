import { StyledButton } from './Button.styled';

function Button({
  width,
  text,
  onClick,
  phoneNumber,
  type = 'button',
  disabled = false,
}) {
  if (phoneNumber) {
    return (
      <a href={`tel:${phoneNumber}`} style={{ textDecoration: 'none' }}>
        <StyledButton onClick={onClick} type={type} style={{ width }}>
          {text}
        </StyledButton>
      </a>
    );
  }
  return (
    <StyledButton
      onClick={onClick}
      type={type}
      style={{ width }}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
}

export default Button;