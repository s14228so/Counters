import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
   (() => {

      function Counter(props) {
        return (
          <li style={{backgroundColor:props.counter.color}} onClick={() => props.countUp(props.counter)}>
            {props.counter.id}:{props.counter.count}
          </li>
        );
      }

      function CounterList(props) {
        const counters = props.counters.map(counter => {
          return (
            <Counter
              counter={counter}
              key={counter.id}
              countUp={props.countUp}
            />
          );
        });
        return (
          <ul>
            {counters}
          </ul>
        );
      }

      class App extends React.Component {
        constructor() {
          super();
          this.state = {
            counters: [
              {id: 'A', count: 0, color: 'tomato'},
              {id: 'B', count: 0, color: 'skyblue'},
              {id: 'C', count: 0, color: 'limegreen'},
               {id: 'D', count: 0, color: 'gray'}
            ],
            total: 0

          };
          this.countUp = this.countUp.bind(this);
        }
        countUp(counter) {
          this.setState(prevState => {
            const counters = prevState.counters.map(counter => {
              return {id: counter.id, count: counter.count, color: counter.color};
            });
            const pos = counters.map(counter => {
              return counter.id;
            }).indexOf(counter.id);
            counters[pos].count++;
            return {
              counters: counters,
              total: prevState.total +1
            };
          });
        }
        render() {
          return (
            <div className="container">
              <CounterList
                counters={this.state.counters}
                countUp={this.countUp}
              />
              <div>TOTAL INVENTORY: {this.state.total}</div>
            </div>
          );
        }
      }

      ReactDOM.render(
        <App/>,
        document.getElementById('root')
      );
    })();