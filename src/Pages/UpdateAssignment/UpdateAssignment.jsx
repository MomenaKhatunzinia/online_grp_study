import { useLoaderData } from "react-router-dom";
import  { useState } from "react";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import swal from "sweetalert";


const UpdateAssignment = () => {
    const loadData = useLoaderData();
    const {thumbnail, title, description, mark, date, difficulty, email, _id} = loadData;
     
    console.log(loadData)

    const [startDate, setStartDate] = useState(new Date(`${date}`));

    const [isOpen, setIsOpen] = useState(false)
    const [selectOp, setSelectOp] = useState(`${difficulty}`)
  
    
    const dropDown = () =>
    {
        setIsOpen(!isOpen)
    }
    const handelDifficulty = (option) =>
    {
        setSelectOp(option)
        setIsOpen(false)
    }
  
 

    const handelSubmit = e =>
    {
        e.preventDefault();
        const form = e.target;
        const title = form.title.value;
        const email = form.email.value;
        const description = form.description.value;
        const thumbnail = form.thumbnail.value;
        const mark = form.mark.value;

        const difficulty = selectOp;
        const date = startDate;
        const updateAssignments = {title, description, thumbnail, mark,difficulty ,date,email}
        console.log(updateAssignments)

       

        form.reset();
        fetch(`http://localhost:5000/assignments/${_id}`,{
            method:'PUT',
            headers: {
                'content-type' : 'application/json '
            },
            body: JSON.stringify(updateAssignments)
           
        })
       
        .then(res => res.json())
        .then(data => 
          {
              console.log(data)
              swal("Successfully Added")
  
          })
    }

    return (
        <div>
               <div className="hero   lg:p-24 ">
  <div className=" flex-col lg:flex-row-reverse">
    <div className="text-center">
    </div>
    <div className="card flex-shrink-0 max-w-6xl shadow-2xl  ">
      <form
      onSubmit={handelSubmit}
      className="card-bod lg:p-11">
         <div className="form-control">
          <label className="label">
            <span className="label-text">Creator Mail</span>
          </label>
          <input type="email" placeholder="Email" 
          name="email"
          defaultValue={email}
          className="input input-bordered" required />
        </div>
      <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="Title" 
          name="title"
          defaultValue={title}
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="Description" 
          name="description"
          defaultValue={description}
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail
Image URL</span>
          </label>
          <input type="text" placeholder="Thumbnail Image url" 
          name="thumbnail"
          defaultValue={thumbnail}
          className="input input-bordered" required />
        </div>
        <div className="flex gap-12">
            
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mark</span>
          </label>
          <input type="text" placeholder="Mark" 
          defaultValue={mark}
          name="mark"
          className="input input-bordered" required />
        </div>

        <div className="form-control flex justify-center items-center">
        <div className="dropdown dropdown-hover ">
  <label tabIndex={0} className="btn btn-primary  m-1"
  onClick={dropDown}
  >{selectOp}</label>
 { isOpen && (<div>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li onClick={()=>handelDifficulty("Easy")}><a>Easy</a></li>
    <li onClick={()=>handelDifficulty("Medium")}><a>Medium</a></li>
    <li onClick={()=>handelDifficulty("Hard")}><a>Hard</a></li>
  </ul>
  </div>)}
</div>
          
        </div>
        </div>

        <div className="form-control mt-7 flex justify-center items-center">
        <label className="label">
            <span className="label-text">Deadline</span>
          </label>

        <DatePicker
      showIcon
      selected={startDate}
      onChange={(date) => setStartDate(date)}
    />
        </div>

        <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
    </div>
   
  </div>
</div>
            
        </div>
    );
};

export default UpdateAssignment;