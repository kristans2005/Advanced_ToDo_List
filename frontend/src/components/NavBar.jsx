


export default function NavBar(){


    return (

    <nav className="bg-gray-200 flex w-full h-16 gap-4 items-center justify-center ">
        <a href="/Signup">
            <button>Signup</button>
        </a>
        <a href="/Login">
            <button>Login</button>
        </a>
        <a href="/Home">
            <button>Home</button>
        </a> 
        <a href="/Usersettings">
            <button>User Settings</button>
        </a>    
       
    </nav>
    );
}