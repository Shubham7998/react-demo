import { useState } from "react";
import { PersonalInfoModel } from "../model/PersonalInfoModel";
import PersonalInfoUtility from "../utilities/PersonalInfoUtility";

const PersonalInfoComponent = () => {
  const personalInfoUtility = PersonalInfoUtility();

  return (
    <>
      <div style={{ margin: "auto", width: "60%", padding: "20px" }}>
        <input
          type="text"
          name="firstName"
          placeholder="Firts Name"
          autoComplete="off"
          value={personalInfoUtility.personalinfo.firstName}
          onChange={personalInfoUtility.onInputChange}
        ></input>{" "}
        <br></br>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          autoComplete="off"
          value={personalInfoUtility.personalinfo.lastName}
          onChange={personalInfoUtility.onInputChange}
        ></input>
        <br></br>
        <input
          type="text"
          name="emailAddress"
          placeholder="Email Address"
          autoComplete="off"
          value={personalInfoUtility.personalinfo.emailAddress}
          onChange={personalInfoUtility.onInputChange}
        ></input>
        <br></br>
        <input
          type="text"
          name="mobbileNo"
          placeholder="Mobile No"
          autoComplete="off"
          value={personalInfoUtility.personalinfo.mobileNumber}
          onChange={personalInfoUtility.onInputChange}
        ></input>
        <br></br>
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          autoComplete="off"
          value={personalInfoUtility.personalinfo.phoneNumber}
          onChange={personalInfoUtility.onInputChange}
        ></input>
        <br></br>
        <textarea
          rows={3}
          cols={20}
          name="description"
          onChange={personalInfoUtility.onTextAreaChange}
          value={personalInfoUtility.personalinfo.description}
        ></textarea>
        <br></br>
        <button onClick={personalInfoUtility.onSave}>Save</button>
      </div>
    </>
  );
};

export default PersonalInfoComponent;
