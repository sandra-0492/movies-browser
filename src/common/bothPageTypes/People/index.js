import { getImageUrl } from "../TMDb/getImageUrl";
import { toPersonDetails } from "../../routes";
import { TileListLink, TileList } from "../TileList";
import { Tile } from "../Tile";
import personPlaceholder from "../images/personPlaceholder.png";

export const People = ({ people, showCharacter, showJob, prefix }) => {
  const uniquePeople = Array.from(
    new Map(people.map((p) => [p.id, p])).values(),
  );
  return (
    <TileList>
      {uniquePeople.map((person) => (
        <TileListLink
          key={`${prefix}-${person.id}`}
          to={toPersonDetails(person.id)}
        >
          <Tile
            $title={person.name}
            $small
            $center
            $image={
              getImageUrl({ path: person.profile_path, size: "medium" }) ||
              personPlaceholder
            }
            $imagePlaceholder={personPlaceholder}
            $subtitle={
              showJob ? person.job : showCharacter ? person.character : ""
            }
          />
        </TileListLink>
      ))}
    </TileList>
  );
};
