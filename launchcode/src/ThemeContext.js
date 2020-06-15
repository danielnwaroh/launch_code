import React, { createContext, Component } from "react";
import axios from "axios";

export const ThemeContext = createContext();

class ThemeContextProvider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLightTheme: true,
      light: { syntax: "#555", ui: "#ddd", bg: "#eee" },
      dark: { syntax: "#ddd", ui: "#333", bg: "#555" },
      quotes: [],
      dataReady: false,
    };
    this.getQuotes();
  }

  componentDidMount() {}

  getQuotes() {
    axios.get("http://localhost:4000/quotes").then((response) => {
      console.log(response.data.data);
      this.setState({
        quotes: response.data.data,
        dataReady: true,
      });
    });
  }

  render() {
    if (this.state.dataReady === false) {
      return <div>loading data</div>;
    } else {
      return (
        <ThemeContext.Provider value={{ ...this.state }}>
          {this.props.children}
        </ThemeContext.Provider>
      );
    }
  }
}

export default ThemeContextProvider;
