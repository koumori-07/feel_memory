import { FormControl } from '@material-ui/core'
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';


const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

const FeelTest = (props) => {
   
    const feeles = props.feeles
    const checkedItems = props.checkedItems
    const setCheckedItems = props.setCheckedItems
 
    const handleChange = (event) => {
        const check = event.target.checked
        const id = event.target.id;
        const value = event.target.value;
        setCheckedItems([
            ...checkedItems,
            { id, value, check }
        ]
        )
        if (checkedItems.includes(event.target.value)) {
            // trueの要素のみを抽出し配列を作成
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
                            <FormControlLabel
                            control={<GreenCheckbox
                                id={feel.id}
                                value={feel.feel}
                                type="checkbox"
                                onChange={handleChange}
                                checked={checkedItems[feel]} />}
                                label={feel.feel}
                            />
                        
                    </FormControl>
                    
                )
            }))}
        </>
    )

}
export default FeelTest