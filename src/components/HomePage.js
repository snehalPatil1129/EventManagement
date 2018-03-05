import React, { Component } from 'react';
import {Bar, Line} from 'react-chartjs-2';
import {
Container,
 Input, 
 InputGroup,
 InputGroupText,
  InputGroupAddon,  
  Badge,
  Row,
  Col,
  Progress,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  CardTitle,
  Button,
  ButtonToolbar,
  ButtonGroup,
  ButtonDropdown,
  Label,
  Table,
  Form,
  FormGroup,
  FormText,
} from 'reactstrap';
import {createBrowserHistory } from 'history';  
var history = createBrowserHistory();



class HomePage extends Component {
    constructor(props) {
        super(props);
        var history= {history}
        this.state = {
            user: {
                firstName: '',
                lastName: '',
                Email: '',
                City: '',
                //password: ''
            },
            submitted: false
        };
       // this.toggle = this.toggle.bind(this);
        this.changeFunction = this.changeFunction.bind(this);
        this.submitFunction = this.submitFunction.bind(this);
    }
    
    changeFunction(event) {
      
       const { name, value } = event.target;
     
       const { user } = this.state;
      // console.log("user", user)
       this.setState({
           user: {
               ...user,
               [name]: value
           }
       });
    }
    
    submitFunction(event) {
       event.preventDefault();
       this.setState({ submitted: true });
       const { user } = this.state;
       alert('Success');
       console.log(this.state.user);
       this.props.history.push('/login');
    }
    
    
  render() {
    const { user, submitted } = this.state;
    return (
      <div className="animated fadeIn">
       <Container>
          <Row className="justify-content-center">
            <Col md="12">
              <Card className="mx-4">
                <CardBody className="p-4">
                  <h1>Register</h1>
                  <p className="text-muted">Create your account</p>
                  <FormGroup row>
                 <Col xs="12" md="6" >
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="First Name" name="firstName" value={user.firstName} onChange={this.changeFunction}/>
                  </InputGroup>
                  </Col>
                  <Col  md="6" >
                  <InputGroup className="mb-3">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="icon-user"></i>
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Last Name" name="lastName" value={user.lastName} onChange={this.changeFunction}/>
                  </InputGroup>
                  </Col>
                  </FormGroup>
                  {/* </Col> */}
                  <FormGroup row>
                  <Col xs="12" md="6">
                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText>@</InputGroupText>
                    </InputGroupAddon>
                    <Input type="text" placeholder="Email"  name="Email" value={user.Email} onChange={this.changeFunction}/>
                  </InputGroup>
                  </Col>
                  <Col  md="6" >
                  <InputGroup className="mb-3">
                  <InputGroupAddon addonType="prepend">
                      <InputGroupText><i className="icon-contact"></i></InputGroupText>
                    </InputGroupAddon>
                    <Input type="number" placeholder="Contact" maxLength="10"  name="Contact" value={user.Contact} onChange={this.changeFunction}/>
                  </InputGroup>
                  
                  </Col>
                  </FormGroup>
                  <FormGroup row>
                    <Col xs="12" md="6">
                      <Input type="select" name="select1" id="City" placeholder="City"  onChange={this.changeFunction}>
                        <option value="">Select City</option>
                        <option value="Mumbai">Mumbai</option>
                        <option value="Pune">Pune</option>
                        <option value="Nashik">Nashik</option>
                      </Input>
                    </Col>
                    <Col  md="6">
                      <Input type="select" name="select2" id="Conference" placeholder="Conference"  onChange={this.changeFunction}>
                        <option value="">Select Conference</option>
                        <option value="Conference 1">Conference 1</option>
                        <option value="Conference 2">Conference 2</option>
                        <option value="Conference 3">Conference 3</option>
                      </Input>
                    </Col>
                  </FormGroup>

                  <FormGroup row>
                  <Col md="3">
                    <Label>Role </Label>
                  </Col>
                  <Col md="9">
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio1" name="inline-radios" value="option1"/>
                      <Label className="form-check-label" check htmlFor="inline-radio1">Delegate</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio2" name="inline-radios" value="option2"/>
                      <Label className="form-check-label" check htmlFor="inline-radio2">Media</Label>
                    </FormGroup>
                    <FormGroup check inline>
                      <Input className="form-check-input" type="radio" id="inline-radio3" name="inline-radios" value="option3"/>
                      <Label className="form-check-label" check htmlFor="inline-radio3">Guest</Label>
                    </FormGroup>
                  </Col>
                </FormGroup>
                
                <FormGroup row>
                  <Col xs="6" md="3">
                  <Button type="submit" size="md" color="primary" onClick={this.submitFunction} >Create Account</Button>
                  </Col>
                  <Col md="3">
                <Button type="reset" size="md" color="danger" ><i className="fa fa-ban"></i> Reset</Button>
                </Col>
                </FormGroup>
                </CardBody>
                  {/* <Button color="success"  onClick={this.submitFunction} block>Create Account</Button> */}
               
                
              </Card>
            </Col>
          </Row>
          {/* <Row className="justify-content-center">
          <Col md="12">
          <Card className="mx-4">
                <CardBody className="p-4">
            <Label>First Name :</Label> {this.state.user.firstName}
            <br />
            <Label>Last Name :</Label> {this.state.user.lastName}
            <br />

            <Label>Email :</Label> {this.state.user.Email}
            <br />
            <Label>City :</Label> {this.state.user.select}
            </CardBody>
            </Card>
          </Col>
        </Row> */}
        </Container>
       

      </div>
    )
  }
}

export default HomePage;


