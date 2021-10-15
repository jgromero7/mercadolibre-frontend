const CurrencyToLocale = {
    'ARS': 'es-ar',
    'COP': 'es-co',
    'MXN': 'es-mx',
    'GTQ': 'es-gt',
    'SVC': 'es-sv',
    'HNL': 'es-hn',
    'NIO': 'es-ni',
    'DOP': 'es-do',
    'CRC': 'es-cr',
    'VES': 'es-ve',
    'USD': 'es-ec',
    'BRL': 'pt-br',
    'PEN': 'es-pe',
    'PYG': 'es-py',
    'BOB': 'es-bo',
    'UYU': 'es-uy',
    'CLP': 'es-cl',
}

export const formatCurrency = (number, currency) => {
    if (typeof number !== 'number') return 0.00
    const locale = CurrencyToLocale[currency] || 'en-US'

    const formatter = new Intl.NumberFormat(locale, {
        style: 'currency',
        currency,
    });
    return formatter.format(number)
}