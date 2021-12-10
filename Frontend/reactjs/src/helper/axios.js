import axios from 'axios';
const apiPost =(requestObject)=>{
    return axios({
        method: 'post',
        url: requestObject.url,
        data: requestObject.data,
        headers: requestObject.headers
    })
}

const apiGet=(requestObject)=>{
    return axios({
        method: 'get',
        url: requestObject.url,
        headers: requestObject.headers
    })
}

const apiDelete=(requestObject)=>{
    return axios({
        method: 'delete',
        url: requestObject.url,
        data: requestObject.data,
        headers: requestObject.headers
    })
}

const apiUpdate=(requestObject)=>{
    return axios({
        method: 'put',
        url: requestObject.url,
        data: requestObject.data,
        headers: requestObject.headers
    })
}
export default {apiPost, apiGet, apiDelete, apiUpdate};