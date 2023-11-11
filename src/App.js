import { useState } from "react";

// import Navbar from "./components/Navbar"
import { AddContact, EditContact, ViewContact, Contacts, Contact, Navbar} from "./components";

import './App.css';


const App = () => {
  const [loading, setLoading] = useState(false)
  const [getContacts, setContacts] = useState([])

  return (
    <div className="App">
      <Navbar />
      <Contacts contacts={getContacts} loading={loading} />
    </div>
  );
}

export default App;
