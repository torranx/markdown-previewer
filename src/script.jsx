const renderer = new marked.Renderer();
//allows line breaks
marked.setOptions({
  breaks: true });

const placeholder = `# React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<body> </body>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
return multiLineCode;
}
}
\`\`\`

You can also make text **bold** !
Or _italic_.
Or **_both !_**
You can also  ~~cross me out!~~.

There's also [links](https://www.freecodecamp.com), and
> Block Quotes!

And of course there are tables!

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
- Some are bulleted.
- With different indentation levels.
  - That look like this.


1. And there are numbererd lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![Cat Photo](https://i.pinimg.com/736x/4d/8e/cc/4d8ecc6967b4a3d475be5c4d881c4d9c.jpg)
`;
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown: placeholder,
      previewMinimize: false,
      editorMinimize: false
      };

    this.handleChange = this.handleChange.bind(this);
    this.handlePrevClick = this.handlePrevClick.bind(this);
    this.handleEditClick = this.handleEditClick.bind(this);
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value });
  }
  //for minimize and maximize functions
  handlePrevClick() {
    this.setState({
      previewMinimize: !this.state.previewMinimize
    })
  }
  handleEditClick(){
    this.setState({
      editorMinimize: !this.state.editorMinimize
    })
  }
  render() {
    return (
      <div className="margins">
        <div className="flexContainer">
          <div id="editWindow">
            <div id="editorBox" className="minEditorBox">
              <div className="toolbar">
                <span>
                  <i style={{marginRight: 10 + 'px',color:'lightgray'}} class="fas fa-edit"/>
                  Editor
                </span>
                <button id="editWindowBtn" onClick={this.handleEditClick}>
                  {this.state.editorMinimize ? <i class="fas fa-window-minimize"/> : <i class="fas fa-window-maximize"/>}
                </button>
              </div>
              <div className="textWrapper">
                <Editor markdown={this.state.markdown} onChange={this.handleChange}/>
              </div>
            </div>
          </div>
          <div id="prevWindow">
            <div className="toolbar">
                <span>
                  <i style={{marginRight: 10 + 'px',color:'lightgray'}} class="far fa-sticky-note"/>
                  Preview
                </span>
                <button id="prevWindowBtn" onClick={this.handlePrevClick}>
                  {this.state.previewMinimize ? <i class="fas fa-window-minimize"/> : <i class="fas fa-window-maximize"/>}
                </button>
              </div>
            <div id="previewBox" className="minPrevBox">
              <div className="markedStyle">
                <Preview markdown={this.state.markdown}/>
              </div>
            </div>
          </div>
        </div>
      </div>)
  }}

class Editor extends React.Component {
  constructor(props){
    super(props);
  }
  render () {
    return (
        <textarea id="editor" onChange={this.props.onChange} value={this.props.markdown} type="text"/>
      )
  }
}


class Preview extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
    const createMarkup = () => {
      return {__html: marked(this.props.markdown, {renderer:renderer})}
}
    return (
      <div id="preview" dangerouslySetInnerHTML={createMarkup()}/>
    )
  }
}


ReactDOM.render(<App/>, document.getElementById('reactComp'));

//for minimize and maximize functions
$(document).ready(function(){
        $('#editWindowBtn').click(function(){
          $('#editorBox').toggleClass('minEditorBox maxEditorBox');
          $('#prevWindow').toggleClass('hideWindow')
        })})

      $(document).ready(function(){
        $('#prevWindowBtn').click(function(){
          $('#previewBox').toggleClass('minPrevBox maxPrevBox');
          $('#editWindow').toggleClass('hideWindow');
        })
      })