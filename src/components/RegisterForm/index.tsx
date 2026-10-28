import { useRegisterForm } from "./register-form.schema";

/**
 * Componente de formulário de registro.
 * Toda a lógica de validação e estado vive no hook useRegisterForm.
 */
export const RegisterForm = () => {
  const { register, errors, isSubmitting } = useRegisterForm();

  // Classes reutilizáveis para manter consistência visual entre os campos
  const inputClass = (hasError: boolean) =>
    `w-full border rounded-xs px-1 mt-1 focus:outline-none focus:ring-2 ${
      hasError
        ? "border-red-500 focus:ring-red-400"
        : "border-gray-300 focus:ring-[#5433eb]"
    }`;

  return (
    <form className="text-black" noValidate>
      {/* Primeiro nome */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="firstName">
          Nome
        </label>
        <input
          className={inputClass(!!errors.firstName)}
          id="firstName"
          {...register("firstName")}
        />
        {errors.firstName && (
          <span className="text-xs text-red-600 mt-1">
            {errors.firstName.message}
          </span>
        )}
      </div>

      {/* Último nome */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="lastName">
          Sobrenome
        </label>
        <input
          className={inputClass(!!errors.lastName)}
          id="lastName"
          {...register("lastName")}
        />
        {errors.lastName && (
          <span className="text-xs text-red-600 mt-1">
            {errors.lastName.message}
          </span>
        )}
      </div>

      {/* E-mail */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="email">
          E-mail
        </label>
        <input
          className={inputClass(!!errors.email)}
          id="email"
          type="email"
          {...register("email")}
        />
        {errors.email && (
          <span className="text-xs text-red-600 mt-1">
            {errors.email.message}
          </span>
        )}
      </div>

      {/* CPF */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="cpf">
          CPF
        </label>
        <input
          className={inputClass(!!errors.cpf)}
          id="cpf"
          placeholder="000.000.000-00"
          {...register("cpf")}
        />
        {errors.cpf && (
          <span className="text-xs text-red-600 mt-1">
            {errors.cpf.message}
          </span>
        )}
      </div>

      {/* Data de nascimento */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="birthDate">
          Data de nascimento
        </label>
        <input
          className={inputClass(!!errors.birthDate)}
          id="birthDate"
          type="date"
          {...register("birthDate")}
        />
        {errors.birthDate && (
          <span className="text-xs text-red-600 mt-1">
            {errors.birthDate.message}
          </span>
        )}
      </div>

      {/* Telefone */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="cellphone">
          Telefone
        </label>
        <input
          className={inputClass(!!errors.phone)}
          id="cellphone"
          placeholder="(99) 99999-9999"
          {...register("phone")}
        />
        {errors.phone && (
          <span className="text-xs text-red-600 mt-1">
            {errors.phone.message}
          </span>
        )}
      </div>

      {/* Senha */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="password">
          Senha
        </label>
        <input
          className={inputClass(!!errors.password)}
          id="password"
          type="password"
          {...register("password")}
        />
        {errors.password && (
          <span className="text-xs text-red-600 mt-1">
            {errors.password.message}
          </span>
        )}
      </div>

      {/* Confirmação de senha */}
      <div>
        <label className="text-xs text-gray-600" htmlFor="confirmPassword">
          Confirmar senha
        </label>
        <input
          className={inputClass(!!errors.confirmPassword)}
          id="confirmPassword"
          type="password"
          {...register("confirmPassword")}
        />
        {errors.confirmPassword && (
          <span className="text-xs text-red-600 mt-1">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      {/* Botão de envio — desabilitado durante a submissão */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-[#5433EB] text-white font-semibold uppercase rounded-md py-3 transition-all hover:bg-[#4028c7] disabled:opacity-50 w-full mt-3 cursor-pointer"
      >
        {isSubmitting ? "Criando conta..." : "Criar conta"}
      </button>
    </form>
  );
};
