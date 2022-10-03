import {useCatReducer} from "../../reducers";
import {CatForm} from "./CatForm";

const Cat = () => {
    const [state, dispatch] = useCatReducer();
        return (
    <div>
        <h2>Cat: {CatForm}</h2>
        <button>Save</button>
    </div>
)
}

export {Cat};