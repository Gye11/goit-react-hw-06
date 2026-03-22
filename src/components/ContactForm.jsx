import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../redux/contactsSlice.js";
import { nanoid } from "nanoid";
import "./ContactForm.css";

const ContactsForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isExist) {
      alert("This contact already exists!");
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      }),
    );

    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input className="input" name="name" placeholder="Name" required />
      <input className="input" name="number" placeholder="Number" required />
      <button className="addBtn" type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactsForm;
