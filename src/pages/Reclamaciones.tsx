import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Iframe from "react-iframe";
import { BarraNavReclamaciones } from "../components/BarraNav/BarraNavReclamaciones";

export const Reclamaciones = () => {
  return (
    <>
      <BarraNavReclamaciones />
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Reclamaciones</h1>
        <div className="section-title-divider"></div>
        <h2>
          En el siguiente video te explicamos cómo registrarte y empezar a
          utlizar nuestra plataforma. Descubre todas las plantillas de
          reclamaciones que tenemos disponbiles para ti.
          {/* En el siguiente video te explicamos cómo diligenciar una 
          reclamación a tu empleador, por ejemplo, para solicitarle que 
          se proceda con el pago de tu liquidación.
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
