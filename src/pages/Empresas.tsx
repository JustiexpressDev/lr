import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Iframe from "react-iframe";

export const Empresas = () => {
  return (
    <>
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Empresas</h1>
        <div className="section-title-divider"></div>
        <h2>
          Si eres una empresa, podrás acceder a todas las plantillas disponibles
          para el público en general, y gestionar las plantillas creadas por
          nosotros a la medida de tu empresa; las cuales serán visibles
          únicamente desde tu usuario empresarial. En el siguiente video te
          explicamos cómo registrarte como empresa y empezar a utlizar nuestra
          plataforma.
        </h2>
        <h2 className="text-center">
          ¡Ingresa a nuestra plataforma y hazlo ahora!
        </h2>

        <Iframe
          url="https://www.youtube.com/embed/kxZDuteXIhE"
          width="60%"
          height="350"
          id=""
          className=""
          display="block"
          position="relative"
          styles={{
            margin: "auto",
            marginTop: "50px",
            marginBottom: "40px",
            border: "7px double #171717",
            borderRadius: "25px",
          }}
        />
        <br />
        <p
          className="text-center"
          data-aos="flip-left"
          data-aos-duration="2500"
        >
          <a
            className="aPages"
            href="https://justiexpress.web.app/register"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ingresa a nuestra Plataforma
          </a>
        </p>
      </div>
      <Form />
      <Testimonios />
      <TestimoniosCarusel />
      <QuiénesSomos />
    </>
  );
};
