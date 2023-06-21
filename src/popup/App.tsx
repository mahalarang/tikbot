import styled from "@emotion/styled";
import PopHeader from "./components/PopHeader";
import SidebarMenu from "./components/SidebarMenu";
import { Box } from "@components/atoms";
import useApp from "./useApp";
import AutoComment from "./views/AutoComment";
import AutoGift from "./views/AutoGift";
import { TextLight, TiktokTextStyle, textCenter } from "@styles/text";
import { margin } from "@styles/space";
import { cx } from "@emotion/css";

const App = () => {
  const { selectedMenu } = useApp();

  return (
    <AppContainer>
      <PopHeader />
      <Box flex>
        <Box width="30%">
          <SidebarMenu />
        </Box>
        <Box width="70%" padding="0 10px 10px 10px">
          <h3
            className={cx(
              TextLight,
              TiktokTextStyle,
              textCenter,
              margin({ bottom: 20 })
            )}
          >
            {selectedMenu.name}
          </h3>
          {selectedMenu.id === "autoComment" && <AutoComment />}
          {selectedMenu.id === "autoGift" && <AutoGift />}
        </Box>
      </Box>
    </AppContainer>
  );
};

const AppContainer = styled.div`
  width: ${({ theme }) => theme.constants.popupWidth};
`;

export default App;
