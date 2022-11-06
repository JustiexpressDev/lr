import { Form } from "../components/Form/Form";
import { QuiénesSomos } from "../components/QuiénesSomos/QuiénesSomos";
import { Testimonios } from "../components/Testimonios/Testimonios";
import { TestimoniosCarusel } from "../components/Testimonios/TestimoniosCarusel";
import Table from "react-bootstrap/Table";

export const Consultoría = () => {
  return (
    <>
      <div
        className="container"
        id="Pages"
        data-aos="fade-up"
        data-aos-duration="2500"
      >
        <h1>Consultoría</h1>
        <div className="section-title-divider"></div>
        <h2>
          Te brindamos asesoría en temas relacionados con Derecho Comercial,
          Corporativo, Civil, Familia, Constitucional, Administrativo, Laboral,
          Seguridad Social y Protección Social, Tributario, entre otras. En lo
          económico, asesoramos en diversos asuntos financieros y de
          investigación económica. Revisa la siguente lista de temas en los que
          te podemos brindar asesoría.
        </h2>
        <h2 className="text-center">
          ¡Escríbenos en nuestro Whatsapp o envíanos tu consulta en la sección
          de Contáctanos!
        </h2>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="text-center">Área de Práctica</th>
              <th className="text-center">Tema</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Derecho Comercial y Corporativo
              </td>
              <td>
                ✔ Constitución de Sociedades
                <br />
                <br />
                ✔ Inscripción de actos, libros y documentos en el Registro
                Mercantil
                <br />
                <br />
                ✔ Capitalización de Sociedades
                <br />
                <br />
                ✔ Transformación y Adquisición de Sociedades
                <br />
                <br />
                ✔ Fusión y escisión de sociedades
                <br />
                <br />
                ✔ Establecimiento de sucursales de sociedad extranjera
                <br />
                <br />
                ✔ Acuerdos de Accionistas
                <br />
                <br />
                ✔ Disolución y liquidación de sociedades
                <br />
                <br />
                ✔ Competencia desleal y prácticas restrictivas de la Competencia
                <br />
                <br />
                ✔ Propiedad industrial
                <br />
                <br />
                ✔ Marcas y signos distintivos
                <br />
                <br />
                ✔ Comercio electrónico
                <br />
                <br />✔ Asesoría en contratación comercial
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Derecho Administrativo
              </td>
              <td>
                ✔ Derechos de petición
                <br />
                <br />
                ✔ Silencio Administrativo negativo, positivo y en recursos
                <br />
                <br />
                ✔ Estructuración de documentos para la defensa en procesos de
                Responsabilidad Fiscal y Disciplinaria
                <br />
                <br />
                ✔ Escritos de Descargos en contra de Pliegos de Cargos y Régimen
                Sancionatorio
                <br />
                <br />
                ✔ Recursos en contra de Actos Administrativos
                <br />
                <br />
                ✔ Revocatoria directa de Actos Administrativos
                <br />
                <br />✔ Contratación Estatal
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Derecho Civil
              </td>
              <td>
                ✔ Promesas de Compraventa de inmuebles
                <br />
                <br />
                ✔ Contratos de Compraventa de inmuebles
                <br />
                <br />
                ✔ Trámites notariales y de registro
                <br />
                <br />
                ✔ Responsabilidad Contractual y Extracontractual
                <br />
                <br />✔ Responsabilidad Médica
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Derecho de Familia
              </td>
              <td>
                ✔ Esquemas sucesorales y partición de patrimonio en vida
                <br />
                <br />
                ✔ Disolución y Liquidación de Sociedad Conyugal
                <br />
                <br />
                ✔ Matrimonio y uniones maritales de hecho
                <br />
                <br />
                ✔ Acuerdos prematrimoniales y capitulaciones
                <br />
                <br />
                ✔ Testamentos
                <br />
                <br />
                ✔ Sucesiones por causa de muerte
                <br />
                <br />
                ✔ Alimentos y custodia
                <br />
                <br />
                ✔ Patrimonio de Familia Inembargable
                <br />
                <br />✔ Afectación de Vivienda Familiar
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Derecho Laboral
              </td>
              <td>
                ✔ Contrato de Trabajo y Relación de Trabajo
                <br />
                <br />
                ✔ Terminaciones con justa y sin justa causa del Contrato de
                Trabajo
                <br />
                <br />
                ✔ Liquidaciones y prestaciones sociales
                <br />
                <br />
                ✔ Actuaciones ante Inspectores de Trabajo
                <br />
                <br />
                ✔ Pactos Colectivos
                <br />
                <br />✔ Derecho Colectivo del Trabajo, libertad sindical,
                negociación colectiva
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Derecho de la Seguridad Social y Protección Social
              </td>
              <td>
                ✔ Planeación pensional y solicitud de Pensiones
                <br />
                <br />
                ✔ Afiliación y atención en Salud
                <br />
                <br />
                ✔ Afiliación y atención en Riesgos Profesionales
                <br />
                <br />✔ Servicios de Cajas de Compensación Familiar y subsidio
                familiar
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Derecho Tributario
              </td>
              <td>
                ✔ Planeación Tributaria
                <br />
                <br />
                ✔ Impuesto sobre la renta y complementarios Personas Naturales
                <br />
                <br />
                ✔ Impuesto sobre la renta y complementarios Personas Jurídicas
                <br />
                <br />
                ✔ Impuesto sobre las ventas
                <br />
                <br />
                ✔ Retenciones en la Fuente
                <br />
                <br />
                ✔ Impuestos Territoriales
                <br />
                <br />✔ Procedimiento Tributario y Régimen Sancionatorio
              </td>
            </tr>
            <tr>
              <td className="text-center fw-bold mx-auto align-middle">
                Economía y Derecho Financiero
              </td>
              <td>
                ✔ Análisis Económico y Financiero del Derecho
                <br />
                <br />
                ✔ Protección al consumidor
                <br />
                <br />
                ✔ Competencia
                <br />
                <br />
                ✔ Contabilidad y Análisis Financiero
                <br />
                <br />
                ✔ Contratos Bancarios
                <br />
                <br />
                ✔ Contratos de Garantía
                <br />
                <br />
                ✔ Derivados Financieros
                <br />
                <br />
                ✔ Mercado de Capitales y Valores
                <br />
                <br />
                ✔ Régimen Cambiario e Inversiones Internacionales
                <br />
                <br />✔ Títulos valores
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
      <Form />
      <Testimonios />
      <TestimoniosCarusel />
      <QuiénesSomos />
    </>
  );
};
