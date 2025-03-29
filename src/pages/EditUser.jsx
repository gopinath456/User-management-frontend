import { useContext, useState } from "react";
import { UserContext } from "../App";
import axios from "axios";
import { toast } from "react-toastify";
const EditUser = () => {
  const {userData:user}=useContext(UserContext);
  const [firstName, setFirstName] = useState(user.first_name);
  const [lastName, setLastName] = useState(user.last_name);
  const [email, setEmail] = useState(user.email);
  // console.log(firstName,lastName,email)
  // console.log(user);
  
  const handelSummit=(e)=>{
    e.preventDefault(); 
    try {
      axios.put(`https://reqres.in/api/users/${user.id}`,{
        firstName,
        lastName,
        email
      })
      toast.success('successfully updated');
    } catch (error) {
      toast.error(error.message);
    }
  }

  return (
    <div>
      {user?(
        <form onSubmit={handelSummit}>
          <div className="fixed inset-0 flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
              <h2 className="text-xl font-bold mb-4">Edit User</h2>
              <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)}  className="w-full p-2 border rounded mb-2" />
              <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} className="w-full p-2 border rounded mb-2" />
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}  className="w-full p-2 border rounded mb-4" />
              <button className="w-full bg-green-500 text-white p-2 rounded cursor-pointer">Update</button>
            </div>
          </div>
        </form>
      ):(<div className="flex items-center justify-center "><p className="text-3xl">Please select the user, You want to edit</p></div>)}  
    </div>
    );
};

  export default EditUser;