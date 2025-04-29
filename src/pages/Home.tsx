//componentes descargados
import { Contador } from "../components/Contador/Contador";

//componentes propios
import { Quote } from "../components/Quote/Quote";
import { ServiciosText } from "../components/Servicios/ServiciosText";
import { ServiciosCard } from "../components/Servicios/ServiciosCard";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { BarraNavHome } from "../components/BarraNav/BarraNavHome";

export const Home = () => {
  return (
    <>
      <header>
        <BarraNavHome />
      </header>
      <main id="Home">
        <section id="hero" aria-label="Banner principal">
          <div id="Quote" data-aos="fade-up" data-aos-duration="2500">
            <blockquote>
              <p>
                <i>"Innovación legal respaldada por abogados expertos"</i>
              </p>
            </blockquote>
          </div>
          <p
            className="text-center"
            data-aos="flip-left"
            data-aos-duration="2500"
          >
            <a
              className="aPages"
              href="https://wa.me/573185725324"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contactar por WhatsApp para asistencia inmediata"
              onClick={() => {
                // Llamada al evento de conversión de Google Ads
                const gtagFunction = (window as any).gtag;
                if (gtagFunction) {
                  gtagFunction('event', 'conversion', {'send_to': 'AW-697508779/tF-ACKqxyb4aEKvHzMwC'});
                }
                return true;
              }}
            >
              Click aquí para asistencia inmediata
            </a>
          </p>
        </section>

        <section 
          id="Contador" 
          className="container" 
          data-aos="fade-up" 
          data-aos-duration="2500"
          aria-label="Estadísticas de la empresa"
        >
          <div className="row">
            <article className="col-sm-4 text-center">
              <Contador
                title={"clientes"}
                end={1000}
                duration={4}
                prefix={"+ "}
                style={{ color: "#c4c2f9" }}
                iconStyle={{ color: "#c4c2f9" }}
                icon={"bi bi-person-check-fill"}
                cardColor={{ background: "white" }}
              />
            </article>
            <article className="col-sm-4 text-center">
              <Contador
                title={"entregas"}
                end={2000}
                duration={4}
                prefix={"+ "}
                style={{ color: "#80cac4" }}
                iconStyle={{ color: "#80cac4" }}
                icon={"bi bi-file-earmark-text"}
                cardColor={{ background: "white" }}
              />
            </article>
            <article className="col-sm-4 text-center">
              <Contador
                title={"asesorías"}
                end={4000}
                duration={4}
                prefix={"+ "}
                style={{ color: "#c4c2f9" }}
                iconStyle={{ color: "#c4c2f9" }}
                icon={"bi bi-chat-text"}
                cardColor={{ background: "white" }}
              />
            </article>
          </div>
        </section>

        <section id="servicios" aria-label="Nuestros servicios">
          <ServiciosText />
          <div
            className="container"
            id="ServiciosCard"
            data-aos="fade-up"
            data-aos-duration="2500"
          >
            <div className="row">
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Acciones de Tutela"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#fceef3" }}
                  buttonVariant="outline-secondary"
                />
              </article>
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Derechos de Petición"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#fff0da" }}
                />
              </article>
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Reclamaciones"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#e6fdfc" }}
                />
              </article>
            </div>
            <div className="row">
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Desacatos"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#eafde7" }}
                />
              </article>
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Impugnaciones"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#e1eeff" }}
                />
              </article>
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Contratos"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#fafad2" }}
                />
              </article>
            </div>
            <div className="row">
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Consultoría"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#ada8b6" }}
                />
              </article>
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Proformas de Respuestas"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#dfe3de " }}
                />
              </article>
              <article className="col-sm-4">
                <ServiciosCard
                  title={"Empresas y Startups"}
                  icon={"bi bi-circle-fill text-center"}
                  style={{ color: "#e2f5bd  " }}
                />
              </article>
            </div>
          </div>
        </section>

        <section id="testimonios" aria-label="Testimonios de clientes">
          <Testimonios />
          <TestimoniosCarusel />
        </section>

        <section id="contacto" aria-label="Formulario de contacto">
          <Form />
        </section>

        <section id="quienes-somos" aria-label="Información sobre nosotros">
          <QuiénesSomos />
        </section>

        <aside id="cita-final">
          <Quote />
        </aside>
      </main>
    </>
  );
};