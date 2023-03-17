import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { DataContext } from "../context/contextApi";
import { Form, Button } from "react-bootstrap";

function StartSession() {

    const { data } = useContext(DataContext);

    const navigate = useNavigate();

    const [user, setUser] = useState([]);
    const [userFounding, setEmailFounding] = useState([]);
    const [pass, setPass] = useState([]);
    const [passFounding, setPassFounding] = useState([]);

    const goToDashboard = () => {
        navigate(`/Dashboard#Usuarios`)
    }
    const goToDashboardUser = () => {
        navigate(`/Dashboard_user#MiPerfil#Ingresos`)
    }
    const goToDashboardProfesor = () => {
        navigate(`/Dashboard_profesor`)
    }

    const info = data.users;

    const compareEmail = (event) => {
        let i = 0;
        info.map((emailFound) => {
            if (emailFound.correo === user.email && emailFound.contraseña === pass.password) {
                setEmailFounding(emailFound.correo);
                setPassFounding(emailFound.contraseña);
                if (emailFound.tipo_de_usuario === "Admin") {
                    i = 1;
                } else if (emailFound.tipo_de_usuario === "Usuario") {
                    i = 2;
                } else if (emailFound.tipo_de_usuario === "Profesor") {
                    i = 3;
                }
            }
        })
        if (i === 1) {
            goToDashboard();
        } else if (i === 2) {
            goToDashboardUser();
        } else if (i === 3) {
            goToDashboardProfesor();
        } else {
            verificacion()
        }
        event.preventDefault();
    }

    const verificacion = (e) => {
        if (userFounding.length === 0 && passFounding.length === 0) {
            alert("usuario o contraseña equivocada");
        }
    }

    return (
        <div>
            {info ? <div>
                <Form style={{ width: "70%", paddingLeft: "30%", paddingTop: "3%" }}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label> Email </Form.Label>
                        <Form.Control type="email" placeholder="Ingresar Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label> Contraseña </Form.Label>
                        <Form.Control type="password" placeholder="Ingresar Contraseña" value={user.pass} onChange={(e) => setPass({ ...pass, password: e.target.value })} />
                    </Form.Group>
                    <Button variant="primary" onClick={compareEmail}>
                        Iniciar Sesión
                    </Button>
                </Form>
            </div> : null}
        </div>
    );
}

export default StartSession;