
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Show from "./Show/Show";
import { useLoaderData } from "react-router-dom";


const MyAssignments = () => {
   

    const loadData = useLoaderData();
    console.log(loadData)
    const {user} = useContext(AuthContext)

    const findMain = loadData?.filter(a=>a.userEmail === user?.email)
    console.log(findMain)
   
    

    return (
        <div className="grid
        grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4
        ml-9
        md:ml-48">
           
                
            {
                findMain?.map(a=>
                    <Show
                    key={a._id}
                    a={a}
                    ></Show>
                    )
            }
            
            
        </div>
    );
};

export default MyAssignments;