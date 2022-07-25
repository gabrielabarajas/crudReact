
export default function BookCard({companyLogo,jobName,description}){
    return(
        <div className="card">
            <img src={companyLogo} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{jobName}</h5>
                <p className="card-text">{description}</p>
                <a href="#" className="btn btn-primary">Edit</a>
                <a href="#" className="btn btn-primary">Delete</a>
            </div>
        </div>
    )

}