import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function App() {
    const navigate = useNavigate();

    useEffect(() => {
        console.log(localStorage.getItem('user'));
        if(localStorage.getItem('user') != "null"){
            navigate('/home');
        }else{
            navigate('/signup');
        }
        
    }, [navigate]);

    return null;
}

export default App;
