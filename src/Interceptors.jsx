// import axios from axios;
// import { getData } from "./services";

// export const axiosPrivate = axios.create({
//     baseURL:"http://localhost:8081/newusers"
// });

// axiosPrivate.interceptors.request.use(
//     config=>{
//         const data = getData('authstate')
//         const Token = data.token;

//         if(token){
//             config.headers['Authorization'] = 'Bearer${Token}';
//         }
//         console.log(config);
//         return config;
//     },
//     error=>{
//         Promise.reject(error)
//     }
// )
