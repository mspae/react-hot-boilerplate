import React, { Component } from 'react';
import Wavesurfer from 'react-wavesurfer';
import Timeline from 'react-wavesurfer/lib/plugins/timeline.js';

export default class App extends Component {
  render() {
    return (
      <div>
        <Wavesurfer audioFile="https://ia902606.us.archive.org/35/items/shortpoetry_047_librivox/song_cjrg_teasdale_64kb.mp3">
          <Timeline />
        </Wavesurfer>
      </div>
    );
  }
}
