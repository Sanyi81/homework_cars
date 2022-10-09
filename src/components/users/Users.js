import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {userService} from "../../servises";
import {LOAD_USERS} from "../../redux/actions/action";
import {User} from "../user/User";

const Users = () => {
    const {users} = useSelector(state => state.usersReducers);
    const dispatch = useDispatch();

    useEffect(() => {
        userService.getAll().then(({data}) => dispatch({type: LOAD_USERS, payload: data}))
    }, [])
    return (
        <div>
            {users.map(user => <User key={user.id} user={user}/>)}
        </div>
    )
}

export {Users};