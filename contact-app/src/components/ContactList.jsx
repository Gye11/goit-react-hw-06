import { useSelector } from "react-redux";
import { selectContacts } from "./redux/contactsSlice";
import { selectNameFilter } from "./redux/filtersSlice";
import Contact from "./Contact";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  if (filteredContacts.length === 0) {
    return <p>No contacts found</p>;
  }

  return (
    <ul className="list">
      {filteredContacts.map((contact) => (
        <li key={contact.id} className="item">
          <Contact contact={contact} />
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
