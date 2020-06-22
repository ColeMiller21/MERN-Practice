import React from 'react';

const PlayerSingle = (props) => {
    return (

        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src="avatar.jpg" alt="soccer player" />
                        <span className="card-title">{props.player.firstName} {props.player.lastName}</span>
                    </div>
                    <div className="card-content">
                        <p>Phone: {props.player.phone ? props.player.phone : "N/A"} - Email: {props.player.email}</p>


                    </div>
                    <div className="card-action">
                        Team: {props.player.team}
                    </div>
                </div>
            </div>
        </div>


    )

}

export default PlayerSingle;