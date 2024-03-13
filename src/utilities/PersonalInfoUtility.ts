import { useState } from "react";
import { PersonalInfoModel } from "../model/PersonalInfoModel";
import { CreatePersonalInfo } from "../services/PersonalInfoServices";

export default function PersonalInfoUtility(){

    const initialValue : PersonalInfoModel = {
        firstName:"asdsad",
        lastName : "asdsadsa",
        emailAddress : "dasdsa",
        mobileNumber:"dasdsa",
        phoneNumber : "dsadsa",
        description : "dsad",
        userId : 2

    }
    const[personalinfo, setPersonalinfo ] =  useState<PersonalInfoModel>(initialValue);

    const onSave = async() => {
        //alert(JSON.stringify(personalinfo));

    const fetchData =  await    CreatePersonalInfo(personalinfo);
    console.log(fetchData.error);
    //console.log(fetchData.response.status);
    //console.log(fetchData.response.data.status);
    //alert(JSON.stringify(fetchData));
    //alert(JSON.stringify(fetchData.data));
    };

    const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setPersonalinfo((prev)=> ({...prev , [name]: newValue}));
    }

    const onTextAreaChange = (event: React.ChangeEvent<HTMLTextAreaElement>) =>{
        var name  = event.currentTarget.name;
        var newValue  =  event.currentTarget.value;
        setPersonalinfo((prev)=> ({...prev , [name]: newValue}));
    }

    return {personalinfo, setPersonalinfo , onSave,onInputChange,onTextAreaChange};
}
