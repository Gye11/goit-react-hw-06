import { useSelector } from "react-redux";
import { selectContacts } from "../redux/contactsSlice";
import { selectNameFilter } from "../redux/filtersSlice";
import Contact from "./Contact";
import { motion, AnimatePresence } from "framer-motion";

const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter.toLowerCase()),
  );

  if (filteredContacts.length === 0) {
    return <p className="empty">No contacts found 📭</p>;
  }

  return (
    <ul className="list">
      <AnimatePresence>
        {filteredContacts.map((contact) => (
          <motion.li
            key={contact.id}
            className="item"
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, x: 100 }}
            transition={{ duration: 0.3 }}
          >
            <Contact contact={contact} />
          </motion.li>
        ))}
      </AnimatePresence>
    </ul>
  );
};

export default ContactList;
