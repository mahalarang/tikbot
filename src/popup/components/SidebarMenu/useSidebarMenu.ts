import { useGlobalContext } from "@/popup/context";
import { setSelectedMenu } from "@/popup/context/actions";

const useSidebarMenu = () => {
  const { state, dispatch } = useGlobalContext();

  const handleClickMenu = (id: string) => {
    dispatch(setSelectedMenu(id));
  };

  return { state, handleClickMenu };
};

export default useSidebarMenu;
