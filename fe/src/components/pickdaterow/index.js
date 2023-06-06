import React, {useRef, useState} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import "./style.css";

const Pickdaterow = (props) => {
    return(
        <div className="datepicker-timerow">
            <div className="datepicker-col-hour">
                <span className="pickhour">{props.time}</span>
                <div className="picksession"><span>{props.session}</span>
                </div>
            </div>
            <div className="d-flex">
                <div className="hour-choose date-hour"></div>
                <div className="no-choose date-hour"></div>
                <div className="no-choose date-hour"></div>
                <div className="hour-choose date-hour"></div>
                <div className="hour-choose date-hour"></div>
                <div className="hour-choose date-hour"></div>
                <div className="hour-choose date-hour"></div>

            </div>
        </div>
    )
}

export default Pickdaterow;
