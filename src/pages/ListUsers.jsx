import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../App";
import { useNavigate } from "react-router-dom";

const ListUsers = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users,setUsers]=useState();
  const [refresh,setRefresh]=useState(null);
  const {userData,setUserData}=useContext(UserContext);
  const navigate=useNavigate();

  const handelUserList=async(page)=>{
   try {
    //  console.log(`https://reqres.in/api/users?page=${page}`)
     const {data}=await axios.get(`https://reqres.in/api/users?page=${page}`)
     setUsers(data.data);
   } catch (error) {
     console.log(error.message);
   }
  }
  
  const handelDeleteUser=async(id)=>{
    try {
      await axios.delete('https://reqres.in/api/users/${id}');
      toast.success("User deleted successfully")
      setRefresh(true);
    } catch (error) {
      toast.error(error.message);
    }
  };
 
  const handelEditUser=async(user)=>{
    // console.log('this is from handel edit',user)
    setUserData(user);
    navigate('/edit-User')
  }

  useEffect(()=>{
    const fetchUsers = async () => {
      try {
        const { data } = await axios.get(`https://reqres.in/api/users?page=1`);
        setUsers(data.data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchUsers();
  },[]);

  useEffect(()=>{
   console.log(currentPage);
   handelUserList(currentPage);
  },[currentPage,refresh]);

  useEffect(()=>{
   console.log(userData);
  },[userData]);
  return (
    <div>
      {users?(
           <div className="p-6 bg-gray-50 min-h-screen">
           <h2 className="text-2xl font-bold mb-4 text-center">Users List</h2>
           
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
             {users.map((user) => (
               <div key={user.id} className="bg-white p-4 rounded-lg shadow-md flex flex-col items-center">
                 <img src={user.avatar} alt={user.first_name} className="w-16 h-16 rounded-full" />
                 <h3 className="mt-2 font-semibold text-center">{user.first_name} {user.last_name}</h3>
                 <div className="flex justify-between w-full mt-4">
                   <button className="bg-yellow-500 text-white px-3 py-1 rounded w-1/2 mr-2 cursor-pointer" onClick={()=>{handelEditUser(user)}}>Edit</button>
                   <button className="bg-red-500 text-white px-3 py-1 rounded w-1/2 ml-2 cursor-pointer" onClick={handelDeleteUser}>Delete</button>
                 </div>
               </div>
             ))}
           </div>
     
           {/* Page Buttons */}
           <div className="flex justify-center mt-6 space-x-3">
             {[1, 2].map((page) => (
               <button 
                 key={page} 
                 className={`px-3 py-1 rounded ${currentPage === page ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} cursor-pointer`} 
                 onClick={() => {setCurrentPage(page)
                 }}
               >
                 {page}
               </button>
             ))}
           </div>
         </div>
      ):(
        <div>
        loading
        </div>
      )}
    
    </div>

  );

};

export default ListUsers;
