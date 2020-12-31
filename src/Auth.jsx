import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchProfile, listenAuthState } from './reducks/users/operation';
import { getSignedIn, getUserId } from './reducks/users/selector'
import { fetchArticle } from './reducks/article/operation';
import { fetchFeel } from './reducks/feeles/operation';


const Auth = ({ children }) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const isSignedIn = getSignedIn(selector)
    const uId = getUserId(selector)
    useEffect(() => {
        if (!isSignedIn) {
            dispatch(listenAuthState())
            dispatch(fetchProfile())
            dispatch(fetchArticle())
            dispatch(fetchFeel())
        }
    }, [dispatch, isSignedIn]);


    if (!isSignedIn) {
        return <></>
    } else {
        return children
    }
};
export default Auth;