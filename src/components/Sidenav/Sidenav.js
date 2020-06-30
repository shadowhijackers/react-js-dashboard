import React from "react";
import { connect } from "react-redux";

import "./Sidenav.scss";
import BarChart from "../charts/Bar-chart/Bar-chart";
import PieChart from "../charts/Pie-Chart/Pie-chart";
import { ChartService } from "../../services/chart.service";

class Sidenav extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      charts: ChartService.getChartData(),
    };
  }

  dragStartHandler = (ev) => {
    ev.dataTransfer.setData("text/plain", ev.target.id);
  };

  dragEndHandler = (ev) => {
    ev.dataTransfer.clearData("text/plain");
  };

  render() {
    return (
      <section className="Sidenav u-shadow">
        <div className="Sidenav__wrapper">
          <section className="Sidenav-list">
            <ul className="Sidenav-list__container">
              <li>
                <i className="Sidenav__icon icon icon-update" />
                <label>Update</label>
              </li>
              <li className="Sidenav-list__item--active">
                <i className="Sidenav__icon icon icon-bar-chart" />
                <label>Templates</label>
              </li>
              <li>
                <i className="Sidenav__icon icon icon-work" />
                <label>Work</label>
              </li>
            </ul>
          </section>

          {this.props.toggleSideNavBody && (
            <section className="Sidenav-body">
              <article className="Sidenav-body-item">
                <div className="Sidenav-body-item__header">
                  <h4 className="u-no-margin">Charts</h4>
                  <span>See all</span>
                </div>
                <div className="Sidenav-body-item__body">
                  {this.props.chartData.map((chart, i) => {
                    return (
                      <div
                        key={chart.id}
                        draggable="true"
                        id={chart.id}
                        onDragStart={(ev) => {
                          this.dragStartHandler(ev);
                        }}
                        onDragEnd={(event) => this.dragEndHandler(event)}
                      >
                        {chart.type === "bar" ? (
                          <BarChart config={this.state.charts.bar} />
                        ) : (
                          <PieChart config={this.state.charts.pie} />
                        )}
                      </div>
                    );
                  })}
                </div>
              </article>
            </section>
          )}
        </div>
      </section>
    );
  }
}

Sidenav = connect((state) => state.sideNav)(Sidenav);
export default Sidenav;
