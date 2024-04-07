// Importing the Delete icon and CSS file
import Delete from "../../assets/Delete.svg"
import './key.css'

//  Key component represents a button used in a keyboard
// Props:
//        - val: Value of the key (string or number)
//        - handleClick: Function to handle click event

function Key(props) {
  // Button element
  const operators = 'Cdel%/*-+-='
  return (
    <button
      className={operators.includes(props.val) ? "key-btn key-text dark-btn" : `key-btn key-text`}  //Add dark-btn class to opearotrs
      //Click event handler for input
      onClick={() => props.handleClick(props.val)}>
      {/* Show key value and if there is delete key then show image inplace of del text */}
      {props.val === 'del' ? <img src={Delete} alt="del" className="img-del" /> : props.val}
    </button>
  )
}

export default Key