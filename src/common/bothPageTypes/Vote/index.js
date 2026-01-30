import { Average, Count, OutOf, Star, Wrapper } from "./styled";

export const Vote = ({ vote, small, backdrop }) =>
  !!vote && (
    <Wrapper small={small} backdrop={backdrop}>
      <Star backdrop={backdrop} hidden={!vote?.average} />

      {!!vote?.average && (
        <>
          <Average small={small} backdrop={backdrop}>
            {vote.average.toFixed(1)}
          </Average>
          <OutOf hidden={small} backdrop={backdrop}>
            /10
          </OutOf>
        </>
      )}

      <Count small={small} backdrop={backdrop} noVotes={!vote?.count}>
        {vote?.count
          ? `${vote.count} ${vote.count === 1 ? "vote" : "votes"}`
          : "no votes yet"}
      </Count>
    </Wrapper>
  );
