import {useLoaderData,useParams} from "react-router-dom"

const EstateDetails = () => {

    const estates=useLoaderData();
    const {id}=useParams();
    const numId=parseInt(id)
    console.log(numId,estates);

    const estate= estates.find(estate=> estate.id == numId);
    console.log(estate);
    return (
        <div>
            <h1>details</h1>
        </div>
    );
};

export default EstateDetails;