import {createContext} from 'react'

export const AppContext = createContext({
     user:[{
        
            username: "admin",
            password: "admin*0",
            rol: 0,
            fullname:'Admin',
        },
        {
            username: "luis.mesa",
            password: "luis.mesa*0",
            rol: 1,
            fullname:'Luis Mesa',
        },
        {
            username: "annie.bernal",
            password: "annie.bernal*0",
            rol: 2,
            fullname:'Annie Bernal',
        },
        {
            username: "ana.breto",
            password: "ana.breto*0",
            rol: 3,
            fullname:'Ana Breto',
        },
        {
            username: "david.crespo",
            password: "david.crespo*0",
            rol: 3,
            fullname:'David Crespo',
        },
        {
            username: "thalia.gonzalez",
            password: "thalia.gonzalez*0",
            rol: 3,
            fullname:'Thalía González',
        }
     
    ] 
}
)