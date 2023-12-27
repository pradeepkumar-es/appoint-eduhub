// import React ,{useState} from "react"
// import database from '../firebase';
// export default function AddTeacher () {
//     const [teacherDetails, setTeacherDetails ] = useState(
//         {
//             name: '',
//             department: '',
//             subject: ''
//         }
//     )
//     const handleInputChange = (e)=>{
//         const { name, value} = e.target
//         setTeacherDetails({...teacherDetails, [name]:value });
//         console.log(teacherDetails)
//     }
//     const addTeacher=()=>{
//         database.ref('teachers').push(teacherDetails)
//         .then(() => {
//           // Success message or further action
//         })
//         .catch((error) => {
//           // Handle error
//         });
//     };
//     return (
//         <>
//         <h2>Add Teacher</h2>
//         <input type="text" placeholder="Name" name="Name" onChange={handleInputChange} />
//         <input type="text" placeholder="Department" name="Department" onChange={handleInputChange} />
//         <input type="text" placeholder="Subject" name="Subject" onChange={handleInputChange}/>
//         <button onClick={addTeacher}>Add</button>
//         </>
//     )
// }