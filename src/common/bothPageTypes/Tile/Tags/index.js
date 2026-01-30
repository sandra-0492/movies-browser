import { Item, Wrapper } from "./styled";

export const tags = ({ tags, small }) =>
  !!tags?.length && (
    <Wrapper small={small}>
      {tags.map((tag) => (
        <Item key={tag} small={small}>
          {tag}
        </Item>
      ))}
    </Wrapper>
  );
