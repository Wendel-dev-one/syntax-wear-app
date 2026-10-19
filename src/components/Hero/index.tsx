import Banner from "@/assets/images/banner.jpg";

export const Hero = () => {
  return (
    <div className="container">
      <section className="relative h-135 rounded-[20px] mb-10">
        <img
          src={Banner}
          alt="Modelo sentado com os tênis da SyntaxWear"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <div className="absolute w-full bottom-0 flex justify-end items-center text-center px-6 md:px-30 pb-38">

          <div className="flex flex-col items-center w-[388px] text-white">

            <h2 className="text-lg font-medium leading-normal tracking-widest mb-2.5">
              Krypton One
            </h2>
            <h1 className="text-2xl leading-9 tracking-widest mb-10">
              Transforme qualquer passo em presença
            </h1>

            <div className="flex gap-3.5">
              <button>Ver modelos</button>
              <button>Comprar</button>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
