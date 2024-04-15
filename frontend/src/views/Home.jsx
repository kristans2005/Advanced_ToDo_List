import { GetData } from '../utils/FetchingData';
import '../index.css';

export function Home() {
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
                <button>Logout</button>
            </navbar>
            <h1>HOME PAGE</h1>
        </>
    );
}
