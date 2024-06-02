import '../CSS/GroupButton.scss';

function GroupButton(props) {
  return (
    <>
      <button class='button__group'>
        <img src={props.icon}></img>
      </button>
    </>
  );
}

export default GroupButton;
