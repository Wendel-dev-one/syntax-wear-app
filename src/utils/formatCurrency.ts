/**
 * Formats a number into Brazilian Real (BRL) currrency string
 * @param value The number to format
 * @returns A string formatted as BRL currency (e.g., "R$ 1.234,56")
 */

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL', 
  }).format(value);
};