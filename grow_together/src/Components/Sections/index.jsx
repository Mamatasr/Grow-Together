import React, { Component } from "react";
import Section from "./TitleSection.jsx/Section";
import Card from "./Card/Card";

export class MainSection extends Component {
  render() {
    return (
      <div>
        <Section />
        <Card />
      </div>
    );
  }
}

export default MainSection;
