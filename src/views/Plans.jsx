import { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import { DataContext } from "../context/contextApi";

const Plans = () => {

    const { data } = useContext( DataContext );
    const planes = data.plans;

    return (
        <div>
            <div>
                <h1 className="text-center"> Nuestros Planes </h1>
            </div>
            {planes ?
                <div>
                    {planes.map((plan) => {
                        return (
                            <div style={{ paddingLeft: "20%", paddingRight: "20%", paddingTop: "2%" }}>
                                <Card className="text-center" style={{ width: "100%" }}>
                                    <Card.Header>{plan.nombre}</Card.Header>
                                    <Card.Body >
                                        <Card.Title>{plan.duracion}</Card.Title>
                                        <Card.Text>{plan.descripcion}</Card.Text>
                                        <Card.Text>{plan.costo}</Card.Text>
                                        <Button variant="primary" href={`/Registrar`}>Contratar</Button>
                                    </Card.Body>
                                </Card>
                            </div>
                        );
                    })}
                </div>
                : null
            }

        </div>
    );
}

export default Plans;