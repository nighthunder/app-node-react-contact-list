import React, { useState, useEffect, useRef } from 'react';
import { TextField, Button, InputLabel, CircularProgress, useEventCallback } from '@material-ui/core';
import './styles.css';
import api from '../../services/api';

const ViewContacts = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [contacts, setContacts] = useState([]);
    const [addcontacts, setAddContacts] = useState({
      name: '',
      email: '',
      phone: '',
      address: ''
    });

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

    const handleAddContactChange = (e) => {
      e.preventDefault();

      const fieldName = e.target.getAttribute('name');
      const fieldValue = e.target.value;

      const newFormData = {...addcontacts};
      newFormData[fieldName] = fieldValue;
      console.log("newFormData", newFormData);
      setAddContacts(newFormData);


    }

    const handleAddContactSubmit = async function (event) {
      event.preventDefault();
      const newContact = {
        name: addcontacts.name,
        phone: addcontacts.phone,
        email: addcontacts.email,
        address: addcontacts.address
      }

      const newContacts = [...contacts, newContact];
      setContacts(newContacts);
      console.log("param", newContact);

      const response = await api.post('/add/',newContact).catch( function(error){
        console.log(error);
      })

      if(response){
        console.log("Response description", response.data);
        //console.log("Response description", contacts);
      }
    }

    return (
      <div className="container">
        <form className="module" onSubmit={handleAddContactSubmit}>
            <h1 className="formTitle">Adicionar um novo contato</h1>
            <div className="inputRow"><InputLabel className="inputLabel">Nome:</InputLabel><TextField name="name" onChange={handleAddContactChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Email:</InputLabel><TextField name="email" onChange={handleAddContactChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Telefone:</InputLabel><TextField name="phone" onChange={handleAddContactChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Address:</InputLabel><TextField name="address" onChange={handleAddContactChange}></TextField></div>
            <Button className="btnSubmit" variant="contained" type="submit" color="primary" disabled={!addcontacts}>Adicionar
            </Button>
        </form> 
        {/* Daria para colocar um Datatables aqui mas não tive tempo */}
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
                    <td>#</td>
                    <td>{q.name}</td>
                    <td>{q.email}</td>
                    <td>{q.phone}</td>
                    <td>{q.address}</td>
                    <td className="closeIcon">X</td> {/* Colocaria um icon from react mui */}
                  </tr>);
              }) 
            }
          </tbody>
        </table>  
      </div>
    );
}

export default ViewContacts