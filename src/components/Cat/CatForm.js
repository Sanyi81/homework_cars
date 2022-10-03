import {joiResolver} from "@hookform/resolvers/joi";
import {useForm} from "react-hook-form";

import {animalValidators} from "../validators";
import {useCatReducer} from "../../reducers";

const CatForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
        resolver: joiResolver(animalValidators),
        mode: 'all'});

    const submit = async (data) => {
        const {cat} = await useCatReducer.create(cat)
    };

    return (
        < form onSubmit = {handleSubmit(submit)}>
            < input type = "text" placeholder = {'cat'} {...register('cat')}/>
            {errors.cat && <span>{errors.cat.message}</span>}
            <button>Save</button>
        </form>
    );
};

export {CatForm};