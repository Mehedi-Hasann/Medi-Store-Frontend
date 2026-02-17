import { env } from "@/env";

const API_URL = env.API_URL;
interface medicineParams {
  search ?: string,
  price ?: number,
  category ?: string,
  sortBy ?: string,
  sortOrder ?: string
}

export const medicineService = {
  getAllMedicine : async function (params : medicineParams) {
    try {

      const url = new URL(`${API_URL}/api/medicines`);

      if(params){
        Object.entries(params).map( ([key,value]) => {
          if(value !== undefined && value !== null &&  value !== ""){
            url.searchParams.append(key,value);
          }
        } )
      }

      const res = await fetch(url.toString());
      const data = await res.json();

      console.log(data);

      return {data: data, error : null};
    } catch (error) {
      console.log(error);
      return {data : null, error : {message : "Something Went Wrong !"}};
    }
  },
  getMedicineById : async function(slug : string) {
    try {
      const res = await fetch(`${API_URL}/api/medicines/${slug}`);
      const data = await res.json();

      return {data : data, error : null};
    } catch (error) {
      console.log(error);
      return {data : null, error : {message : "Something went wrong to fetch single medicine"}}
    }
  }
}