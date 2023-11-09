import { useContext, useEffect, useState } from "react";

import AssignmentShow from "./AssignmentShow";
import Swal from "sweetalert2";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
   
    const [search, setSearch] = useState('');

    const {user} = useContext(AuthContext)



    useEffect(() => {
      fetch('http://localhost:5000/assignments')
        .then((res) => res.json())
        .then((data) => {
          setAssignments(data);
        })
        .catch((error) => {
          console.error( error);
        });
    }, []);

    const handelSearch = e =>
    {
        e.preventDefault();
        const searchData = e.target.search.value;
        let filterAssignments = assignments?.filter(assignment =>searchData === assignment.difficulty  )

        setSearch(filterAssignments) 

        
    }

    const handelDelete = id =>
   {
    Swal.fire({
      title: 'Are you sure?',
      text: 'You won\'t be able to revert this!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel',
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/assignments/${user?.email}/${id}`,{
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data =>
        {
          console.log(data);
          if(data.deletedCount>0)
          {
            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
            const remaining = assignments.filter(assignment => assignment._id !== id)
            setAssignments(remaining)
          }
        })
       
      }
    });
   }

   
    return (

      

       <div>
        <div >
       <form
       onSubmit={handelSearch}
       >
        <div className=" flex justify-center mb-7" >
        <input type="text" 
        placeholder="Search here" 
        name="search"
        

        className="input 
        input-bordered input-info w-full max-w-xs" />
        <button
        className="ml-4 btn btn-primary">Search</button>
        </div>
       </form>
        </div>
         <div className="grid
         grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4
         ml-9
         md:ml-48
          
         ">

{
    (search.length ===0  ) ?
    
    assignments?.map((assignment) => <AssignmentShow
    key={assignment._id}
    assignment = {assignment}
    handelDelete = {handelDelete}
    ></AssignmentShow>)

    : search?.map(assignment =>
        <AssignmentShow
        key={assignment._id}
        assignment={assignment}
        handelDelete = {handelDelete}
        ></AssignmentShow>)
   
}



</div>
       </div>
    );
};

export default Assignments;