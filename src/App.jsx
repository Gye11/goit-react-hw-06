import ContactsForm from "./components/ContactsForm";
import ContactList from "./components/ContactList";
import SearchBox from "./components/SearchBox";
import ThemeToggle from "./components/ThemeToggle"; // 👈 EKLENDİ
import "./App.css";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="container">
      <ThemeToggle /> {/* 👈 BURAYA EKLE */}
      <h1 className="title">📱 Phonebook</h1>
      <ContactsForm />
      <SearchBox />
      <ContactList />
      <Toaster position="top-center" />
    </div>
  );
}

export default App;
