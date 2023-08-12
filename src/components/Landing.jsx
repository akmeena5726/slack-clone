

export default function Landing() {
    return (
        <div className="top">
            <nav className="navbar">
                <a href="#" className="logo">
                    <img width="32" height="32" src="https://img.icons8.com/color/48/slack-new.png" alt="slack-new" />
                    slack</a>
                <p className="navtags">Product</p>
                <p className="navtags">Solutions</p>
                <p className="navtags">Enterprise</p>
                <p className="navtags">Resources</p>
                <p className="navtags">Pricing</p>
                <img className="search" width="25" height="25" src="https://img.icons8.com/ios/50/ffffff/search--v1.png" alt="search--v1" />
                <p className="navtags sign-in">Sign In</p>
                <button className="nav-button-left">TALK TO SALES</button>
                <button className="nav-button-right">TRY FOR FREE</button>
            </nav>

            <div className="top-contents">
                <section className="sign-up">
                    <p className="top-heading">Made for peoople.</p>
                    <p className="top-heading prod">Built for productivity.</p>
                    <p className="p-top-details">Connect the right people, find anything that you need and <br />automate the rest. That's work in Slack, your productivity <br />platform.</p>
                    <div className="sign-up-options">
                        <button className="sign-up-email">SIGN UP WITH EMAIL ADDRESS</button>
                        <button className="sign-up-google"><img className="google-logo" width="24" height="24" src="https://img.icons8.com/color/48/google-logo.png" alt="google-logo" />SIGN UP WITH GOOGLE</button>
                    </div>
                    <p className="p-free"><strong>Slack is free to try</strong> for as long as you like</p>
                </section>
                <video src="src\assets\top-video.webm" className="top-video" muted autoPlay loop typeof="video/mp4"></video>
            </div>
        </div>
    )
}