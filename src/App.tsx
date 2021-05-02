import "./styles.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";
import { AddNewItem } from "./AddNewItem";
import { useAppState } from "./AppStateContext";

export default function App() {
  const { state, dispatch } = useAppState();

  return (
    <AppContainer>
      {state.lists.map((list, i) => (
        <Column text={list.text} key={list.id} index={i} id={list.id} />
      ))}
      {/* <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typings" />
      </Column> */}
      <AddNewItem
        toggleButtonText="+ Add another list"
        onAdd={(text) => dispatch({ type: "ADD_LIST", payload: text })}
      />
    </AppContainer>
  );
}
