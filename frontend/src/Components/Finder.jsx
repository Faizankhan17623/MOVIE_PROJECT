import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import { ClipLoader } from "react-spinners";
import { useForm } from "react-hook-form";
import { FaStarOfLife } from "react-icons/fa6";
import { FaArrowLeft,FaArrowRight  } from "react-icons/fa";
const DATA = [
    { id: 1, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 2, location: "pune", date: "22/05/2025", theatreName: "pune theatre", movieName: "rascalling " },
    { id: 3, location: "kondhave", date: "23/05/2025", theatreName: "kondhave theatre", movieName: "kondhaving" },
    { id: 4, location: "sada galli", date: "24-05-2025", theatreName: "sada theatre", movieName: "sada souda" },
    { id: 5, location: "name nahi", date: "25-05-2025", theatreName: "nameching theatre", movieName: "nameing" },
    { id: 6, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 7, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 8, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 9, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 10, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 11, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 12, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
    { id: 13, location: "Nagar", date: "21-05-2025", theatreName: "nagar", movieName: "rascal" },
]

const Finder = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [matches, setMatches] = useState([]);
    const [locationMsg, setLocationMsg] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [click,setclick] = useState(false)
    const resultsPerPage = 3;

    const onSubmit = (data) => {
        setIsLoading(true);
        setCurrentPage(0)
        // Format date to match DATA (DD-MM-YYYY)
        const [year, month, day] = data.date.split("-");
        const formattedDate = `${day}-${month}-${year}`;
        const searchObj = { ...data, date: formattedDate };

        setTimeout(() => { // simulate loading
            const found = DATA.filter(item =>
                item.location === searchObj.location &&
                item.date === searchObj.date &&
                item.movieName === searchObj.movieName &&
                item.theatreName === searchObj.theatreName
            );
            if (found.length > 0) {
                setLocationMsg("All fields match!");
                setMatches(found);
            } else {
                setLocationMsg("No match found.");
                setMatches([]);
            }
            setIsLoading(false);
        }, 1000); // 1 second loading
    };


     const totalPages = Math.ceil(matches.length / resultsPerPage);
    const startIndex = currentPage * resultsPerPage;
    const visibleResults = matches.slice(startIndex, startIndex + resultsPerPage);

    const handlePrevPage = () => {
        setCurrentPage(prev => Math.max(0, prev - 1));
    };

    const handleNextPage = () => {
        setCurrentPage(prev => Math.min(totalPages - 1, prev + 1));
    };



    return (
        <div className={`w-full ${click ? 'h-[400px]' : 'h-[250px]' } rounded-md text-white pt-[100px] relative top-8`}>
            <div className="w-full rounded-md h-[40%] top-3">
                <div className="flex justify-center items-center gap-3 mt-5">
                    <h1 className="text-3xl">FIND</h1>
                    <p>Movies</p>
                    <p>Web Series</p>
                </div>
                <form onSubmit={handleSubmit(onSubmit)} className="flex justify-center items-center" >
                    <div className="flex justify-center items-center h-[150px] w-fit gap-6 border">
                        <div className="flex  items-center flex-col-reverse">
                            <label htmlFor="location">Location</label>
                            <input type="text" id="location" {...register("location", { required: "Location is required" })} placeholder="Which City do you Prefer?" className="w-[13rem]" />
                            {errors.location && <span> <FaStarOfLife className="text-red-800"/>{errors.location.message}</span>}
                        </div>
                        <div className="flex flex-col-reverse items-center text-white">
                            <label htmlFor="date" className="text-white">Date</label>
                            <input type="date" id="date" {...register("date", { required: "Date is required" })} placeholder="Add Date" className="w-[13rem] text-white bg-gray-800 pr-10" />
                            {errors.date && <span><FaStarOfLife className="text-red-800"/>{errors.date.message}</span>}
                        </div>
                        <div className="flex flex-col-reverse items-center">
                            <label htmlFor="movieName">Movie Name</label>
                            <input type="text" id="movieName" {...register("movieName", { required: "Movie name is required" })} placeholder="Which Movie do you Prefer?" className="w-[13rem]" />
                            {errors.movieName && <span><FaStarOfLife className="text-red-800"/>{errors.movieName.message}</span>}
                        </div>
                        <div className="flex flex-col-reverse items-center">
                            <label htmlFor="theatreName">Theatre Name</label>
                            <input type="text" id="theatreName" {...register("theatreName", { required: "Theatre is required" })} placeholder="Which Theatre do you Prefer?" className="w-[13rem]" />
                            {errors.theatreName && <span><FaStarOfLife className="text-red-800"/>{errors.theatreName.message}</span>}
                        </div>
                        <button type="submit" onClick={()=>{setclick(true)}}><FaSearch /></button>
                    </div>
                </form>

      <div className="h-fit flex flex-col justify-center items-center relative top-7">
                {isLoading ? (
                    <ClipLoader color="#cd1313" />
                ) : matches.length > 0 ? (
                    <div className="w-full max-w-[1200px] px-4">
                        <div className="flex justify-between items-center mb-4">
                            <button 
                                onClick={handlePrevPage}
                                disabled={currentPage === 0}
                                className={`p-2 rounded ${currentPage === 0 ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                <FaArrowLeft />
                            </button>
                            <div className="flex gap-4">
                                {visibleResults.map((data) => (
                                    <div key={data.id} className="bg-gray-800 p-4 rounded-lg w-[300px]">
                                        <div className="space-y-2">
                                            <p><span className="font-bold">Location:</span> {data.location}</p>
                                            <p><span className="font-bold">Date:</span> {data.date}</p>
                                            <p><span className="font-bold">Theatre:</span> {data.theatreName}</p>
                                            <p><span className="font-bold">Movie:</span> {data.movieName}</p>
                                            <p>id:{data.id}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <button 
                                onClick={handleNextPage}
                                disabled={currentPage >= totalPages - 1}
                                className={`p-2 rounded ${currentPage >= totalPages - 1 ? 'bg-gray-600' : 'bg-blue-600 hover:bg-blue-700'}`}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                        <div className="text-center text-sm">
                            Page {currentPage + 1} of {totalPages}
                        </div>
                    </div>
                ) : (
                    <span className="text-white text-lg">{locationMsg}</span>
                )}
            </div>
            </div>
        </div>
    );
};

export default Finder