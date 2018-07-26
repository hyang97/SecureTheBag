import React from 'react';
import FormItem from '../components/FormItem';

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const aboutStyle = {
      margin: '4rem',
    };

    return (
      <div style={aboutStyle}>
        <h1>about</h1>

        <form>

          <FormItem type="long_resp" title="Tell me about yourself." required={true}/>
          <FormItem type="short_resp" title="First name:" required={true}/>
          <FormItem type="checkbox" title="I understand the terms of this agreement." required={true}/>
          <FormItem type="bool" title="Do you want to donate a swipe?" required={true}/>

          <input type="submit" className="click" />
        </form>

      </div>
    );
  }
}

export default About;
