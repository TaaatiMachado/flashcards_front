const url = import.meta.env.VITE_API_URL
const token = localStorage.getItem("Token");


export const signUp = async (reqBody, funcOk, funcErr) => {
    const response = await fetch(`${url}/accounts`, {
        method: "post",
        body: JSON.stringify(reqBody),
        headers: { "Content-Type": "application/json",}
    });

    if (response.ok) {
        funcOk()
    }else{
        funcErr(response)
    }
}

export const userLogin = async (reqBody, funcOk, funcErr) => {
    const response = await fetch(`${url}/sessions`, {
        method: "post",
        body: JSON.stringify(reqBody),
        headers: { "Content-Type": "application/json",}
    });

    if (response.ok && funcOk) {
        const data = await response.json();
        funcOk(data.access_token)

    }
    if (!response.ok && funcErr){
        funcErr(response)
    }
}

export const createCard = async (reqBody, funcOk, funcErr) => {
    console.log(token)
    const response = await fetch(`${url}/flashcard`, {
        method: "post",
        body: JSON.stringify(reqBody),
        headers: { "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    });
    if (response.ok && funcOk) {
        const data = await response.json();
        //console.log(data)
        funcOk(data)

    }
    if (!response.ok && funcErr){
        funcErr(response)
    }
}

export const getCards = async (secLang) => {
    const response = await fetch(`${url}/flashcards/list?secondaryLanguage=${secLang}`, {
        method: "get",
        
        headers: { "Content-Type": "application/json",
            "Authorization" : `Bearer ${token}`
        }
    });
    if (response.ok) {
        const data = await response.json();
        //console.log('req', data)
        return data
    }
    if (!response.ok){
        console.log('error', response)
    }
}