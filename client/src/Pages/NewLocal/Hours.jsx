import React from 'react'

let Hours = props => {
    let {day, d, onChange} = props;
    const a = day.toLowerCase();
    return (
        <label className="label has-text-grey">
            {day}
            <div className="control">
                <div className="columns">
                    <div className="column">
                        <input 
                            type="time" 
                            disabled={d.closed} 
                            name={`${a}.from`}
                            className="input" 
                            onChange={onChange} 
                            value={d.from}
                        />
                        <small className="help">
                    <input 
                        type="checkbox" 
                        name={`${a}.closed`} 
                        value={d.closed} 
                        onChange={onChange} 
                        className="checkbox pr-2"
                    /> 
                        closed
                </small>
                    </div>
                    <div className="column is-1">
                        to
                    </div>
                    <div className="column">
                        <input 
                        type="time" 
                        disabled={d.closed} 
                        name={`${a}.to`} 
                        className="input" 
                        onChange={onChange} 
                        value={d.to}
                    />
                    </div>
                </div>
            </div>
        </label>
    )
}



export default Hours
