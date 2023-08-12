export default function Feature_2() {
    return (
        <div className="feature-1">
            <div className="feature-1-details feature-2-details">
                <h1 className="feature-heading">Choose how you want to work</h1>
                <p className="feature-details">In Slack, you've got all the flexibility to work when, where and how it's best for you. You can easily chat, send audio and video clips, or join a huddle to talk things through live.</p>
                <div className="learn">
                    <p className="learn-more">Learn more about flexible communication</p>
                    <img width="30" height="30" src="https://img.icons8.com/ios/50/1264A3/long-arrow-right--v1.png" alt="long-arrow-right--v1" />
                </div>
            </div>
            <video src="src\assets\feature-2.webm" className="feature-1-video" muted autoPlay loop typeof="video/mp4"></video>
        </div>
    )
}