import data from "../data.json";
import { Button } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

export const Plan = () => {
  console.log(data);
  return (
    <>
      {data.plans.map((plan) => (
        <Card key={plan.sku} style={{ width: "18rem" }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>{plan.name}</Card.Title>
            <Card.Text>{plan.price}</Card.Text>
            <Link to={`/react-crud-app/plans/${plan.sku}`}>
              <Button variant="primary">Más detalles</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </>
  );
};
