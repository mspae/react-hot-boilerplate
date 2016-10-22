import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import Timeline from 'react-wavesurfer/lib/plugins/timeline.js';
import Regions from 'react-wavesurfer/lib/plugins/regions.js';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.handleReady = this.handleReady.bind(this);
  }
  handleReady({ wavesurfer, originaArgs }) {
    wavesurfer.enableDragSelection({});
  }
  render() {
    return (
      <div>
        <Wavesurfer
          audioFile="https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3"
          onReady={this.handleReady}
        >
          <Regions regions={{}} />
          <Timeline />
        </Wavesurfer>
      </div>
    );
  }
}
