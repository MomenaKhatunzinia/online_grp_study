import { FaUserGroup } from "react-icons/fa6";

const Feature = () => {
    return (
       <div>
         <h1 className="text-3xl text-center font-bold mb-7 shadow-md rounded-md p-4">Features</h1>
         <div className="mt-11 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-4 md:ml-36 ml-6">
           
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <FaUserGroup></FaUserGroup>
    <h2 className="card-title">Study Groups</h2>
    <p>Share and access study notes with your group</p>
  </div>
</div>
        
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <FaUserGroup></FaUserGroup>
    <h2 className="card-title">Assignments</h2>
    <p>Assignments can include various types of work, such as essays, research papers, presentations, coding projects, and more, depending on the subject and educational level.</p>
</div>
        </div>
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <FaUserGroup></FaUserGroup>
    <h2 className="card-title">Submitting Assignments</h2>
    <p>Many educational institutions and online platforms use digital assignment submission systems that allow students to upload files, provide descriptions, and submit their work electronically.</p>
</div>
        </div>
       
            <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <FaUserGroup></FaUserGroup>
    <h2 className="card-title">Server Security</h2>
    <p>Common server security practices include using strong authentication methods, regular software updates and patching, firewall configurations, intrusion detection systems, and encryption to secure data in transit and at rest.</p>
</div>
        </div>
        </div>
       </div>
    );
};

export default Feature;