import { useNavigate } from "react-router-dom";

const Navbar = () => {

    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/`)
    }

    const goToPlans = () => {
        navigate(`/Planes`)
    }

    const goToServices = () => {
        navigate(`/Servicios`)
    }

    const goToClass = () => {
        navigate(`/Clases`)
    }
    
    const goToRegister = () => {
        navigate(`/Registrar`)
    }

    const goToStartSession = () => {
        navigate(`/IniciarSesion`)
    }

    return(
        <div>
            <div>
                <button onClick={goToHome}> Inicio </button>
                <button onClick={goToPlans}> Planes </button>
                <button onClick={goToServices}> Servicios </button>
                <button onClick={goToClass}> Clases </button>
                <button onClick={goToRegister}> Registrar </button>
                <button onClick={goToStartSession}> Iniciar Sesión </button>
            </div>
        </div>
    );
}

export default Navbar;