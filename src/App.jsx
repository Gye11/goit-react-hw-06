import ContactsForm from "./components/ContactsForm.jsx";
import ContactList from "./components/ContactList.jsx";
import SearchBox from "./components/SearchBox.jsx";
import ThemeToggle from "./components/ThemeToggle.jsx"; // 👈 EKLENDİ
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
