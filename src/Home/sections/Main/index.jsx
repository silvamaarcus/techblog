import Card from "../../../components/Card";

import img_card_1 from "../../../assets/img/image-card-1.png";
import img_card_2 from "../../../assets/img/image-card-2.png";
import img_card_3 from "../../../assets/img/image-card-3.png";
import img_card_4 from "../../../assets/img/image-card-4.png";
import img_card_5 from "../../../assets/img/image-card-5.png";
import img_card_6 from "../../../assets/img/image-card-6.png";

const Main = () => {
  const title_1 = "O que é linguagem de programação? Conheça as principais";
  const desc_1 =
    "Uma das mais populares vertentes da tecnologia da informação, a área de...";

  const title_2 =
    "Python: por que a linguagem é tão usada para Data Science e finanças?";
  const desc_2 =
    "O mundo da programação conta com algumas opções de linguagem para...";

  const title_3 = "GitHub tem receita de US$ 1 bilhão e 90 milhões de usuários";
  const desc_3 =
    "O popular serviço de repositório de código GitHub foi adquirido pela...";

  const title_4 = "15 comandos no GIT que os desenvolvedores precisam saber";
  const desc_4 =
    "Dominar os comandos GIT é uma habilidade que se conquista com...";

  const title_5 = "GIT e GitHub: o que são e quais as diferenças entre eles?";
  const desc_5 =
    "Git e GibHub são dois softwares de controle de versão essenciais para...";

  const title_6 =
    "GitHub Copilot ganha integração com GPT-4 e interface conversacional";
  const desc_6 =
    "O GitHub Copilot, ferramenta de desenvolvimento baseada em IA...";

  return (
    <>
      <main className="container p-0 py-9">
        <h5 className="bold ml-2">Artigos recomendados</h5>
        <div className="grid-4">
          <Card img={img_card_1} title={title_1} desc={desc_1} />
        </div>
        <div className="grid-4">
          <Card img={img_card_2} title={title_2} desc={desc_2} />
        </div>
        <div className="grid-4">
          <Card img={img_card_3} title={title_3} desc={desc_3} />
        </div>
        <div className="grid-4">
          <Card img={img_card_4} title={title_4} desc={desc_4} />
        </div>
        <div className="grid-4">
          <Card img={img_card_5} title={title_5} desc={desc_5} />
        </div>
        <div className="grid-4">
          <Card img={img_card_6} title={title_6} desc={desc_6} />
        </div>
      </main>
    </>
  );
};
export default Main;
