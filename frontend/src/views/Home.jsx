import { GetData } from '../utils/FetchingData';
import SideBar from '../components/SideBar';
import NavBar from '../components/NavBar';
import Footer from '../components/footer';

export function Home() {
    return (
        <div className=''>
            <div>
                <NavBar />
            </div>
            <div className='flex'>
                <div>
                    <SideBar />
                </div>
                <main>
                    <h1>home</h1>
                </main>
            </div>
            <div>
                <Footer />
            </div>
            
        </div>
    );
}
