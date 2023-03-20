//STYLES
import {
  ContainerHome,
  Loading,
  HomeColumns,
  Buttons,
  DivClick,
} from "./styles";

//CONTEXT
import { useAuthValue } from "../../context/AuthContext";

//HOOKS
import { useFetchDocuments } from "../../hooks/useFetchDocuments";

//COMPONENTS
import Columns from "../../components/Columns";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const { user } = useAuthValue();
  const navigate = useNavigate();
  const { documents: columns, loading } = useFetchDocuments(
    "columns",
    user.uid
  );

  const handleCreate = () => {
    navigate("/card/create");
  };

  console.log(loading);

  return (
    <ContainerHome>
      <h1>To Do List</h1>
      <Buttons>
        <button onClick={() => handleCreate()}>Add Column</button>
      </Buttons>
      <HomeColumns>
        {columns &&
          columns.map((column, i) => {
            return (
              <DivClick onClick={() => navigate(`card/${column.id}`)} key={i}>
                <Columns
                  color={column.color}
                  idColumn={columns[i].id}
                  home={true}
                >
                  {column.nameColumn}
                </Columns>
              </DivClick>
            );
          })}
        {(loading || !columns) && (
          <Loading>
            <p>Loading...</p>
          </Loading>
        )}
      </HomeColumns>
    </ContainerHome>
  );
};

export default Home;
