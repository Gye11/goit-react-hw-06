import { useDispatch, useSelector } from "react-redux";
import { addContact, selectContacts } from "../redux/contactsSlice";
import { nanoid } from "nanoid";
import toast from "react-hot-toast";
import "./ContactForm.css";

const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.elements.name.value.trim();
    const number = form.elements.number.value.trim();

    if (!name || !number) {
      toast.error("Please fill all fields ⚠️");
      return;
    }

    const isExist = contacts.some(
      (contact) => contact.name.toLowerCase() === name.toLowerCase(),
    );

    if (isExist) {
      toast.error("This contact already exists ❌");
      return;
    }

    dispatch(
      addContact({
        id: nanoid(),
        name,
        number,
      }),
    );

    toast.success("Contact added 🎉");

    form.reset();
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        className="input"
        name="name"
        placeholder="Enter name"
        autoComplete="off"
        required
      />

      <input
        className="input"
        name="number"
        placeholder="Enter number"
        autoComplete="off"
        required
      />

      <button className="addBtn" type="submit">
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
