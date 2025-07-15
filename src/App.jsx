import React from 'react';
import SearchBar from './components/searchbar/SearchBar';
import StockChart from './components/stockchart/StockChart';
import styles from './App.module.css'

class App extends React.Component {
  state = { searchStock: 'Tata steel' };

  handleSearch = (stockName) => {
    this.setState({ searchStock: stockName });
  };

  render() {
    return (
      <div className={styles.appContainer}>
        <h1 className={styles.title}>Stock Tracker</h1>
        <SearchBar onSearch={this.handleSearch} />
{this.state.searchStock && <StockChart stock={this.state.searchStock} />}
      </div>
    );
  }
}



export default App;
