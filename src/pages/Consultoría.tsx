import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";

export const Consultoría = () => {
  return (
    <>
      <div className="container" id="Pages">
        <h1>Consultoría</h1>
        <br />
        <p className="text-center">
          <div className="col-sm-12">
            <a
              className="aPages"
              href="https://justiexpress.web.app/register"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ingresa a nuestra Plataforma
            </a>
          </div>
        </p>
      </div>
      <Form />
      <Testimonios />
      <TestimoniosCarusel />
      <QuiénesSomos />
    </>
  );
};
