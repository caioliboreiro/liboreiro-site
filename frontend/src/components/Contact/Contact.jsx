import Header from "../Header/Header";
import Card from "../Card/Card";
import FadeIn from "../FadeIn/FadeIn";
import axios from "axios";
import "./Contact.css";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import mail from "../../assets/mail.svg";
import { useEffect, useState } from "react";

function Contact() {
  useEffect(() => {
    document.title = "Contato | Liboreiro";
  }, []);

  const [errors, setErrors] = useState([]);
  async function handleSubmit(event) {
    event.preventDefault();
    const formEl = event.currentTarget;
    const formData = new FormData(formEl);

    const contact = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("msg"),
    };

    try {
      await axios.post("http://localhost:3000/contacts", contact);
      setErrors([]);
      toast.success("Mensagem enviada com sucesso!", { autoClose: 2000 });
    } catch (err) {
      const { _errors, ...messages } = err.response.data.errors;
      setErrors(Object.entries(messages));
    }

    formEl.reset();
  }

  function renderErrors() {
    const errParagraph = [];

    let count = 1;
    for (let error of errors) {
      errParagraph.push(
        <p className="error-msg" key={count}>
          {error[1]._errors[0]}
        </p>
      );
      count++;
    }

    return errParagraph;
  }

  return (
    <main className="contact">
      <Header backgroundColor="black" />
      <Card
        primaryHeader="Contato"
        secondaryHeader="ENTRE EM CONTATO CONOSCO"
      />

      <FadeIn>
        <form className="contact-form" onSubmit={handleSubmit}>
          <h1 className="form-header">Formulário de Contato</h1>
          <div className="input-container">
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              placeholder="Digite seu nome"
              name="name"
              className="name-input"
              id="name"
            />
          </div>

          <div className="input-container">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Digite seu email"
              name="email"
              className="email-input"
              id="email"
            />
          </div>

          <div className="input-container">
            <label htmlFor="msg">Mensagem</label>
            <textarea
              placeholder="Digite aqui sua mensagem"
              name="msg"
              className="msg-input"
              id="msg"
              rows={5}
            ></textarea>
          </div>
          {errors.length > 0 && renderErrors()}
          <button className="submit-btn" type="submit">
            Enviar
          </button>
        </form>
      </FadeIn>

      <section className="other-contact">
        <h1 className="other-contact-header">Canais de comunicação</h1>
        <ul className="other-contact-list">
          <li>
            <a href="#">
              <img
                src="https://aw2759p31vmmh43ewjtys5b7.blob.core.windows.net/static/whatsapp.png"
                alt="logo whatsapp"
                width="25px"
              />
              +55 (31) 99876-5432
            </a>
          </li>
          <li>
            <a href="#">
              <img src={mail} alt="" width="25px" />
              ri@liboreiro.com.br
            </a>
          </li>

          <li>
            <a href="#">
              <img
                src="https://aw2759p31vmmh43ewjtys5b7.blob.core.windows.net/static/insta.png"
                alt="logo instagram"
                width="25px"
              />
              LiboreiroAssetManagement
            </a>
          </li>

          <li>
            <a href="#">
              <img
                src="https://aw2759p31vmmh43ewjtys5b7.blob.core.windows.net/static/face.png"
                alt="logo facebook"
                width="25px"
              />
              LiboreiroAssetManagement
            </a>
          </li>

          <li>
            <a href="#">
              <img
                src="https://aw2759p31vmmh43ewjtys5b7.blob.core.windows.net/static/youtube.png"
                alt="logo youtube"
                width="25px"
              />
              @liboreiroAsset
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}

export default Contact;
