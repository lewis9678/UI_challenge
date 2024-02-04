import styled from "styled-components";
import { useTheme } from "./context/theme-context";
import DepositModal from "./pages/depositModal";

function App() {
  const { toggleTheme } = useTheme();
  return (
    <Container className="App">
      <Button onClick={toggleTheme}>toggle theme</Button>
      <DepositModal />
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #bfbfbf;
  overflow: hidden;
`;

const Button = styled.button`
  display: block;
  width: 200px;
  height: 64px;
  line-height: 64px;
  margin: 20px auto 0;
  border-radius: 6px;
  border: none;
  text-align: center;
  font-size: 20px;
  font-weight: 600;
  color: ${(props) => props.theme.reverseColor};
  background-color: ${(props) => props.theme.primaryColor};
  cursor: pointer;
`;

export default App;
