import {createGlobalStyle} from 'styled-components';
import {normalize} from 'polished';
import {fontFaces} from './fonts';

export const GlobalStyles = createGlobalStyle`

    ${normalize()};

    ${fontFaces}
    
    body{
        font-family:'Montserrat';
        color:'#ffffff';
    }
    h2 {
        font-family: 'Roboto Slab';
        font-weight: 700;
    }

`;
