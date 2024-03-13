import axios from "axios";
import { PersonalInfoModel } from "../model/PersonalInfoModel";
import { API_URL } from "../Config";

export const CreatePersonalInfo = async (personalInfo: PersonalInfoModel) => {
  //const response = await axios.post(API_URL +'PersonalInfo'  ,personalInfo);
  //return response;

  return await axios
    .post(API_URL + "PersonalInfo", personalInfo)
    .then(function (response) {
      // alert(JSON.stringify(response));
      return { error: "", data: response.data };
    })
    .catch(function (error) {
      // alert(JSON.stringify(error))
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        return { error: error.response.data, errorCode: error.response.status };
      } else if (error.request) {
        // The request was made but no response was received
        return { error: "No response received from server" };
      } else {
        // Something happened in setting up the request that triggered an Error
        return { error: error.message };
      }
      
    });
};
export const UpdatePersonalInfo = (personalInfo: PersonalInfoModel) => {};
export const DeletePersonalInfo = (personalInfo: PersonalInfoModel) => {};
export const getPersonalInfos = (personalInfo: PersonalInfoModel) => {};
export const getPersonalInfo = (personalInfo: PersonalInfoModel) => {};
