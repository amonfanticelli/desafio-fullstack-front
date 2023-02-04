import { List, ListItem } from "./style";
import { RiFileEditLine } from "react-icons/ri";
// import { UserContext } from "../../contexts/UserContext";
// import { useContext } from "react";

export const ListDashboard = () => {
  //   const { transaction } = useContext(UserContext);
  return (
    <List>
      <ListItem>
        <h2> nome do fulano</h2>
        <span>celular</span>
        <button>
          <RiFileEditLine />
        </button>
      </ListItem>
    </List>
  );
};
