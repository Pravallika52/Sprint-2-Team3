import { useState } from "react";

function FormComponent() {
    const [formData, setFormData] = useState({
        firstname: '',
        lastname:'',
        gender: '',
        email: '',
        mobile:0,
        password: '',
    });
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
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

    return(<form onSubmit={handleSubmit}>
        <label> First Name :
            <input name="firstname" type="text" onChange={handleChange} value={formData.firstname} />
        </label> <br />
        <label> Last Name :
            <input name="lastname" type="text" onChange={handleChange} value={formData.lastname} />
        </label> <br />
        <label> Gender :
            <input type="radio" name="gender" onChange={handleChange} value={"Male"} /> Male
            <input type="radio" name="gender" onChange={handleChange} value={"Female"} /> Female
        </label><br />
        <label> Email :
            <input name="email" type="text" onChange={handleChange} value={formData.email} />
        </label><br />
        <label> Mobile :
            <input name="mobile" type="number" onChange={handleChange} value={formData.mobile} />
        </label> <br />
        <label> Password :
            <input name="password" type="password" onChange={handleChange} value={formData.password} />
        </label><br />
        
        <button type="submit"> Submit </button>
    </form>)
}

export default FormComponent;