import { ACTION_TYPES } from "../Utils/constants";

const { LOGIN,LOGOUT, SIGNUP } = ACTION_TYPES;
export const authReducer = (state, action) => {
    switch (action.type) {
        case LOGIN:
            console.log(action.payload);
            localStorage.setItem("userData", JSON.stringify({
                token: action.payload.data.encodedToken,
                name: action.payload.data.foundUser.firstName,
                email: action.payload.data.foundUser.email,
            }))
            return {
                ...state,
                token: action.payload.data.encodedToken,
                name: action.payload.data.foundUser.firstName,
                email: action.payload.data.foundUser.email,
            }

        case SIGNUP:
            localStorage.setItem("userData",JSON.stringify({
                token: action.payload.data.encodedToken,
                name: action.payload.data.createdUser.firstName,
                email: action.payload.data.createdUser.email,
            }))
            return {
                ...state,
                token: action.payload.data.encodedToken,
                name: action.payload.data.createdUser.firstName,
                email: action.payload.data.createdUser.email,
            }

        case LOGOUT:
            return {
                token: "",
                name: "",
                email: "",
            }

        default:
            return state;
    }
}
