export default function words(state = [], action) {
    switch (action.type) {
        case 'SET_WORDS':
            return action.payload;
        case 'ADD_WORD':
            return [
                ...state,
                action.payload
            ];
        default:
            return state;
    }
}