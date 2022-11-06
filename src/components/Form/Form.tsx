import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import ReCAPTCHA from "react-google-recaptcha";

interface NC {
  name: string;
  user_email: string;
  message: string;
  phone: string;
}

export const Form = () => {
  const captcha: any = useRef(null);

  const form: any = useRef();
  const [name, setname] = useState<string>("");
  const [user_email, setuser_email] = useState<string>("");
  const [message, setmessage] = useState<string>("");
  const [phone, setphone] = useState<string>("");
  const [ArregloCompleto, setArregloCompleto] = useState<NC[]>([]);
  const [captchaVálido, setCaptchaVálido] = useState<boolean>(true);
  const [usuarioVálido, setUsuarioVálido] = useState<boolean>(false);

  const onChange = () => {
    if (captcha.current.getValue()) {
      console.log("el usuario no es un robot");
      setCaptchaVálido(true);
    }
  };

  const sendEmail = (e: React.SyntheticEvent<EventTarget>) => {
    e.preventDefault();
    const agregarTexto = () => {
      const Arreglo: NC[] = [
        ...ArregloCompleto,
        { name, user_email, phone, message },
      ];
      setArregloCompleto(Arreglo);
    };
    agregarTexto();

    if (captcha.current.getValue()) {
      console.log("el usuario no es un robot");
      setUsuarioVálido(true);
      setCaptchaVálido(true);
    } else {
      console.log("por favor acapta el capcha");
      setUsuarioVálido(false);
      setCaptchaVálido(false);
    }

    if (captchaVálido === false) {
      setname("");
      setuser_email("");
      setphone("");
      setmessage("");
    }

    emailjs
      .sendForm(
        "service_6liye7j",
        "template_oe78cbt",
        form.current,
        "voNIu8Q4CduuhOd-f"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div id="Contáctanos" data-aos="fade-up" data-aos-duration="2500">
      <h1>¿Alguna duda? / Contáctanos</h1>
      <div className="section-title-divider"></div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="container">
          {!usuarioVálido && (
            <div className="row">
              <div className="col-lg-5">
                <i
                  className="bi bi-envelope-fill"
                  data-aos="fade-right"
                  data-aos-offset="350"
                  data-aos-easing="ease-in-sine"
                ></i>
                <br />
                <h3 className="text-center">justiexpress@gmail.com </h3>
                <h4 className="text-center">(+57) 318 5725324 </h4>
              </div>
              <div className="col-lg-7">
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Nombre completo"
                    name="name"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setname(e.target.value)
                    }
                    value={name}
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="email"
                    placeholder="Email"
                    name="user_email"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setuser_email(e.target.value)
                    }
                    value={user_email}
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <input
                    type="text"
                    placeholder="Teléfono"
                    name="phone"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                      setphone(e.target.value)
                    }
                    value={phone}
                    required
                  />
                </div>
                <div className="mb-3 pt-0">
                  <textarea
                    placeholder="Escribe tu mensaje..."
                    name="message"
                    className="form-control px-3 py-3 placeholder-gray-400 text-gray-600 relative bg-white bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    onChange={(e: any) => setmessage(e.target.value)}
                    value={message}
                    required
                  />
                </div>
                <div className="Captcha-box col-sm-6">
                  <ReCAPTCHA
                    ref={captcha}
                    sitekey="6Le_p4ciAAAAANxwqk28m4Vez8GtPcLRg__vdulK"
                    onChange={onChange}
                  />
                  {captchaVálido === false && (
                    <div className="error-captcha">
                      Acepta el captcha para enviar formulario
                    </div>
                  )}
                </div>
                <div className="col-sm-6">
                  <button className="px-3  py-1 rounded shadow" type="submit">
                    Enviar
                  </button>
                </div>
              </div>
            </div>
          )}
          {usuarioVálido && (
            <div>
              <h4 className="text-center">¡Formulario enviado con éxito!</h4>
            </div>
          )}
        </div>
      </form>
    </div>
  );
};
