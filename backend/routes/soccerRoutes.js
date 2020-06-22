import {
    addNewPlayer,
    getPlayers,
    getPlayerWithID,
    updatePlayer,
    deletePlayer
} from "../controllers/playerControllers";


const routes = (app) => {

    app.route('/players')
        //GET players
        .get(getPlayers)
        //POST endpoint
        .post(addNewPlayer);

    app.route('/player/:PlayerId')
        //Get specific player
        .get(getPlayerWithID)
        //update specific player
        .put(updatePlayer)
        //delete 
        .delete(deletePlayer);


}

export default routes;