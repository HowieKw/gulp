

const SignupForm = () => {

    return (
    <div>

    <form >
    <div className="container">
        <h1>Sign Up</h1>
        <p>Please fill in this form to create an account.</p>
        <hr></hr>

        <label for="email"><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required></input>

        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required></input>


        <div className="clearfix">
        <button type="button" className="cancelbtn">Cancel</button>
        <button type="submit" className="signupbtn">Sign Up</button>
        </div>
    </div>
    </form>

    </div>
    )
}

export default SignupForm;