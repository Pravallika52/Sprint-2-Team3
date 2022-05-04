import { useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
//import UserListTable from "./Table";
// import TableM from "./TableM";



function FormComponent() {

    const navigate = useNavigate();

    const initialFormState = {
        id: Date.now(),
        firstname: '',
        email: '',
        password: '',
        gender: '',
        hobbies: []
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
    const handleCheckbox = (event) => {
        const updatedHobbies = event.target.checked ?
            [...formData.hobbies, event.target.value] : 
            formData.hobbies.filter(hobby => hobby !== event.target.value)

        const updatedFormData = { ...formData, hobbies: updatedHobbies };
        setFormData(updatedFormData);

    }

    const removeThisRow = (id) => {
        const updatedUserList = userList.filter(user => user.id !== id);
        setUserList(updatedUserList);
    }

    return(<><form onSubmit={handleSubmit}>
        <label> First Name :
            <input name="firstname" type="text" onChange={handleChange} value={formData.firstname} />
        </label> <br />
        <label> Email :
            <input name="email" type="text" onChange={handleChange} value={formData.email} />
        </label><br />
        <label> Password :
            <input name="password" type="password" onChange={handleChange} value={formData.password} />
        </label><br />
        <label> Gender :
            <input type="radio" name="gender" onChange={handleChange} value={"Male"} /> Male
            <input type="radio" name="gender" onChange={handleChange} value={"Female"} /> Female
        </label><br />
        <label> Hobbies :
            <input name="soccer" value={"soccer"}  type="checkbox" onChange={handleCheckbox} /> Soccer 
            <input name="reading" value={"reading"} type="checkbox" onChange={handleCheckbox} /> Reading 
            <input name="writing" value={"writing"} type="checkbox" onChange={handleCheckbox} /> Writing 
        </label><br />
        <button type="submit"> Submit </button>
    </form>
    {/* <UserListTable userList={userList} removeThisRow={removeThisRow} /> */}
    {/* <TableM userList={userList} removeThisRow={removeThisRow} setCurrentUser={setCurrentUser} /> */}
    <Outlet context={ [ currentUser, setCurrentUser ] } />
    </>)
}

export default FormComponent;