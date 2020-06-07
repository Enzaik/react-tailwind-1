import React, { Component } from 'react';
import 'rheostat/initialize';
import Rheostat from 'rheostat';
// Using an ES6 transpiler like Babel
import Slider from 'react-rangeslider';

// To include the default styles
import 'react-rangeslider/lib/index.css';
import { connectRange } from 'react-instantsearch-dom';

class RangeSlider extends Component {
  state = {
    min: this.props.min,
    max: this.props.max,
  };

  componentDidUpdate(prevProps) {
    console.log(this.props);

    const { currentRefinement } = prevProps;
    if (
      this.props.canRefine &&
      (currentRefinement.min !== this.props.currentRefinement.min ||
        currentRefinement.max !== this.props.currentRefinement.max)
    ) {
      this.setState({
        ...currentRefinement,
      });
    }
  }

  onChange = ({ values: [min, max] }) => {
    const { currentRefinement, refine } = this.props;
    if (currentRefinement.min !== min || currentRefinement.max !== max) {
      refine({
        min,
        max,
      });
    }
  };

  onValuesUpdated = ({ values: [min, max] }) => {
    this.setState({
      min,
      max,
    });
  };

  render() {
    const { min, max, currentRefinement } = this.props;
    if (min === max) {
      return null;
    }

    return (
      //   <Rheostat
      //     className="ais-RangeSlider"
      //     min={10}
      //     max={20}
      //     values={[10, 20]}
      //     onChange={this.onChange}
      //     onValuesUpdated={this.onValuesUpdated}
      //   >
      //     <div className="rheostat-marker rheostat-marker--large" style={{ left: 0 }}>
      //       <div className="rheostat-value">{this.state.min}</div>
      //     </div>
      //     <div className="rheostat-marker rheostat-marker--large" style={{ right: 0 }}>
      //       <div className="rheostat-value">{this.state.max}</div>
      //     </div>
      //   </Rheostat>
      <Slider min={10} max={20} />
    );
  }
}

const CustomRangeSlider = connectRange(RangeSlider);
export default CustomRangeSlider;
