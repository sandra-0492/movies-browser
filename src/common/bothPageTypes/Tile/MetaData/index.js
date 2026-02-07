import { Key, Row, Value, Wrapper } from "./styled";

export const MetaData = ({ metaData = {}, hideKeysOnMobile }) => {
  const filledMetaData = Object.entries(metaData).filter(([_, value]) => value);

  if (!filledMetaData.length) return null;

  return (
    <Wrapper>
      {filledMetaData.map(([key, value]) => (
        <Row key={`${key}-${value}`}>
          <Key hideKeysOnMobile={hideKeysOnMobile}>{key}:</Key>
          <Value>{value}</Value>
        </Row>
      ))}
    </Wrapper>
  );
};
