import { useEffect, useState } from "react";

import AssignmentShow from "./AssignmentShow";

const Assignments = () => {
    const [assignments, setAssignments] = useState([]);
   
    const [search, setSearch] = useState('');



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
    ></AssignmentShow>)

    : search?.map(assignment =>
        <AssignmentShow
        key={assignment._id}
        assignment={assignment}
        ></AssignmentShow>)
   
}



</div>
       </div>
    );
};

export default Assignments;