
const Faq = () => {
    return (
        <div className="mt-11">
           <div className="rounded-md shadow-md">
           <h1 className="text-3xl font-bold text-center
            ">Some FAQ</h1>
           </div>
            <div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" checked="checked" /> 
  <div className="collapse-title text-xl font-medium">
    How to Create Assignment
  </div>
  <div className="collapse-content"> 
    <p>First Login then create an Assignment</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Can i saw others Assignment Marks
  </div>
  <div className="collapse-content"> 
    <p>Sorry You can't. You can see yours</p>
  </div>
</div>
<div className="collapse collapse-plus bg-base-200">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
    Can i delete or update the Assignment i have created
  </div>
  <div className="collapse-content"> 
    <p>Yes You can</p>
  </div>
</div>
        </div>
    );
};

export default Faq;