import axios from "axios";

export const readData=async (url,setProduct)=>{
    const respons=await axios.get(url)
    setProduct(respons.data)
}