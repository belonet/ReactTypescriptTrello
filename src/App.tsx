import "./styles.css";
import { AppContainer } from "./styles";
import { Column } from "./Column";
import { Card } from "./Card";

export default function App() {
  return (
    <AppContainer>
      <Column text="To Do">
        <Card text="Generate app scaffold" />
      </Column>
      <Column text="In Progress">
        <Card text="Learn Typescript" />
      </Column>
      <Column text="Done">
        <Card text="Begin to use static typings" />
      </Column>
    </AppContainer>
  );
}
