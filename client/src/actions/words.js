export const getWords = () => dispatch => {
    fetch('/words')
        .then(res => res.json())
        .then(res => dispatch({type: 'SET_WORDS', payload: res}))
        .catch(err => console.log(err));
};