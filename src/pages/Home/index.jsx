import { Container, Row, Col, Button } from "react-bootstrap";
import CarCard from "../../components/CarCard";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getCars } from "../../redux/actions/car";

import { Link } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();

  const { cars } = useSelector((state) => state.car);

  useEffect(() => {
    dispatch(getCars());
  }, [dispatch]);

  return (
    <>
      <Container fluid>
        <Container>
          <Row className="mt-5 my-3">
            <Col md={6}>
              <h3>List Car</h3>
            </Col>
            <Col md={6} className="d-flex justify-content-end">
              <Button as={Link} to={`/addNewCar`}
                className="btn text-white d-flex align-items-center"
                style={{ backgroundColor: "#0d28a6" }}
              >
                <img src="/fi_plus.png" alt="" />
                Add New Car
              </Button>
            </Col>
          </Row>
        </Container>
      </Container>

      <Container fluid>
        <Container>
          <Row>
            {cars.length > 0 &&
              cars.map((car) => <CarCard key={car?.id} car={car} />)}
          </Row>
        </Container>
      </Container>
    </>
  );
};

export default Home;
