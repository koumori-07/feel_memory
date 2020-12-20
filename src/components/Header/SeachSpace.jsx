import React, { useCallback, useState } from 'react'
import { ButtonModel, TextInput } from '../UIkit'

const SeachSpace = () => {
    const [feeles, setFeeles] = useState("")
    
    const inputFeeles = useCallback((event) => {
        setFeeles(event.target.value)
    }, [setFeeles])
    const filterList = (event) => {
        
    }
    return (
        <div>
              <TextInput
                    fullWidth={false}// 幅の指定
                    label={"検索"}
                    margin="dense"
                    multiline={false}// 複数行の入力
                    required={true}// 必須か
                    rows={1}// 行数
                    value={feeles}
                    type={"text"}
                    onChange={inputFeeles}
                />
                <ButtonModel 
                label={"検索"}
                onClick={filterList}
                />
            </div>
    )
}
export default SeachSpace