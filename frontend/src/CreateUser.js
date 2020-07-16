import React from 'react'
import {useMutation} from 'react-apollo';
import {gql} from 'apollo-boost';

const CREATE_USER=gql`
    mutation createUser($name:String!,$lastName:String!){
        createUser(name:$name,lastName:$lastName){
            id
            name
            lastName
        }
    }
`;

export function CreateUser(){
    let inputName, inputLastName;
    const [createUser,{data}]=useMutation(CREATE_USER);
    return(
        <div>
            <form
                onSubmit={e=>{
                    e.preventDefault();
                    createUser({variables:{
                        name: inputName.value,
                        lastName: inputLastName.value
                    }});
                    inputName.value='';
                    inputLastName.value='';
                    window.location.reload();                 
                }}
                style={{marginTop: '2em',marginBottom:'2em'}}
                >
                <label>Name: </label>
                <input
                    ref={node=>{
                        inputName=node;
                    }}
                    style={{marginRight: '1em'}}
                />

                <label>Last Name: </label>
                <input
                    ref={node=>{
                        inputLastName=node;
                    }}
                    style={{marginRight:'1em'}}
                />
                <button type="submit" style={{cursor:'pointer'}}>Add a User</button>
            </form>
        </div>
    );
}
