import React from 'react';
import styles from './App.module.css';
import StockChart from './components/stockchart/StockChart';
import withStockSearch from './components/stocksearch/withStockSearch';

const StockChartEnhanced = withStockSearch(StockChart);

class App extends React.Component {
  render() {
    return (
      <div className={styles.appContainer}>
        <h1 className={styles.title}>Stock Tracker</h1>
        <StockChartEnhanced />
      </div>
    );
  }
}

export default App;
