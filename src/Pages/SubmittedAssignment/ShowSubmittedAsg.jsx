import swal from "sweetalert";


const ShowSubmittedAsg = ({data}) => {
    const {title,mark,userEmail,pdfFile, quickNote,_id,status} = data;
    console.log(data)

    const handelSubmit = (e,id) =>
    {
      console.log("hi")
        
        e.preventDefault ();
        const form = e.target;
        const marked = form.marked.value;
        const feedback = form.feedback.value;
        const status = "completed";
        

        const updateStatus = {status,marked,feedback}
        console.log("update data",updateStatus)

        fetch(`https://online-grpstudy-asg-server.vercel.app/assignments/submitted/${id}`,{
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
        <div>
           {
            (status !='completed') &&
            <div className="card w-96 bg-primary text-primary-content">
            <div className="card-body">
              <h2 className="card-title">{title}</h2>
              <h2 className="card-title">Mark:{mark}</h2>
              <h2 className="card-title">Examinee: {userEmail}</h2>
             
              <div className="card-actions justify-end">
                {/* Open the modal using document.getElementById('ID').showModal() method */}
          <button className="btn" onClick={()=>document.getElementById('my_modal_1').showModal()}>Give Mark</button>
          <dialog id="my_modal_1" className="modal">
            <div className="modal-box">
              <h3 className="font-bold text-lg text-black">PDF File: {pdfFile}</h3>
              <p className="py-4 text-black ">Examinee Note : {quickNote}</p>
          
              <form 
                       onSubmit={()=>handelSubmit(_id)}
                       className="card-body text-black">
                     <input type="text" placeholder="Mark here" 
                     name="marked"
                     className="input input-bordered w-full max-w-xs" />
                       <textarea className="textarea textarea-primary text-black" placeholder="Feedback "
                       name="feedback"
                       ></textarea>
                       <div className="form-control mt-6">
                    <button className="btn btn-primary">Submit</button>
                  </div>
                </form>
          
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn">Close</button>
                </form>
              </div>
            </div>
          </dialog>
              </div>
            </div>
          </div>
           }
            
        </div>
    );
};

export default ShowSubmittedAsg;