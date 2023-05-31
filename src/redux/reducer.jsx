import { ADD_FAV, REMOVE_FAV} from "./actions";

const initialState = { 

    myFav: [],
};

const rootReducer = (state = initialState, action ) => {
       switch (action.type){
         
         case ADD_FAV:
            return {...state, myFav: [...state.myFav, action.payload] }

         case REMOVE_FAV:
            return {
                ...state,
                 myFav: state.myFav.filter((char) => char.id !== action.payload),
            };

        default:
            return {...state};
       }    
};

export default rootReducer;
