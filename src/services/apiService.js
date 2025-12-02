const API_BASE_URL ="http://localhost:3001/creatures";


//Función para manejar respuestas
const handleResponse =(response)=>{
    if(!response.ok){
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
};

//Funciones para manejar errores
const handleError = (error)=>{
    console.error("API call failed:",error);
    throw error;
};

//Servicio para obtener todas las criaturas
export const getCreatures = ()=>{
    return fetch(`${API_BASE_URL}`)
        .then(handleResponse)
        .catch(handleError);
};

export const getCreature=(id)=>{
    return fetch(`${API_BASE_URL}?id=${id}`)
        .then(handleResponse)
        .catch(handleError);
}

//Servicio para agregar una criatura
export const postCreature =()=>{

}