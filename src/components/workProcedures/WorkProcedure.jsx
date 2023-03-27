import "./workprocedure.scss"
import { useState } from "react"
const WorkProcedure = () => {
    const [clicked,setClicked]=useState(0)

    const handleClick=(direction)=>{
      setClicked(direction==="r"?clicked>=5?0:clicked+1:clicked<=0?5:clicked-1)
    }
  

    const data=[
        {
            id:"01",
            title:"Project Request",
            desc:"At the beginning of our collaboration that's when the project request takes place. Your information about the project will help me understand if I am the right person for your project. If I am the right person for your project then we will arrange a video call as we talk about your next big project so that I can learn more about it."
            
        },
        {
            id:"02",
            title:"First Meeting",
            desc:"On our first meeting we get to know each other more and check if we are compatible and a perfect fit. Trust is extremely important to me when I am working with my clients. We also talk about the goals, process and requirements that need to be fulfilled for the project to become a huge success."
            
        },
        {
            id:"03",
            title:"System Design Phase",
            desc:"With my in-depth knowledge of design concepts I take the information that I have learnt from you and design an exquisite website that is tailored to meet your required needs and standards, all while accurately representing your company and brand and keeping things aesthetically pleasing and useable for your clients.."
            
        },
        {
            id:"04",
            title:"Development Phase",
            desc:"Once you are convinced and satisfied with the design I create, I then proceed to build your website making sure everything is optimised to meet the the modern day web practices such as speed, responsive design, security, reliability, user experience and reachability."
            
        },
        {
            id:"05",
            title:"Testing Phase",
            desc:"After creating your website, I ensure that your website is of excellent quality by thoroughly going through multiple checklists and testing it with multiple tools so that it works as expected and is consistent across multiple browsers and devices."
            
        },
        {
            id:"06",
            title:"Deployment Phase",
            desc:"Before launching your website, I make sure to add SEO to your website so that your website becomes more visible, searchable and reachable thus making your website gain more traffic, retention and more opportunities to convert prospects into clients."
            
        },
    ]
  return (
    <div className="works" id="myprocedure">
        <div className="mobileProcedures">
            <div className="mobileProceduresTitle">
                <h1>My Procedures</h1>
            </div>
            <div className="mobileProcedureServices">
              {
                data?.map(item=>(
                    <div className="container" key={item.id}>
                        <div className="item">
                            <h1>{item.id}</h1>
                            <h2>{item.title}</h2>
                            <p>{item.desc}</p>
                        </div>
                    </div>

                ))
              } 
            </div>
        </div>
        <div className="procedureTitle">
            <h1>My Procedures</h1>
        </div>
        <div className="slider" style={{transform:`translateX(-${clicked*100}vw)`}}>
        {
            data?.map(item=>(
                <div className="container" key={item.id}>
                    <div className="item">
                        <h1>{item.id}</h1>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                    </div>
                </div>

            ))
        }
        </div>
        <img src="asserts/arrow.png"  className="arrow left" alt="" onClick={()=>handleClick("l")} />
        <img src="asserts/arrow.png"  className="arrow right" alt="" onClick={()=>handleClick("r")} />

        <div className="toMyStory">
            <a href="#testimonials">
                <img src="asserts/down.png" alt="" />
            </a>
        </div>
        
   </div>
  )
}

export default WorkProcedure
