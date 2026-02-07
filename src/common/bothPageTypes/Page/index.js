import { Container } from "../Container";
import { Header } from "../Header";
import { Content } from "./Content";

export const Page = ({ title, status, children }) => (
  <Container>
    {title && <Header as="h1">{title}</Header>}
    <Content status={status}>{children}</Content>
  </Container>
);

