import { Link } from "react-router-dom";


const ErrorPage = () => {
    return (
        <div >
            <div className="
       space-y-4 mx-auto mt-28">

<h1 className="text-5xl text-center text-black font-bold">404 / Not Found</h1>

<Link to={'/'} className="mx-auto"><button className="bg-green-500 text-white font-semibold rounded-lg px-3 py-2 ">Go Back Home</button></Link>
            </div>
         
        </div>
    );
};

export default ErrorPage;