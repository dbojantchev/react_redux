'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Header = require('./Header');

var _Header2 = _interopRequireDefault(_Header);

var _Menu = require('./Menu');

var _Menu2 = _interopRequireDefault(_Menu);

var _TileContainer = require('./TileContainer');

var _TileContainer2 = _interopRequireDefault(_TileContainer);

var _Tile = require('./Tile');

var _Tile2 = _interopRequireDefault(_Tile);

var _NameValue = require('./NameValue');

var _NameValue2 = _interopRequireDefault(_NameValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

window.menuCallback = function (item, proxy) {
    alert(item.id + ':' + item.title);
};

var menuDescripion1 = {
    "name": "Actions 1",
    "style": { float: "right" },
    "items": [{
        "id": 101,
        "title": "Action",
        "callback": menuCallback
    }, {
        "id": 102,
        "title": "Another Action",
        "callback": menuCallback
    }, {
        "id": 103,
        "title": "Something Else",
        "callback": menuCallback
    }]
};

var menuDescripion2 = {
    "name": "Actions 2",
    "style": { float: "right" },
    "items": [{
        "id": 104,
        "title": "Foo",
        "callback": menuCallback
    }, {
        "id": 105,
        "title": "Bar",
        "callback": menuCallback
    }, {
        "id": 106,
        "title": "Yeahhh",
        "callback": menuCallback
    }]
};

var App = _react2.default.createClass({
    displayName: 'App',

    render: function render() {
        var menus = _react2.default.createElement(
            'div',
            { style: { marginTop: "8px" } },
            _react2.default.createElement(_Menu2.default, { menuDescripion: menuDescripion2 }),
            _react2.default.createElement(_Menu2.default, { menuDescripion: menuDescripion1 })
        );

        return _react2.default.createElement(_Header2.default, { id: 'header1', name: 'Header', menus: menus });
    }
});

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById("nav"));

_reactDom2.default.render(_react2.default.createElement(_TileContainer2.default, { url: './data/devices.json' }), document.getElementById("tileContainer1"));

_reactDom2.default.render(_react2.default.createElement(_TileContainer2.default, { url: './data/coord.json' }), document.getElementById("tileContainer2"));

_reactDom2.default.render(_react2.default.createElement(_TileContainer2.default, { url: './data/data.json' }), document.getElementById("tileContainer3"));

exports.default = App;