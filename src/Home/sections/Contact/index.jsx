const Contact = () => {
  return (
    <>
      <section className="bg-gray">
        <div className="container p-0">
          <h5 className="bold text-center pt-8">Entre em contato</h5>
          <div className="grid-3 disappear"></div>
          <div className="grid-6">
            <form className="my-4">
              <input type="text" placeholder="Nome" />
              <input type="email" placeholder="Email" className="my-3"/>
              <textarea placeholder="Assunto da mensagem" rows="5"></textarea>
            </form>
            <button className="btn uppercase w-100">Entrar em contato</button>
          </div>
          <div className="grid-3 disappear"></div>
        </div>
      </section>
    </>
  );
};
export default Contact;
