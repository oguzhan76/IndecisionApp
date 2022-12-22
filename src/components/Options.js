import React from "react";
import Option from "./Option";;

const Options = (props) => {
    return (
        <div>
            <div className="widget-header">
                <h3>Your Options</h3>
                <button 
                className="button button--link"    
                onClick={props.onDeleteOptions}
                >Remove All
                </button>
            </div>
            {props.options.length === 0 && <p className="widget__message">Please add an option!</p>}
            {props.options.map((opt, index) => (
                <Option 
                    key={opt} 
                    option={opt}
                    count={index + 1}
                    onDeleteOption={props.onDeleteOption}
                />))}
        </div>
    )
}

export default Options;