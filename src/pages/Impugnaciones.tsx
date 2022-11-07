import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Iframe from "react-iframe";
import { BarraNavImpugnaciones } from "../components/BarraNav/BarraNavImpuganciones";

export const Impugnaciones = () => {
  return (
    <>
      <BarraNavImpugnaciones />
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Impugnaciones</h1>
        <div className="section-title-divider"></div>
        <h2>
          En el siguiente video te explicamos cómo registrarte y empezar a
          utlizar nuestra plataforma. Las impugnaciones son el mecanismo para
          que le solicites a un juez revisar un fallo que ha salido parcial o
          totalmente desfavorable a tus intereses. Por ejemplo, puedes impugnar
          un fallo de tutela haciendo uso de la plantilla de derecho de
          petición.
          {/* En el siguiente video te explicamos cómo diligenciar una 
          impugnación a un fallo de tutela, mediante nuestra plantilla general
          de Derechos de Petición.
        </h2>
        <h2 className="text-center">
          ¡Ingresa a nuestra plataforma y hazlo ahora! */}
        </h2>

        <Iframe
          url="https://www.youtube.com/embed/dyREnJBzMoM"
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
