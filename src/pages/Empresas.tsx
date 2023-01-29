import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Iframe from "react-iframe";
import { BarraNavEmpresas } from "../components/BarraNav/BarraNavEmpresas";

export const Empresas = () => {
  return (
    <>
      <BarraNavEmpresas />
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Empresas</h1>
        <div className="section-title-divider"></div>
        <h2>
          No hay empresa que no tenga alguno de sus procesos basados en una
          plantilla. Por eso, te invitamos a elegirnos. Somos una excelente
          alternativa para que estandarices los documentos de tu empresa. Con
          nosotros ahorrarás tiempo y recursos. Nuestras plantillas son fáciles
          de implementar y con ellas reducirás errores humanos involuntarios.
          <br />
          <br />
          Con tu usuario empresarial podremos habilitarte cualquiera de las
          plantillas disponibles para el público en general. Así mismo, podemos
          crear nuevas plantillas a la medida de tu empresa, las cuales serán
          visibles únicamente desde tu usuario empresarial.
          <br />
          <br />
          Contáctanos y uno de nuestros asesores te orientará sobre nuestros
          planes para empresas.
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
