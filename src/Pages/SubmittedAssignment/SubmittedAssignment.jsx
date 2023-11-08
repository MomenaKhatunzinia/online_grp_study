import {  useLoaderData } from "react-router-dom";
import ShowSubmittedAsg from "./ShowSubmittedAsg";
import swal from "sweetalert";


const SubmittedAssignment = () => {
    const loadData = useLoaderData();
    console.log(loadData)

    const handelSubmit = e =>
    {
        e.preventDefault ();
        const form = e.target;
        const marked = form.marked.value;
        const feedback = form.feedback.value;
        const status = "completed";
        

        const updateStatus = {status}

        fetch(`http://localhost:5000/assignments/submitted/${_id}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json '
            },
            body: JSON.stringify(updateStatus)
           
        })
       
        .then(res => res.json())
        .then(data => 
          {
              console.log(data)
              swal("Successfully Added")
  
          })
        form.reset();
    }
    
    return (
        <div className="grid
        grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4
        ml-9
        md:ml-48
         
        ">
            {
                loadData?.map(data =>
                  <ShowSubmittedAsg
                  key = {data._id}
                  data = {data}
                  handelSubmit = {handelSubmit}
                  ></ShowSubmittedAsg>
                    )
                
            }
        </div>
    );
};

export default SubmittedAssignment;