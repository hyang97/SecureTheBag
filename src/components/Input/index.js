import React from "react";
import styled from "react-emotion";

const InputContainer = styled("div")`
  font-size: 1.25rem;
  position: relative;
  padding: 3px;
  border: 1px solid black;
  border-radius: 2px;
  transform-origin: left;
  display: block;
  margin: 8px;
`;

const InputBox = styled("input")`
  font-size: 1rem;
`;

class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <InputContainer>
        <InputBox type="input" placeholder={this.props.value} />
      </InputContainer>
    );
  }
}

export default Input;
