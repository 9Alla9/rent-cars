import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

const GlobalStyle = createGlobalStyle`
html {
  box-sizing: border-box;
}

*,
*::after,
*::before {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: 'Manrope', sans-serif;
  font-weight: 400;
}


h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}

ul{
  margin-left: 0;
  padding: 0;
}

li {
  list-style: none;
  text-decoration: none;
}

a {
  text-decoration: none;
}

button {
  padding: 0;
  font-family: inherit;
  background-color: transparent;
  border: none;
  cursor: pointer;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.dropdown-wrapper.dropdown-wrapper-brand .Dropdown-control  {
  width: 224px;
  height: 48px;
}

.dropdown-wrapper .Dropdown-control  {
  width: 125px;
  height: 48px;
  padding: 0 0 0 18px;
  border-radius: 14px;
  background-color: #f7f7fb;
  color: #121417;
  font-size: 18px;
  font-weight: 500;
  line-height: 1.11;
  border: none;
      display: flex;
    align-items: center;
    cursor: pointer;
}

.dropdown-wrapper .Dropdown-arrow {

}

.dropdown-wrapper.dropdown-wrapper-brand .Dropdown-menu {
width: 224px;
height: 272px;
}

.dropdown-wrapper .Dropdown-menu {
  margin-top: 4px;
 padding: 14px 8px 14px 18px;
 border-radius: 14px;
border: 1px solid rgba(18, 20, 23, 0.05);
background: #FFF;
box-shadow: 0px 4px 36px 0px rgba(0, 0, 0, 0.02);
width: 125px;
height: 188px;
&::-webkit-scrollbar {
  width: 8px; 
  height: 66px;
   scrollbar-gutter: scrollbar; /* Відображення скролбара незалежно від контенту */
  scrollbar-width: thin; /* Задаємо ширину скролбара */
  margin-right: 10px; 
}
&::-webkit-scrollbar-thumb {
  background: rgba(18, 20, 23, 0.05); 
  border-radius: 10px; 
}

&::-webkit-scrollbar-track {
  background: transparent; 
}
}

.dropdown-wrapper .Dropdown-option.is-selected {
color: #121417;
font-weight: 500;
line-height: 1.25;
background-color:white
}
.dropdown-wrapper .Dropdown-option {
color: rgba(18, 20, 23, 0.20);
font-weight: 500;
line-height: 1.25;
background-color:white;
padding: 0 0 8px 0;
}
`;

export default GlobalStyle;
