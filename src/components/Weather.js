import React, { useCallback, useState } from 'react';
import axios from "axios";
import { TextField } from '@material-ui/core';

const API_ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather';

const Weather = () => {
    const apiKey = 'ed39a51693d97293eac6c4823f836d17';
    const [requestCity, setRequestCity] = useState("");
    const [city, setCity] = useState("");
    const [response, setResopnse] = useState([]);

    const inputWeather = useCallback((event) => {
        setRequestCity(event.target.value)
    }, [setRequestCity])

    const handleGetWeather = () => {
        axios
            .get(API_ENDPOINT, {
                params: {
                    q: requestCity,
                    APPID: apiKey
                }
            })
            .then(res => {
                setResopnse(res.data.weather)
                console.log(res.data.weather)
            })
            .catch(function (error) {
                console.log(error);
            })
    }
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
                onClick={handleGetWeather}
            >ボタン</button>
            {response.length > 0 && (
                response.map((res, index) => {
                    return (
                        <div key={index}>
                            <img src={'http://openweathermap.org/img/w/'+ res.icon + '.png'}/>
                        </div>
                    )
                })
            )}
        </div>
    )
}
export default Weather