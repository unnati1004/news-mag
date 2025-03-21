// import React from 'react'

export const NewsItem = () => {

  const description = "News is information about current events. This may be provided through many different media: word of mouth, printing, postal systems, broadcasting, electronic communication, or through the testimony of observers and witnesses to events. News is sometimes called hard news to differentiate it from soft media."


  return (
    <div className="card bg-dark text-light mb-3 d-inline-block m-3 p-3" >
      <img style={{width:"367px" ,height:"200px"}} src="https://media.gettyimages.com/id/1673064753/vector/breaking-news-world-map-background.jpg?s=612x612&w=0&k=20&c=bNk_c5Wn2W8LaaHkJonxt0lOA8eH1LH9Jiwfq9l4dDg=" className="card-img-top" alt="news image"/>
     <div className="card-body">
      <h5 className="card-title">Card title</h5>
      <p className="card-text">{description?description.slice(0,50):"Some quick example text to build on the card title and make up the bulk of the card's content."}</p>
      <a href="#" className="btn btn-primary">Go somewhere</a>
      </div>
    </div>
  )
}
