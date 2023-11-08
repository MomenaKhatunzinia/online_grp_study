import { Link, useLoaderData } from "react-router-dom";


const ViewAssignment = () => {
    const loadData = useLoaderData()
    const {description, title, mark, _id} = loadData;
    console.log(loadData)
    return (
        <div className=" flex justify-center items-center">
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title flex justify-center ">{title}</h2>
    <p>{description}</p>
    <div className="card-actions justify-end">
      <Link to={`/takeAssignment/${mark}/${title}/${_id}`}>
      <button className="btn btn-primary">Take
assignment”</button>
      </Link>
    </div>
  </div>
</div>
            
        </div>
    );
};

export default ViewAssignment;