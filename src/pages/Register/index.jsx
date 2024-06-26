import RegisterComponent from "../../components/Register";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <>
      <Row>
        <Col md={6} className="offset-md-3">
          <Card>
            <Card.Header>Register</Card.Header>
            <Card.Body>
              <RegisterComponent />
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col md={6} className="offset-md-3">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </Col>
      </Row>
    </>
  );
};

export default Register;
