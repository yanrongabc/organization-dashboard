import React from "react";
import { render } from "react-dom";
import AppFrame from "./AppFrame";
import Dashboard from "react-dazzle";

import ReactChartkick, {
  LineChart,
  ColumnChart,
  PieChart
} from "react-chartkick";
import Chart from "chart.js";

import { compose } from "redux";
import { connect } from "react-redux";

class RechartsComp extends React.Component {
  render() {
    return (
      <AppFrame>
        <PieChart 
          data={this.props.charts.ChartKick.eventPie} 
          donut={true}
          library = {
            { options: {
              text: 'Pie Chart of Event Types',
              display: true
              }
            }
          }
        />
        <h1> </h1>
        <ColumnChart data={this.props.charts.ChartKick.userBars} />
        <LineChart
          data={this.props.charts.ChartKick.userActivity}
          id="User Activity Line Chart"
          width="1200px"
          height="600px"
          min={0}
          max={30}
        />
      </AppFrame>
    );
  }
}

const mapStateToProps = state => {
  return { charts: state.val };
};

const mapDispatchToProps = dispatch => {};

const Recharts = connect(mapStateToProps)(RechartsComp);

export default Recharts;
