import styled from "@emotion/styled";
import PopHeader from "./components/PopHeader";
import SidebarMenu from "./components/SidebarMenu";
import { Box } from "@components/atoms";

const App = () => {
  return (
    <AppContainer>
      <PopHeader />
      <Box flex>
        <Box width="30%">
          <SidebarMenu />
        </Box>
        <Box width="70%">content</Box>
      </Box>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: ${({ theme }) => theme.constants.popupWidth};
`;

export default App;
