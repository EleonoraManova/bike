import { auth } from '../../../utils/firebase';

const Register = ({
    history
}) => {


    const onSubmitHandler = (e) => {
        e.preventDefault();
        const username = e.target.username.value;
        const password = e.target.password.value;
        const repassword = e.target.repassword.value;
        if (password === repassword) {
            auth.createUserWithEmailAndPassword(username, password)
                .then(userCredential => {
                    history.push('/')
                })
                .catch(err => console.log(err))
        } else {
            console.log('passwords dont match');
        }
    }

    return (
        <div className="section-wrapper">
            <h1>Register</h1>

            <form onSubmit={onSubmitHandler}>
                <label htmlFor="username">Username</label>
                <input type="text" id="username" name="username" />
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" />
                <label htmlFor="repassword">Repeat Password</label>
                <input type="password" id="repassword" name="repassword" />
                <input className="button" type="submit" value="Register" />
            </form>
        </div>
    )

}

export default Register;