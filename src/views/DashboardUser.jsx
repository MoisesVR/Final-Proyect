import { useContext, useEffect, useState } from "react";
import { DataContext } from "../context/contextApi";
import { Card, Nav, Table, Button, ButtonGroup, ButtonToolbar, ToggleButton } from "react-bootstrap";

const DashboardUser = () => {

    const { data } = useContext(DataContext);

    const clases = data.class;

    const [url, setUrl] = useState(window.location.hash);

    function setterUrl() {
        if (window.location.hash === "#Reservas") {
            setUrl("#Reservas");
        } else if (window.location.hash === "#Clases") {
            setUrl("#Clases");
        } else if (window.location.hash === "#MiPerfil#Ingresos") {
            setUrl("#MiPerfil#Ingresos");
        }
    }

    useEffect(() => {
        setterUrl();

    },[]);

    const [checkedL, setCheckedL] = useState(false);
    const [checkedM, setCheckedM] = useState(false);
    const [checkedMi, setCheckedMi] = useState(false);
    const [checkedJ, setCheckedJ] = useState(false);
    const [checked09, setChecked09] = useState(false);
    const [checked10, setChecked10] = useState(false);
    const [checked11, setChecked11] = useState(false);
    const [checked12, setChecked12] = useState(false);

    function setterUrlMiPerfil() {
        setUrl("#MiPerfil#Ingresos")
    }
    function setterUrlMiPerfilClases() {
        setUrl("#MiPerfil#Clases")
    }
    function setterUrlReservas() {
        setUrl("#Reservas")
    }
    function setterUrlClases() {
        setUrl("#Clases")
    }


    return (
        <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: "10%" }}>
            {url === "#MiPerfil#Ingresos" ? <div>
                <Card style={{ width: "60vw" }}>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="/Dashboard_user#MiPerfil#Ingresos">
                            <Nav.Item style={{ display: "flex" }}>
                                <Nav.Link href={`/Dashboard_user#MiPerfil#Ingresos`} onClick={setterUrlMiPerfil} >Ingresos</Nav.Link>
                                <Nav.Link href={`/Dashboard_user#MiPerfil#Clases`} onClick={setterUrlMiPerfilClases} >Clases</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body style={{ width: "60vw" }}>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Dia</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Martes</td>
                                    <td>14:03</td>
                                    <td>09:00</td>
                                    <td><Button className="btn-danger">Anular</Button></td>
                                </tr>
                                <tr>
                                    <td>Viernes</td>
                                    <td>03/03</td>
                                    <td>10:30</td>
                                    <td><Button className="btn-danger">Anular</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div> : url === "#MiPerfil#Clases" ? <div>
                <Card style={{ width: "100%" }}>
                    <Card.Header>
                        <Nav variant="tabs" defaultActiveKey="/Dashboard_user#MiPerfil#Clases">
                            <Nav.Item style={{ display: "flex" }}>
                                <Nav.Link href={`/Dashboard_user#MiPerfil#Ingresos`} onClick={setterUrlMiPerfil} >Ingresos</Nav.Link>
                                <Nav.Link href={`/Dashboard_user#MiPerfil#Clases`} onClick={setterUrlMiPerfilClases} >Clases</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Card.Header>
                    <Card.Body>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Clase</th>
                                    <th>Dia</th>
                                    <th>Fecha</th>
                                    <th>Hora</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Boxeo</td>
                                    <td>Martes</td>
                                    <td>14/03</td>
                                    <td>11:00</td>
                                    <td><Button className="btn-danger">Anular</Button></td>
                                </tr>
                                <tr>
                                    <td>Cycling</td>
                                    <td>Viernes</td>
                                    <td>03/03</td>
                                    <td>15:00</td>
                                    <td><Button className="btn-danger">Anular</Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Card.Body>
                </Card>
            </div> : url === "#Reservas" ? <div>
                <div>
                    <h1 style={{ padding: "5%" }}> Reserva tu ingreso al gimnasio</h1>
                </div>
                <div>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-checkL"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checkedL}
                                value="1"
                                onChange={(e) => setCheckedL(e.currentTarget.checked)}
                            >
                                Lunes 19/03
                            </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-checkM"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checkedM}
                                value="1"
                                onChange={(e) => setCheckedM(e.currentTarget.checked)}
                            >
                                Martes 20/03
                            </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-checkMi"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checkedMi}
                                value="1"
                                onChange={(e) => setCheckedMi(e.currentTarget.checked)}
                            >
                                Miercoles 21/03
                            </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-checkJ"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checkedJ}
                                value="1"
                                onChange={(e) => setCheckedJ(e.currentTarget.checked)}
                            >
                                Jueves 22/03
                            </ToggleButton>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
                <div>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check09"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked09}
                                value="1"
                                onChange={(e) => setChecked09(e.currentTarget.checked)}
                            >
                                09:00
                            </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check10"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked10}
                                value="1"
                                onChange={(e) => setChecked10(e.currentTarget.checked)}
                            >
                                10:00
                            </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check11"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked11}
                                value="1"
                                onChange={(e) => setChecked11(e.currentTarget.checked)}
                            >
                                11:00
                            </ToggleButton>
                        </ButtonGroup>
                        <ButtonGroup className="me-2" aria-label="First group">
                            <ToggleButton
                                className="mb-2"
                                id="toggle-check12"
                                type="checkbox"
                                variant="outline-primary"
                                checked={checked12}
                                value="1"
                                onChange={(e) => setChecked12(e.currentTarget.checked)}
                            >
                                12:00
                            </ToggleButton>
                        </ButtonGroup>
                    </ButtonToolbar>
                </div>
            </div> : url === "#Clases" ?
                <div>
                    {clases ?
                        <div>
                            <h1> Clases </h1>
                            <div style={{ display:"flex"}}>
                                {clases.map((clase) => {
                                    return (
                                        <Card style={{ width: '18rem' }}>
                                            <Card.Img variant="top" src={clase.img} />
                                            <Card.Body>
                                                <Card.Title>{clase.nombre}</Card.Title>
                                                {/* <Card.Img variant="top" src={clase.img} alt="" style={{ width: "30%" }} /> */}
                                            </Card.Body>
                                        </Card>)
                                })}
                            </div>
                        </div> : null}
                </div> : null}
            <Nav variant="tabs" defaultActiveKey={window.location.pathname + window.location.hash} className="flex-column" style={{ height: "10%" }}>
                <Nav.Item>
                    <Nav.Link href={`/Dashboard_user#MiPerfil#Ingresos`} onClick={setterUrlMiPerfil} >Usuarios</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/Dashboard_user#Reservas`} onClick={setterUrlReservas} >Reservas</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href={`/Dashboard_user#Clases`} onClick={setterUrlClases} >Clases</Nav.Link>
                </Nav.Item>
            </Nav>
        </div>
    );
}

export default DashboardUser;