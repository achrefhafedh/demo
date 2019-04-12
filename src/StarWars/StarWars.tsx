import React from "react";
import { Person } from "./types";

type StarWarsState = {
  people: Person[];
};

type StartWarsProps = {};

export class StarWars extends React.Component<StartWarsProps, StarWarsState> {
  constructor(props: StartWarsProps) {
    super(props);
    this.state = {
      people: []
    };
  }

  getPeople = () => {
    return fetch("https://swapi.co/api/people")
      .then(response => response.json())
      .then(data => {
        this.setState({
          people: data.results
        });
      });
  };

  componentDidMount() {
    this.getPeople();
  }

  renderPeople = (data: Person[]) =>
    data.map((element: Person, index: number) => (
      <div key={index}>
        <span>{element.name}</span>
      </div>
    ));

  render() {
    const { people } = this.state;
    if (people.length === 0) return null;
    return <div>{this.renderPeople(people)}</div>;
  }
}
