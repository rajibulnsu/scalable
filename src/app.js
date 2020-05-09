import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './components/Menu/menu';
import RiskLevelSelector from './components/RiskLevelSelector/Risk-level-selector';
import InvestmentInput from './components/InvestmentInput/InvestmentInput';
import TableScreen from './screens/TableScreen';
import Chart from './screens/ChartScreen';
import fetchData from './helpers/fetchData';

export default class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            riskLevel: 3,
            initialSum: 10000,
            cones: []
        };
        this.onChangeRiskLevel = this.onChangeRiskLevel.bind(this);
        this.onChangeInitialInvestment = this.onChangeInitialInvestment.bind(this);
    }

    async componentDidMount(){
        const cones = await fetchData();
        this.setState({cones})
    }

    onChangeRiskLevel(riskLevel) {
        this.setState({riskLevel});
    }

    onChangeInitialInvestment(initialSum) {
        initialSum > 0 && this.setState({ initialSum });
    }

    render() {
        const { riskLevel, initialSum, cones} = this.state;
        return (
            <Router>
                <div>
                    <Menu/>
                    <InvestmentInput onChangeInitialInvestment={this.onChangeInitialInvestment} defaultInvestment={initialSum}/>
                    <RiskLevelSelector onChangeRiskLevel={this.onChangeRiskLevel} defaultRiskLevel={riskLevel}/>
                    <Route exact path="/" component={() => <TableScreen riskLevel={riskLevel} initialSum={initialSum} cones={cones}/>} />
                    <Route path="/table" component={() => <TableScreen riskLevel={riskLevel} initialSum={initialSum} cones={cones}/>} />
                    <Route path="/chart" component={() => <Chart riskLevel={riskLevel} initialSum={initialSum} cones={cones}/>} />
                </div>
            </Router>
        );
    }

}
