//STYLES
import { ContainerHome, HomeColumns, AddColumnBtn, Buttons } from "./styles";

//CONTEXT
import { useAuthValue } from "../../context/AuthContext";

//HOOKS
import { useFetchDocuments } from "../../hooks/useFetchDocuments";
import { Link } from "react-router-dom";

//COMPONENTS
import Columns from "../../components/Columns";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { documents: columns } = useFetchDocuments("columns", user.uid);

  const handleCreate = () => {
    navigate("/card/create");
  };

  return (
    <ContainerHome>
      <h1>To Do List</h1>
      <Buttons>
        <AddColumnBtn onClick={() => handleCreate()}>Add Column</AddColumnBtn>
      </Buttons>
      <HomeColumns>
        {columns &&
          columns.map((column, i) => {
            return (
              <>
                <Link to={`card/${column.id}`}>ver Mais</Link>
                <Columns key={i} color={column.color} columnsId={columns[i].id}>
                  {column.nameColumn}
                </Columns>
              </>
            );
          })}
      </HomeColumns>
    </ContainerHome>
  );
};

export default Home;
