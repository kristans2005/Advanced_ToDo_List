import axios from 'axios';


//Neesmu vēl iztestējis vai strādā
export async function SendData(BCUrl, input){
    try {
        const response = await axios.post(BCUrl, input);
        console.log(response.data);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}

export async function GetData(BCUrl, input){
    try {
        const response = await axios.get(BCUrl, input);
        console.log(response.data);
    } catch (error) {
        console.error('Error submitting form:', error);
    }
}