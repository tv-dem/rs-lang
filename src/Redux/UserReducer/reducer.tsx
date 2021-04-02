import {SET_SETTINGS} from "./actionTypes";

const initState = {
    options: true,
    translate: true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjczMmFkYWEwODhjMDAxNTYxMjU5NyIsImlhdCI6MTYxNzM3NTk2MywiZXhwIjoxNjE3MzkwMzYzfQ._jl31SAmr8QELLlcTINrMBTVlSB9WmFLjv3_kb2UeYQ',
    userId: '606732adaa088c0015612597',
    name: 'testuser',
}

const UserReducer = (state = initState, action:any) => {
    switch(action.type){
        case SET_SETTINGS:
            return {...state, translate: action.translate, options: action.options}
        default:
            return state
    }
}


export default UserReducer;
