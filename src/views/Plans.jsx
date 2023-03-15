import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Plans = () => {

    const navigate = useNavigate();

    const goToRegister = () => {
        navigate(`/Registrar`)
    }

    const [data, setData] = useState([])

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

    }, [])

    const planes = data.plans;

    return (
        <div>
            <div>
                <h1> Nuestros Planes </h1>
            </div>
            {planes ?
                <div>
                    {planes.map((plan) => {
                        return (
                            <div>
                                <h1>{plan.nombre}</h1>
                                <h5>{plan.duracion}</h5>
                                <p>{plan.descripcion}</p>
                                <h5>${plan.costo}</h5>
                                <button onClick={goToRegister}> Contratar </button>
                            </div>
                        );
                    })}
                </div>
                : null
            }

        </div>
    );
}

export default Plans;