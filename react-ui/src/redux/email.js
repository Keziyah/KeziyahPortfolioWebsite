const SEND_EMAIL = "SEND_EMAIL"

export const sendEmail = (data) => {
    return {
        type: SEND_EMAIL, 
        payload: data
    }
}

const email = (state = [], action) => {
    const newState = [...state]

    switch (action.type) {
        case SEND_EMAIL:
            newState.push(action.payload)
            break
        default: 
            return state
    }

    return newState
}

export default email 

