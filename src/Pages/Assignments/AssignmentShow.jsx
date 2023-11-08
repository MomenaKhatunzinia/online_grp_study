import { Link } from "react-router-dom";

import Swal from 'sweetalert2';



const AssignmentShow = ({assignment}) => {
   const {_id,thumbnail, title,difficulty} = assignment;

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
        fetch(`http://localhost:5000/assignments/${id}`,{
        method: 'DELETE'
      })
      .then(res=> res.json())
      .then(data =>
        {
          console.log(data);
          if(data.deletedCount>0)
          {
            Swal.fire('Deleted!', 'Your item has been deleted.', 'success');
          }
        })
       
      }
    });
   }

    return (
        <div>


            <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={thumbnail} alt={title} className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{title}</h2>
    <p>{difficulty}</p>
    <div className="flex gap-3">
     <Link to={`/viewAssignment/${_id}`}>
     <button className="btn btn-primary">View Assignment</button>
     </Link>
      <Link to={`/UpdateAssignment/${_id}`}>
      <button className="btn btn-primary">Update Assignment</button>
      </Link>
    </div>
   <div className=" flex-grow">
   <button 
   onClick={()=>handelDelete(_id)}
   className="btn btn-circle btn-outline grow">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
   </div>
  </div>
</div>
        </div>
    );
};

export default AssignmentShow;