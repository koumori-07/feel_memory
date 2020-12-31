import React, { useCallback, useState } from 'react';
import { TextField } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { getSpot } from '../reducks/users/selector';


const Weather = () => {
    const [requestCity, setRequestCity] = useState("");
    const [city, setCity] = useState("");
    const selector = useSelector((state) => state);
    const spot = getSpot(selector);

    const inputWeather = useCallback((event) => {
        setRequestCity(event.target.value)
    }, [setRequestCity])

    // const handleGetWeather = () => {
    //     console.log(spot)
    //     axios
    //         .get(API_ENDPOINT, {
    //             params: {
    //                 q: spot,
    //                 APPID: apiKey
    //             }
    //         })
    //         .then(res => {
    //             setResopnse(res.data.weather)
    //             console.log(res.data)
    //         })
    //         .catch(function (error) {
    //             console.log(error);
    //         })
    // }
    return (
        <div>
            <TextField
                fullWidth={true}
                label={"場所"}
                multiline={false}
                required={true}
                rows={1}
                value={requestCity}
                type={"text"}
                onChange={inputWeather}
            />
            <button
            >ボタン</button>
            {/* {response.length > 0 && (
                response.map((res, index) => {
                    return (
                        <div key={index}>
                            <img src={'http://openweathermap.org/img/w/'+ res.icon + '.png'}/>
                        </div>
                    )
                })
            )} */}
        </div>
    )
}
export default Weather