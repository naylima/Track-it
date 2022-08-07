import axios from "axios";

const BASE_URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit";

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("trackit"));
    const config = {
      headers: {
        Authorization: `Bearer ${auth.token}`
      }
    };
    return config;
}

function getUser(body) {
    const request = axios.post(`${BASE_URL}/auth/login`, body);
    return request;
}

function signUp(body) {
    const request = axios.post(`${BASE_URL}/auth/sign-up`, body);
    return request;
}

function getHabits() {
    const config = createHeaders();
    const request = axios.get(`${BASE_URL}/habits`, config);
    return request;
}

function creatHabit (body) {
    const config = createHeaders();
    const request = axios.post(`${BASE_URL}/habits`, body, config)
    return request;
}

function deleteHabit(id) {
    const config = createHeaders();
    const request = axios.delete(`${BASE_URL}/habits/${id}`, config)
    return request;
}

function getHabitsToday() {
    const config = createHeaders();
    const request = axios.get(`${BASE_URL}/habits/today`, config);
    return request;
}

function checkHabit(id) {
    const config = createHeaders();
    const request = axios.post(`${BASE_URL}/habits/${id}/check`, {}, config);
    return request;
}

function uncheckHabit(id) {
    const config = createHeaders();
    const request = axios.post(`${BASE_URL}/habits/${id}/uncheck`, {}, config);
    return request;
}

function getHistory() {
    const config = createHeaders();
    const request = axios.get(`${BASE_URL}/habits/history/daily`, config);
    return request;
}

export {
    getUser, 
    signUp, 
    getHabits, 
    creatHabit, 
    deleteHabit, 
    getHabitsToday, 
    checkHabit, 
    uncheckHabit,
    getHistory,
};