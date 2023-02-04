import { Header, ContainerHeader } from "./style";

// import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const HeaderDashboard = () => {
  //   const { logout } = useContext(UserContext);
  return (
    <Header>
      <ContainerHeader>
        <h2>Bem Vindo</h2>
        <button>Logout</button>
      </ContainerHeader>
    </Header>
  );
};
