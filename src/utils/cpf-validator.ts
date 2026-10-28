/**
 * Valida um número de CPF brasileiro.
 * Verifica o formato, sequências conhecidas como inválidas
 * e os dois dígitos verificadores pelo algoritmo do Módulo 11.
 */
export function isValidCPF(cpf: string): boolean {
  // Remove todos os caracteres que não sejam dígitos (pontos, traços, espaços, etc.)
  const digits = cpf.replace(/\D/g, "");

  // O CPF deve ter exatamente 11 dígitos após a limpeza
  if (digits.length !== 11) return false;

  // Rejeita sequências de dígitos repetidos (ex: "111.111.111-11", "000.000.000-00")
  // que são matematicamente válidas mas não são CPFs reais
  if (/^(\d)\1{10}$/.test(digits)) return false;

  // --- Validação do primeiro dígito verificador ---

  let sum = 0;

  // Multiplica cada um dos 9 primeiros dígitos pelos pesos de 10 a 2 e soma os resultados
  for (let i = 0; i < 9; i++) {
    sum += parseInt(digits[i]) * (10 - i);
  }

  // Calcula o resto da divisão da soma multiplicada por 10, dividida por 11
  let remainder = (sum * 10) % 11;

  // Se o resto for 10 ou 11, o dígito verificador é 0
  if (remainder === 10 || remainder === 11) remainder = 0;

  // Compara o dígito calculado com o 10º dígito do CPF (primeiro verificador)
  if (remainder !== parseInt(digits[9])) return false;

  // --- Validação do segundo dígito verificador ---

  sum = 0;

  // Multiplica cada um dos 10 primeiros dígitos pelos pesos de 11 a 2 e soma os resultados
  for (let i = 0; i < 10; i++) {
    sum += parseInt(digits[i]) * (11 - i);
  }

  // Calcula o resto da divisão da soma multiplicada por 10, dividida por 11
  remainder = (sum * 10) % 11;

  // Se o resto for 10 ou 11, o dígito verificador é 0
  if (remainder === 10 || remainder === 11) remainder = 0;

  // Compara o dígito calculado com o 11º dígito do CPF (segundo verificador)
  if (remainder !== parseInt(digits[10])) return false;

  // Se passou por todas as verificações, o CPF é válido
  return true;
}