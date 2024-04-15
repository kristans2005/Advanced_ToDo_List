import '../index.css';
// login using username or gmail
// password
//add link to a "forgot password" under login btn

function Login() {
    return (
        <>
            {/* navbar visur jaieliek */}
            <navbar className="navbar">
                <a href="/Signup">
                    <button>Signup</button>
                </a>
                <a href="/Login">
                    <button>Signup</button>
                </a>
                <a href="/Home">
                    <button>Home</button>
                </a>
            </navbar>
            <h1>login</h1>
        </>
    );
}

export default Login;
