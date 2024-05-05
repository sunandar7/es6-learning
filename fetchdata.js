// axios.get('https://jsonplaceholder.typicode.com/todos/1')
// .then(res => console.log(res.data));

const fetchingData = async () => {
    const res = await axios.get('https://jsonplaceholder.typicode.com/todos/1');

    console.log(res.data);
};

fetchingData();