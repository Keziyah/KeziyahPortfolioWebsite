import React from 'react'
import CaseHeader from './CaseHeader'

const Spacechat = () => {
    return (
        <div className="spacechat case-study">
             <CaseHeader />
            <div className="project-hero">
                <h1>spacechat</h1>
                <h5>JavaScript | React | Redux | Express | SocketIO | A-Frame</h5>
                <h4>A virtual reality smart chatroom with language translation
                and senitment anlysis features.
                </h4>
            </div>

            <div className="project-body">
                <p>
                    The power of language goes beyond words.
                    My colleagues and I created Spacechat, a virtual reality chatroom, in order
                    to explore the connections between language, data visualitzation, emotion, 
                    and virtual reality.
                </p>

                <p>
                    Spacechat allows users to chatwith each other in real time by 
                    speaking through virtual words. What a user said is translated into 
                    their partner’s language, while the sentiment, personality, and emotional
                    analysis of the conversation is used to animate the scenes.             
                </p>

                <div className="project-body__image">
                    <img src="spacechatScreens1.png" alt="mockups of bubbles world in spacechat"/>
                </div>

                <p>
                    There are many things happening at once during a Spacechat session: language is being translated and transmitted, speech is being processed for
                    sentiment and emotion, and this data is being used to control animation. All of this data is transmitted in real time with SocketIO. Redux and vanilla JavaScript are used to control text analysis based animations. We used GoogleTranslate for translation, and Indico for personality, emotion, and sentiment analysis. 
                </p>

                <div className="project-body__image">
                        <img src="spacechatScreens3.png" alt="mockups of cosmos world in spacechat"/>
                </div>

                <p>
                    Spacechat contains many abstract and mysterious visuals. It was important for us to provide a 
                    visual environment that takes the user on a journey to an otherwordly space, while keeping them in the present. Animations were selected based on what best symbolizes the current emotion or dominant personality. For example, in the Bubbles world, “fear” makes the bubbles still, while “surprise”  provokes randomly colored spheres. 
                </p>

                    <div className="project-body__image">
                        <img src="spacechatScreens2.png" alt="mockups of knots world in spacechat"/>
                    </div>
            </div>

            <div className="project-end">

                <div className="project__links">
                            <div className="project__links-icon">
                                <a href="http://www.spacechat.tech" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-link fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="project__links-icon">
                                <a href="https://github.com/space-chat/space-chat" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                            <div className="project__links-icon">
                                <a href="http://www.youtube.com/watch?v=Nbz4PqjrLhg" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-youtube-square fa-5x" aria-hidden="true"></i>
                                </a>
                            </div>

                </div>
            </div>
            <footer> &copy; Keziyah Lewis 2017.</footer>
        </div>
    )
}

export default Spacechat