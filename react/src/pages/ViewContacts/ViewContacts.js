import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, InputLabel, CircularProgress } from '@material-ui/core';
import './styles.css';
import api from '../../services/api';

const ViewContacts = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [contacts, setContacts] = useState([]);

    useEffect(() => {
      async function loadContacts(){

        const response = await api.get('/').catch( function(error){
          console.log(error)
        })

        if(response){
          setContacts(response.data);
          console.log("Response description", response.data);
          //console.log("Response description", contacts);
        }

      }
      loadContacts();
    }, []);  

    function handleSubmit(){

    }

    function handleNameChange(e){
      setName(e.target.value);
    }

    function handleEmailChange(e){
      setEmail(e.target.value);
      
    }

    function handlePhoneChange(e){
      setPhone(e.target.value)
    }

    function handleAddressChange(e){
      setAddress(e.target.value)
    }

    return (
      <div className="container">
        <form className="module" onSubmit={handleSubmit}>
            <h1 className="formTitle">Adicionar um novo contato</h1>
            <div className="inputRow"><InputLabel className="inputLabel">Nome:</InputLabel><TextField name="name" value={name} onChange={handleNameChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Email:</InputLabel><TextField name="email" value={email} onChange={handleEmailChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Telefone:</InputLabel><TextField name="phone" value={phone} onChange={handlePhoneChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Address:</InputLabel><TextField name="address" value={address} onChange={handleAddressChange}></TextField></div>
            <Button className="btnSubmit" variant="contained" type="submit" color="primary" disabled={!name && !email && !phone && !address}>Adicionar
            </Button>
        </form>   
        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Nome </th>
              <th>Email</th>
              <th>Telefone</th>
              <th>Endereço</th>
              <th>Remover</th>
            </tr>
          </thead>
          <tbody>
            { 
              contacts.map( q =>{
                  return(<tr>
                    <td>{q.id}</td>
                    <td>{q.name}</td>
                    <td>{q.email}</td>
                    <td>{q.phone}</td>
                    <td>{q.address}</td>
                    <td className="closeIcon">X</td>
                  </tr>);
              }) 
            }
          </tbody>
        </table>  
      </div>
    );
}

export default ViewContacts