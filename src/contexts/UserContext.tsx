import { createContext, useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IClient, IClientLogin, UserProps } from "../interfaces";

export interface UserProviderData {
  handleRegister: (data: IClient) => void;
  handleLogin: (data: IClientLogin) => void;
}

export const UserContext = createContext<UserProviderData>(
  {} as UserProviderData
);

export const UserProvider = ({ children }: UserProps) => {
  const [login, setLogin] = useState<IClientLogin>();

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

  const handleRegister = async (data: IClient) => {
    await api
      .post("users", data)
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
          setLogin(response.data.user);
          window.localStorage.setItem("@token", response.data.token);
          window.localStorage.setItem("@userId", response.data.client.id);
          navigate(`/dashboard`);
        }
      })
      .catch((err) => passwordOrEmailError());
  };

  return (
    <UserContext.Provider value={{ handleRegister, handleLogin }}>
      {children}
    </UserContext.Provider>
  );
};
