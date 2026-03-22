import { useDispatch } from "react-redux";
import { deleteContact } from "../redux/contactsSlice";
import toast from "react-hot-toast";

const Contact = ({ contact }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(contact.id));
    toast.success("Contact deleted ❌");
  };

  return (
    <div className="contact">
      <div>
        <div className="name">{contact.name}</div>
        <div className="number">{contact.number}</div>
      </div>

      <button className="deleteBtn" onClick={handleDelete}>
        Delete
      </button>
    </div>
  );
};

export default Contact;
