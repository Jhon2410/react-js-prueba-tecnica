import axios from "axios"
const baseUrl =  "https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean";

// get data from api

const getData = async()=>{
    const response = await axios.get(baseUrl)
    return response.data
}

export   {
    getData
}

