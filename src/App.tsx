import {Header} from "./components/Header";
import { GlobalStyles } from './styles/global'
import {Dashboard} from "./components/Dashboard";

export function App() {
  return (
    <>
      <Header/>
      <Dashboard/>
      <GlobalStyles/>
    </>
  );
}

export default App;
