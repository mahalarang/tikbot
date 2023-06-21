import { useMemo } from "react";
import { menuList } from "./components/SidebarMenu/constants";
import { useGlobalContext } from "./context";

const useApp = () => {
  const {
    state: { selectedMenuId },
  } = useGlobalContext();

  const selectedMenu = useMemo<(typeof menuList)[0] | ObjectEmpty>(() => {
    const menu = menuList.find((m) => m.id === selectedMenuId);

    return menu || {};
  }, [selectedMenuId]);

  return { selectedMenu };
};

export default useApp;
