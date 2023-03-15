import { useNavigate } from "react-router-dom";

function Home() {

    const navigate = useNavigate();

    const goToPlans = () => {
        navigate(`/Planes`)
    }

    const goToServices = () => {
        navigate(`/Servicios`)
    }

    return(
        <div>
            <div>
                <h1> Energía y Salud en Movimiento </h1>
                <p> Entrena en el mejor gimnasio de Latinoamerica y logra tus objetivos con equipamiento de última generación </p>
                <button onClick={goToPlans}> Nuestros Planes </button>
            </div>
            <div>
                <h1> Personal altamente capacitado </h1>
                <p> Entrena con los mejores deportistas obteniendo los mejores resultados</p>
                <button onClick={goToServices}> Servicios </button>
            </div>
        </div>
    );
}

export default Home;