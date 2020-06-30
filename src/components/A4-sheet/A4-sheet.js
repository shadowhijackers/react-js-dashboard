import React from "react";
import { connect } from "react-redux";

import "./A4-sheet.scss";
import { addChart } from "../../store/actions/a4sheet.actions.";
import { removeChart } from "../../store/actions/sidenav.actions";
import BarChart from "../charts/Bar-chart/Bar-chart";
import PieChart from "../charts/Pie-Chart/Pie-chart";
import { ChartService } from "../../services/chart.service";

class A4Sheet extends React.Component {
  dragStartHandler = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  };

  dropHandler = (ev) => {
    ev.preventDefault();
    const data = ev.dataTransfer.getData("text");

    const existItem = this.props.chartData.find((chart) => +chart.id === +data);
    if (existItem) {
      // todo update state
      const existEl = document.getElementById(existItem.id);
      const box = existEl.getBoundingClientRect();
      existEl.style.left = ev.clientX - box.width / 2 + "px";
      existEl.style.top = ev.clientY - box.height / 2 + "px";
      return;
    }

    const clonedNode = document.getElementById(data);
    const box = clonedNode.getBoundingClientRect();
    const shiftX = ev.clientX - box.width / 2 + "px";
    const shiftY = ev.clientY - box.height / 2 + "px";

    const { dispatch } = this.props;
    dispatch(
      addChart({
        type: +data % 2 === 0 ? "bar" : "pie",
        id: data,
        style: {
          left: shiftX,
          top: shiftY,
        },
      })
    );
    dispatch(removeChart({ id: +data }));
  };

  dragOVerHandler = (ev) => {
    ev.preventDefault();
    ev.dataTransfer.dropEffect = "move";
  };

  render() {
    return (
      <div className="A4Sheet">
        <div
          className="A4Sheet__page"
          onDrop={(ev) => {
            this.dropHandler(ev);
          }}
          onDragOver={(ev) => this.dragOVerHandler(ev)}
        >
          {this.props.chartData.map((chart) => {
            return (
              <div
                key={chart.id}
                id={chart.id}
                className="A4Sheet__chart"
                draggable="true"
                onDragStart={(ev) => {
                  this.dragStartHandler(ev);
                }}
                style={chart.style}
                onDragEnd={(event) => this.dragStartHandler(event)}
              >
                {chart.type === "bar" ? (
                  <BarChart config={ChartService.getBarChartConfig()} />
                ) : (
                  <PieChart config={ChartService.getPieChartConfig()} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

A4Sheet = connect((state) => state.a4Sheet)(A4Sheet);
export default A4Sheet;
