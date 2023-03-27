import React from 'react'
import "./testimonials.scss"
const Testimoinials = () => {
  const data=[
    {
      id:1,
      name:"Sudeep Makwana",
      title:"Senior Tech Lead at iorta",
      img:"./asserts/sudeep.jpg",
      icon:"./asserts/linkedin.png",
      url:"https://www.linkedin.com/in/sudeep-makwana-b3594317",
      desc: "Very talented developer with skills set up to date with the aurge to perform clients objective development "
    },
    {
      id:2,
      name:"Emil Hajric",
      title:"CEO at Helpjuice.com",
      img:"./asserts/emil.jpg",
      icon:"asserts/linkedin.png",
      url:"https://www.linkedin.com/in/emilhajric/",
      featured:true,
      desc: "I will admit - originally the thought of outsourcing scared the hell out of me. As a business owner I am used to control and always having my finger on the pulse of my employees and contractors. Denis has delivered great results and has convinced me of the value of outsourcing."
    },
    {
      id:3,
      name:"Humphrey Ikhalea",
      title:"Senior Engineer",
      img:"./asserts/humphrey.jpg",
      url:"https://www.linkedin.com/in/humphreyose-dev/",
      icon:"asserts/linkedin.png",
      desc: " I am very satisfied with our engagement and would consider working together on future projects too. I appreciate his promptness, quality of work, IT expertise and would recommend his services"
    },
  ]
  return (
    <div className='testimonials' id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map(item=>(
            <div className={item.featured?"card featured":"card"}>
              <a href={item.url}>
                <div className="top">
                  <img src="asserts/right-arrow.png" alt="" className="left" />
                  <img src={item.img} alt=""  className="user"/>
                  <img src={item.icon} alt="" className="right" />
                </div>
              </a>
                <div className="center">
                  {item.desc}
                </div>
                <div className="bottom">
                  <h3>{item.name}</h3>
                  <h4>{item.title}</h4>
                </div>
            </div>
        ))}
      </div>

      <div className="toMyStory">
            <a href="#contact">
                <img src="asserts/down.png" alt="" />
            </a>
        </div>
      
    </div>
  )
}

export default Testimoinials
