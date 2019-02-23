import axios from '@/axios.js'
 var api ={
     getSearchHotWork(){
         return axios.get("/api/meituan/header/searchHotWords.json");
     },
     getSearchList(){
        return axios.get("/api/meituan/header/search.json");
    },
    getMeunList(){
        return axios.get("/api/meituan/index/nav.json");
    },
    ResultsByKeywords(){
        return axios.get("/api/meituan/index/resultsByKeywords.json");
    },
    getProductsList(){
        return axios.get("/api/meituan/list/goodsList.json");
    },
    getHotCity(){
        return axios.get("/api/meituan/city/hot.json");
    },
    getRecentCity(){
        return axios.get("/api/meituan/city/recents.json");
    },
    getProvinceCity(){
        return axios.get("/api/meituan/city/province.json");
    },
    getCurPosition(){
        return axios.get("/api/meituan/city/getPosition.json");
    },
    getCityList(){
        return axios.get("/api/meituan/city/cityList.json");
    },
    login(params){
        console.log(params);
        return axios.get('/api/meituan/login',params);
    },
    register(params){
        return axios.get('/api/meituan/register', params);
    }
 }

 export default api;