import {SET_SETTINGS} from "./actionTypes";

const initState = {
    options: true,
    translate: true,
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwNjM5M2Q1YTU1NThiMDAxNWZhYjhmMyIsImlhdCI6MTYxNzMyMzkwMywiZXhwIjoxNjE3MzM4MzAzfQ.w8Oc6ePzskLqYAepQ9GngzoqDotrCrX6XI-0je1aOmA',
    userId: '606393d5a5558b0015fab8f3',
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
