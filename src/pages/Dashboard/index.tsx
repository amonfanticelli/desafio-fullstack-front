import { HeaderDashboard } from "../../components/Header";
import { Main } from "../../components/Main/style";
import { SectionDashboard } from "../../components/Section";
import { ListDashboard } from "../../components/List";
import { useEffect } from "react";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";

const Dashboard = () => {
  const { handleGetUserById } = useContext(UserContext);

  useEffect(() => {
    handleGetUserById();
  }, []);
  return (
    <>
      <HeaderDashboard />
      <Main>
        <SectionDashboard />
        <ListDashboard />
      </Main>
    </>
  );
};

export default Dashboard;
