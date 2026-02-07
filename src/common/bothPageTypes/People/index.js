import { getImageUrl } from "../TMDb/getImageUrl";
import { toPersonDetails } from "../../routes";
import { TileListLink, TileList } from "../TileList";
import { Tile } from "../Tile";
import personPlaceholder from "../images/personPlaceholder.png";

export const People = ({ people, showJob, showCharacter }) => {
  return (
    <TileList>
      {people.map((person) => (
        <TileListLink key={person.id} to={toPersonDetails(person.id)}>
          <Tile
            title={person.name}
            $small
            center
            image={getImageUrl({ path: person.profile_path, size: "medium" }) || personPlaceholder}
            imagePlaceholder={personPlaceholder}
            subtitle={
              showJob ? person.job : showCharacter ? person.character : ""
            }
          />
        </TileListLink>
      ))}
    </TileList>
  );
};
