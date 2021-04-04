import firebase, {auth} from '../../../utils/firebase'


const Login = ({
    history
}) => {
    const onSubmitHandler = (e) => {
        e.preventDefault();

        const username = e.target.username.value;
        const password = e.target.password.value;
        console.log(username, password);

        auth.signInWithEmailAndPassword(username, password)
        .then((userCredential) => {
            history.push('/')
        })
        .catch(err=> console.log(err))

    }

    return (
        <div>
            <h1>Login</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <input type="submit" value="Login" />
            </form>
        </div>
    )

}

export default Login;