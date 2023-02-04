import { Section } from "./style";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

export const SectionDashboard = () => {
  const { setModal, isModalOpen } = useContext(UserContext);
  return (
    <Section>
      <h1>Adicione seus contatos</h1>
      <button onClick={() => setModal(!isModalOpen)}>clique aqui</button>
    </Section>
  );
};
