import spanish from './es.json';
import english from './en.json';

const LANGUAJES = {
    SPANISH: 'es',
    ENGLISH: 'en'
}
export const getI18N = (
    { currentLocale = 'es' } : 
    {currentLocale: string | undefined}) => {
    if (currentLocale == LANGUAJES.ENGLISH) return english
    if (currentLocale == LANGUAJES.SPANISH) return spanish

    return spanish
}