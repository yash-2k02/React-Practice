import React from "react";
import axios from "axios";
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
  state = {
    stockData: null,
    stockInfo: null,
    error: null,
    loading: true,
  };

  componentDidMount() {
    if (this.props.stock) {
      this.fetchStockData(this.props.stock);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.stock !== this.props.stock) {
      this.fetchStockData(this.props.stock);
    }
  }

  fetchStockData = async (stock) => {
    this.setState({ loading: true, error: null });

    try {
      const response = await axios.get("https://stock.indianapi.in/stock", {
        params: { name: stock },
        headers: {
          "X-Api-Key": "sk-live-QDNp5R4HJphjJI8NfP6CD9KLl1hBuk2VYQZOk7Fz",
        },
      });

      // const response = await axios.get('/response.json')

      const { companyName, currentPrice, stockTechnicalData } = response.data;

      const chartData = [
        { label: "Current", price: parseFloat(currentPrice.BSE) },
        ...stockTechnicalData.map((data) => ({
          label: `${data.days}d ago`,
          price: parseFloat(data.bsePrice),
        })),
      ].reverse();

      const stockInfo = {
        name: companyName,
        price: currentPrice.BSE,
        change: response.data.percentChange,
        yearHigh: response.data.yearHigh,
        yearLow: response.data.yearLow,
      };

      this.setState({
        stockData: chartData,
        stockInfo,
        loading: false,
      });
      
    } catch (err) {
      this.setState({
        stockData: null,
        stockInfo: null,
        error: "Could not fetch stock data",
        loading: false,
      });
    }
  };

  render() {
    const { stockData, stockInfo, loading, error } = this.state;

    if (loading) return <p className={styles.message}>Loading stock data...</p>;
    if (error) return <p className={styles.error}>{error}</p>;

    return (
      <div className={styles.chartWrapper}>
        {stockInfo && (
          <div className={styles.detailsContainer}>
            <h2>{stockInfo.name}</h2>
            <p><strong>Price (BSE):</strong> ₹{stockInfo.price}</p>
            <p><strong>Change:</strong> {stockInfo.change}%</p>
            <p><strong>52W High:</strong> ₹{stockInfo.yearHigh}</p>
            <p><strong>52W Low:</strong> ₹{stockInfo.yearLow}</p>
          </div>
        )}

        {stockData && (
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
        )}
      </div>
    );
  }
}

export default StockChart;
