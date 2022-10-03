import {useReducer} from "react";

import {CAT} from "./animals.action";

const reducer = (state, action) => {
    switch (action.type) {
        case CAT:
            return {cat:state.cat}
    }
};

const useCatReducer = () => useReducer(reducer, {cat:null})

export {useCatReducer}