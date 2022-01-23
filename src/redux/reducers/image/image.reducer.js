import {GET_IMAGE} from './image.type';

const initialState =  {
    image:[],
};

const ImageReducer = (state = initialState, action) => {
    switch(action){
        case GET_IMAGE:
            return {
                ...state,
                image: action.patload
            }
        
        default:
            return{
                ...state
            }
    }
};

export default ImageReducer;

