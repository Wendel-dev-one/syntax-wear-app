import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

const sanitizeCEP = (value: string): string => {
  return value.replace(/\D/g, "");
};

const validateCep = (cep: string): boolean => {
  return /^\d{8}$/.test(cep);
};

export const cepSchema = z.object({
  cep: z
    .string()
    .min(1, "CEP é obrigatório")
    .transform(sanitizeCEP)
    .refine(
      (cep) => validateCep(cep),
      "CEP inválido. Digite os 8 números do CEP",
    ),
});

export type CEPFormData = z.infer<typeof cepSchema>;

export const useCEPForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<CEPFormData>({
    resolver: zodResolver(cepSchema),
    mode: "onBlur",
    defaultValues: { cep: "" },
    criteriaMode: "all",
  });

  return { register, handleSubmit, reset, errors, isSubmitting };
};


