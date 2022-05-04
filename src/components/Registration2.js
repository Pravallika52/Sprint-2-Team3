import { useState } from "react";



function FormComponent() {


    const initialFormState = {
        userId: Date.now(),
        userName: '',
        userType:'',
        emailId: '',
        mobileNo:0,
        userPassword: '',
        userConfirmPassword:''
    };

    const [formData, setFormData] = useState(initialFormState);

    const [currentUser, setCurrentUser] = useState({});
    const [userList, setUserList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setUserList([...userList, formData]);
        setFormData({ ...initialFormState, id: Date.now()})
        // navigate to the home page
        // navigate("/home")
    }
    const handleChange = (event) => {
        const updatedFormData = { ...formData, [event.target.name]: event.target.value };
        setFormData(updatedFormData);
    }
    // const handleCheckbox = (event) => {
    //     const updatedHobbies = event.target.checked ?
    //         [...formData.hobbies, event.target.value] : 
    //         formData.hobbies.filter(hobby => hobby !== event.target.value)

    //     const updatedFormData = { ...formData, hobbies: updatedHobbies };
    //     setFormData(updatedFormData);

    // }

    // const removeThisRow = (id) => {
    //     const updatedUserList = userList.filter(user => user.id !== id);
    //     setUserList(updatedUserList);
    // }

    return(<>
    <header >Registration</header>
    <form  onSubmit={handleSubmit}>
        <label> User Id :
            <input name="userId" type="text" onChange={handleChange} value={formData.userId} />
        </label> <br />
        <label> User Name :
            <input name="userName" type="text" onChange={handleChange} value={formData.userName} />
        </label> <br />
        <label> Gender :
            <input type="radio" name="userType" onChange={handleChange} value={"Male"} /> Male
            <input type="radio" name="userType" onChange={handleChange} value={"Female"} /> Female
        </label><br />
        <label> Email Id :
            <input name="emailId" type="text" onChange={handleChange} value={formData.emailId} />
        </label><br />
        <label> Mobile No :
            <input name="mobileNo" type="number" onChange={handleChange} value={formData.mobileNo} />
        </label> <br />
        <label> Password :
            <input name="userPassword" type="userPassword" onChange={handleChange} value={formData.userPassword} />
        </label><br />
        <label> Confirm Password :
            <input name="userConfirmPassword" type="userConfirmPassword" onChange={handleChange} value={formData.userConfirmPassword} />
        </label><br />
        
        <button type="submit"> Submit </button>
    </form>
    {/* <UserListTable userList={userList} removeThisRow={removeThisRow} /> */}
    </>)
}

export default FormComponent;