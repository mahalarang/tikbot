import styled from "@emotion/styled";
import { css } from "@emotion/css";

const App = () => {
  return (
    <AppContainer>
      <h2>Hello World</h2>
      <h4 className={TextMuted}>This setup using vite + react</h4>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: ${({ theme }) => theme.constants.popupWidth};
  padding: 10px;
`;

const TextMuted = css`
  color: #999;
`;

export default App;
