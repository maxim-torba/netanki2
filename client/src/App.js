import React, {Component} from 'react';
import {connect} from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import {List, ListItem} from 'material-ui/List';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

import {getWords} from './actions/words';

class App extends Component {
    componentWillMount() {
        this.props.onGetWords();
    }
    
    render() {
        console.log(this.props.words);
        const wordsItems = this.props.words.map((item) => {
            return <ListItem key={item._id} primaryText={item.word} secondaryText={item.translate}/>
        });
        return (
            <MuiThemeProvider>
                <div className="App container">
                    <div className="row">
                        <div className="col">
                            <List>
                                {wordsItems}
                            </List>
                        </div>
                    </div>
                </div>
            </MuiThemeProvider>
        );
    }
}

export default connect(
    state => ({
        words: state.words
    }),
    dispatch => ({
        onGetWords: () => {
            dispatch(getWords());
        }
    })
)(App);
