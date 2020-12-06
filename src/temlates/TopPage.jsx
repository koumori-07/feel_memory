import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { getUserId, getUserName } from '../reducks/users/selector';
import { signOut } from '../reducks/users/operation';
import { push } from 'connected-react-router';
import {  getArticleTitle } from '../reducks/article/selector';


const TopPage = () => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state)

    const uid = getUserId(selector)
    const username = getUserName(selector);
    const title = getArticleTitle(selector);
console.log(title)
    return (
        <>
            <div>トップページ</div>
            <button onClick={() => dispatch(signOut())}>Sign Out</button>
            <button onClick={() => dispatch(push('/new'))}>new</button>

        </>
    )
}
export default TopPage