import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface SerivciosCardProps {
  title: string;
  icon: string;
  to: string;
  style: React.CSSProperties;
}

export const ServiciosCard: React.FC<SerivciosCardProps> = ({
  title,
  icon,
  to,
  style,
}) => {
  return (
    <>
      <div className="col text-center">
        <Card>
          <Link id="RouterNavLink" to={to}>
            <Card.Body>
              <div>
                <i className={icon} style={style}></i>
              </div>
            </Card.Body>
            <Button className="button">{title}</Button>
          </Link>
        </Card>
      </div>
    </>
  );
};
