import "./App.css";
import ContactsForm from "./components/ContactForm.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";

function App() {
  return (
    <div className="container">
      <h1 className="title">📱 Phonebook</h1>

      <ContactsForm />

      <h2 className="subtitle">Contacts</h2>

      <SearchBox />

      <ContactList />
    </div>
  );
}

export default App;
