import { useState } from "react";
import { useNavigate } from "react-router-dom";


function Register() {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/`)
    }

        const goToStartSession = () => {
            navigate(`/IniciarSesion`)
        }

    const registerUser = () => {
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
    }

    const [user, setUser] = useState([]);

    return (
        <div>
            <div>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" value={user.nombre} onChange={(e) => setUser({ ...user, nombre: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="password" value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="">Direccion</label>
                    <input type="text" value={user.direccion} onChange={(e) => setUser({ ...user, direccion: e.target.value })} />
                </div>
                <div>
                    <label htmlFor="">Forma de pago</label>
                    <select name="" id="">
                        <option value="">Selecciona una forma de pago</option>
                        <option value="">Efectivo</option>
                        <option value="">Tarjeta de credito</option>
                    </select>
                </div>
                <br />
                <button onClick={registerUser}> Registrar </button>
            </div>
            <button onClick={goToHome}> Inicio </button>
        </div>
    );
}

export default Register;