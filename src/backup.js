render() {
  return (
    <section className="stage-wrap">
      <div onClick={this.onClick.bind(this)}>start</div>
      <div className="hello">
        <TypeWriter start={this.state.aniStart} 
          onFinished={() => {this.setState({aniStart: false})}} >
{`
var i = '化云';
var b = 5;
// var c = 6;
`}
        </TypeWriter>
      </div>
    </section>
  );
}
