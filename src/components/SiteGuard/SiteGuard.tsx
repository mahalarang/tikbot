import React from "react";
import styled from "@emotion/styled";
import useSiteGuard from "./useSiteGuard";
import fundations from "@/utils/theme/fundations";

interface SiteGuardProps {
  children: React.ReactNode;
}

const SiteGuard: React.FC<SiteGuardProps> = ({ children }) => {
  const { isTiktokSite } = useSiteGuard();

  if (isTiktokSite) return children;

  return (
    <Container>
      <p>Tiktok is not detected!</p>
    </Container>
  );
};

const Container = styled.div`
  width: ${fundations.constants.popupWidth};
  padding: 10px;
  text-align: center;

  > p {
    font-size: 1rem;
    color: #888;
  }
`;

export default SiteGuard;
