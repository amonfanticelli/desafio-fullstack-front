import { HeaderDashboard } from "../../components/Header";
import { Main } from "../../components/Main/style";
import { SectionDashboard } from "../../components/Section";
import { ListDashboard } from "../../components/List";

const Dashboard = () => {
  // const { handleGetAccountById, handleGetTransactions } =
  //   useContext(UserContext);

  // useEffect(() => {
  //   handleGetAccountById();
  //   handleGetTransactions();
  // }, []);
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
