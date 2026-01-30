import { Container } from "../Container";
import { Header } from "../Header";
import { Content } from "./Content";

export const Page = ({ title, status, children }) => (
  <>
    {title && (
      <Container>
        <Header as="h1">{title}</Header>
      </Container>
    )}
    <Content status={status}>{children}</Content>
  </>
);
