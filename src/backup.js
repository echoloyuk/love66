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

/*
const {Component} = React;
const cx = classnames.bind(css);

class Stage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      page: 0,
      p1: false,
      p2: false,
      p3: false,
      p4: false
    }
  }
  render() {
    const {open, page, p1, p2, p3, p4} = this.state;
    const {name, subName} = this.props;
    return (
      <section className="stage-wrap">
        <Book name={name} subName={subName} open={open} page={page}>{[
          {
            left: <div>l-1</div>,
            right: <Photos urls={['./assets/images/1.jpg', './assets/images/2.jpg']} start={p1} onFinish={this.onPage(0)} />
          }, {
            left: <div>l-2</div>,
            right: <Photos urls={['./assets/images/3.jpg', './assets/images/4.jpg']} start={p2} onFinish={this.onPage(1)} />
          }, {
            left: <div>l-3</div>,
            right: <Photos urls={['./assets/images/5.jpg', './assets/images/1.jpg']} start={p3} onFinish={this.onPage(2)} />
          }, {
            left: <div>l-4</div>,
            right: <Photos urls={['./assets/images/3.jpg', './assets/images/4.jpg']} start={p4} />
          },
        ]}</Book>
        <div style={{position:'absolute',zIndex:'100',left:0,top:0,background:'#ff0'}} onClick={this.open.bind(this)}>{this.props.name}</div>
      </section>
    );
  }
  open() {
    this.setState({
      open: true,
      p1: true
    });
  }
  onPage(p) {
    return () => {
      console.log(p);
      let tmp = {
        page: p + 1
      }
      tmp['p' + (p + 2)] = true;
      this.setState(tmp);
    }
  }
}

const props = (state) => {
  return state
}

export default connect(props)(Stage);

 */
