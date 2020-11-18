import {createGlobalStyle} from 'styled-components';
import {normalize} from 'polished';
import {fontFaces} from './fonts';

export const GlobalStyles = createGlobalStyle`

    ${normalize()};

    ${fontFaces}
    
    *{
        padding:0;
        margin:0;

    }
    body{
        font-family:'Montserrat';
        color:#ffffff;
        background-color:#000000;
    }
    main{
        margin-top:-70px;
        z-index:1;
    }

    h2 {
        font-family: 'Roboto Slab';
        font-weight: 700;
    }
    ul{
        list-style:none;
        font-size:14px;
    }

`;
