import axios from "axios";

const fetchBrands=async({commit})=>{
    try{
        const response= await axios.get('http://makeup-api.herokuapp.com/api/v1/products.json');
    
    commit("setBrands",response.data)
    }
    catch(err)
    {
        console.log(err)
    }
    
}

export default{
fetchBrands
}