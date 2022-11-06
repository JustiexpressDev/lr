//componentes descargados
import { VentanaModal } from "../components/Modal/VentanaModal";
import { Contador } from "../components/Contador/Contador";

//componentes propios
import { Quote } from "../components/Quote/Quote";
import { ServiciosText } from "../components/Servicios/ServiciosText";
import { ServiciosCard } from "../components/Servicios/ServiciosCard";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";

export const Home = () => {
  return (
    <>
      <VentanaModal />
      <Quote />
      <div
        id="Contador"
        className="container"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div className="row">
          <div className="col-sm-4 text-center">
            <Contador
              title={"clientes"}
              end={1000}
              duration={6}
              prefix={"+ "}
              style={{ color: "#c4c2f9" }}
              iconStyle={{ color: "#c4c2f9" }}
              icon={"bi bi-person-check-fill"}
              cardColor={{ background: "white" }}
            />
          </div>
          <div className="col-sm-4 text-center">
            <Contador
              title={"entregas"}
              end={2000}
              duration={6}
              prefix={"+ "}
              style={{ color: "#80cac4" }}
              iconStyle={{ color: "#80cac4" }}
              icon={"bi bi-file-earmark-text"}
              cardColor={{ background: "white" }}
            />
          </div>
          <div className="col-sm-4 text-center">
            <Contador
              title={"asesorías"}
              end={4000}
              duration={6}
              prefix={"+ "}
              style={{ color: "#c4c2f9" }}
              iconStyle={{ color: "#c4c2f9" }}
              icon={"bi bi-chat-text"}
              cardColor={{ background: "white" }}
            />
          </div>
        </div>
      </div>
      <ServiciosText />
      <div
        className="container"
        id="ServiciosCard"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <div className="row">
          <div className="col-sm-4 ">
            <ServiciosCard
              title={"Acciones de Tutela"}
              icon={"bi bi-circle-fill text-center"}
              to={"/tutelas"}
              style={{ color: "#fceef3" }}
            />
          </div>
          <div className="col-sm-4">
            <ServiciosCard
              title={"Derechos de Petición"}
              icon={"bi bi-circle-fill text-center"}
              to={"/derechos-de-peticion"}
              style={{ color: "#fff0da" }}
            />
          </div>
          <div className="col-sm-4">
            <ServiciosCard
              title={"Reclamaciones"}
              icon={"bi bi-circle-fill text-center"}
              to={"/reclamaciones"}
              style={{ color: "#e6fdfc" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ServiciosCard
              title={"Desacatos"}
              icon={"bi bi-circle-fill text-center"}
              to={"/desacatos"}
              style={{ color: "#eafde7" }}
            />
          </div>
          <div className="col-sm-4">
            <ServiciosCard
              title={"Impugnaciones"}
              icon={"bi bi-circle-fill text-center"}
              to={"/impugnaciones"}
              style={{ color: "#e1eeff" }}
            />
          </div>
          <div className="col-sm-4">
            <ServiciosCard
              title={"Contratos"}
              icon={"bi bi-circle-fill text-center"}
              to={"/contratos"}
              style={{ color: "#fafad2" }}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4">
            <ServiciosCard
              title={"Consultoría"}
              icon={"bi bi-circle-fill text-center"}
              to={"/consultoria"}
              style={{ color: "#ada8b6" }}
            />
          </div>
          <div className="col-sm-4">
            <ServiciosCard
              title={"Proformas de Respuestas"}
              icon={"bi bi-circle-fill text-center"}
              to={"/plantillas"}
              style={{ color: "#dfe3de " }}
            />
          </div>
          <div className="col-sm-4">
            <ServiciosCard
              title={"Empresas y Startups"}
              icon={"bi bi-circle-fill text-center"}
              to={"/empresas"}
              style={{ color: "#e2f5bd  " }}
            />
          </div>
        </div>
      </div>
      <Testimonios />
      <TestimoniosCarusel />
      <Form />
      <QuiénesSomos />
    </>
  );
};
