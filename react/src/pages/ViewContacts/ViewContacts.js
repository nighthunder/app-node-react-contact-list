import React, { useState, useEffect, useRef, Fragment } from 'react';
import { TextField, Button, InputLabel, CircularProgress, useEventCallback } from '@material-ui/core';
import ReadOnlyRow from '../../components/ReadOnlyRow';
import EditableRow from '../../components/EditableRow';
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

    const [editFormData, setEditFormData] = useState({
      name: '',
      email: '',
      phone: '',
      address: ''
    });
    const [editContactId, setEditcontactId] = useState('')
   
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

    const handleEditClick = (event, contact) =>{
      event.preventDefault();
      setEditcontactId(contact.id);

      const formValues = {
        name: contact.name,
        email: contact.email,
        phone: contact.phone,
        address: contact.address,
      }

      setEditFormData(formValues);
    }

    const handleEditFormChange = (event) =>{
      event.preventDefault();

      const fieldName = event.target.getAttribute('name');
      const fieldValue = event.target.value;
      const newFormData = {...editFormData};
      newFormData[fieldName] = fieldValue;
      console.log("newEditedFormData", newFormData);
      setEditFormData(newFormData);
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
      //console.log("param", newContact);

      const response = await api.post('/add/',newContact).catch( function(error){
        console.log(error);
      })

      if(response){
        console.log("Response description", response.data);
        //console.log("Response description", contacts);
      }
    }

    const handleEditFormSubmit = async function(event){
      event.preventDefault();

      const editedContact = {
        id: editContactId,
        name: editFormData.name,
        email: editFormData.email,
        phone: editFormData.phone,
        address: editFormData.address,
      }

      const newContacts = [...contacts];

      const index = contacts.findIndex( (contact) => contact.id === editContactId);

      newContacts[index] = editedContact;

      console.log("contato editado", editedContact);
      console.log("editContactId", editContactId);

      setContacts(newContacts);
      setEditcontactId(null);

      const response = await api.post('/edit/'+editContactId,editedContact).catch( function(error){
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
            <div className="inputRow"><InputLabel className="inputLabel">Nome:</InputLabel><TextField name="name" onChange={handleAddContactChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Email:</InputLabel><TextField name="email" onChange={handleAddContactChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Telefone:</InputLabel><TextField name="phone" onChange={handleAddContactChange}></TextField></div>
            <div className="inputRow"><InputLabel className="inputLabel">Endereço:</InputLabel><TextField name="address" onChange={handleAddContactChange}></TextField></div>
            <Button className="btnSubmit" variant="contained" type="submit" color="primary" disabled={!addcontacts}>Adicionar
            </Button>
        </form> 
        {/* Daria para colocar um Datatables aqui mas não tive tempo */}
        <form onSubmit={handleEditFormSubmit} className="formTable">
          <table> 
            <thead>
              <tr>
                <th>#</th>
                <th>Nome </th>
                <th>Email</th>
                <th>Telefone</th>
                <th>Endereço</th>
                <th>Editar</th>
                <th>Remover</th>
              </tr>
            </thead>
            <tbody>
              { 
                contacts.map( contact =>(
                  <Fragment>
                    {editContactId === contact.id ? (<EditableRow editFormData={editFormData} handleEditFormChange={handleEditFormChange}></EditableRow>) : (<ReadOnlyRow contact={contact} handleEditClick={handleEditClick}></ReadOnlyRow>)} 
                  </Fragment> 
                )) 
              }
            </tbody>
          </table>  
        </form>
      </div>
    );
}

export default ViewContacts