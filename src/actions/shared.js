import { getInitialData } from '../utils/api'
import { receiveUsers } from './users'
import { receiveTweets } from './tweets'
import { setAuthedUser } from './shared'
 
const AUTHED_ID = 'tyler_mcginnis' 

export function handleInitialData() {
    return (dispatch) => {
        return getInitialData()
            .then(({ users, tweets }) => {
                dispatch(receiveUsers(users))
                dispatch(receiveTweets(tweets))
                dispatch(setAuthedUser(AUTHED_ID))
            })
    }
}