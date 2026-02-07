import { Average, Count, OutOf, Star, Wrapper } from "./styled";

export const Vote = ({ vote, small, backdrop }) => {
  if (!vote) return null;

  const hasAverage = vote.average != null;
  const hasCount = vote.count != null;

  return (
    <Wrapper $small={small} backdrop={backdrop}>
      <Star backdrop={backdrop} hidden={!hasAverage} />

      {hasAverage && (
        <>
          <Average $small={small} backdrop={backdrop}>
            {vote.average.toFixed(1)}
          </Average>
          <OutOf hidden={small} backdrop={backdrop}>
            /10
          </OutOf>
        </>
      )}

      <Count $small={small} backdrop={backdrop} $noVotes={!hasCount}>
        {hasCount
          ? `${vote.count} ${vote.count === 1 ? "vote" : "votes"}`
          : "no votes yet"}
      </Count>
    </Wrapper>
  );
};
