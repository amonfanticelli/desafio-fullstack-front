import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IClient, IClientLogin, IContact, UserProps } from "../interfaces";

export interface UserProviderData {
  handleRegister: (data: IClient) => void;
  handleLogin: (data: IClientLogin) => void;
  handleGetUserById: () => void;
  handlePostContact: (data: IContact) => void;
  handleEditContact: (data: IContact) => void;
  handleRemoveContact: (currentContact: IContact) => void;
  contact: IContact[];
  currentContact: IContact;
  setCurrentContact: React.Dispatch<React.SetStateAction<IContact>>;
  isModalOpen: boolean;
  isModalEditOpen: boolean;
  setModal: React.Dispatch<React.SetStateAction<boolean>>;
  setModalEdit: React.Dispatch<React.SetStateAction<boolean>>;
  logout: () => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const [client, setClient] = useState<IClient>({} as IClient);
  const [contact, setContactList] = useState<IContact[]>([]);
  const [currentContact, setCurrentContact] = useState<IContact>(
    {} as IContact
  );
  const [isModalOpen, setModal] = useState(false);
  const [isModalEditOpen, setModalEdit] = useState(false);

  const navigate = useNavigate();

  const accountCreated = () =>
    toast.success("Conta criada com sucesso!", { autoClose: 1000 });

  const accountError = () =>
    toast.error("Ops! email já cadastrado", {
      autoClose: 1000,
      position: "top-left",
    });

  const passwordOrEmailError = () =>
    toast.error("Senha ou email incorreto!", { autoClose: 1000 });

  const contactCreated = () =>
    toast.success("Contato criado com sucesso!", { autoClose: 1000 });

  const contactEdited = () =>
    toast.success("Contato editado com sucesso!", { autoClose: 1000 });

  const contactRemoved = () =>
    toast.error("Contato removido com sucesso!", { autoClose: 1000 });

  const handleRegister = async (data: IClient) => {
    await api
      .post("/users", data)
      .then((response) => {
        if (response.status === 201) {
          accountCreated();
          return navigate("/");
        }
      })
      .catch((err) => accountError());
  };

  const handleLogin = (data: IClientLogin) => {
    api
      .post("/session", data)
      .then((response) => {
        if (response.status === 200) {
          window.localStorage.setItem("@token", response.data.token);
          window.localStorage.setItem("@userId", response.data.client.id);
          navigate(`/dashboard`);
        }
      })
      .catch((err) => passwordOrEmailError());
  };

  const handleGetUserById = () => {
    const token = localStorage.getItem("@token");
    api
      .get("/user", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        const userData = {
          fullName: response.data.fullName,
          email: response.data.email,
          cellphone: response.data.cellphone,
        };
        setClient(userData);
        setContactList(response.data.contacts);
      })

      .catch((err) => console.warn(err));
  };

  const handlePostContact = (data: IContact): void => {
    const token = localStorage.getItem("@token");

    api
      .post("/contacts", data, {
        headers: { Authorization: `Bearer ${token}` },
      })

      .then((response) => {
        contactCreated();
        handleGetUserById();
        setModal(false);
      })
      .catch((err) => console.warn(err));
  };

  const handleEditContact = (data: IContact) => {
    const token = localStorage.getItem("@token");
    api
      .patch(`/contacts/${currentContact.id}`, data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        contactEdited();
        handleGetUserById();
        setModalEdit(false);
      })
      .catch((err) => console.warn(err));
  };

  const handleRemoveContact = (currentContact: IContact) => {
    const token = localStorage.getItem("@token");
    api
      .delete(`/contacts/${currentContact.id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        contactRemoved();
        handleGetUserById();
      });
  };

  const logout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        handleRegister,
        handleLogin,
        handleGetUserById,
        handlePostContact,
        handleEditContact,
        handleRemoveContact,
        contact,
        currentContact,
        setCurrentContact,
        isModalOpen,
        setModal,
        isModalEditOpen,
        setModalEdit,
        logout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
