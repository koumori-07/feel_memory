import React from 'react';
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles({
    root: {
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
      border: 0,
      borderRadius: 3,
      boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
      color: 'white',
      height: 48,
      padding: '0 30px',
    },
    full:{
        marginBottom: 16,
    },
    half:{
        marginLeft: 8,
        marginRight: 8,
        marginBottom: 16,
        minWidth: 130,
        width: 'calc(50% - 16px)'
    }
  });
  
const TextInput = (props) => {
    const classes = useStyles();
    const textStyle = props.fullWidth ? classes.full : classes.half;

    return (
        <>
            <TextField
                className={textStyle}
                fullWidth={props.fullWidth}// 幅の指定
                label={props.label}
                margin="dense"
                multiline={props.multiline}// 複数行の入力
                required={props.required}// 必須か
                rows={props.rows}// 行数
                value={props.value}
                type={props.type}
                onChange={props.onChange}
            />
        </>
    );
};
export default TextInput