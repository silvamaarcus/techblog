import Card from "../../../components/Card";

const Main = () => {
  return (
    <>
      <main className="container p-0 py-9">
        <h5 className="bold ml-2">Artigos recomendados</h5>
        <div className="grid-4">
          <Card />
        </div>
        <div className="grid-4">
          <Card />
        </div>
        <div className="grid-4">
          <Card />
        </div>
        <div className="grid-4">
          <Card />
        </div>
        <div className="grid-4">
          <Card />
        </div>
        <div className="grid-4">
          <Card />
        </div>
      </main>
    </>
  );
};
export default Main;
