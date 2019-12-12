import React from 'react';
import './App.css';
import {Dropdown, Menu, Icon, Slider, Row, Col, Statistic, Button, TimePicker,Radio} from 'antd';
import {requestCommute} from './Api';


const table = {"1":["Van Cortlandt Park - 242 St", "238 St", "231 St", "Marble Hill - 225 St", "215 St", "207 St", "Dyckman St", "191 St", "181 St", "168 St - Washington Hts", "157 St", "145 St", "137 St - City College", "125 St", "116 St - Columbia University", "Cathedral Pkwy (110 St)", "103 St", "96 St", "86 St", '79 St', '72 St', '66 St - Lincoln Center', '59 St - Columbus Circle', '50 St', 'Times Sq - 42 St', '34 St - Penn Station', '23 St', '18 St', '14 St', 'Christopher St - Sheridan Sq', 'Houston St', 'Canal St', 'Franklin St', 'Chambers St', 'WTC Cortlandt', 'Rector St', 'South Ferry'],
"2":['Wakefield - 241 St', 'Nereid Av', '233 St', '225 St', '219 St', 'Gun Hill Rd', 'Burke Av', 'Allerton Av', 'Pelham Pkwy', 'Bronx Park East', 'E 180 St', 'West Farms Sq - E Tremont Av', '174 St', 'Freeman St', 'Simpson St', 'Intervale Av', 'Prospect Av', '3 Av - 149 St', '149 St - Grand Concourse', '135 St', '125 St', '116 St', 'Central Park North (110 St)', '96 St', '86 St', '79 St', '72 St', '66 St - Lincoln Center', '59 St - Columbus Circle', '50 St', 'Times Sq - 42 St', '34 St - Penn Station', '28 St', '23 St', '18 St', '14 St', 'Christopher St - Sheridan Sq', 'Houston St', 'Canal St', 'Franklin St', 'Chambers St', 'Park Pl', 'Fulton St', 'Wall St', 'Clark St', 'Borough Hall', 'Hoyt St', 'Nevins St', 'Atlantic Av', 'Bergen St', 'Grand Army Plaza', 'Eastern Pkwy - Brooklyn Museum', 'Franklin Av', 'President St', 'Sterling St', 'Winthrop St', 'Church Av', 'Beverly Rd', 'Newkirk Av', 'Flatbush Av - Brooklyn College'],
'3':['Harlem - 148 St', '145 St', '135 St', '116 St', 'Central Park North (110 St)', '96 St', '72 St', 'Times Sq - 42 St', '34 St - Penn Station', '14 St', 'Chambers St', 'Park Pl', 'Fulton St', 'Wall St', 'Clark St', 'Borough Hall', 'Hoyt St', 'Nevins St', 'Atlantic Av', 'Bergen St', 'Grand Army Plaza', 'Eastern Pkwy - Brooklyn Museum', 'Franklin Av', 'Nostrand Av', 'Kingston Av', 'Crown Hts - Utica Av', 'Sutter Av - Rutland Rd', 'Saratoga Av', 'Rockaway Av', 'Junius St', 'Pennsylvania Av', 'Van Siclen Av', 'New Lots Av'],
'4':['Woodlawn', 'Mosholu Pkwy', 'Bedford Park Blvd - Lehman College', 'Kingsbridge Rd', 'Fordham Rd', '183 St', 'Burnside Av', '176 St', 'Mt Eden Av', '170 St', '167 St', '161 St - Yankee Stadium', '149 St - Grand Concourse', '138 St - Grand Concourse', '125 St', '116 St', '110 St', '103 St', '96 St', '86 St', '77 St', '68 St - Hunter College', '59 St', '51 St', 'Grand Central - 42 St', '33 St', '28 St', '23 St', '14 St - Union Sq', 'Astor Pl', 'Broadway-Lafayette St', 'Spring St', 'Canal St', 'Brooklyn Bridge - City Hall', 'Fulton St', 'Wall St', 'Bowling Green', 'Borough Hall', 'Nevins St', 'Atlantic Av', 'Bergen St', 'Grand Army Plaza', 'Eastern Pkwy - Brooklyn Museum', 'Franklin Av', 'Nostrand Av', 'Kingston Av', 'Crown Hts - Utica Av', 'Sutter Av - Rutland Rd', 'Saratoga Av', 'Rockaway Av', 'Junius St', 'Pennsylvania Av', 'Van Siclen Av', 'New Lots Av'],
'5':['Eastchester - Dyre Av', 'Baychester Av', 'Gun Hill Rd', 'Pelham Pkwy', 'Morris Park', 'Nereid Av', '233 St', '225 St', '219 St', 'Gun Hill Rd', 'Burke Av', 'Allerton Av', 'Pelham Pkwy', 'Bronx Park East', 'E 180 St', 'West Farms Sq - E Tremont Av', '174 St', 'Freeman St', 'Simpson St', 'Intervale Av', 'Prospect Av', 'Jackson Av', '149 St - Grand Concourse', '138 St - Grand Concourse', '125 St', '86 St', '59 St', 'Grand Central - 42 St', '14 St - Union Sq', 'Brooklyn Bridge - City Hall', 'Fulton St', 'Wall St', 'Bowling Green', 'Borough Hall', 'Nevins St', 'Atlantic Av', 'Franklin Av', 'President St', 'Sterling St', 'Winthrop St', 'Church Av', 'Beverly Rd', 'Newkirk Av', 'Flatbush Av - Brooklyn College'],
'6':['Pelham Bay Park', 'Buhre Av', 'Middletown Rd', 'Westchester Sq - E Tremont Av', 'Zerega Av', 'Castle Hill Av', 'Parkchester', 'St Lawrence Av', 'Morrison Av- Sound View', 'Elder Av', 'Whitlock Av', 'Hunts Point Av', 'Longwood Av', 'E 149 St', "E 143 St - St Mary's St", 'Cypress Av', 'Brook Av', '3 Av - 138 St', '125 St', '116 St', '110 St', '103 St', '96 St', '86 St', '77 St', '68 St - Hunter College', '59 St', '51 St', 'Grand Central - 42 St', '33 St', '28 St', '23 St', '14 St - Union Sq', 'Astor Pl', 'Broadway-Lafayette St', 'Spring St', 'Canal St', 'Brooklyn Bridge - City Hall'],
'6E':['Not Available Yet'],
'7':['Not Available Yet'],
'7E':['Not Available Yet'],
'A':['Not Available Yet'],
'B':['Not Available Yet'],
'C':['Not Available Yet'],
'D':['Not Available Yet'],
'E':['Not Available Yet'],
'F':['Not Available Yet'],
'G':['Not Available Yet'],
'J':['Not Available Yet'],
'L':['Not Available Yet'],
'M':['Not Available Yet'],
'N':['Not Available Yet'],
'Q':['Not Available Yet'],
'R':['Not Available Yet'],
'S':['Not Available Yet'],
'W':['Not Available Yet'],
'Z':['Not Available Yet']}

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedDepartureStation: table["1"][0],
      selectedArrivalStation: table["1"][table["1"].length-1],
      selectedArrivalTime: "0900",
      selectedArrivalDate:"Weekday",
      selectedLine:"1",
      data: null,
      request:null,
      analysisTime:null,
      showResponse:false,
      responseData :{ 
      "status": null,
      "mean-commute": null,
      "confidence-commute":null 
      }
    };
    this.userRequest = this.userRequest.bind(this);
    this.onTrainChange = this.onTrainChange.bind(this);

  }

  onDateChange = e => {
    console.log('radio checked', e.target.value);
    this.setState({
      selectedArrivalDate: e.target.value,
    });
  }

  async onTrainChange(e,nowline){
    e.preventDefault();
    console.log(e);
    console.log('line changed:', nowline);
    await this.setState({
      selectedLine: nowline,
    });
    await this.setState({
      selectedDepartureStation: table[this.state.selectedLine][0], 
      selectedArrivalStation:table[this.state.selectedLine][table[this.state.selectedLine].length-1], 
    });

    console.log(this.state.selectedLine);
  }

  async userRequest(line, sStation, eStation, aTime,aDate){
    await requestCommute(line, sStation, eStation, aTime,aDate).then(response_data =>{
      this.setState({analysisTime:response_data.data["mean-commute"]});
    }
      
    )
    console.log(this.state.analysisTime)

  }


  render() {
    const {selectedDepartureStation, selectedArrivalStation,selectedLine,selectedArrivalDate,selectedArrivalTime,analysisTime} = this.state;

     //const diff = selectedDepartureStation.arrivalTime - selectedArrivalStation.arrivalTime;

    return (

      <div className="App" style={{backgroundColor: "#f5f5f5"}}>

      <Row>
        <Col span={12} offset={6}>
          <br />
          <h1 style={{fontWeight:'bold', backgroundColor: "#f5f5f5"}}> <Icon type = "circle"/><img src="/mta.png" alt ="mta-mini-logo" width="22px" style={{position:"relative",top:"-2px"}} />Crunch </h1>
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

          
            <br/><br/><br/>

      <Row>
      
        <Col span={12}>

          <h3> {selectedDepartureStation} </h3>
          <Dropdown overlay={(
            <Menu>
               {table[selectedLine].map(station => (
                 <Menu.Item key={station}>
                   <a href="/#" value = "set-departure" onClick={() => this.setState({selectedDepartureStation: station})}>
                     {station}
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
        <h3> {selectedArrivalStation} </h3>
          <Dropdown overlay={(
            <Menu>
               {table[selectedLine].map(station => (
                 <Menu.Item key={station+"2"}>
                   <a href="/#" value = "set-arrival" onClick={() => this.setState({selectedArrivalStation: station})}>
                     {station}
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
      <br/><br/>
      <Row>
      <h4 style={{fontColor:"#f5f5f5"}}> Arrival time 
          <TimePicker use12Hours minuteStep={5} format="h:mm a" style = {{margin:15} }/>

          <Radio.Group buttonStyle="solid" onChange={this.onDateChange} value={this.state.selectedArrivalDate} >
          <Radio value={"Weekday"}>Weekday</Radio>
          <Radio value={"Weekend"}>Weekend</Radio>
          </Radio.Group><Col span={1}/>
          <Button type="primary" onClick = {()=>this.userRequest(selectedLine,selectedArrivalStation,selectedDepartureStation,selectedArrivalTime,selectedArrivalDate)}>Get Commute Time</Button></h4>
            <br /><br />
      </Row>

      <Row >
        <Col span={8} offset={8}>
            <br /><br /><br />
          
          <Statistic title="Expected commute time" value={analysisTime} suffix={'min'} />
            <br /><br /><br />
          <Slider defaultValue={50} min={1} max={100} />
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
