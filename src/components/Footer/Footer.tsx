import { Link } from "react-router-dom";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div id="Footer">
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              {`Justiexpress ® ${year} - Una marca de Justiexpress S.A.S.`}
              <br />
              <Link id="RouterNavLink" to="/tyc">
                Términos y condiciones
              </Link>{" "}
              &nbsp;&nbsp;&nbsp;
              <Link id="RouterNavLink" to="/privacidad">
                Aviso de Privacidad
              </Link>
            </div>
            <div className="col-sm-5">
              <a
                href={"https://www.facebook.com/justiexpress"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={"bi bi-facebook"}
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={"https://twitter.com/justiexpress"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={"bi bi-twitter"}
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={"https://www.linkedin.com/company/justiexpress"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={"bi bi-linkedin"}
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={"https://www.instagram.com/justiexpress.legal"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={"bi bi-instagram"}
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
              &nbsp;&nbsp;&nbsp;&nbsp;
              <a
                href={
                  "https://www.youtube.com/channel/UCSQYCc0FrL8CrdIAySmNX0w"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                <i
                  className={"bi bi-youtube"}
                  style={{ color: "#fff", fontSize: "35px" }}
                ></i>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
