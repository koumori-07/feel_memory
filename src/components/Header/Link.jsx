import { push } from 'connected-react-router'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { deleteAcount, signOut } from '../../reducks/users/operation';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useSelector } from 'react-redux'
import { getSpot, getUserId } from '../../reducks/users/selector';
import axios from "axios";
import { Divider } from '@material-ui/core';

const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';
const Link = () => {
    const apiKey = 'ed39a51693d97293eac6c4823f836d17';

    const dispatch = useDispatch()
    const selector = useSelector((state) => state);
    const user = getUserId(selector)
    const uId = getUserId(selector)
    const spot = getSpot(selector)
    const [response, setResopnse] = useState([]);


    useEffect(() => {
        if (spot) {
            axios
                .get(API_ENDPOINT, {
                    params: {
                        q: spot,
                        APPID: apiKey
                    }
                })
                .then(res => {
                    setResopnse(res.data.weather)

                })
                .catch(function (error) {
                    console.log(error);
                })
        }
    }, [setResopnse])
    return (
        <div className="linkButton">
            <div className="space-s" />
            <div className="linkHover space-left" onClick={() => dispatch(push('/'))}>
                <AccountBalanceIcon />
                <span className="space-left-l">
                    トップページ
                </span>
            </div>
            <div className="space-s" />
            <div className="linkHover space-left" onClick={() => dispatch(push('/new'))}>
                <PostAddIcon />
                <span className="space-left-l">
                    新規投稿
                </span>
            </div>
            <div className="space-s" />
            <div className="linkHover space-left" onClick={() => dispatch(push('/user/' + user))}>
                <AssignmentIndIcon />
                <span className="space-left-l">
                    プロフィール
                </span>
            </div>
            <div className="space-s" />
            <div className="linkHover space-left" onClick={() => dispatch(signOut())}>
                <ExitToAppIcon />
                <span className="space-left-l">
                    ログアウト
                </span>
            </div>
            <div className="space-m" />

            <Divider />
            <div className="space-m" />
            <div className="weather-space space-left">
                {response.length > 0 && (
                    response.map((res, index) => {
                        return (
                            <div key={index}>
                                <div className="weather-spot">{spot} : 天気</div>
                                <div  className="weather-icon text-center">
                                    <img src={'http://openweathermap.org/img/w/' + res.icon + '.png'} className="weather-size" />
                                </div>
                            </div>
                        )
                    })
                )}
            </div>
            <div className="footer" onClick={()=>dispatch(deleteAcount(uId))}>
                アカウント削除
            </div>
        </div>
    )
}
export default Link