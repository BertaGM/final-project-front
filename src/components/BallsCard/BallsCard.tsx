import { useDispatch } from "react-redux";
import { toggleIsCheckedActionCreator } from "../../store/features/balls/ballsSlice";
import { BallsStructure } from "../../store/features/types";
import BallsButton from "../BallsButton/BallsButton";
import BallsSwitchButton from "../BallsSwitchButton/BallsSwitchButton";
import BallsCardStyled from "./BallsCardStyled";

interface BallsProps {
  ball: BallsStructure;
}

const BallsCard = ({ ball }: BallsProps): React.ReactElement => {
  const dispatch = useDispatch();
  const updateTengui = () => {
    dispatch(toggleIsCheckedActionCreator(ball._id));
  };

  return (
    <BallsCardStyled className="card">
      <img
        className="card__image"
        src={ball.imageUrl}
        alt={ball.ballName}
        width="257"
        height="257"
      />
      <h2 className="card__ball-name">{ball.ballName}</h2>
      <ul className="card__list-container">
        <li className="card__item">
          <span>Have:</span>
          <BallsSwitchButton
            ballName={ball.ballName}
            actionOnChange={updateTengui}
            classModifier={ball.isTengui}
          />
        </li>
        <li className="card__item">
          <span>Available:</span>
          <span>{ball.isAvailable ? "Yes" : "No"}</span>
        </li>
        <li className="card__item">
          <span>Collection:</span>
          <span className="card__collection">{ball.collection}</span>
        </li>
        <li className="card__item">
          <span>Shop:</span>
          <span>{ball.shop}</span>
        </li>
      </ul>
      <div className="buttons">
        <BallsButton
          text="Info"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
        <BallsButton
          text="Modify"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
        <BallsButton
          text="Delete"
          type="button"
          classModifier=""
          actionOnClick={undefined}
        />
      </div>
    </BallsCardStyled>
  );
};

export default BallsCard;
