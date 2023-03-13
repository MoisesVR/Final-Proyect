/* import { useEffect } from "react";

function readPlans(){

    const [data, setData] = useState([]);

    useEffect(() => {
        const getApi = async () => {
            try {
                const resp = await fetch("/gymrat.json");
                const data = await resp.json();
                setData(data.plans);
            } catch (error) {
                return(
                    <div>
                        <h1>Error al cargar los planes</h1>
                    </div>
                )
            }
        }
        getApi();
    })
    
    const planes = data.plans;

}

export default readPlans; */