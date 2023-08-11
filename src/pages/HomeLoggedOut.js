import '../index.css'

// parent

const HomeLoggedOut = () => {
    // const signUpLink = "/sign-up";
    // const logInLink = "/log-in";

return (
    <div className="home-logged-out" id="home-box">
        <h2>Welcome to Tiny Tot MedTracker!</h2>
        <p className="description">
        Tiny Tot MedTracker is a user-friendly tool tailored for parents and caregivers of young children. We offer the ability to effortlessly log the date, time, and dose of a medication given to your child with just a single button click.
        </p>
        <p className="description">
        With an emphasis on simplicity, Tiny Tot ensures that you can efficiently monitor your child's medication intake without the distraction of unnecessary features. We want to make your life easier, so you can focus on what matters most: your child.
        </p>
        {/* <p className="start-links">
            <a href="/sign-up">Sign Up</a> or <a href="/log-in">Log In</a> to get started!
        </p> */}
    </div>
);
}

export default HomeLoggedOut;