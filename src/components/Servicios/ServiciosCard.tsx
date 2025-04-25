import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

interface SerivciosCardProps {
  title: string;
  icon: string;
  style: React.CSSProperties;
  buttonVariant?: string;
}

export const ServiciosCard: React.FC<SerivciosCardProps> = ({
  title,
  icon,
  style,
  buttonVariant = "light",
}) => {
  return (
    <>
      <div className="col text-center">
        <Card>
            <Card.Body>
              <div>
                <i className={icon} style={style}></i>
              </div>
            </Card.Body>
            <Button className="button" variant={buttonVariant}>{title}</Button>
        </Card>
      </div>
    </>
  );
};
