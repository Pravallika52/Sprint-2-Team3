// import { useState } from "react";
// import { Outlet, useNavigate } from "react-router-dom";
// import TableM from "./TableM";


// function registerComponent() {


//     const initialregisterState = {
//         id: Date.now(),
//         firstname: '',
//         lastname:'',
//         gender: '',
//         email: '',
//         mobile: 0,
//         password: '',
        
//     };

//     const [registerData, setregisterData] = useState(initialregisterState);

//     const [currentUser, setCurrentUser] = useState({});
//     const [userList, setUserList] = useState([]);

//     const handleSubmit = (event) => {
//         event.preventDefault();
//         setUserList([...userList, registerData]);
//         setregisterData({ ...initialregisterState, id: Date.now()})
//         // navigate to the home page
//         // navigate("/home")
//     }
//     const handleChange = (event) => {
//         const updatedregisterData = { ...registerData, [event.target.name]: event.target.value };
//         setregisterData(updatedregisterData);
//     }
//     // const handleCheckbox = (event) => {
//     //     const updatedHobbies = event.target.checked ?
//     //         [...registerData.hobbies, event.target.value] : 
//     //         registerData.hobbies.filter(hobby => hobby !== event.target.value)

//     //     const updatedregisterData = { ...registerData, hobbies: updatedHobbies };
//     //     setregisterData(updatedregisterData);

//     // }

//     const removeThisRow = (id) => {
//         const updatedUserList = userList.filter(user => user.id !== id);
//         setUserList(updatedUserList);
//     }

//     return(<><register onSubmit={handleSubmit}>
//         <label> First Name :
//             <input name="firstname" type="text" onChange={handleChange} value={registerData.firstname} />
//         </label> <br />
//         <label> Last Name :
//             <input name="lastname" type="text" onChange={handleChange} value={registerData.lastname} />
//         </label> <br />
//         <label> Gender :
//             <input type="radio" name="gender" onChange={handleChange} value={"Male"} /> Male
//             <input type="radio" name="gender" onChange={handleChange} value={"Female"} /> Female
//         </label><br />
//         <label> Email :
//             <input name="email" type="text" onChange={handleChange} value={registerData.email} />
//         </label><br />
//         <label> Mobile :
//             <input name="mobile" type="number" onChange={handleChange} value={registerData.mobile} />
//         </label><br />
//         <label> Password :
//             <input name="password" type="password" onChange={handleChange} value={registerData.password} />
//         </label><br />
        
//         <button type="submit"> Submit </button>
//     </register>
//     {/* <UserListTable userList={userList} removeThisRow={removeThisRow} /> */}
//     <TableM userList={userList} removeThisRow={removeThisRow} setCurrentUser={setCurrentUser} />
//     <Outlet context={ [ currentUser, setCurrentUser ] } />
//     </>)
// }

// export default registerComponent;