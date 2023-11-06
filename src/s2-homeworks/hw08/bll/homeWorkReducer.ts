import {UserType} from '../HW8'

// type ActionType =
//     | { type: 'sort'; payload: 'up' | 'down' }
//     | { type: 'check'; payload: number }

type ActionType =
    | SortNameUpActionType
    | SortNameDownAction
    | { type: 'check'; payload: number }


export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': { // by name
            const sortedState = [...state].sort((a, b) => action.payload === 'up' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name))

            return sortedState // need to fix
        }
        case 'check': {
            const filteredState = state.filter(usr=>usr.age >= action.payload)

            return filteredState // need to fix
        }
        default:
            return state
    }
}
type SortNameUpActionType = ReturnType<typeof sortNameUpAction>
const sortNameUpAction = () => {
    return {
        type: 'sort',
        payload: 'up',
    } as const

};


type SortNameDownAction = ReturnType<typeof sortNameDownAction>
const sortNameDownAction = () => {
    return {
        type: 'sort',
        payload: 'down',
    } as const
};

type CheckAgeAction = ReturnType<typeof checkAgeAction>
const checkAgeAction = () => {
    return {
        type: 'check',
        payload: 18,
    } as const
};
