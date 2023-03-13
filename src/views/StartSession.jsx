import { useNavigate } from "react-router-dom";

function StartSession(){

    const navigate = useNavigate();

    const goToHome = () => {
        navigate(`/`)
    }
    
    return(
        <div>
            <div>

            </div>
            <br />
            <button onClick={goToHome}> Inicio </button>
        </div>
    );
}

export default StartSession;