import { push } from 'connected-react-router';
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { TextInput, ButtonModel } from '../components/UIkit'
import { signUp } from '../reducks/users/operation';

const SignUp = () => {
    const dispatch = useDispatch();
    const [username, setUsername] = useState(""),
        [email, setEmail] = useState(""),
        [password, setPassword] = useState(""),
        [confirmPassword, setConfirmPassword] = useState("");

    const inputUsername = useCallback((event) => {
        setUsername(event.target.value)
    }, [setUsername]);

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail]);

    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword]);

    const inputConfirmPassword = useCallback((event) => {
        setConfirmPassword(event.target.value)
    }, [setConfirmPassword]);

    return (
        <div className="text-filed-container">
            <div className="text-center title-sample">Sign Up</div>
            <div className="space-l" />
            <TextInput
                fullWidth={true}// 幅の指定
                label={"ユーザー名"}
                margin="dense"
                multiline={false}// 複数行の入力
                required={true}// 必須か
                rows={1}// 行数
                value={username}
                type={"text"}
                onChange={inputUsername}
            />
            <TextInput
                fullWidth={true}// 幅の指定
                label={"Emailアドレス"}
                margin="dense"
                multiline={false}// 複数行の入力
                required={true}// 必須か
                rows={1}// 行数
                value={email}
                type={"email"}
                onChange={inputEmail}
            />
            <TextInput
                fullWidth={true}// 幅の指定
                label={"パスワード（半角英数字で6文字以上)"}
                margin="dense"
                multiline={false}// 複数行の入力
                required={true}// 必須か
                rows={1}// 行数
                value={password}
                type={"password"}
                onChange={inputPassword}
            />
            <TextInput
                fullWidth={true}// 幅の指定
                label={"パスワードの再確認"}
                margin="dense"
                multiline={false}// 複数行の入力
                required={true}// 必須か
                rows={1}// 行数
                value={confirmPassword}
                type={"password"}
                onChange={inputConfirmPassword}
            />
            <div className="text-center">
                <ButtonModel onClick={() => dispatch(signUp(username, email, password, confirmPassword))}
                    label={"Sign Up"} />
            </div>
            <div className="space-l"/>
            <div className="text-center" onClick={()=>dispatch(push('/signin'))}>サインイン画面へ</div>
            
        </div>
    )
}
export default SignUp