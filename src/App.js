import { useState, useEffect } from "react";
import { Route, Routes, useNavigate, Navigate } from "react-router-dom";
import axios from "axios";

// import Navbar from "./components/Navbar"
import { AddContact, EditContact, ViewContact, Contacts, Contact, Navbar } from "./components";

import { getAllContacts, getAllGroups, createContact } from "./services/contactService";

import './App.css';


const App = () => {
  const [loading, setLoading] = useState(false);
  const [getContacts, setContacts] = useState([]);
  const [getGroups, setGroups] = useState([]);
  const [getContact, setContact] = useState({
    fullname: "",
    photo: "",
    mobile: "",
    email: "",
    job: "",
    group: "",
  });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        // const response = await axios.get("http://localhost:9000/contacts");
        // const {data : contactsData} = await axios.get("http://localhost:9000/contacts");
        const { data: contactsData } = await getAllContacts();
        // const {data : groupsData} = await axios.get("http://localhost:9000/groups");
        const { data: groupsData } = await getAllGroups();

        setContacts(contactsData);
        setGroups(groupsData);

        setLoading(false);
        // console.log(response);
      } catch (err) {
        console.log(err.messsage);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const createContactForm = async (event) => {
    event.preventDefault();
    try{
       const {status} = await createContact(getContact);
       if(status === 201){
        setContact({});
        navigate("/contacts");
       }
    } catch (err){
      console.log(err.messsage);
    }
  }

  const setContactInfo = (event) => {
    setContact({ ...getContact, [event.target.name]: event.target.value });
  }

  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/" element={<Navigate to="/contacts" />} />
        <Route path="/contacts" element={<Contacts contacts={getContacts} loading={loading} />} />
        <Route path="/contacts/add" element={<AddContact loading={loading} setContactInfo={setContactInfo} contact={getContact} groups={getGroups} createContactForm={createContactForm}/>} />
        <Route path="/contacts/:contactId" element={<Contact />} />
        <Route path="/contacts/edit/:contactId" element={<EditContact />} />
      </Routes>

      {/* be commented for implementing the routes: */}
      {/* <Contacts contacts={getContacts} loading={loading} /> */}
    </div>
  );
}

export default App;
