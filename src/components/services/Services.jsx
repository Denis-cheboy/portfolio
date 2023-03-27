import React from 'react'
import { useState } from 'react'
import "./services.scss"

const Services = () => {
    const [clicked,setClicked]=useState(0)

    const handleClick=(direction)=>{
      setClicked(direction==="r"?clicked>=5?0:clicked+1:clicked<=0?5:clicked-1)
    }
  const data=[
    {
        id:1,
        img:"asserts/website.svg",
        title:"Website Review",
        desc:"I ensure that your website is at its best performance by thoroughly inspecting it before releasing it to the World. I look for potential issues a client might face and make suggestions on how to improve the UI and UX of the website."
    },
    {
        id:2,
        img:"asserts/uiux.svg",
        title:"UI/UX Design",
        desc:"I design your website in such a way that your clients will be able to enjoy navigating around your website without any hussle while directing them towards the end goal which is to get them to buy your products or contact you."
    },
    {
        id:3,
        img:"asserts/seo.svg",
        title:"SEO",
        desc:"For your business to expand and get more sales, I ensure that your SEO metrics and keywords of your website are well defined and up-to-date which enables you to rank at the top of a Google search for any product you sell."
    },
    {
        id:4,
        img:"asserts/od.svg",
        title:"Objective Development",
        desc:"I build your website with your specifications and goals in mind, whether you want a simple flexible website, a multi-page website, an E-commerce website or a custom storefront. I got you covered."
    },
    {
        id:5,
        img:"asserts/test.svg",
        title:"Testing",
        desc:"I ensure that your website is of excellent quality by thoroughly testing it with multiple tools so that it works as expected and is consistent across multiple browsers and responsive to every screen size."
    },
    {
        id:6,
        img:"asserts/tk.svg",
        title:"Technical Writing",
        desc:"Apart from being a great developer, I also have a burning passion and innate desire for technical writing. Through technical writing I am able to use my knowledge and technical know-how to benefit people and organisations."
    },
  ]
  return (
    <div className="servicesContainer" id="services">
        <div className="mobileViewContainer">
            <div className="mobileTitle">
                <h1>Services i offer</h1>
            </div>

             <div className="mobileServices">
               {
                    data?.map(item=>(
                        <div className="container" key={item.id}>
                            <div className="item">
                                <div className="imgContainer">
                                    <img src={item.img} alt="" />
                                </div>
                                <h1>{item.title}</h1>
                                <p>{item.desc}</p>
                            </div>
                        </div>

                    ))
                }
             </div>
        </div>
        <div className="serviceTitle">
            <h1>Services i offer</h1>
        </div>
        <div className="slider" style={{transform:`translateX(-${clicked*100}vw)`}}>
        {
            data?.map(item=>(
                <div className="container" key={item.id}>
                    <div className="item">
                        <div className="imgContainer">
                            <img src={item.img} alt="" />
                        </div>
                        <h1>{item.title}</h1>
                        <p>{item.desc}</p>
                    </div>
                </div>

            ))
        }
        </div>
        <img src="asserts/arrow.png"  className="arrow left" alt="" onClick={()=>handleClick("l")} />
        <img src="asserts/arrow.png"  className="arrow right" alt="" onClick={()=>handleClick("r")} />

        <div className="toMyStory">
            <a href="#myprocedure">
                <img src="asserts/down.png" alt="" />
            </a>
        </div>

    </div>
  )
}

export default Services
