import { Item, Wrapper } from "./styled";

export const Tags = ({ tags, small }) => {
  if (!tags?.length) return null;

  return (
    <Wrapper $small={small}>
      {tags.map((tag, index) => (
        <Item key={`${tag}-${index}`} $small={small}>
          {tag}
        </Item>
      ))}
    </Wrapper>
  );
};
