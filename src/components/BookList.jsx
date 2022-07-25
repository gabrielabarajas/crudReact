import axios from "axios";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";
import "../index.css"

export default function BookList(){
const [books, setBooks] = useState ([]);
useEffect(()=> {
    axios.get("http://localhost:5000/dbbooks")
    .then((res)=> {
        setBooks(res.data)
    })
},[])

    return(
        <div className="d-flex justify-content-center">
            <div className="contentBooks">
                <div className="flex-wrap row row-cols-1 row-cols-md-4">
                    {books.map((item, index)=>(
                        <BookCard key={index} companyLogo={item.companyLogo} jobName={item.jobName} description={item.description}/>
                ))}
                </div>
            </div>
        </div>
    )

}