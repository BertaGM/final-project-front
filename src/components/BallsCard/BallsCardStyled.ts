import styled from "styled-components";

const BallsCardStyled = styled.article`
  padding: 21px;
  padding-top: 21px;
  border-radius: 5px;
  box-shadow: #0000003d 0px 3px 8px;

  .card {
    &__image {
      border-radius: 5px;
      object-fit: cover;
    }

    &__ball-name {
      font-size: 1.688rem;
      font-weight: 400;
      text-transform: uppercase;
      margin-top: 12px;
    }

    &__list-container {
      margin-top: 26px;
    }

    &__item {
      font-size: 1.438rem;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-left: 20px;
      margin-right: 20px;
      margin-bottom: 16px;
    }

    &__collection {
      line-break: auto;
      text-align: end;
    }
  }
`;

export default BallsCardStyled;