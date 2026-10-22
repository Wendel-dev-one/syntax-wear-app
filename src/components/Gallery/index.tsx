import galeriaHomem from "@/assets/images/galeria-homem-1d92b6.png";
import galeriaModelo from "@/assets/images/galeria-modelo.jpg";
import galeriaTenisBrancoEPreto from "@/assets/images/galeria-tenis-branco-e-preto.jpg";
import galeriaTenisCinza from "@/assets/images/galeria-tenis-cinza.jpg";
import galeriaTenisColorido from "@/assets/images/galeria-tenis-colorido.jpg";
import galeriaTenisRoxo from "@/assets/images/galeria-tenis-roxo.jpg";
import { Button } from "../Button";

export const Gallery = () => {
  return (
    <section className="container grid grid-cols-2 grid-rows-[repeat(5,auto)] gap-2.5 py-5 [grid-template-areas:'highlight_highlight'_'sneaker-white_sneaker-white'_'model_sneaker-color'_'model_sneaker-silver'_'sneaker-purple_sneaker-purple'] md:grid-cols-[repeat(4,1fr)] md:grid-rows-[repeat(3,250px)] md:gap-7.5 md:[grid-template-areas:'highlight_highlight_sneaker-purple_sneaker-purple'_'highlight_highlight_model_sneaker-color'_'sneaker-white_sneaker-white_model_sneaker-silver']">
      <div className="[grid-area:highlight] relative h-123.5 overflow-hidden rounded-[20px] md:h-full">
        <img
          src={galeriaHomem}
          alt="Modelo masculino usando tênis SyntaxWear"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-2.5 rounded-[20px] bg-black/10 px-4 text-center text-white">
          <h2 className="text-sm font-medium tracking-widest">Krypton One</h2>
          <p className="text-base tracking-widest">Estilo urbano com atitude</p>
          <div className="flex gap-2.5">
            <Button variant="secondary" size="sm">
              Feminino
            </Button>
            <Button variant="secondary" size="sm">
              Masculino
            </Button>
          </div>
        </div>
      </div>
      <img
        src={galeriaTenisBrancoEPreto}
        alt="Tênis branco e preto"
        className="[grid-area:sneaker-white] h-47.5 w-full rounded-[20px] object-cover md:h-full"
      />
      <img
        src={galeriaModelo}
        alt="Modelo feminina usando tênis SyntaxWear"
        className="[grid-area:model] h-92.5 w-full rounded-[20px] object-cover md:h-full"
      />
      <img
        src={galeriaTenisColorido}
        alt="Tênis colorido"
        className="[grid-area:sneaker-color] h-45 w-full rounded-[20px] object-cover md:h-full"
      />
      <img
        src={galeriaTenisCinza}
        alt="Tênis cinza"
        className="[grid-area:sneaker-silver] h-45 w-full rounded-[20px] object-cover md:h-full"
      />
      <img
        src={galeriaTenisRoxo}
        alt="Tênis roxo"
        className="[grid-area:sneaker-purple] h-47.5 w-full rounded-[20px] object-cover md:h-full"
      />
    </section>
  );
};
