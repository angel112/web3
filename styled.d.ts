// import original module declarations
import 'styled-components';

interface IBorderRadii {
	webH: string;
	webL: string;
	mobH: string;
	mobL: string;
	mobS: string;
}

interface IFontSize {
	xxl3: string;
	xxl2: string;
	xxl: string;
	xl: string;
	l: string;
	m: string;
	s: string;
	xs: string;
	xxs: string;
}

interface IFontWeight {
	bold: number;
	regular: number;
	medium: number;
}

interface ISpace {
	mobXxl2: string;
	mobXxl: string;
	mobXl: string;
	mobL: string;
	mobM: string;
	mobS: string;
	mobXs: string;
	mobXxs: string;
	webXxl3: string;
	webXxl2: string;
	webXxl: string;
	webXl: string;
	webL: string;
	webM: string;
	webS: string;
	webXs: string;
	webXxs: string;
}

interface IBreakpoint {
	desktopLg: string;
	desktopMd: string;
	desktopSm: string;
	tabletLg: string;
	tabletMd: string;
	mobileMd: string;
	mobileSm: string;
	mobileXs: string;
}

// and extend them!
declare module 'styled-components' {
	export interface DefaultTheme {
		colors: {
			'starkid-purple-1': string;
			'starkid-purple-2': string;
			'buttons-green-pressed': string;
			'buttons-green-hover': string;
			'yellow-25': string;
			'yellow-50': string;
			'yellow-100': string;
			'green-text': string;
			'green-100': string;
			'green-50': string;
			'green-25': string;
			'green-15': string;
			'green-06': string;
			'pink-text': string;
			'pink-100': string;
			'pink-50': string;
			'pink-25': string;
			'pink-15': string;
			'pink-06': string;
			'blue-text': string;
			'blue-100': string;
			'blue-50': string;
			'blue-25': string;
			'blue-15': string;
			'blue-06': string;
			'purple-text': string;
			'purple-100': string;
			'purple-50': string;
			'purple-25': string;
			'purple-15': string;
			'purple-06': string;
			'orange-text': string;
			'orange-100': string;
			'orange-50': string;
			'orange-25': string;
			'orange-15': string;
			'orange-06': string;
			'teal-text': string;
			'teal-100': string;
			'teal-50': string;
			'teal-25': string;
			'teal-15': string;
			'teal-06': string;
			'body-text': string;
			'body-text-50': string;
			'body-text-25': string;
			'black-40': string;
			'black-20': string;
			'black-10': string;
			'black-05': string;
			'white-100': string;
			'error-red-100': string;
		};

		mediaQueries: {
			mobile: string;
			tablet: string;
			tabWeb: string;
		};

		borderRadii: string[] & Partial<IBorderRadii>;
		fontSizes: string[] & Partial<IFontSize>;
		space: string[] & Partial<ISpace>;
		breakpoints: string[] & Partial<IBreakpoint>;
		fontWeights: number[] & Partial<IFontWeight>;
		boxShadow: string[];
	}
}
