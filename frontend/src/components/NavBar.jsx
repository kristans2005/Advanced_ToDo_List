import gear from "../assets/gear.png";
export default function NavBar() {
    return (
        <nav className="bg-gray-200 flex w-full h-16 gap-4 items-center justify-center ">
            <a href="/Home">
                <button>Home</button>
            </a>
            <a href="/Usersettings">
                <img src={gear}></img>
            </a>
        </nav>
    );
}
