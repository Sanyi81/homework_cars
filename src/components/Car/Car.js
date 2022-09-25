import css from "./car.module.css"
import {carService} from "../../servises";

const Car = ({car, setCars, setUpdateCar}) => {
    const {id, model, price, year} = car;

    const deleteCar = async () => {
        await carService.deleteById(id);
        setCars (cars => {
            const index = cars.findIndex(value => value.id === id);
            cars.splice(index, 1)
            return [...cars]
        })
    };

    const updateCar = async () => {
        await carService.updateById(id, car);
        setCars (cars => {

        })
    }

    return (
        <div className={css.Car}>
            <div>Id: {id}</div>
            <div>Model: {model}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>

            <div className={css.tools}>
                <button onClick={() => setUpdateCar(car)}>Update</button>
                <button onClick={() => deleteCar()}>Delete</button>
            </div>
        </div>
    )
};

export {Car};