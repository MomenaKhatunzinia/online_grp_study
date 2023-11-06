

const CreatAssignments = () => {
    return (
        <div>
            <h1 className="text-3xl font-bold flex justify-center">Creat An Assignment</h1>
            <div className="hero  bg-base-200">
  <div className=" flex-col lg:flex-row-reverse">
    <div className="text-center">
    </div>
    <div className="card flex-shrink-0 max-w-6xl shadow-2xl  ">
      <form className="card-bod">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Title</span>
          </label>
          <input type="text" placeholder="Title" 
          name="title"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="Description" 
          name="description"
          className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Thumbnail
Image URL</span>
          </label>
          <input type="text" placeholder="Thumbnail Image url" 
          name="thumbnail-image"
          className="input input-bordered" required />
        </div>
        <div className="flex gap-12">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Mark</span>
          </label>
          <input type="text" placeholder="Mark" className="input input-bordered" required />
        </div>
        <div className="form-control">
        <div className="dropdown dropdown-hover">
  <label tabIndex={0} className="btn m-1">difficulty leve</label>
  <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
    <li><a>Easy</a></li>
    <li><a>medium</a></li>
    <li><a>Hard</a></li>
  </ul>
</div>
          
        </div>
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

export default CreatAssignments;