import { HeaderDashboard } from "../../components/Header";
import { Main } from "../../components/Main/style";
import { SectionDashboard } from "../../components/Section";
import { ListDashboard } from "../../components/List";
import { useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { Container, NoContentTitle, ImgDashboard } from "./style";
import Modal from "../../components/ModalAddContact";
import ModalEditRemove from "../../components/ModalEditRemove";
import { motion } from "framer-motion";
import DashboarImg from "../../assets/dashImg.svg";

const Dashboard = () => {
  const {
    contact,
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
      <Container>
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
          {!contact.length ? (
            <>
              <NoContentTitle>Você não possui nenhum contato</NoContentTitle>
              <ImgDashboard src={DashboarImg} alt="" />
            </>
          ) : (
            <ListDashboard />
          )}
        </Main>
      </Container>
    </motion.div>
  );
};

export default Dashboard;
