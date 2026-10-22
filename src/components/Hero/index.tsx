import Banner from "@/assets/images/banner.jpg";
import { Button } from "../Button";
import { Overlay } from "../Overlay";

export const Hero = () => {
  return (
    <div className="container">
      <section className="relative h-125 rounded-[20px] mb-10">
        <img
          src={Banner}
          alt="Modelo sentado com os tênis da SyntaxWear"
          className="w-full h-full object-cover rounded-[20px]"
        />

        <Overlay
          title="Krypton One"
          subtitle="Transforme qualquer passo em presença"
          className="bottom-0 px-6 md:px-30 pb-30 justify-end md:items-end"
        >
          <Button variant="secondary" size="sm">
            Ver modelos
          </Button>
          <Button variant="primary">Comprar</Button>
        </Overlay>
      </section>
    </div>
  );
};
