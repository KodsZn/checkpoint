import React from 'react'
import lesplayers from '../players'
import Players from './Players'

const PlayersList = () => {
return (
    <div>
        {lesplayers.map(joueur=><Players joueur={joueur} key={joueur.id} /> )}
    </div>
)
}

export default PlayersList