import { Link } from "react-router-dom";


const AssignmentShow = ({assignment}) => {
   const {thumbnail, title,difficulty} = assignment;

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
     <Link to={'/viewAssignment'}>
     <button className="btn btn-primary">View Assignment</button>
     </Link>
      <button className="btn btn-primary">Update Assignment</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default AssignmentShow;