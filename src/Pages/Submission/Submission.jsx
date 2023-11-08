import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import swal from "sweetalert";
import { useParams } from "react-router-dom";


const Submission = () => {
    const {title,mark} = useParams();
    
    console.log(mark,title)
    const {user}  = useContext(AuthContext)
    const handelSubmit = e =>
    {
        e.preventDefault ();
        const pdfFile = e.target.pdfFile.value;
        const quickNote = e.target.quickNote.value;
        const userEmail = user?.email;
        const status = "pending";
        const submission = {userEmail, quickNote, pdfFile, status, mark, title}
        console.log(submission)

        e.target.reset();
        fetch('http://localhost:5000/assignments/submitted',{
            method:'POST',
            headers: {
                'content-type' : 'application/json '
            },
            body: JSON.stringify(submission)
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
             <form 
             onSubmit={handelSubmit}
             className="card-body">
             <input type="file" 
             name="pdfFile"
             className="file-input file-input-bordered file-input-primary w-full max-w-xs" />
             <textarea className="textarea textarea-primary" placeholder="Quick Note"
             name="quickNote"
             ></textarea>
             <div className="form-control mt-6">
          <button className="btn btn-primary">Submit</button>
        </div>
      </form>
        </div>
    );
};

export default Submission;