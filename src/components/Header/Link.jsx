import { push } from 'connected-react-router'
import React from 'react'
import { useDispatch } from 'react-redux'
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import PostAddIcon from '@material-ui/icons/PostAdd';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { signOut } from '../../reducks/users/operation';
const Link = () => {
    const dispatch = useDispatch()

    return (
        <div className="linkButton">
            <div className="space-s"/>
            <div className="linkHover space-left"onClick={() => dispatch(push('/'))}>
                <AccountBalanceIcon />
                <span className="space-left-l">
                    トップページ
                </span>
            </div>
            <div className="space-s"/>
            <div className="linkHover space-left"onClick={() => dispatch(push('/new'))}>
                <PostAddIcon />
                <span className="space-left-l">
                    新規投稿
                </span>
            </div>
            <div className="space-s"/>
            <div className="linkHover space-left"onClick={() => dispatch(signOut())}>
                <ExitToAppIcon />
                <span className="space-left-l">
                    ログアウト
                </span>
            </div>
        </div>
    )
}
export default Link