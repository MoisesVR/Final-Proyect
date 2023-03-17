import { useContext, useState } from "react";
import { DataContext } from "../context/contextApi";
import { Card, Nav, Table, Button } from "react-bootstrap";

const DashboardAdmin = () => {

    const { data } = useContext(DataContext);

    const [url, setUrl] = useState("#Usuarios");

    const users = data.users;
    const plans = data.plans;
    const clases = data.class;

    function setterUrlUsuarios() {
        setUrl("#Usuarios")
    }
    function setterUrlPlanes() {
        setUrl("#Planes")
    }
    function setterUrlClases() {
        setUrl("#Clases")
    }

    return (
        <div style={{ display: "flex", justifyContent: "space-between" }}>
            {url === "#Usuarios" ? <div>
                <Card style={{ width: "100%" }}>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Usuarios</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Correo</th>
                                    <th>Direccion</th>
                                    <th>Forma Pago</th>
                                    <th>Tipo Usuario</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{users[0].id}</td>
                                    <td>{users[0].nombre}</td>
                                    <td>{users[0].correo}</td>
                                    <td>{users[0].direccion}</td>
                                    <td>{users[0].forma_de_pago}</td>
                                    <td>{users[0].tipo_de_usuario}</td>
                                    <td><Button className="btn-success">Agregar</Button></td>
                                    <td><Button className="btn-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>{users[1].id}</td>
                                    <td>{users[1].nombre}</td>
                                    <td>{users[1].correo}</td>
                                    <td>{users[1].direccion}</td>
                                    <td>{users[1].forma_de_pago}</td>
                                    <td>{users[1].tipo_de_usuario}</td>
                                    <td><Button className="btn-success">Agregar</Button></td>
                                    <td><Button className="btn-danger">Eliminar</Button></td>
                                </tr>
                                <tr>
                                    <td>{users[2].id}</td>
                                    <td>{users[2].nombre}</td>
                                    <td>{users[2].correo}</td>
                                    <td>{users[2].direccion}</td>
                                    <td>{users[2].forma_de_pago}</td>
                                    <td>{users[2].tipo_de_usuario}</td>
                                    <td><Button className="btn-success">Agregar</Button></td>
                                    <td><Button className="btn-danger">Eliminar</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div> : url === "#Planes" ? <div>
                <Card style={{ width: "100%" }}>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Planes</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Costo</th>
                                    <th>Duracion</th>
                                    <th> </th>
                                    <th> </th>                                  
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{plans[0].id}</td>
                                    <td>{plans[0].nombre}</td>
                                    <td>{plans[0].descripcion}</td>
                                    <td>{plans[0].costo}</td>
                                    <td>{plans[0].duracion}</td>
                                    <td><Button> Modificar </Button></td>
                                    <td><Button className="btn-danger"> Eliminar </Button></td>
                                </tr>
                                <tr>
                                    <td>{plans[1].id}</td>
                                    <td>{plans[1].nombre}</td>
                                    <td>{plans[1].descripcion}</td>
                                    <td>{plans[1].costo}</td>
                                    <td>{plans[1].duracion}</td>
                                    <td><Button> Modificar </Button></td>
                                    <td><Button className="btn-danger"> Eliminar </Button></td>
                                </tr>
                                <tr>
                                    <td>{plans[2].id}</td>
                                    <td>{plans[2].nombre}</td>
                                    <td>{plans[2].descripcion}</td>
                                    <td>{plans[2].costo}</td>
                                    <td>{plans[2].duracion}</td>
                                    <td><Button> Modificar </Button></td>
                                    <td><Button className="btn-danger"> Eliminar </Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div> : url === "#Clases" ? <div>
                <Card style={{ width: "100%" }}>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="#first">
                            <Nav.Item>
                                <Nav.Link href="#first">Clases</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre</th>
                                    <th>Descripcion</th>
                                    <th>Cupo</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{clases[0].id}</td>
                                    <td>{clases[0].nombre}</td>
                                    <td>{clases[0].descripcion}</td>
                                    <td>{clases[0].cupo}</td>
                                    <td><Button> Modificar </Button></td>
                                    <td><Button className="btn-danger"> Eliminar </Button></td>
                                </tr>
                                <tr>
                                    <td>{clases[1].id}</td>
                                    <td>{clases[1].nombre}</td>
                                    <td>{clases[1].descripcion}</td>
                                    <td>{clases[1].cupo}</td>
                                    <td><Button> Modificar </Button></td>
                                    <td><Button className="btn-danger"> Eliminar </Button></td>
                                </tr>
                                <tr>
                                    <td>{clases[2].id}</td>
                                    <td>{clases[2].nombre}</td>
                                    <td>{clases[2].descripcion}</td>
                                    <td>{clases[2].cupo}</td>
                                    <td><Button> Modificar </Button></td>
                                    <td><Button className="btn-danger"> Eliminar </Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div> : null}

            <Nav variant="tabs" defaultActiveKey="/Dashboard#Usuarios" className="flex-column" style={{ height: "10%" }}>
                <Nav.Item>
                    <Nav.Link href={`/Dashboard#Usuarios`} onClick={setterUrlUsuarios} >Usuarios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/Dashboard#Planes`} onClick={setterUrlPlanes} >Planes</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/Dashboard#Clases`} onClick={setterUrlClases} >Clases</Nav.Link>
                </Nav.Item>
            </Nav>
        </div >
    );
}

export default DashboardAdmin;