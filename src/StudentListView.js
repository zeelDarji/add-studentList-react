import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Form, Button } from "react-bootstrap";

class StudentListView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      student: "",
      studentList: [{ name: "Zeel" }, { name: "Happy" }, { name: "Nisha" }]
    };
  }
  setStudent = e => {
    this.setState({
      student: e.target.value
    });
  };
  saveStudent = e => {
    e.preventDefault();
    const obj = {
      name: this.state.student
    };
    this.setState({
      studentList: [...this.state.studentList, obj],
      student: ""
    });
  };
  render() {
    return (
      <React.Fragment>
        <ul>
          {this.state.studentList.map(student => {
            return <li>{student.name}</li>;
          })}
        </ul>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Control
              type="name"
              placeholder="Add student"
              value={this.state.student}
              onChange={this.setStudent}
            />
          </Form.Group>

          <Button variant="primary" type="submit" onClick={this.saveStudent}>
            Submit
          </Button>
        </Form>
      </React.Fragment>
    );
  }
}

export default StudentListView;
