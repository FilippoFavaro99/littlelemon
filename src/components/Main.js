import Homepage from "../HomePage";
import BookingPage from "../BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import {useState} from "react"; 
import React, { useReducer, useEffect } from 'react';

const seededRandom = function (seed) {
    var m = 2**35 - 31;
    var a = 185852;
    var s = seed % m;
    return function () {
        return (s = s * a % m) / m;
    };
}

const fetchAPI = function(date) {
    let result = [];
    let random = seededRandom(date.getDate());

    for(let i = 17; i <= 23; i++) {
        if(random() < 0.5) {
            result.push(i + ':00');
        }
        if(random() < 0.5) {
            result.push(i + ':30');
        }
    }
    return result;
};
const submitAPI = function(formData) {
    return true;
};

const initializeTimes = () => [
    '17:00',
    '18:00',
    '19:00',
    '20:00',
    '21:00',
    '22:00'
];
/*
const initializeTimes = () => {
    //const today = new Date().toISOString().split('T')[0]; // Format date as YYYY-MM-DD
    return fetchAPI(); // fetchAPI returns the available times for today
};*/

const updateTimes = (state, action) => {
    switch (action.type) {
        case 'UPDATE_TIMES':
        //return fetchAPI(action.payload);
        return initializeTimes();
        default:
        return state;
    }
};

function Main(){
    const navigate = useNavigate();
    const [availableTimes, dispatch] = useReducer(updateTimes, [], initializeTimes);

    const submitForm = (formData) => {
        const isSuccess = submitAPI(formData);
        if (isSuccess) {
          navigate('/confirmed');
        }
    };
    return (
        <>
        <Routes> 
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/booking" element={<BookingPage 
                availableTimes={availableTimes} 
                dispatch={dispatch} 
                submitForm={submitForm} />}></Route>
            <Route path="/confirmed" element={<ConfirmedBooking />}></Route>
        </Routes>
        </>
    );
};

export default Main;