import { push } from 'connected-react-router';
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Header from '../components/Header/Header'
import { getUserName,getCreatedAt, getUserId } from '../reducks/users/selector';

const Profile = () => {
    const selector = useSelector((state) => state);
    const uId = getUserId(selector)
    const uName = getUserName(selector);
    const createdAt = getCreatedAt(selector);

    const dateToString = (data) => {
        return data.getFullYear() + '/'
            + ('00' + (data.getMonth() + 1)).slice(-2) + '/'
            + ('00' + data.getDate()).slice(-2) + ' '
        
    };
    const timestamp = dateToString(createdAt.toDate())
    const dispatch = useDispatch();
    return (
        <>
            <Header />
            <div>
                <div className="text-center title-sample">{uName}</div>
                <div>目標：インプットフィールド</div>
                <div>地点登録</div>
                <span>開始日</span><span>{timestamp}</span>
                <div onClick={()=>dispatch(push('/user/new/'+uId))}>編集画面へ</div>
            </div>
        </>
    )
}
export default Profile