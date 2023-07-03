import React from "react";
import Rating from '@mui/material/Rating';
import { useState } from "react";
import './style_popup.css'

const PopUp = ({onClose}) => {
    const [value, setValue] = React.useState(1);
  const [textareaValue, setTextareaValue] = useState('');
  const handleTextareaChange = (event) => {
    setTextareaValue(event.target.value);
  };
  const handleSend = () => {
    // value là star
    // textareaValue là comment
    console.log(value)
    console.log(textareaValue)
    // gọi send ...
    // close pop up
    alert("Gửi nhận xét thành công")
    onClose()
  }
return (
    <div className="popup-review-product-dialog-form">
          <div className="popup-title publicsans-bold-charade-18px">
            <span className="publicsans-bold-charade-18px">レビューする</span>
          </div>
          <div className="popup-content">
            <div className="popup-stack">
              <div className="popup-your-review-about-th publicsans-normal-charade-16px">
                <span className="publicsans-normal-charade-16px">評点</span>
              </div>
              <Rating
                name="simple-controlled"
                value={value}
                onChange={(event, newValue) => {
                    setValue(newValue);
                }}
          />
            </div>
            <div className="popup-input">
              <div className="popup-labelplaceholder publicsans-normal-manatee-16px">
                <textarea className="publicsans-normal-manatee-16px" placeholder="あなたのレビュー" value={textareaValue} onChange={handleTextareaChange} />
              </div>
            </div>
          </div>
          <div className="popup-dialog">
            <div className="popup-label popup-valign-text-middle publicsans-bold-charade-14px"onClick={onClose}>
              <span>
                <span className="publicsans-bold-charade-14px">キャンセル</span>
              </span>
            </div>
            <div className="popup-button">
            <div className="popup-label-1 popup-valign-text-middle publicsans-bold-white-14px" onClick={handleSend}>
                <span>
                <span className="publicsans-bold-white-14px">提出</span>
                </span>
            </div>
            </div>
          </div>
        </div>
  );
}

export default PopUp;
