const Register = () => {
const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(e.target.username.value);
}

    return(
        <div>
            <h1>Register</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username"/>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password"/>
                <label htmlFor="re-password">Repeat Password</label>
                <input type="password" id="re-password" name="re-password"/>
                <input type="submit" value="Register"/>
            </form>
        </div>
    )

}

export default Register;