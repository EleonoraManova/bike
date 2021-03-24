const Login = () => {
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.username.value);
    }
    
        return(
            <div>
                <h1>Login</h1>
    
                <form onSubmit={onSubmitHandler}>
                    <label htmlFor="username">Username</label>
                    <input type="text" id="username" name="username"/>
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password"/>
                    <input type="submit" value="Login"/>
                </form>
            </div>
        )
    
    }
    
    export default Login;