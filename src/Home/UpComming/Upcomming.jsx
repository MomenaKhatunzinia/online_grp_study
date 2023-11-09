


const Upcomming = () => {
 
    return (
        <div>
            <h1 className="text-center text-3xl font-bold my-7">Join Us</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2
            pl-9 gap-3
            md:gap-7">
            <div className="indicator">
  <div className="indicator-item indicator-bottom">
    <button className="btn btn-primary">Apply</button>
  </div> 
  <div className="card border">
    <div className="card-body">
      <h2 className="card-title">Assignment Check</h2> 
      <p>Check the submitted assignment</p>
    </div>
  </div>
</div>
<div className="indicator">
  <div className="indicator-item indicator-bottom">
    <button className="btn btn-primary">Apply</button>
  </div> 
  <div className="card border">
    <div className="card-body">
      <h2 className="card-title">Design the website</h2> 
      <p>Join with us to design the website</p>
    </div>
  </div>
</div>
            <div className="indicator">
  <div className="indicator-item indicator-bottom">
    <button className="btn btn-primary">Apply</button>
  </div> 
  <div className="card border">
    <div className="card-body">
      <h2 className="card-title">Secure Server</h2> 
      <p>Join with us to improve out security</p>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Upcomming;