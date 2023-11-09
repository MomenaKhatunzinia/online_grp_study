



const Show = ({a}) => {
  const {title, mark, status, quickNote} = a
   console.log(a)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">{title}</h2>
    <p>{quickNote}</p>
    <div className="flex justify-between">
      <h1>Status: {status}</h1>
      <h1>Mark: {mark}</h1>
    </div>
    
  </div>
</div>
        </div>
    );
};

export default Show;