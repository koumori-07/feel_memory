import { FormControl } from '@material-ui/core'

const FeelTest = (props) => {
   
    const feeles = props.feeles
    const checkedItems = props.checkedItems
    const setCheckedItems = props.setCheckedItems

    // checkされたstateを管理(true,false)
    const handleChange = event => {
        const check = event.target.checked
        const id = event.target.id;
        const value = event.target.value;
        setCheckedItems([
            ...checkedItems,
            { id,value,check }
        ]
        )
        if (checkedItems.includes(event.target.value)) {
            setCheckedItems(checkedItems.filter(item => item !== event.target.value))
        } else {
            setCheckedItems([...checkedItems, event.target.value])
        }
    }
    return (
        <>
            {feeles.map((feel => {
                return (
                    <FormControl key={feel.id}>
                        <label htmlFor={feel.id}>
                            <input
                                id={feel.id}
                                value={feel.feel}
                                type="checkbox"
                                onChange={handleChange}
                                checked={checkedItems[feel]}
                            />
                            {feel.feel}
                        </label>
                    </FormControl>
                    
                )
            }))}
        </>
    )

}
export default FeelTest