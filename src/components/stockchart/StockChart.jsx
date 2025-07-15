import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "./StockChart.module.css";

class StockChart extends React.Component {
  render() {
    const { stockData, stockInfo, loading, error } = this.props;

    if (loading) return <p className={styles.message}>Loading stock data...</p>;
    if (error) return <p className={styles.error}>{error}</p>;
    if (!stockData || !stockInfo) return null;

    return (
      <div className={styles.chartWrapper}>
        <div className={styles.detailsContainer}>
          <h2>{stockInfo.name}</h2>
          <p><strong>Price (BSE):</strong> ₹{stockInfo.price}</p>
          <p><strong>Change:</strong> {stockInfo.change}%</p>
          <p><strong>52W High:</strong> ₹{stockInfo.yearHigh}</p>
          <p><strong>52W Low:</strong> ₹{stockInfo.yearLow}</p>
        </div>

        <div className={styles.chartContainer}>
          <ResponsiveContainer width="100%" height={350}>
            <LineChart data={stockData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="label" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="price"
                stroke="#1976d2"
                strokeWidth={3}
                activeDot={{ r: 7 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    );
  }
}

export default StockChart;
