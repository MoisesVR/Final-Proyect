import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function StartSession() {

    const navigate = useNavigate();

    const [data, setData] = useState([]);
    const [user, setUser] = useState([]);
    const [userFounding, setEmailFounding] = useState([]);
    const [pass, setPass] = useState([]);
    const [passFounding, setPassFounding] = useState([]);

    const goToHome = () => {
        navigate(`/`)
    };

    const goToDashboard = () => {
        navigate(`/Dashboard`)
    }
    const goToDashboardUser = () => {
        navigate(`/Dashboard_user`)
    }
    const goToDashboardProfesor = () => {
        navigate(`/Dashboard_profesor`)
    }

    useEffect(() => {
        const getApi = async () => {
            try {
                const resp = await fetch("../data.json");
                const data = await resp.json();
                setData(data)
            } catch (error) {
                return (
                    <div>
                        <h1>Error al cargar la data</h1>
                    </div>
                )
            }
        }
        getApi();

    }, [passFounding])

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

    const verificacion = () => {
        console.log("dentro de la verificacion")
        if (userFounding.length === 0 && passFounding.length === 0) {
            alert("usuario o contraseña equivocada");
        }
    }

    return (
        <div>
            {info ? <div>
                <form>
                    <div>
                        <input type="text" value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} />
                    </div>
                    <div>
                        <input type="password" value={user.pass} onChange={(e) => setPass({ ...pass, password: e.target.value })} />
                    </div>
                    <button onClick={compareEmail} >Iniciar Sesión</button>
                </form>
                <br />
                <button onClick={goToHome}> Inicio </button>
            </div> : null}
        </div>
    );
}

export default StartSession;