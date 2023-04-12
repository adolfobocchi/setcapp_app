import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../store/modules/Auth/actions';

const Logout = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(logout());
    }, []);
    return(
        <></>
    )
}

export default Logout;