import {useDogReducer} from "../../reducers";

const Dog = () => {
    const [state, dispatch] = useDogReducer();
    return (
        <div>
            dog
        </div>
    )
}

export {Dog};