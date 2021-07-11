import { DefaultTheme } from 'styled-components';

const breakpoints: DefaultTheme['breakpoints'] = [
	'319px',
	'480px',
	'576px',
	'768px',
	'992px',
	'1200px',
	'1440px',
	'1920px',
];

breakpoints.desktopLg = breakpoints[7]; // 1920px
breakpoints.desktopMd = breakpoints[6]; // 1440px
breakpoints.desktopSm = breakpoints[5]; // 1200px
breakpoints.tabletLg = breakpoints[4]; // 992px
breakpoints.tabletMd = breakpoints[3]; // 768px
breakpoints.mobileMd = breakpoints[2]; // 576px
breakpoints.mobileSm = breakpoints[1]; // 480px
breakpoints.mobileXs = breakpoints[0]; // 319px

const mediaQueries = {
	mobile: `@media screen and (max-width: ${breakpoints.tabletMd})`,
	tablet: `@media screen and (max-width: ${breakpoints.desktopSm} and min-width: ${breakpoints.tabletMd})`,
	tabWeb: `@media screen and (min-width: ${breakpoints.tabletMd})`,
};

const colors = {
	'purple-text': '#352182',
	'purple-100': '#060411',
	'purple-50': '#c5cdfb',
	'purple-25': '#e1e5ff',
	'purple-15': '#eef0fd',
	'purple-06': '#110C31',

	'black-100': '#000000',
	'white-100': '#ffffff',
};

const theme: DefaultTheme = {
	breakpoints,
	colors,
	mediaQueries,
};

export default theme;
