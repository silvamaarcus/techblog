//Imagens
import img_hero from "../../../assets/svg/image-hero.svg";

const Hero = () => {
  return (
    <>
      <section className="bg-gray">
        <div className="container p-0">
          <div className="flex-center flex-wrap">
            <div className="grid-7" id="hero-info">
              <h4 className="bold">
                Encontre os <span>melhores artigos</span> de programação em um
                só lugar
              </h4>
              <h5 className="my-4">
                Explore o topo da programação em um só lugar! <br /> Seu destino único
                para dicas e tendências atuais.
              </h5>
              <button className="btn uppercase">Buscar artigos</button>
            </div>
            <div className="grid-5 flex-center" id="hero-arte">
              <img src={img_hero} alt="TechBlog" className="arte-hero"/>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Hero;
