import {  useLoaderData } from "react-router-dom";
import ShowSubmittedAsg from "./ShowSubmittedAsg";

const SubmittedAssignment = () => {
    const loadData = useLoaderData();
    console.log(loadData)
    return (
        <div className="grid
        grid-cols-1 lg:grid-cols-2 md:grid-cols-1 gap-4
        ml-9
        md:ml-48
         
        ">
            {
                loadData?.map(data =>
                  <ShowSubmittedAsg
                  key = {data._id}
                  data = {data}
                  ></ShowSubmittedAsg>
                    )
                
            }
        </div>
    );
};

export default SubmittedAssignment;