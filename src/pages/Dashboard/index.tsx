import { HeaderDashboard } from "../../components/Header";
import { Main } from "../../components/Main/style";
import { SectionDashboard } from "../../components/Section";
import { ListDashboard } from "../../components/List";
import { useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { Container2 } from "./style";
import Modal from "../../components/ModalAddContact";
import ModalEditRemove from "../../components/ModalEditRemove";
import { motion } from "framer-motion";

const Dashboard = () => {
  const {
    handleGetUserById,
    isModalOpen,
    isModalEditOpen,
    setModal,
    currentContact,
    setModalEdit,
  } = useContext(UserContext);

  useEffect(() => {
    handleGetUserById();
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 2 }}
    >
      <Container2>
        {isModalOpen && <Modal setModal={setModal} />}
        {isModalEditOpen && (
          <ModalEditRemove
            currentContact={currentContact}
            setModalEdit={setModalEdit}
          />
        )}

        <HeaderDashboard />
        <Main>
          <SectionDashboard />
          <ListDashboard />
        </Main>
      </Container2>
    </motion.div>
  );
};

export default Dashboard;
