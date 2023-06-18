import { useState } from "react";

const useSiteGuard = () => {
  const [isTiktokSite, setIsTiktokSite] = useState<boolean>(false);

  chrome.tabs.query({ active: true }, ([tab]: chrome.tabs.Tab[]) => {
    if (tab.status === "complete" && /tiktok.com/i.test(tab.url || "")) {
      setIsTiktokSite(true);
    } else {
      setIsTiktokSite(false);
    }
  });

  return { isTiktokSite };
};

export default useSiteGuard;
