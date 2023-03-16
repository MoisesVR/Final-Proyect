import { useContext } from "react";
import { Card } from "react-bootstrap";

import { DataContext } from "../context/contextApi";

const Class = () => {

    const { data } = useContext( DataContext );
    const clases = data.class;

    return (
        <div>
            <div>
                <h1 className="text-center"> Nuestras Clases </h1>
            </div>
            {clases ?
                <div>
                    {clases.map((clase) => {
                        return (
                            <div style={{ display: "flex", padding: "1% "}}>
                                <Card.Img variant="top" src={clase.img} alt="" style={{ width: "30%" }} />
                                <Card.Body style={{ paddingLeft: "2%" }}>
                                    <Card.Title>
                                        {clase.nombre}
                                    </Card.Title>
                                    <Card.Text style={{ paddingTop: "2%" }}>
                                        {clase.descripcion}
                                    </Card.Text>
                                </Card.Body>
                            </div>
                        );
                    })}
                </div>
                : null
            }
        </div>
    );
}

export default Class;