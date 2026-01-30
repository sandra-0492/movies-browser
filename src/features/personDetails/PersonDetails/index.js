import { useSelector } from "react-redux";
import { selectors } from "../personDetailsSlice";
import { getImageUrl } from "../../../common/bothPageTypes/TMDb/getImageUrl";
import { Movies } from "../../../common/bothPageTypes/Movies";
import { Container } from "../../../common/bothPageTypes/Container";
import { Tile } from "../../../common/bothPageTypes/Tile";
import { Header } from "../../../common/bothPageTypes/Header";
import personPlaceholder from "../../../common/bothPageTypes/images/personPlaceholder.png";

export function PersonDetails() {
  const person = useSelector(selectors.selectDetails);

  const personMetaData = {
    "Date of birth": person.birthday,
    "Place of birth": person.place_of_birth,
    "Date of death": person.deathday,
  };

  return (
    <Container>
      <Tile
        image={getImageUrl({
          path: person.profile_path,
          size: "medium",
        })}
        imagePlaceholder={personPlaceholder}
        title={`${person.name} (${person.known_for_department})`}
        metaData={personMetaData}
        description={person.biography}
      />

      {!!person.crew?.length && (
        <>
          <Header as="h2">Movies - crew ({person.crew.length})</Header>
          <Movies movies={person.crew} showJob />
        </>
      )}

      {!!person.cast?.length && (
        <>
          <Header as="h2">Movies - cast ({person.cast.length})</Header>
          <Movies movies={person.cast} showCharacter />
        </>
      )}
    </Container>
  );
}
