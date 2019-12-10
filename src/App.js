import React from 'react';
import './App.css';
import {Dropdown, Menu, Icon, Slider, Row, Col, Statistic, Button, TimePicker,Radio} from 'antd';

const stations = [{name: 'Van Cortlandt Park - 242 St',},
{name: '238 St',},
{name: '231 St',},
{name: 'Marble Hill - 225 St',},
{name: '215 St',},
{name: '207 St',},
{name: 'Dyckman St',},
{name: '191 St',},
{name: '181 St',},
{name: '168 St - Washington Hts',},
{name: '157 St',},
{name: '145 St',},
{name: '137 St - City College',},
{name: '125 St',},
{name: '116 St - Columbia University',},
{name: 'Cathedral Pkwy (110 St)',},
{name: '103 St',},
{name: '96 St',},
{name: '86 St',},
{name: '79 St',},
{name: '72 St',},
{name: '66 St - Lincoln Center',},
{name: '59 St - Columbus Circle',},
{name: '50 St',},
{name: 'Times Sq - 42 St',},
{name: '34 St - Penn Station',},
{name: '23 St',},
{name: '18 St',},
{name: '14 St',},
{name: 'Christopher St - Sheridan Sq',},
{name: 'Houston St',},
{name: 'Canal St',},
{name: 'Franklin St',},
{name: 'Chambers St',},
{name: 'WTC Cortlandt',},
{name: 'Rector St',},
{name: 'South Ferry',}];

const line = [{
  line: 'R',
}, {
  line: '1',
}, {
  line: 'A',
}];



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      userInput :{
        selectedDepartureStation: null,
        selectedDepartureStation: null,
        selectedArrivalStation: null,
        selectedArrivalTime: null,
        selectedArrivalDate:"Weekday",
        selectedLine:null,
      },
      selectedDepartureStation: null,
      selectedArrivalStation: null,
      selectedArrivalTime: null,
      selectedArrivalDate:"Weekday",
      selectedLine:"R",
      data: null,
      request:null,
      
    };
    // this.commuteRequest = this.commuteRequest.bind(this)
    // this.onTimeChange = this.onTimeChange.bind(this)
    this.userRequest = this.userRequest.bind(this);
    this.onTrainChange = this.onTrainChange.bind(this);

  }

  onDateChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      selectedArrivalDate: e.target.value,
    });
    console.log(this.state.selectedArrivalDate);
  }

  async onTrainChange(e,nowline){
    e.preventDefault();
    console.log(e);
    console.log('line changed:', nowline);
    await this.setState({
      selectedLine: nowline,
    });
    console.log(this.state.selectedLine);
  }

  async userRequest(){
    await console.log(this.state.selectedArrivalDate)
    this.setState({
      request :{
                  method: 'POST',
                  headers:{
                    'Content-Type':'application/json'
                  },
                  body: JSON.stringify(this.state.selectedLine,this.state.selectedDepartureStation,this.state.selectedDepartureStation,this.state.selectedArrivalTime,this.state.selectedArrivalDate)
                  
                }
    })
    console.log(this.state.request)

  }


  // componentDidMount() {
  //     // Call our fetch function below once the component mounts
  //   this.callBackendAPI()
  //     .then(res => this.setState({ data: res.express }))
  //     .catch(err => console.log(err));
  // }

  // callBackendAPI = async () => {
  //   const response = await fetch('/express_backend');
  //   const body = await response.json();

  //   if (response.status !== 200) {
  //     throw Error(body.message) 
  //   }
  //   return body;
  // };

  // async commuteRequest() {
  //   this.setState({ data: "requested"});
  //   // var request_args = {this.state.selectedLine,this.state.selectedDepartureStation,this.state.selectedDepartureStation,this.state.selectedArrivalTime,this.state.selectedArrivalDate}
  //   var currentRequest = {
  //           method: 'POST',
  //           headers:{
  //             'Content-Type':'application/json'
  //           },
  //           body: JSON.stringify(this.state.selectedLine,this.state.selectedDepartureStation,this.state.selectedDepartureStation,this.state.selectedArrivalTime,this.state.selectedArrivalDate)
  //           // body:JSON.stringify({"hello":"world"})
            
  //         }

  //   var response = await fetch('/commuterequest',currentRequest);
  //   var response_data = await response.json();
  //   this.setState({ data: response_data});

  // }


  render() {
    const {selectedDepartureStation, selectedArrivalStation,selectedLine} = this.state;

     //const diff = selectedDepartureStation.arrivalTime - selectedArrivalStation.arrivalTime;

    return (

      <div className="App" style={{backgroundColor: "#f5f5f5"}}>

      <Row>
        <Col span={12} offset={6}>
          <br />
          <h1 style={{fontFamily:'proxima-nova', fontWeight:'normal', backgroundColor: "#f5f5f5"}}> {<img src="/mta.png" alt ="mta-mini-logo" width="3%" height='3%'/>}Crunch </h1>
          <br />
        </Col>
      </Row>

          <h3 >
            Commute on the {selectedLine} Train</h3><br/>
            <img src="/1.png" alt="1" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"1")}/>
            <Icon type="circle" /><img src="/2.png" alt="2" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"2")} />
            <Icon type="circle" /><img src="/3.png" alt="3" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"3")}/>
            <Icon type="circle" /><img src="/4.png" alt="4" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"4")}/>
            <Icon type="circle" /><img src="/5.png" alt="5" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"5")}/>
            <Icon type="circle" /><img src="/6.png" alt="6" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"6")}/>
            <Icon type="circle" /><img src="/7.png" alt="7" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"7")}/>
            <Icon type="circle" /><img src="/a.png" alt="a" width="2.3%" height="2.3%" onClick={(e)=>this.onTrainChange(e,"A")}/>
            <Icon type="circle" /><img src="/c.png" alt="c" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"C")}/>
            <Icon type="circle" /><img src="/e.png" alt="e" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"E")}/>
            <Icon type="circle" /><img src="/b.png" alt="b" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"B")}/>
            <Icon type="circle" /><img src="/d.png" alt="d" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"D")}/>
            <Icon type="circle" /><img src="/f.png" alt="f" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"F")}/>
            <Icon type="circle" /><img src="/m.png" alt="m" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"M")}/>
            <Icon type="circle" /><img src="/g.png" alt="g" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"G")}/>
            <Icon type="circle" /><img src="/j.png" alt="j" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"J")}/>
            <Icon type="circle" /><img src="/z.png" alt="z" width="2.3%" height="2.3%" onClick={(e)=>this.onTrainChange(e,"Z")}/>
            <Icon type="circle" /><img src="/l.png" alt="l" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"L")}/>
            <Icon type="circle" /><img src="/n.png" alt="n" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"N")}/>
            <Icon type="circle" /><img src="/q.png" alt="q" width="2.3%" height="2.3%" onClick={(e)=>this.onTrainChange(e,"Q")}/>
            <Icon type="circle" /><img src="/r.png" alt="r" width="3%" height="3%" onClick={(e)=>this.onTrainChange(e,"R")}/>
            <Icon type="circle" /><img src="/w.png" alt="w" width="2.3%" height="2.3%" onClick={(e)=>this.onTrainChange(e,"W")}/>
            <Icon type="circle" /><img src="/s.png" alt="s" width="2.8%" height="2.8%" onClick={(e)=>this.onTrainChange(e,"S")}/>

          
            <br />
            
<br/><br/>

      <Row>
      
        <Col span={12}>

          <h3> {selectedDepartureStation && selectedDepartureStation.name} </h3>
          <Dropdown overlay={(
            <Menu>
              {stations.map(station => (
                <Menu.Item key={station.name}>
                  <a href="/#" value = "set-departure" onClick={() => this.setState({selectedDepartureStation: station})}>
                    {station.name}

                  </a>
                </Menu.Item>
              ))}
            </Menu>
          )}>
            <a className="ant-dropdown-link" href="App.css">
              Departure Station<Icon type="down" />
            </a>
          </Dropdown>
        </Col>
        <Col span={12}>
        <h3> {selectedArrivalStation && selectedArrivalStation.name}</h3>

        <Dropdown overlay={(
          <Menu>
            {stations.map(station => (
              <Menu.Item key={station.name}>
                <a href="/#" onClick={() => this.setState({selectedArrivalStation: station})}>
                  {station.name}
                </a>
              </Menu.Item>
            ))}
          </Menu>
        )}>
          <a className="ant-dropdown-link" href="App.css">
            Arrival Station<Icon type="down" />
          </a>
        </Dropdown>
        </Col>
      </Row>
      <br/><br/><br/>
      <Row>
      <h4 style={{fontColor:"#f5f5f5"}}> Arrival time  { "\ "}
          <TimePicker use12Hours minuteStep={5} format="h:mm a" value = {this.state.selectedArrivalTime} style = {{margin:15} }/>

          <Radio.Group buttonStyle="solid" onChange={this.onDateChange} value={this.state.selectedArrivalDate} >
          <Radio value={"Weekday"}>Weekday</Radio>
          <Radio value={"Weekend"}>Weekend</Radio>
          </Radio.Group><Col span={1}/>
          <Button type="primary" onClick = {this.userRequest}>Get Commute Time</Button></h4>
            <br /><br />
      </Row>

      <Row>
        <Col span={8} offset={8}>
            <br /><br /><br />
          
          <Statistic title="Expected commute time" value={45} suffix={'min'} />
            <br /><br /><br />
          <Slider defaultValue={80} min={60} max={100} />
        </Col>
      </Row>
        <br /><br /><br /><br />
      <Row><p className="App-intro">{this.state.data}</p></Row>
      <img src="./bacLogo.png" alt="bottom-bac-logo" width="100%" height='20%'/>
      </div>

    );
  }
}


export default App;
