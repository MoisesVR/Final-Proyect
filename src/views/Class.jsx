import { useEffect, useState } from "react";

const Class = () => {

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

    const clases = data.class;

    return (
        <div>
            <div>
                <h1> Nuestras Clases </h1>
            </div>
            {clases ?
                <div>
                    {clases.map((clase) => {
                        return (
                            <div>
                                <h1>{clase.nombre}</h1>
                                <img src={clase.img} alt="" />
                                <p>{clase.descripcion}</p>
                            </div>
                        );
                    })}
                </div>
                : null
            }
        </div>
    );
}

export default Class;