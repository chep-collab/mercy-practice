import axios from 'axios';
async function fetchData() {
    try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        console.log('fetched users:');
        console.log(response.data);
    } catch (error) {
        console.error('error fetching data', error); 
    }
}
fetchData();
//prints a message to the consolen