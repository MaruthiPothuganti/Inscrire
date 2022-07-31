import { v4 as uuid } from "uuid";
import { ACTION_TYPES } from "../Utils/constants";



export const tagReducer = (state, action) => {
    const { ADDTAG, DELETETAG, CLEARTAG } = ACTION_TYPES;
    switch (action.type) {
        case ADDTAG:
            console.log(state)
            return { ...state, tags: [...state.tags, { _id: uuid(),tag:action.payload}] }

        case DELETETAG:

            return { ...state, tags: state.tags.filter((item)=> item._id!== action.payload) }

        default:
            return{...state}
    }
}
