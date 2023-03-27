import "./contact.scss"

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <div className="title">
        <h1>Lets <span>get in</span> touch </h1>
      </div>
      <div className="flexWrapper">
        <div className="left">
          <img src="asserts/shakes.svg" alt="" />
        </div>
        <div className="right">
          <a href="mailto:denocheboy@gmail.com" className="firstContact">
              <div className="topFirstContact">
                <div className="imgContainer">
                  <img src="asserts/gmail.svg" alt="" style={{width:"40px",height:"40px",objectFit:"cover"}} />
                </div>
                <p>Gmail</p>
              </div>
              <div className="bottomFirstContact">
                <p>You can connect with me by sending me an email at denocheboy@gmail.com Don't be shy, come say hi.</p>
              </div>
          </a>
          <a href="https://twitter.com/DenisDev6" className="secondContact">
            <div className="topSecondContact">
                <div className="imgContainer">
                  <img src="asserts/twitt.svg" alt="" style={{width:"40px",height:"40px",objectFit:"cover"}}/>
                </div>
                <p>Twitter</p>
            </div>
            <div className="bottomSecondContact" >
              <p>You can write to me and follow me on Twitter to read my latest educative threads.</p>
            </div>
          </a>
        </div> 
      </div>
      <div className="coypright">
        <p>Created by <span>Denis Abonda✨.</span> All rights reserved @ 2023</p>
      </div>
    </div>
  )
}

export default Contact
