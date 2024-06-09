import { Link } from "react-router-dom";


const Eachestate = ({estate}) => {

    const {estate_title ,image ,description , status , id} = estate
    
    
        return (
            <div className="card w-96 bg-base-100 shadow-xl">
      <figure><img src={image}alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
        {estate_title}
          <div className="badge badge-secondary">{status}</div>
        </h2>
            <p>{description}</p>
        <div className="card-actions justify-end">

         <Link to={`/estate/${id}`}><button className="btn  btn-info btn-sm mt-4">Know more</button></Link>
        </div>
      </div>
    </div>
        );
    };
    
    export default Eachestate;