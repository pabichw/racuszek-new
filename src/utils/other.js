export const stripHTML = str => str ? str.replace(/<[^>]*>?/gm, '') : ''
