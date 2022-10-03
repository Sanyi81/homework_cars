import {useReducer} from "react";

import {DOG} from "./animals.action";

const reducer = (state, action) => {
    switch (action.type) {
        case DOG:
            return {dog:state.dog}
    }
};

const useDogReducer = () => useReducer(reducer, {dog:null})

export {useDogReducer}