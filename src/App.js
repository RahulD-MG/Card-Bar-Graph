import React from "react";
import { Select } from "antd";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
} from "chart.js";
import { Card, Row, Col } from "antd";
import { Bar } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      // position: 'top' as const,
      display: false
    },
    title: {
      display: false,
      text: "Chart.js Bar Chart"
    }
  }
};

const labels = ["January", "February", "March", "April"];

export const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: ["aqua", "green", "red", "yellow"]
    }
  ]
};

export function App(props) {
  const { height } = props;
  const { Option } = Select;
  return (
    <Card
      title="Budget Analysis"
      style={{ width: 300, padding: "16px", height: height + 35 }}
      extra={
        <Row
          gutter={[16, 16]}
          style={{ display: "inline-flex", alignItems: "center" }}
        >
          <Col>
            <Select defaultValue="Summary">
              <Option value="Summary">Summary</Option>
              <Option value="Forecast">Forecast</Option>
            </Select>
          </Col>
        </Row>
      }
    >
      <Row style={{ padding: "5%" }} gutter={[16, 16]}>
        <Col span={8}>
          <Bar options={options} data={data} />
        </Col>
      </Row>
    </Card>
  );
}
