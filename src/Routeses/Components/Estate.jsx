import { Link } from "react-router-dom";


const Estate = ({estate}) => {
    const {id,image} =estate
    return (
        <div className="card  bg-base-100 shadow-xl">
            <p>{id}</p>
        <figure><img className="rounded-xl" src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">Shoes!</h2>
          <p>If a dog chews shoes whose shoes does he choose?</p>
          <div className="card-actions justify-end">

            <Link to={`/estate/${estate.id}`}>
            <button className="btn btn-primary">Buy Now</button>
            </Link>
          
          </div>
        </div>
      </div>
    );
};

export default Estate;