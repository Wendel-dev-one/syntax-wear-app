import { useState } from "react";
import { useCEPForm } from "./schema";
import type { Address } from "../../interfaces/address";
import { formatCurrency } from "../../utils/formatCurrency";

const SHIPPING_BY_REGION: Record<string, number> = {
  Norte: 39.9,
  Nordeste: 29.9,
  "Centro-Oeste": 24.9,
  Sudeste: 14.9,
  Sul: 19.9,
};

export const CEPForm = () => {
  const { register, handleSubmit, errors, isSubmitting } = useCEPForm();
  const [address, setAddress] = useState<Address | null>(null);
  const [addressError, setAddressError] = useState<string | null>(null);

  const onSubmit = async ({ cep }: { cep: string }) => {
    setAddress(null);
    setAddressError(null);

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);

      const data = await response.json();

      console.log("data.erro", data.erro);

      if (data.erro) {
        setAddressError("CEP não encontrado!");
        return;
      }

      const shippingCost = SHIPPING_BY_REGION[data.regiao];

      if (!shippingCost) {
        setAddressError("Região não suportada para entrega.");
        return;
      }

      console.log(data.regiao);
      console.log(shippingCost);

      setAddress({ ...data, shippingCost: shippingCost });
    } catch (error) {
      setAddressError(
        "Ocorreu um erro ao buscar o CEP, tente novamente mais tarde.",
      );
    }
  };

  return (
    <form className="flex flex-col gap-2" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between gap-3">
        <input
          {...register("cep")}
          type="text"
          placeholder="Insira seu CEP"
          className="border border-[#c0c0c0] rounded-md p-3 w-full"
        />
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-black text-white py-3 px-6 rounded-md w-1/2 cursor-pointer hover:bg-gray-800 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {isSubmitting ? "Calculando..." : "Calcular"}
        </button>
      </div>
      {errors.cep && (
        <span className="text-red-500 text-sm">{errors.cep.message}</span>
      )}

      {address && (
        <div className="mt-4 bg-green-50 p-2.5 rounded-md">
          <h3 className="text-lg font-bold">Endereço Encontrado</h3>
          <p className="text-gray-600">
            {address.logradouro}, {address.complemento}
          </p>
          <p className="text-gray-600">
            {address.bairro} - {address.localidade}/{address.uf}
          </p>
          <p className="text-gray-600">
            Região: <span className="font-semibold">{address.regiao}</span>
          </p>
          {address.shippingCost !== undefined && (
            <p className="text-green-500 font-bold">
              Custo do Frete: {formatCurrency(address.shippingCost)}
            </p>
          )}
        </div>
      )}

      {addressError && (
        <div className="mt-4 bg-red-100 p-2 rounded-md">
          <h3 className="text- font-bold">Erro ao buscar endereço.</h3>
          <p className="text-red-500 text-sm">{addressError}</p>
        </div>
      )}
    </form>
  );
};
