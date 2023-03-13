import { useNavigate } from "react-router-dom";


function Register(){

    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/`)
    }

    const goToStartSession = () => {
        navigate(`/IniciarSesion`)
    }

    return(
        <div>
            <div>
                <div>

                </div>
                <br />
                <button onClick={goToStartSession}> Registrar </button>
            </div>
            <button onClick={goToHome}> Inicio </button>
        </div>
    );
}

export default Register;