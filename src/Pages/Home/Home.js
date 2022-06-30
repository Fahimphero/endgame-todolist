import React, { useEffect, useState } from 'react';
import { InputGroup, Form, DropdownButton, Dropdown } from 'react-bootstrap';

const Home = () => {

    const [tasks, SetTasks] = useState([]);
    const [task, SetTask] = useState({});
    const [value, SetValue] = useState(true);
    const [singleid, setSingleId] = useState('');
    const [singleData, setSingleData] = useState({});

    const [data, setData] = useState('');
    // console.log(data);

    useEffect(() => {
        fetch('https://warm-sands-64819.herokuapp.com/tasks')
            .then(res => res.json())
            .then(data => SetTasks(data))
    }, [tasks])

    useEffect(() => {
        fetch(`https://warm-sands-64819.herokuapp.com/tasks/${singleid}`)
            .then(res => res.json())
            .then(data => setSingleData(data))
    }, [])


    const handleChange = (event) => {
        console.log(event.target.value)
        setData(event.target.value)

    }

    const handleUpdate = (id) => {
        console.log(id)
        console.log(data)


        const update = { data }
        console.log(update)

        const url = `https://warm-sands-64819.herokuapp.com/tasks/${id}`




        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'

            },
            body: JSON.stringify(update)

        })

            .then(res => res.json())
            .then(data => {
                console.log('success', data);
                // alert('Quantity updated successfully');

            })


    }


    const handleKeyDown = (event) => {
        //    event.preventDefault();
        // 
        if (event.key === 'Enter') {
            const data = event.target.value;
            console.log(data);

            const url = `https://warm-sands-64819.herokuapp.com/tasks`
            fetch(url, {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({ data })
            })
                .then(res => res.json())
                .then(result => {
                    console.log(result)
                    event.target.value = ' ';
                })

        }

    }

    const handleEdit = () => {
        SetValue(false)
    }

    const handleRadio = (id) => {
        setSingleId(id)
        console.log(id)
        console.log(singleData)
    }



    return (
        <div style={{ height: '75vh' }} className='container'>
            <div className='w-75 mx-auto'>
                <h2 className='pt-5'>To-Do</h2>
                <InputGroup className="mb-3" onKeyDown={handleKeyDown}>
                    <Form.Control aria-label="Text input with dropdown button" placeholder='Add Task' />


                </InputGroup>

                {
                    tasks.map(t => <div key={t._id} className="input-group mb-3">
                        <div className="input-group-text">
                            <input className="form-check-input mt-0" type="radio" value="" onClick={() => handleRadio(t._id)} aria-label="Radio button for following text input"></input>
                        </div>
                        <input type="text" onBlur={handleChange} defaultValue={t.data} disabled={value} className="form-control" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1"></input>
                        <button onClick={() => handleUpdate(t._id)} className="btn btn-outline-secondary" type="button" id="button-addon1">Update</button>
                        <button onClick={handleEdit} className="btn btn-outline-secondary" type="button" id="button-addon1">Edit</button>
                    </div>)

                }
                {/* <InputGroup className="mb-3">
                <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                <Form.Control aria-label="Text input with checkbox" />
            </InputGroup> */}
                {/* <div class="input-group mb-3">
                    <div class="input-group-text">
                        <input class="form-check-input mt-0" type="checkbox" value="" aria-label="Checkbox for following text input"></input>
                    </div>
                    <input type="text" class="form-control" aria-label="Text input with checkbox"></input>
                </div> */}
            </div>
        </div>
    );
};

export default Home;