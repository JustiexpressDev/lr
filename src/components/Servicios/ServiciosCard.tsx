import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

// No es necesario importar el CSS, ya que se incluirá en el archivo SCSS principal 
interface ServiciosCardProps {
  id: string;
  title: string;
  description: string;
  icon: string;
  style: React.CSSProperties;
  buttonVariant?: string;
  buttonText: string;
  onLearnMore: () => void;
}

export const ServiciosCard: React.FC<ServiciosCardProps> = ({
  id,
  title,
  description,
  icon,
  style,
  buttonVariant = "light",
  buttonText,
  onLearnMore
}) => {
  return (
    <div className="col text-center">
      <Card className="card-servicio d-flex flex-column align-items-center">
        <Card.Body className="text-center w-100">
          <div className="text-center">
            <i className={icon} style={style}></i>
          </div>
          <h4 className="mt-3 mb-2 fw-bold text-black">{title}</h4>
          <Card.Text className="text-black description-text mx-auto text-center">
            {description}
          </Card.Text>
        </Card.Body>
        <Button 
          id={`btn-${id}`}
          variant={buttonVariant} 
          className="button"
          onClick={onLearnMore}
        >
          {buttonText}
        </Button>
      </Card>
    </div>
  );
};