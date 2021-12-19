import React from 'react';

const Form = (props) => {

    const handleChange = e => {
        const {name, value} = e.target;
        //short f/ name = event.target.name; //where e === event 
        //&&
        // value = event.target.name
        props.change(name, value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        props.submit();
    }

    return (
        <form onSubmit={handleSubmit}>
            {/*
            <label>Text
                <input 
                    placeholder=''
                    value={props.values.}
                    name=''
                    onChange={handleChange}
                />
            </label>
            */}
            <label>Name
            <input 
                placeholder='Input name, please.'
                value={props.values.name}
                name='name'
                onChange={handleChange}
            />
            </label>
            
            <label>Email
                <input 
                    placeholder='Input Email, please.'
                    value={props.values.email}
                    name='email'
                    onChange={handleChange}
                />
            </label>

            <label>Role
                <input 
                    placeholder='Input role, please.'
                    value={props.values.role}
                    name='role'
                    onChange={handleChange}
                />
            </label>
            <input type='submit' value='Create your team!' />
            
        </form>
    )

}

export default Form;