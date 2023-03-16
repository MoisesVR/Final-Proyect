import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";


function Register() {

    const navigate = useNavigate();

    const goToStartSession = () => {
        navigate(`/IniciarSesion`)
    }

    const registerUser = (e) => {
        const lengthNombre = user.nombre.length;
        const lengthEmail = user.email.length;
        const lengthPassword = user.password.length;
        const lengthDireccion = user.direccion.length;
        if (lengthNombre === 0 || lengthEmail === 0 || lengthPassword === 0 || lengthDireccion === 0) {
            console.log("dentro")
            alert("Falta completar datos")
        } else {
            console.log("Usuario registrado correctamente");
            goToStartSession();
        }
        e.preventDefault();
    }

    const [user, setUser] = useState([]);

    return (
        <div>
            <Form style={{ width: "70%", paddingLeft: "30%", paddingTop:"3%" }}>
                <Form.Group className="mb-3" controlId="formBasicNombre">
                    <Form.Label> Nombre </Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Nombre" value={user.nombre} onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Ingresar Email" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label> Contraseña </Form.Label>
                    <Form.Control type="password" placeholder="Ingresar Contraseña" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicDirrecion">
                    <Form.Label> Direccion </Form.Label>
                    <Form.Control type="text" placeholder="Ingresar Direccion" value={user.direccion} onChange={(e) => setUser({ ...user, direccion: e.target.value })} />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Form.Label>Forma de pago</Form.Label>
                    <Form.Select enable>
                        <option>Selecciona una forma de pago</option> 
                        <option value="">Efectivo</option>
                        <option value="">Tarjeta de Credito</option>
                    </Form.Select>
                </Form.Group>
                <Button variant="primary" onClick={registerUser}>
                    Registrar
                </Button>
            </Form>
        </div>
    );
}

export default Register;