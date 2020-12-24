import { push } from 'connected-react-router'
import React from 'react'
import { useDispatch } from 'react-redux'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signOut } from '../../reducks/users/operation';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useSelector } from 'react-redux'
import { getUserId } from '../../reducks/users/selector';

const Link = () => {
    const dispatch = useDispatch()
    const selector = useSelector((state) => state);
    const user = getUserId(selector)
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
            <div className="linkHover space-left" onClick={() => dispatch(push('/user/'+ user))}>
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
        </div>
    )
}
export default Link