import SpainFlag from '../../public/flags/Spain.astro';
import UnitedStatesFlag from '../../public/flags/UnitedStates.astro';

// Add missing imports
export const LANGUAGES: Record<
	string,
	{ code: string; name: string; flag: typeof SpainFlag }
> = {
	en: {
		code: 'en',
		name: 'English',
		flag: UnitedStatesFlag,
	},
	es: {
		code: 'es',
		name: 'Español',
		flag: SpainFlag,
	},
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
	es: {
		'nav.inicio': 'Inicio',
		'nav.premios': 'Los premios',
		'nav.nominados': 'Nominados',
		'nav.terminos': 'Terminos y conidiciones',
		'nav.privacidad': 'Política de Privacidad',
	},
	en: {
		'nav.inicio': 'Home',
		'nav.premios': 'The Awards',
		'nav.nominados': 'Nominees',
		'nav.terminos': 'Terms and conditions',
		'nav.privacidad': 'Privacy Policy',
	},

} as const;

export const routes = {
	es: {
		premios: 'premios',
		nominados: 'nominados',
        terminos: 'terminos',
		privacidad: 'privacidad',
	},
	en: {
		premios: 'vote',
		nominados: 'information',
        terminos: 'terminos',
		privacidad: 'privacy',
	},
};