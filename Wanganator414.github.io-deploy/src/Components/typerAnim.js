import React from "react";
import "../CSS/typerAnim.css";

class Typer extends React.Component {
  static defaultProps = {
    heading: "",
    dataText: []
  };

  constructor(props) {
    super(props);

    this.state = {
      text: "",
      isDeleting: false,
      loopNum: 0,
      typingSpeed: 150
    };
  }

  componentDidMount() {
    this.handleType();
  }

  handleType = () => {
    const { dataText } = this.props;
    const { isDeleting, loopNum, text, typingSpeed } = this.state;
    const i = loopNum % dataText.length;
    const fullText = dataText[i];

    this.setState({
      text: isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1),
      //Don't change write/delete speeds anymore, any faster and things would break
      typingSpeed: isDeleting ? 55 : 60
    });

    if (!isDeleting && text === fullText) {
      //Pause when done rendering text row
      setTimeout(() => this.setState({ isDeleting: true }), 1800);
    } else if (isDeleting && text === "") {
      //Pause when done deleting text row
      setTimeout(
        () =>
          this.setState({
            isDeleting: false,
            loopNum: loopNum + 1
          }),
        550
      );
    }

    setTimeout(this.handleType, typingSpeed);
  };

  render() {
    return (
      <h1>
        {this.props.heading}&nbsp;
        <span>{this.state.text}</span>
        <span id="cursor" />
      </h1>
    );
  }
}

// ReactDOM.render(
//   <Typer
//     heading={"Things I want to type:"}
//     dataText={[
//       "WELCOME TO MY WORLD",
//       "THIS IS MY WEBSITE",
//       "I AM AT YOUR SERVICE"
//     ]}
//   />,
//   document.getElementById("app")
// );

export default Typer;
