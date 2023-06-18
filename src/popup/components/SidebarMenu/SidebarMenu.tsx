import styled from "@emotion/styled";
import { menuList } from "./constants";
import useSidebarMenu from "./useSidebarMenu";

const SidebarMenu = () => {
  const { state, handleClickMenu } = useSidebarMenu();

  console.log(state, "INI STATE");
  return (
    <MenuWrapper>
      {menuList.map((menu, i) => (
        <MenuItem
          key={`menu-${i}`}
          active={menu.id === state.selectedMenuId}
          onClick={() => handleClickMenu(menu.id)}
        >
          {menu.name}
        </MenuItem>
      ))}
    </MenuWrapper>
  );
};

const MenuWrapper = styled.ul`
  padding: 0;
  border-right: 1px solid ${({ theme: { colors } }) => colors.whitesmoke};
`;

const MenuItem = styled.li<{ active?: boolean }>`
  padding: 10px;
  cursor: pointer;
  position: relative;

  &:hover {
    ${({ active, theme: { colors } }) =>
      !active && `background-color: ${colors.bgMuted}`}
  }

  ${({ active, theme: { colors } }) =>
    active &&
    `
    background-color: ${colors.black};
    color: ${colors.whitesmoke};
    font-weight: bold;

    &::before, &::after {
        position: absolute;
        content: '';
        left: 0;
        bottom: 0;
        width: 4px;
    }

    &::before {
        top: 0;
        background-color: ${colors.aqua}
    }

    &::after {
        top: 4px;
        background-color: ${colors.red}
    }
    `}
`;

export default SidebarMenu;
