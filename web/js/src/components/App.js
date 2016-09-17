'use strict'

import React from 'react';
import ReactDom from 'react-dom';
import Header from './Header';
import Menu from './Menu';
import TileContainer from './TileContainer';
import Tile from './Tile';
import NameValue from './NameValue';

window.menuCallback = function(item,proxy){
    alert(item.id + ':' + item.title);
};

var menuDescripion1 = {
    "name": "Actions 1",
    "style" : {float:"right"},
    "items": [
        {
            "id": 101,
            "title": "Action",
            "callback": menuCallback
        },
        {
            "id": 102,
            "title": "Another Action",
            "callback": menuCallback
        },
        {
            "id": 103,
            "title": "Something Else",
            "callback": menuCallback
        }
    ]
};

var menuDescripion2 = {
    "name": "Actions 2",
    "style" : {float:"right"},
    "items": [
        {
            "id": 104,
            "title": "Foo",
            "callback": menuCallback
        },
        {
            "id": 105,
            "title": "Bar",
            "callback": menuCallback
        },
        {
            "id": 106,
            "title": "Yeahhh",
            "callback": menuCallback
        }
    ]
};

var App = React.createClass({
    render: function () {
        var menus=  <div style={{marginTop:"8px"}}>
                         <Menu menuDescripion={menuDescripion2}/>
                         <Menu menuDescripion={menuDescripion1}/>
                    </div>;

        return <Header id="header1" name="Header" menus={menus}></Header>;
    }
});

ReactDom.render(
    <App/>,
    document.getElementById("nav")
);

var TileContainer1 = ReactDom.render(
    <TileContainer/>,
    document.getElementById("tileContainer1")
);

var TileContainer2 = ReactDom.render(
    <TileContainer url="./data/coord.json"/>,
    document.getElementById("tileContainer2")
);

var TileContainer3 = ReactDom.render(
    <TileContainer url="./data/data.json"/>,
    document.getElementById("tileContainer3")
);

function getData(url, cb){

    $.ajax({
        url: url,
        dataType: 'json',
        cache: false,
        success: function (data) {
            if(cb){
                cb(data);
            }
        }.bind(this),
        error: function (xhr, status, err) {
            console.error(this.props.url, status, err.toString());
        }.bind(this)
    });
}

getData('./data/devices.json', function(data){
    console.log(data);
    TileContainer1.setState({data: data});
});

setTimeout(function(){
    getData('./data/devices.json', function(data){
        console.log(data);
        TileContainer2.setState({data: data});
    });
}, 5000);


export default App
