import { push } from 'connected-react-router';
import React, { useCallback, useState } from 'react'
import { useDispatch } from 'react-redux';
import { TextInput, ButtonModel } from '../components/UIkit'
import { signIn } from '../reducks/users/operation';

const SignIn = () => {
    const dispatch = useDispatch();
    const [email, setEmail] = useState(""),
        [password, setPassword] = useState("");

    const inputEmail = useCallback((event) => {
        setEmail(event.target.value)
    }, [setEmail]);

    const inputPassword = useCallback((event) => {
        setPassword(event.target.value)
    }, [setPassword]);

    return (
        <div className="text-filed-container">
            <div className="text-center title-sample">Sign In</div>
            <div className="space-l" />
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

            <div className="text-center">
                <ButtonModel onClick={() => dispatch(signIn(email, password))}
                    label={"Sign in"} />
            </div>
            <div className="space-l"/>
            <div className="text-center" onClick={()=>dispatch(push('/signup'))}>サインアップ画面へ</div>

        </div>
    )
}
export default SignIn