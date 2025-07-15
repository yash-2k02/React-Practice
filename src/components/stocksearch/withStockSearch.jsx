import React from "react";
import axios from "axios";
import SearchBar from '../searchbar/SearchBar'

const withStockSearch = (Component) => {
  return class extends React.Component {
    state = {
      stock: "Tata Steel",
      stockData: null,
      stockInfo: null,
      loading: false,
      error: null,
    };

    componentDidMount() {
      this.fetchStockData(this.state.stock);
    }

    componentDidUpdate(_, prevState) {
      if (prevState.stock !== this.state.stock) {
        this.fetchStockData(this.state.stock);
      }
    }

    handleSearch = (stockName) => {
      if (stockName) {
        this.setState({ stock: stockName });
      }
    };

    fetchStockData = async (stockName) => {
      this.setState({ loading: true, error: null });

      try {
        // const response = await axios.get("https://stock.indianapi.in/stock", {
        //   params: { name: stockName },
        //   headers: {
        //     "X-Api-Key": "sk-live-QDNp5R4HJphjJI8NfP6CD9KLl1hBuk2VYQZOk7Fz",
        //   },
        // });

        const response = await axios.get("/response.json");

        const { companyName, currentPrice, stockTechnicalData } = response.data;

        const chartData = [
          { label: "Current", price: parseFloat(currentPrice.BSE) },
          ...stockTechnicalData.map((d) => ({
            label: `${d.days}d ago`,
            price: parseFloat(d.bsePrice),
          })),
        ].reverse();

        const stockInfo = {
          name: companyName,
          price: currentPrice.BSE,
          change: response.data.percentChange,
          yearHigh: response.data.yearHigh,
          yearLow: response.data.yearLow,
        };

        this.setState({ stockData: chartData, stockInfo, loading: false });
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

      return (
        <>
          <SearchBar onSearch={this.handleSearch} />
          <Component
            stockData={stockData}
            stockInfo={stockInfo}
            loading={loading}
            error={error}
          />
        </>
      );
    }
  };
};

export default withStockSearch;
