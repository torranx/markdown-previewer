var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var renderer = new marked.Renderer();
//allows line breaks
marked.setOptions({
  breaks: true });

var placeholder = "# React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<body> </body>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\nif (firstLine == '```' && lastLine == '```') {\nreturn multiLineCode;\n}\n}\n```\n\nYou can also make text **bold** !\nOr _italic_.\nOr **_both !_**\nYou can also  ~~cross me out!~~.\n\nThere's also [links](https://www.freecodecamp.com), and\n> Block Quotes!\n\nAnd of course there are tables!\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n- Some are bulleted.\n- With different indentation levels.\n  - That look like this.\n\n\n1. And there are numbererd lists too.\n1. Use just 1s if you want!\n1. And last but not least, let's not forget embedded images:\n\n![Cat Photo](https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg)\n";

var App = function (_React$Component) {
  _inherits(App, _React$Component);

  function App(props) {
    _classCallCheck(this, App);

    var _this = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

    _this.state = {
      markdown: placeholder,
      previewMinimize: false,
      editorMinimize: false
    };

    _this.handleChange = _this.handleChange.bind(_this);
    _this.handlePrevClick = _this.handlePrevClick.bind(_this);
    _this.handleEditClick = _this.handleEditClick.bind(_this);
    return _this;
  }

  _createClass(App, [{
    key: "handleChange",
    value: function handleChange(e) {
      this.setState({
        markdown: e.target.value });
    }
    //for minimize and maximize functions

  }, {
    key: "handlePrevClick",
    value: function handlePrevClick() {
      this.setState({
        previewMinimize: !this.state.previewMinimize
      });
    }
  }, {
    key: "handleEditClick",
    value: function handleEditClick() {
      this.setState({
        editorMinimize: !this.state.editorMinimize
      });
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "margins" },
        React.createElement(
          "div",
          { className: "flexContainer" },
          React.createElement(
            "div",
            { id: "editWindow" },
            React.createElement(
              "div",
              { id: "editorBox", className: "minEditorBox" },
              React.createElement(
                "div",
                { className: "toolbar" },
                React.createElement(
                  "span",
                  null,
                  React.createElement("i", { style: { marginRight: 10 + 'px', color: 'lightgray' }, "class": "fas fa-edit" }),
                  "Editor"
                ),
                React.createElement(
                  "button",
                  { id: "editWindowBtn", onClick: this.handleEditClick },
                  this.state.editorMinimize ? React.createElement("i", { "class": "fas fa-window-minimize" }) : React.createElement("i", { "class": "fas fa-window-maximize" })
                )
              ),
              React.createElement(
                "div",
                { className: "textWrapper" },
                React.createElement(Editor, { markdown: this.state.markdown, onChange: this.handleChange })
              )
            )
          ),
          React.createElement(
            "div",
            { id: "prevWindow" },
            React.createElement(
              "div",
              { className: "toolbar" },
              React.createElement(
                "span",
                null,
                React.createElement("i", { style: { marginRight: 10 + 'px', color: 'lightgray' }, "class": "far fa-sticky-note" }),
                "Preview"
              ),
              React.createElement(
                "button",
                { id: "prevWindowBtn", onClick: this.handlePrevClick },
                this.state.previewMinimize ? React.createElement("i", { "class": "fas fa-window-minimize" }) : React.createElement("i", { "class": "fas fa-window-maximize" })
              )
            ),
            React.createElement(
              "div",
              { id: "previewBox", className: "minPrevBox" },
              React.createElement(
                "div",
                { className: "markedStyle" },
                React.createElement(Preview, { markdown: this.state.markdown })
              )
            )
          )
        )
      );
    }
  }]);

  return App;
}(React.Component);

var Editor = function (_React$Component2) {
  _inherits(Editor, _React$Component2);

  function Editor(props) {
    _classCallCheck(this, Editor);

    return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));
  }

  _createClass(Editor, [{
    key: "render",
    value: function render() {
      return React.createElement("textarea", { id: "editor", onChange: this.props.onChange, value: this.props.markdown, type: "text" });
    }
  }]);

  return Editor;
}(React.Component);

var Preview = function (_React$Component3) {
  _inherits(Preview, _React$Component3);

  function Preview(props) {
    _classCallCheck(this, Preview);

    return _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));
  }

  _createClass(Preview, [{
    key: "render",
    value: function render() {
      var _this4 = this;

      var createMarkup = function createMarkup() {
        return { __html: marked(_this4.props.markdown, { renderer: renderer }) };
      };
      return React.createElement("div", { id: "preview", dangerouslySetInnerHTML: createMarkup() });
    }
  }]);

  return Preview;
}(React.Component);

ReactDOM.render(React.createElement(App, null), document.getElementById('reactComp'));

//for minimize and maximize functions
$(document).ready(function () {
  $('#editWindowBtn').click(function () {
    $('#editorBox').toggleClass('minEditorBox maxEditorBox');
    $('#prevWindow').toggleClass('hideWindow');
  });
});

$(document).ready(function () {
  $('#prevWindowBtn').click(function () {
    $('#previewBox').toggleClass('minPrevBox maxPrevBox');
    $('#editWindow').toggleClass('hideWindow');
  });
});