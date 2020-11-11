import React from 'react'

export const JournalEntry = () => {
    return (
        <div className="journal__entry pointer">

            <div 
                className="journal__entry-picture"
                style={{
                    backgroundSize: 'codev',
                    backgroundImage: 'url(https://1.bp.blogspot.com/-c8D3ADPoq6g/VpGSGf9Mp1I/AAAAAAAAbJs/l6Pqe8CAdAo/s1600/Paisaje%2B4.jpg)'
                }}
            ></div>

            <div className="journal__entry-body">
                <p className="journal__entry-title">
                    Un nuevo dia
                </p>

                <p className="journal__entry-content">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, voluptates.
                </p>

            </div>

            <div className="journal__entry-date-box">
                <span>Monday</span>
                <h4>28</h4>
            </div>

        </div>
    )
}
