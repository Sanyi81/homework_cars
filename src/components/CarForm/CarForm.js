import {useForm} from "react-hook-form";
import {joiResolver} from "@hookform/resolvers/joi";
import {useEffect} from "react";

import {carValidator} from "../../validators";
import {carService} from "../../servises";


const CarForm = ({setCars, updateCar, setUpdateCar}) => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({
            resolver: joiResolver(carValidator),
                mode: 'all'});

    useEffect(() => {
        if (updateCar) {
            setValue('model', updateCar.model, {shouldValidate:true})
            setValue('price', updateCar.price, {shouldValidate:true})
            setValue('year', updateCar.year, {shouldValidate:true})
        }
    }, [updateCar, setValue])

    const submit = async (car) => {
        if (updateCar) {
            const {data} = await  carService.updateById(updateCar.id, car);
            setCars((cars) => {
                const find = cars.find(value => value.id === updateCar.id);
                Object.assign(find, data)
                setUpdateCar(null)
                return[...cars]
            })
        } else {
        const {data} = await carService.create(car);
        setCars(cars => [...cars, data])
        reset()}
    }

    return (
        < form onSubmit = {handleSubmit(submit)}>
            < input type = "text" placeholder = {'model'} {...register('model')}/>
            {errors.model && <span>{errors.model.message}</span>}
            < input type = "text" placeholder = {'price'} {...register('price', {valueAsNumber:true})}/>
            {errors.price && <span>{errors.price.message}</span>}
            < input type = "text" placeholder = {'year'} {...register('year', {valueAsNumber:true})}/>
            {errors.year && <span>{errors.year.message}</span>}
            <button disabled={!isValid}>{updateCar ? 'Update' : 'Save'}</button>
        </form>
    );
};

export {CarForm};