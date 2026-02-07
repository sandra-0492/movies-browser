import {
  ContentWrapper,
  Description,
  Image,
  SubTitle,
  Title,
  Wrapper,
} from "./styled";
import { Vote } from "../Vote";
import { Tags } from "./Tags";
import { MetaData } from "./MetaData";

export const Tile = ({
  image,
  imagePlaceholder,
  title,
  subtitle,
  metaData,
  hideMetaDataKeysOnMobile,
  tags,
  vote,
  description,
  small,
  center,
  twoColumnsOnMobile,
  stretchVertically,
}) => (
  <Wrapper
    $small={small}
    $center={center}
    $twoColumnsOnMobile={twoColumnsOnMobile}
  >
    <Image
      $url={image || imagePlaceholder}
      $noImage={!image && !imagePlaceholder}
    />

    <ContentWrapper $stretchVertically={stretchVertically}>
      <div>
        <Title $small={small}>{title}</Title>

        {!!subtitle && (
          <SubTitle $small={small}>{subtitle}</SubTitle>
        )}

        <MetaData
          metaData={metaData}
          hideMetaDataKeysOnMobile={hideMetaDataKeysOnMobile}
        />

        <Tags tags={tags} small={small} />
      </div>

      <Vote small={small} vote={vote} />
    </ContentWrapper>

    {description?.trim() && <Description>{description}</Description>}
  </Wrapper>
);
