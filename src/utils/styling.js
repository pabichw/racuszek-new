export const BREAKPOINTS = {
  TABLET: '1000px',
  MOBILE: '700px',
}

export const animateUnderlineHover = ({color, width}) => `

    &:hover {
    color: ${color};
    }
    &:focus, &:active {
      color: ${color};
    }
    
    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 100%;
      left: calc((100% - ${width}) / 2);
      height: 3px;
      width: ${width};
      border-radius: 1px;
      background-color: ${color};
      -webkit-transform-origin: left top;
              transform-origin: left top;
      -webkit-transform: scale(0, 1);
              transform: scale(0, 1);
      transition: color 0.1s, -webkit-transform 0.2s ease-out;
      transition: color 0.1s, transform 0.2s ease-out;
      transition: color 0.1s, transform 0.2s ease-out, -webkit-transform 0.2s ease-out;
    }
  
    &:active::before {
      background-color: ${color};
    }
    
    &:hover::before,
    &:focus::before {
      -webkit-transform-origin: left top;
              transform-origin: left top;
      -webkit-transform: scale(1, 1);
              transform: scale(1, 1);
    }
`

export const NAV = {
  height: '50px',
}
