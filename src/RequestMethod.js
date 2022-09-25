import axios from "axios"


const BASE_URL = "http://localhost:5001"

const token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMmFmMjlkOTllZDc2MjNlZDc2NWEwZiIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDA5ODAxOCwiZXhwIjoxNjY0MzU3MjE4fQ.CcIl7TC540kYfnU9d9Rl9oTlDw-O5lyKvgE1dT3KaPE"

export const publicRequest=axios.create({
    baseURL:BASE_URL
})
export const userRequest=axios.create({
    baseURL:BASE_URL,
    header:{toke:`Bearer ${token}`}
})
