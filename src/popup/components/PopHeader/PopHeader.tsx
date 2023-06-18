import styled from "@emotion/styled";
import { cx } from "@emotion/css";
import { TiktokTextStyle, TextLight } from "@styles/text";

const PopHeader = () => {
  return (
    <Header>
      <h2 className={cx(TextLight, TiktokTextStyle)}>Tikbot</h2>
    </Header>
  );
};

const Header = styled.header`
  padding: 10px;
  background-color: ${({ theme: { colors } }) => colors.black};
  position: relative;
  margin-bottom: 10px;

  &::before,
  &::after {
    position: absolute;
    content: "";
    height: 4px;
    top: 0;
    right: 0;
  }

  &::before {
    width: 25px;
    background-color: ${({ theme: { colors } }) => colors.aqua};
  }

  &::after {
    width: 18px;
    background-color: ${({ theme: { colors } }) => colors.red};
  }
`;
export default PopHeader;
