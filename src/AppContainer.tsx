import React from 'react';

import {
  getAllTags,
  getQuadrants,
  getQuadrantEntriesGroupedByTags,
  getRings,
  getSkills
} from './lib/EntriesRepository';
import { redrawRadar } from './components/tech-radar/radar';
import { IQuadrant } from './types/IQuadrant';
import { Header } from './containers/header/Header';
import { IRadarEntry } from './types/IRadarEntry';
import { IRing } from './types/IRing';
import { ISkill } from "./types/ISkill";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './components/tech-radar/radar.css';
import Navbar from './components/navbar/Navbar';

interface IAppProps {
  radarId: string;
}

interface IAppState {
  availableTags: string[],
  selectedTags: string[],
  selectedSkills: ISkill[],
  selectedRings: IRing[],
  quadrants: IQuadrant[],
  entries: IRadarEntry[],
  rings: IRing[],
  skills: ISkill[],
}

export class AppContainer extends React.Component<IAppProps, IAppState>{
  constructor(props: IAppProps) {
    super(props);
    const quadrants = getQuadrants();
    const rings: IRing[] = getRings();
    const skills: ISkill[] = getSkills();

    this.state = {
      availableTags: getAllTags(),
      selectedTags: [],
      selectedSkills: [],
      selectedRings: [],
      quadrants,
      rings,
      skills,
      entries: [],
    };
  }

  componentDidMount() {
    this.fetchEntries();
  }

  fetchEntries = () => {
    const selectedRingNames = this.state.selectedRings.map(r => r.name);
    const selectedSkillTypes = this.state.selectedSkills.map(s => s.type);
    const entries = getQuadrantEntriesGroupedByTags(
      this.state.quadrants,
      this.state.rings,
      this.state.skills,
      this.state.selectedTags,
      selectedRingNames,
      selectedSkillTypes);

    this.setState({ entries }, this.renderExternalRadar);
  }

  renderExternalRadar = () => {
    setTimeout(() => {
      redrawRadar({
        radarId: this.props.radarId,
        quadrants: this.state.quadrants,
        entries: this.state.entries,
        colors: {
          background: '#fff',
          grid: '#bbb',
          inactive: '#eee'
        },
        rings: this.state.rings,
        zoomed_quadrant: undefined,
      });
    }, 0);
  }

  render = () => (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
      </div>
      <Header>
      </Header>
      <div className="container my-5">
        <div className="row">
          <div className="col-12">
            <h1 className="gradient__text">What my Tech RadAAARRrrrr looks like</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
