import { List, ListItem } from "./style";
import { RiFileEditLine } from "react-icons/ri";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const ListDashboard = () => {
  const { contact, setModalEdit, setCurrentContact, isModalEditOpen } =
    useContext(UserContext);
  return (
    <List>
      {contact.map((contact) => (
        <ListItem key={contact.id}>
          <h2> {contact.fullName}</h2>
          <span>{contact.cellphone}</span>
          <button
            onClick={() => {
              setModalEdit(!isModalEditOpen);
              setCurrentContact(contact);
            }}
          >
            <RiFileEditLine />
          </button>
        </ListItem>
      ))}
    </List>
  );
};
