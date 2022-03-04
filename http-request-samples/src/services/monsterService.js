
import axios from 'axios';
import { config } from './config';
import { endpoints } from './endpoints';
import mockedMonsters from './mockedMonsters';

export async function getMonsters(challenge_rating=0) {

    try {

        return mockedMonsters;

        const monsters = await axios({
            method: 'get',
            url: `${config.url}/${endpoints.getMonsters}`,
            params: {
                challenge_rating,
            }
        })

        return monsters.data.results;

    } catch(e) {
        throw e;
    }

 
}