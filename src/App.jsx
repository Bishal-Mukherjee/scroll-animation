import "./App.css";
import StickyLayout from "./StickyLayout";
import { TextComponent } from "./TextComponent";

function App() {
  return (
    <>
      <TextComponent length={2} />
      <StickyLayout />
      <TextComponent length={3} />
    </>
  );
}

export default App;
