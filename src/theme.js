import styled from "styled-components";

export const lightTheme = {
    primaryDark: 'papayawhip',
    primaryLight: '#CE882C',
    primaryHover: '#343078',
    mobile: '576px',
  };

  export const darkTheme = {
    primaryDark: '#00375B',
    primaryLight: '#C9A700',
    primaryHover: '#343078',
    mobile: '576px',
  };

  export const Button = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #7F5900;
    border-radius: 3px;
    position: absolute;
    right: 0px;
    top: 0px;
  `;

  export const P = styled.p`
    text-align: center;
  `;

  // export const RenderCards = styled.li`
  //   height: 10vh;
  //   display: grid;
  //   grid-template-areas:
  //   'nav nav nav'
  //   'asideLeft main asideRight'
  //   'footer footer footer';
  //   grid-template-rows: 1fr 9fr 1fr;
  //   grid-template-columns: 1fr 6fr 1fr;
  //   `;

  // export const Card = styled.div`
  //   display: grid;
  //   grid-template-rows: auto 1fr auto;
  //   position: absolute;
  //   border: 2px solid;
  //   border-color: #1D91B4;
  //   background: linear-gradient(to top left, #6505c0 0%, #fd61af 100%);
  // `