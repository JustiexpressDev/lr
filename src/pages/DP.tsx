import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Iframe from "react-iframe";

export const DP = () => {
  return (
    <>
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Derechos de Petición</h1>
        <div className="section-title-divider"></div>
        <h2>
          En el siguiente video te explicamos cómo registrarte y empezar a
          utlizar nuestra plataforma. Descubre todas las plantillas de derechos
          de petición que tenemos disponbiles para ti.
          {/*           En el siguiente video te explicamos cómo diligenciar un Derecho de
          Petición a tu fondo de pensiones, por ejemplo, para que se te haga
          entrega de tu historia laboral.
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
