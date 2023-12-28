import React ,{useState} from "react"
import {database} from '../firebase';
import { collection,
         addDoc,
        getDocs,
        doc,  //for update doc
        updateDoc //for update doc
     } from 'firebase/firestore';
export default function AddTeacher () {
   
    const [teacherDetails, setTeacherDetails ] = useState({})
    const collectionRef= collection(database, 'teachers')

    const handleInputChange = (event)=>{
        // const { name, value} = e.target
        let newItem = {[event.target.name]:event.target.value}
        setTeacherDetails({...teacherDetails, ...newItem });
        console.log(teacherDetails)
    }
    const addTeacher=()=>{
        // database.ref('teachers').push(teacherDetails)
        addDoc(collectionRef, {
            name: teacherDetails.name,
            department : teacherDetails.department,
            subject:teacherDetails.subject
        })
        .then(() => {
          // Success message or further action
          alert("Data Added")
        })
        .catch((error) => {
          // Handle error
          alert(error.message)
        });
         };
         
         const getDetails=()=>{
            getDocs(collectionRef)
            .then((response)=>{
                console.log(
                    response.docs.map((item)=>{
                        return {...item.data(), id:item.id}
                    })
                )
            })
        }
        const updateData=()=>{
            const docToUpdate = doc(database, 'teachers', 'M4LzHZx3mld49AkmEygU') //in the last parameter it is teacher id
            updateDoc(docToUpdate,{
                name: teacherDetails.name,
                department: teacherDetails.department,
                subject: teacherDetails.subject
            })
            .then(()=>{
                alert("Data Updated")
            })
            .then((error)=>{
                alert(error.message);
            })
        }
    return (
        <>
        <h2>Add Teacher</h2>
        <input type="text" placeholder="Name" name="name" onChange={(event)=>handleInputChange(event)} />
        <input type="text" placeholder="Department" name="department" onChange={(event)=>handleInputChange(event)} />
        <input type="text" placeholder="Subject" name="subject" onChange={(event)=>handleInputChange(event)}/>
        <button onClick={addTeacher}>Add</button>
        <button onClick={getDetails}>get data</button>
        <button onClick={updateData}>Update Data</button>
        </>
    )
}