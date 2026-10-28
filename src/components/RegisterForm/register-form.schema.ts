import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { isValidCPF } from "../../utils/cpf-validator";

// Define o schema de validação do formulário de registro
export const registerUserFormSchema = z
  .object({
    // --- Primeiro nome ---
    firstName: z
      .string()
      .min(1, "Primeiro nome é obrigatório") // Campo não pode ser vazio
      .min(2, "Primeiro nome deve ter ao menos 2 caracteres") // Mínimo de 2 caracteres
      .max(50, "Primeiro nome deve ter no máximo 50 caracteres"), // Máximo de 50 caracteres

    // --- Último nome ---
    lastName: z
      .string()
      .min(1, "Último nome é obrigatório") // Campo não pode ser vazio
      .min(2, "Último nome deve ter ao menos 2 caracteres") // Mínimo de 2 caracteres
      .max(50, "Último nome deve ter no máximo 50 caracteres"), // Máximo de 50 caracteres

    // --- E-mail ---
    // No Zod v4, z.email() é uma função de nível superior (não mais encadeada em z.string())
    // O parâmetro `error` unifica as mensagens de erro: verifica se o campo está vazio
    // para exibir a mensagem correta conforme a situação
    email: z.email({
      error: (issue) =>
        issue.input === "" ? "E-mail é obrigatório" : "E-mail inválido",
    }),

    // --- CPF ---
    cpf: z
      .string()
      .min(1, "CPF é obrigatório") // Campo não pode ser vazio
      // Executa a função de validação customizada do CPF
      .refine(isValidCPF, { message: "CPF inválido" }),

    // --- Data de nascimento ---
    birthDate: z
      .string()
      .min(1, "Data de nascimento é obrigatória") // Campo não pode ser vazio
      // Validação customizada para garantir que a data é real e coerente
      .refine(
        (value) => {
          // Converte a string recebida para um objeto Date
          const date = new Date(value);

          // Verifica se a data convertida é válida (ex: rejeita "31/02/2000")
          if (isNaN(date.getTime())) return false;

          // Obtém a data de hoje sem considerar o horário
          const today = new Date();
          today.setHours(0, 0, 0, 0);

          // A data de nascimento deve ser anterior a hoje (não pode ser hoje ou futura)
          if (date >= today) return false;

          // Define a data mínima aceitável (120 anos atrás) para evitar valores absurdos
          const minDate = new Date();
          minDate.setFullYear(minDate.getFullYear() - 120);

          // Rejeita datas anteriores ao limite mínimo estabelecido
          if (date < minDate) return false;

          // Data passou em todas as verificações
          return true;
        },
        { message: "Data de nascimento inválida" },
      ),

    // --- Telefone celular ---
    // Aceita os formatos com ou sem máscara:
    // (99) 99999-9999 | (99) 999999999 | 99999999999
    // Após remover caracteres não numéricos, exige exatamente 11 dígitos,
    // com o DDD válido (11–99) e o nono dígito obrigatoriamente igual a 9
    phone: z
      .string()
      .min(1, "Telefone é obrigatório") // Campo não pode ser vazio
      .refine(
        (value) => {
          // Remove todos os caracteres não numéricos (parênteses, espaços, traços)
          const digits = value.replace(/\D/g, "");

          // Deve ter exatamente 11 dígitos: 2 de DDD + 9 do número
          if (digits.length !== 11) return false;

          // Extrai o DDD (primeiros 2 dígitos) e valida o intervalo permitido (11 a 99)
          const ddd = parseInt(digits.substring(0, 2));
          if (ddd < 11 || ddd > 99) return false;

          // O nono dígito (3º dígito do número) deve ser 9, obrigatório para celulares no Brasil
          if (digits[2] !== "9") return false;

          // Rejeita sequências de dígitos todos iguais (ex: "11999999999" seria válido,
          // mas "11111111111" não representa um número real)
          if (/^(\d)\1{10}$/.test(digits)) return false;

          return true;
        },
        { message: "Telefone inválido. Use o formato (99) 99999-9999" },
      ),
    // --- Senha ---
    password: z
      .string()
      .min(1, "Senha é obrigatória") // Campo não pode ser vazio
      .min(8, "Senha deve ter no mínimo 8 caracteres"), // Mínimo de segurança de 8 caracteres

    // --- Confirmação de senha ---
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"), // Campo não pode ser vazio
  })
  // Validação cruzada entre os campos: verifica se as senhas coincidem
  // Essa validação é feita no nível do objeto pois depende de dois campos ao mesmo tempo
  .refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"], // Aponta o erro para o campo confirmPassword no formulário
  });

// Exporta o tipo TypeScript inferido automaticamente pelo Zod a partir do schema
// Pode ser usado com react-hook-form: useForm<registerUserFormSchema>()
export type RegisterFormData = z.infer<typeof registerUserFormSchema>;

export const useRegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    setError,
    reset,
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerUserFormSchema),
    mode: "onBlur",
    defaultValues: {
      email: "",
      password: "",
    },
    criteriaMode: "all",
  });

  return { handleSubmit, register, errors, isSubmitting, setError, reset };
};
