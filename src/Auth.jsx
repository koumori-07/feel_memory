import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { listenAuthState } from './reducks/users/operation';
import { getSignedIn } from './reducks/users/selector'

const Auth = ({children}) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);

    const isSignedIn = getSignedIn(selector)

    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
        }
    }, []);

    if (isSignedIn) {
        return <></>
    } else {
        return children
    }
};
export default Auth;
