import "./mystory.scss"
const Mystory = () => {
  return (
    <div className="mystories" id="about">
        <h1>My <span>Story</span></h1>
        <div className="stories">
            <div className="aboutMe">
                <div className="aboutTop">
                    <img src="asserts/about.svg" alt="" />
                    <p>About me</p>
                </div>
                <div className="aboutDesc">
                My name is Denis Abonda, a Full-Stack Developer born in the great land of
                Kenya. My interest in Technology started back in 2009 when I was a young boy 
                trying to comprehend how the internet works. Ever since then I have admired the complexity of the Internet
                </div>
            </div>
            <div className="myHelp">
                <div className="aboutTop">
                        <img src="asserts/help.svg" alt="" />
                        <p>How can i help?</p>
                </div>
                <div className="myHelpDesc">
                I help to modernize and innovate businesses by tackling complex technological challenges.
                I have the technical know-how and knowledge to provide your business with the full spectrum of web services such as Hosting, SEO, Web Development, Testing, 
                Technical Writing and UI / UX design.
                </div>
            </div>
            <div className="mission">
                <div className="aboutTop">
                        <img src="asserts/mission.svg" alt="" />
                        <p>My Mission</p>
                </div>
                <div className="missionDesc">
                My mission is to translate user-focused designs into pixel-perfect websites
                and applications that run blazingly fast and to help your business and company thrive by helping you build the best products in the market that will generate more revenue, income, 
                and turn your ideas into real life products.
                </div>
            </div>
        </div>
        <div className="toMyStory">
            <a href="#projects">
                <img src="asserts/down.png" alt="" />
            </a>
        </div>
    </div>
  )
}

export default Mystory
