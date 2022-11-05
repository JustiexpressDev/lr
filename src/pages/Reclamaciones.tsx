import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";

export const Reclamaciones = () => {
  return (
    <>
      <div className="container" id="Pages">
        <h1>Reclamaciones</h1>
        <br />
        <p className="text-center">
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
