import React, { Component } from 'react';
import {
    Chart,
    Geom,
    Axis,
    Tooltip,
    Coord,
    Label
} from "bizcharts";
import DataSet from "@antv/data-set";

class ChartView extends Component {
    render() {
        // const data = this.props.payments;
        const total = this.props.payments.map((a) => a.amount).reduce((a, b) => a + b, 0);
        const EntertainmentTotal = this.props.payments
                                        .filter((x) => x.category === "Entertainment")
                                        .map((x) => x.amount)
                                        .reduce((a, b) => a + b, 0);

        const EnsuranceTotal = this.props.payments
                                        .filter((x) => x.category === "Ensurance")
                                        .map((x) => x.amount)
                                        .reduce((a, b) => a + b, 0);

        const TelecomTotal = this.props.payments
                                        .filter((x) => x.category === "Telecom")
                                        .map((x) => x.amount)
                                        .reduce((a, b) => a + b, 0);

        const OtherTotal = this.props.payments
                                        .filter((x) => x.category === "Other")
                                        .map((x) => x.amount)
                                        .reduce((a, b) => a + b, 0);

        // const { DataView } = DataSet;
        const data = [
            {
                item: "Entertainment",
                count: EntertainmentTotal  / total
            },
            {
                item: "Ensurance",
                count: EnsuranceTotal  / total
            },
            {
                item: "Telecom",
                count: TelecomTotal  / total
            },
            {
                item: "Other",
                count: OtherTotal  / total
            },
        ];
        
        //TODO: Rewrite with https://canvasjs.com/react-charts/pie-chart/
        //TODO: Rewrite with https://www.chartjs.org/docs/latest/getting-started/
        
        const dv = new DataView();
        dv.source(data).transform({
            type: "percent",
            field: "count",
            dimension: "item",
            as: "percent"
        });
        const cols = {
            percent: {
                formatter: val => {
                    val = Math.round((val * 1e2) / 1e2 * 100) + "%";
                    return val;
                }
            }
        };
        return (
            <div>
              <Chart
                height={window.innerHeight / 2}
                data={dv}
                scale={cols}
                padding={[10, 10, 10, 10]}
                forceFit
              >
                <Coord type="theta" radius={0.75} />
                <Axis name="percent" />
                <Tooltip
                  showTitle={false}
                  itemTpl="<li><span style=&quot;background-color:{color};&quot; class=&quot;g2-tooltip-marker&quot;></span>{name}: {value}</li>"
                />
                <Geom
                  type="intervalStack"
                  position="percent"
                  color="item"
                  tooltip={[
                    "item*percent",
                    (item, percent) => {
                      percent = percent * 100 + "%";
                      return {
                        name: item,
                        value: percent
                      };
                    }
                  ]}
                  style={{
                    lineWidth: 2,
                    stroke: "#fff"
                  }}
                >
                  <Label
                    content="percent"
                    formatter={(val, item) => {
                      return item.point.item + ": " + val;
                    }}
                  />
                </Geom>
              </Chart>
            </div>
        );
    }
}

export default ChartView;