import { DefaultTheme } from 'styled-components';

const breakpoints: DefaultTheme['breakpoints'] = [
	'320px',
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
breakpoints.mobileXs = breakpoints[0]; // 320px

const mediaQueries = {
	mobile: `@media screen and (max-width: ${breakpoints.tabletMd})`,
	tablet: `@media screen and (max-width: ${breakpoints.desktopSm} and min-width: ${breakpoints.tabletMd})`,
	tabWeb: `@media screen and (min-width: ${breakpoints.tabletMd})`,
};

const space: DefaultTheme['space'] = [
	'0',
	'0.4rem',
	'0.8rem',
	'1.2rem',
	'1.6rem',
	'2.4rem',
	'3.2rem',
	'4rem',
	'4.8rem',
	'5.6rem',
	'8rem',
	'12rem',
];

space.mobXxl2 = space[8]; // 48px
space.mobXxl = space[7]; // 40px
space.mobXl = space[6]; // 32px
space.mobL = space[5]; // 24px
space.mobM = space[4]; // 16px
space.mobS = space[3]; // 12px
space.mobXs = space[2]; // 8px
space.mobXxs = space[1]; // 4px

space.webXxl3 = space[11]; // 120px
space.webXxl2 = space[10]; // 80px
space.webXxl = space[9]; // 56px
space.webXl = space[7]; // 40px
space.webL = space[6]; // 32px
space.webM = space[5]; // 24px
space.webS = space[4]; // 16px
space.webXs = space[2]; // 8px
space.webXxs = space[1]; // 4px

const fontSizes: DefaultTheme['fontSizes'] = [
	'0.8rem',
	'1.2rem',
	'1.4rem',
	'1.6rem',
	'1.8rem',
	'2.0rem',
	'2.4rem',
	'2.8rem',
	'3.2rem',
];

fontSizes.xxl3 = fontSizes[8]; // 32px
fontSizes.xxl2 = fontSizes[7]; // 28px
fontSizes.xxl = fontSizes[6]; // 24px
fontSizes.xl = fontSizes[5]; // 20px
fontSizes.l = fontSizes[4]; // 18px
fontSizes.m = fontSizes[3]; // 16px
fontSizes.s = fontSizes[2]; // 14px
fontSizes.xs = fontSizes[1]; // 12px
fontSizes.xxs = fontSizes[0]; // 8px

const fontWeights: DefaultTheme['fontWeights'] = [400, 600, 700];
fontWeights.regular = fontWeights[0];
fontWeights.medium = fontWeights[1];
fontWeights.bold = fontWeights[2];

const boxShadow: DefaultTheme['boxShadow'] = [
	'0 12px 24px -8px rgba(33, 42, 57, 0.18), 0 -2px 12px -2px rgba(33, 42, 57, 0.08)',
	'0 8px 32px -2px rgba(0, 0, 0, 0.12), 0 2px 4px 0 rgba(0, 0, 0, 0.12)',
	'0 0 2px 0 rgba(0, 0, 0, 0.12), 0 4px 16px -2px rgba(0, 0, 0, 0.12)',
];

boxShadow.shadowLg = boxShadow[0];
boxShadow.shadowSm = boxShadow[1];
boxShadow.shadowMd = boxShadow[2];

const borderRadii: DefaultTheme['borderRadii'] = ['2rem', '1.2rem', '1.6rem', '0.8rem', '0.4rem'];

borderRadii.webH = borderRadii[0]; // 20px
borderRadii.webL = borderRadii[1]; // 12px

borderRadii.mobH = borderRadii[2]; // 16px
borderRadii.mobL = borderRadii[3]; // 8px
borderRadii.mobS = borderRadii[4]; // 4px

const colors = {
	'starkid-purple-1': '#475edd',
	'starkid-purple-2': '#7960f8',

	'buttons-green-pressed': '#069f7e',
	'buttons-green-hover': '#29c8a2',

	'yellow-text': '#ea9219',
	'yellow-100': '#ffb61e',
	'yellow-50': '#fedc4d',
	'yellow-25': '#ffeb93',
	'yellow-15': '#fff6cf',
	'yellow-06': '#fefae9',

	'green-text': '#009955',
	'green-100': '#00bd90',
	'green-50': '#7CDBC4',
	'green-25': '#c2f2e5',
	'green-15': '#def7f2',
	'green-06': '#f0fbf9',

	'pink-text': '#cb2e9c',
	'pink-100': '#f180cf',
	'pink-50': '#fdc2eb',
	'pink-25': '#ffdbff',
	'pink-15': '#fdeffa',
	'pink-06': '#fef8fc',

	'blue-text': '#187cc9',
	'blue-100': '#2aaaee',
	'blue-50': '#8ed6fe',
	'blue-25': '#d1efff',
	'blue-15': '#e3f5fd',
	'blue-06': '#f3fafe',
	'blue-05': '#231656',

	'purple-text': '#352182',
	'purple-100': '#1833DE',
	'purple-50': '#c5cdfb',
	'purple-25': '#e1e5ff',
	'purple-15': '#eef0fd',
	'purple-06': '#f7f8fe',

	'orange-text': '#EA8731',
	'orange-100': '#FCAB64',
	'orange-50': '#FDD5B1',
	'orange-25': '#FEEAD8',
	'orange-15': '#FFF3E8',
	'orange-06': '#FFF9F3',

	'teal-text': '#0E918C',
	'teal-100': '#28ABB9',
	'teal-50': '#93D5DC',
	'teal-25': '#C9EAED',
	'teal-15': '#DFF3F5',
	'teal-06': '#F2FAFB',


	'body-text': '#212a39',
	'body-text-75': '#59606b',
	'body-text-50': '#90949c',
	'body-text-25': '#c7cacd',
	'black-100': '#000000',
	'black-40': '#979797',
	'black-20': '#cecece',
	'black-10': '#e8e8e8',
	'black-05': '#f3f3f3',
	'white-100': '#ffffff',

	'error-red-100': '#ed695f',
	'dull-gray': 'rgba(243, 243, 243, 0.3)', // batch card background
};

const theme: DefaultTheme = {
	breakpoints,
	space,
	fontSizes,
	fontWeights,
	boxShadow,
	borderRadii,
	colors,
	mediaQueries,
};

export default theme;
