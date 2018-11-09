import React from "react";
import styled from "react-emotion";
import { Link } from "react-router-dom";
import Input from "../components/Input";
//import Landing from "./landing";

// emotion styles
const Div = styled("div")`
  text-align: center;
`;

const Title = styled("h1")`
  font-size: 1.25rem;
  padding: 5px;
`;

const ApplyDiv = styled("div")`
  font-size: 1rem;
  position: relative;
  padding: 0;
  transform-origin: left;
  display: inline-block;
  margin: 4px;

  &::before {
    content: "";
    height: 1px;
    background-color: $lightgray;
    width: 100%;
    transform: scaleX(0);
    transition: all 0.25s ease;
    position: absolute;
    bottom: 0;
    transform-origin: left;
  }

  &:hover {
    cursor: pointer;
    color: $black;
  }

  &:hover::before {
    transform: scaleX(1);
    background-color: $black;
  }
`;

// end of styles

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Div className="landing-container">
        <Title className="sentinel-primary black">
          Sign into your banking account.
        </Title>
        <Input value="username" />
        <Input value="password" />
        <Link to="/apply">
          <ApplyDiv className="untitled-primary gray navbar-link">
            Sign In
          </ApplyDiv>
        </Link>
      </Div>
    );
  }
}

export default Home;
