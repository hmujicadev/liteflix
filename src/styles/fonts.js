import {css} from 'styled-components';

import MONT_300_EOT from '../assets/fonts/montserrat-v15-latin-300.eot';
import MONT_300_EOT_IEFIX from '../assets/fonts/montserrat-v15-latin-300.eot?#iefix';
import MONT_300_WOFF2 from '../assets/fonts/montserrat-v15-latin-300.woff2';
import MONT_300_WOFF from '../assets/fonts/montserrat-v15-latin-300.woff';
import MONT_300_TTF from '../assets/fonts/montserrat-v15-latin-300.ttf';
import MONT_300_SVG from '../assets/fonts/montserrat-v15-latin-300.svg#Montserrat';

import MONT_REGULAR_EOT from '../assets/fonts/montserrat-v15-latin-regular.eot';
import MONT_REGULAR_EOT_IEFIX from '../assets/fonts/montserrat-v15-latin-regular.eot?#iefix';
import MONT_REGULAR_WOFF2 from '../assets/fonts/montserrat-v15-latin-regular.woff2';
import MONT_REGULAR_WOFF from '../assets/fonts/montserrat-v15-latin-regular.woff';
import MONT_REGULAR_TTF from '../assets/fonts/montserrat-v15-latin-regular.ttf';
import MONT_REGULAR_SVG from '../assets/fonts/montserrat-v15-latin-regular.svg#Montserrat';

import MONT_500_EOT from '../assets/fonts/montserrat-v15-latin-500.eot';
import MONT_500_EOT_IEFIX from '../assets/fonts/montserrat-v15-latin-500.eot?#iefix';
import MONT_500_WOFF2 from '../assets/fonts/montserrat-v15-latin-500.woff2';
import MONT_500_WOFF from '../assets/fonts/montserrat-v15-latin-500.woff';
import MONT_500_TTF from '../assets/fonts/montserrat-v15-latin-500.ttf';
import MONT_500_SVG from '../assets/fonts/montserrat-v15-latin-500.svg#Montserrat';

import MONT_700_EOT from '../assets/fonts/montserrat-v15-latin-700.eot';
import MONT_700_EOT_IEFIX from '../assets/fonts/montserrat-v15-latin-700.eot?#iefix';
import MONT_700_WOFF2 from '../assets/fonts/montserrat-v15-latin-700.woff2';
import MONT_700_WOFF from '../assets/fonts/montserrat-v15-latin-700.woff';
import MONT_700_TTF from '../assets/fonts/montserrat-v15-latin-700.ttf';
import MONT_700_SVG from '../assets/fonts/montserrat-v15-latin-700.svg#Montserrat';

import ROBOSLAB_700_EOT from '../assets/fonts/roboto-slab-v12-latin-700.eot';
import ROBOSLAB_700_EOT_IEFIX from '../assets/fonts/roboto-slab-v12-latin-700.eot?#iefix';
import ROBOSLAB_700_WOFF2 from '../assets/fonts/roboto-slab-v12-latin-700.woff2';
import ROBOSLAB_700_WOFF from '../assets/fonts/roboto-slab-v12-latin-700.woff';
import ROBOSLAB_700_TTF from '../assets/fonts/roboto-slab-v12-latin-700.ttf';
import ROBOSLAB_700_SVG from '../assets/fonts/roboto-slab-v12-latin-700.svg#RobotoSlab';

export const fontFaces = css`
  /* montserrat-300 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 300;
    src: url(${MONT_300_EOT}); /* IE9 Compat Modes */
    src: local('Montserrat Light'), local('Montserrat-Light'),
      url(${MONT_300_EOT_IEFIX}) format('embedded-opentype'),
      /* IE6-IE8 */ url(${MONT_300_WOFF2}) format('woff2'),
      /* Super Modern Browsers */ url(${MONT_300_WOFF}) format('woff'),
      /* Modern Browsers */ url(${MONT_300_TTF}) format('truetype'),
      /* Safari, Android, iOS */ url(${MONT_300_SVG}) format('svg'); /* Legacy iOS */
  }
  /* montserrat-regular - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url(${MONT_REGULAR_EOT}); /* IE9 Compat Modes */
    src: local('Montserrat Regular'), local('Montserrat-Regular'),
      url(${MONT_REGULAR_EOT_IEFIX}) format('embedded-opentype'),
      /* IE6-IE8 */ url(${MONT_REGULAR_WOFF2}) format('woff2'),
      /* Super Modern Browsers */ url(${MONT_REGULAR_WOFF}) format('woff'),
      /* Modern Browsers */ url(${MONT_REGULAR_TTF}) format('truetype'),
      /* Safari, Android, iOS */ url(${MONT_REGULAR_SVG}) format('svg'); /* Legacy iOS */
  }
  /* montserrat-500 - latin */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 500;
    src: url(${MONT_500_EOT}); /* IE9 Compat Modes */
    src: local('Montserrat Medium'), local('Montserrat-Medium'),
      url(${MONT_500_EOT_IEFIX}) format('embedded-opentype'),
      /* IE6-IE8 */ url(${MONT_500_WOFF2}) format('woff2'),
      /* Super Modern Browsers */ url(${MONT_500_WOFF}) format('woff'),
      /* Modern Browsers */ url(${MONT_500_TTF}) format('truetype'),
      /* Safari, Android, iOS */ url(${MONT_500_SVG}) format('svg'); /* Legacy iOS */
  }
  /* montserrat-700 - Bold */
  @font-face {
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 700;
    src: url(${MONT_700_EOT}); /* IE9 Compat Modes */
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
      url(${MONT_700_EOT_IEFIX}) format('embedded-opentype'),
      /* IE6-IE8 */ url(${MONT_700_WOFF2}) format('woff2'),
      /* Super Modern Browsers */ url(${MONT_700_WOFF}) format('woff'),
      /* Modern Browsers */ url(${MONT_700_TTF}) format('truetype'),
      /* Safari, Android, iOS */ url(${MONT_700_SVG}) format('svg'); /* Legacy iOS */
  }
  /* roboto-slab-700 - latin */
  @font-face {
    font-family: 'Roboto Slab';
    font-style: normal;
    font-weight: 700;
    src: url(${ROBOSLAB_700_EOT}); /* IE9 Compat Modes */
    src: local('Montserrat Bold'), local('Montserrat-Bold'),
      url(${ROBOSLAB_700_EOT_IEFIX}) format('embedded-opentype'),
      /* IE6-IE8 */ url(${ROBOSLAB_700_WOFF2}) format('woff2'),
      /* Super Modern Browsers */ url(${ROBOSLAB_700_WOFF}) format('woff'),
      /* Modern Browsers */ url(${ROBOSLAB_700_TTF}) format('truetype'),
      /* Safari, Android, iOS */ url(${ROBOSLAB_700_SVG}) format('svg'); /* Legacy iOS */
  }
`;
