// import 'date-fns';
import React from 'react';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import { ButtonModel } from '../UIkit';
import { useDispatch } from 'react-redux';
import { dateSelectArticle } from '../../reducks/article/operation';

const SeachSpace = (props) => {
    const [selectedDate, setSelectedDate] = React.useState(new Date());
    const dispatch = useDispatch();

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
<>
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <Grid container justify="space-around">
                <KeyboardDatePicker
                    margin="normal"
                    id="date-picker-dialog"
                    label="指定日以降の記事を検索"
                    format="yyyy/MM/dd"
                    value={selectedDate}
                    onChange={handleDateChange}
                    KeyboardButtonProps={{
                        'aria-label': 'change date',
                    }} />
            </Grid>
            </MuiPickersUtilsProvider>
            <ButtonModel onClick={() =>dispatch(dateSelectArticle(props.uId,selectedDate))}
                    label={"検索"}
                />
</>

    )
}
export default SeachSpace