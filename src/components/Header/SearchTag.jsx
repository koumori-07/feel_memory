import { useTheme } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import { ButtonModel, TextInput } from '../UIkit';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { getFeeles } from '../../reducks/feeles/selector';
import { deleteFeel, fetchFeel, newFeel } from '../../reducks/feeles/operation';
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import Paper from '@material-ui/core/Paper';
import TagFacesIcon from '@material-ui/icons/TagFaces';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        padding: theme.spacing(0.5),
        margin: 0,
    },
    chip: {
        margin: theme.spacing(0.5),
        background: '#8bc34a',
        color: "#c7f7d4",
        fontSize: "20px"
    },
}));

const SearchTags = (props) => {
    const dispatch = useDispatch();
    const selector = useSelector((state) => state);
    const saveFeeles = getFeeles(selector);
    const [createFeeles, setCreateFeeles] = useState("");
    const theme = useTheme();
    const classes = useStyles();

    const inputCreateFeeles = useCallback((event) => {
        setCreateFeeles(event.target.value)
    }, [setCreateFeeles])


    useEffect(() => {
        dispatch(fetchFeel())
      }, []);

    return (
        <>
            <IconButton onClick={props.handleDrawerCloseleft}>
                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
            </IconButton>
            {/* 中身↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓↓ */}
            <div className="space-left">
                <TextInput
                    fullWidth={false}// 幅の指定
                    label={"feel"}
                    margin="dense"
                    multiline={false}// 複数行の入力
                    required={true}// 必須か
                    rows={1}// 行数
                    value={createFeeles}
                    type={"text"}
                    onChange={inputCreateFeeles}
                />
                <ButtonModel onClick={() =>
                    dispatch(newFeel(createFeeles))
                }
                    label={"追加"}
                />
            </div>
            {saveFeeles.length > 0 && (
                saveFeeles.map(feel => {
                    let icon;
                    if (feel.feel === 'React') {
                        icon = <TagFacesIcon />;
                    } return (
                        <div key={feel.id} className="space-left">
                            <Chip
                                icon={icon}
                                label={feel.feel}
                                onDelete={() => dispatch(deleteFeel(feel.id))}
                                className={classes.chip}
                            />
                        </div>
                    )
                }
                ))}
        </>
    )
}
export default SearchTags