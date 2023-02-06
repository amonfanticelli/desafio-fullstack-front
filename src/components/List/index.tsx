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
          <div>
            <span>Nome: {contact.fullName}</span>
            <span>Celular: {contact.cellphone}</span>
            <span>Email: {contact.email}</span>
          </div>
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
