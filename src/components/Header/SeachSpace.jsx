import React from 'react'
import { ButtonModel, TextInput } from '../UIkit'

const SeachSpace = () => {
    return (
        <div　className="space-left">
              <TextInput
                    fullWidth={false}// 幅の指定
                    label={"検索"}
                    margin="dense"
                    multiline={false}// 複数行の入力
                    required={true}// 必須か
                    rows={1}// 行数
                    value={"a"}
                    type={"text"}
                    onChange={console.log("まだだよ")}
                />
                <ButtonModel 
                label={"検索"}
                onClick={()=>console.log("まだだよ")}
                />
            </div>
    )
}
export default SeachSpace