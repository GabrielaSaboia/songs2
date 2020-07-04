import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

class SongList extends Component{
    renderList(){
        //how the list will be rendered
        return this.props.songs.map((song) => {//map function parses
            // through the songs and displays them in the jsx bellow
            return(
                <div className="item" key={song.title}>
                     <div className="right floated content">
                         <button className="ui button primary"
                         onClick={() => this.props.selectSong(song)}
                         >
                             Select
                         </button>
                     </div>
                    <div className="content">{ song.title }</div>
                </div>
            );
        });
    }
    render() {
        return <div className="ui divided list">{this.renderList()}</div>;
    }
}

const mapStateToProps = state =>{
    return {songs: state.songs};
}



export default connect(mapStateToProps, { selectSong })(SongList);


/*You could import differently
* import React, {Component} from 'react';
* that would be a named import and a default export in a single line
* in the class based function you would not need to define React.Component simply
* switching it for Component, both ways work fine*/