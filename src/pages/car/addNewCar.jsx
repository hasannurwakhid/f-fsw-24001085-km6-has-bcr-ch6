import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { createCar } from "../../redux/actions/car";
import { getManufactures } from "../../redux/actions/manufacture";
import { getTypes } from "../../redux/actions/type";
import { getTransmissions } from "../../redux/actions/transmission";

import { Row, Col, Card, Form, Button } from "react-bootstrap";

const AddNewCar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [model, setModel] = useState("");
  const [manufacture_id, setManufacture] = useState("");
  const [rent_day, setRentDay] = useState("");
  const [transmission_id, setTransmission] = useState("");
  const [type_id, setType] = useState("");
  const [year, setYear] = useState("");
  const [capacity, setCapacity] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState();

  const [isLoading, setIsLoading] = useState(false);

  const [manufactureLists, setManufactureLists] = useState([]);
  const [typeLists, setTypeLists] = useState([]);
  const [transmissionLists, setTransmissionLists] = useState([]);

  const manufactureData = useSelector(
    (state) => state.manufacture.manufactures
  );

  const typeData = useSelector((state) => state.type.types);

  const transmissionData = useSelector(
    (state) => state.transmission.transmissions
  );

  const onSubmit = async (e) => {
    e.preventDefault();

    dispatch(
      createCar(
        navigate,
        setIsLoading,
        model,
        manufacture_id,
        rent_day,
        transmission_id,
        type_id,
        year,
        capacity,
        description,
        image
      )
    );
  };

  useEffect(() => {
    dispatch(getManufactures());
    dispatch(getTypes());
    dispatch(getTransmissions());
  }, [dispatch]);

  useEffect(() => {
    if (manufactureData.length > 0) {
      setManufactureLists(manufactureData);
    }
    if (typeData.length > 0) {
      setTypeLists(typeData);
    }
    if (transmissionData.length > 0) {
      setTransmissionLists(transmissionData);
    }
  }, [manufactureData, typeData, transmissionData]);

  return (
    <Row className="mb-4">
      <Col md={6} className="offset-md-3">
        <Card>
          <Card.Header>ADD NEW CAR</Card.Header>
          <Card.Body>
            <Form onSubmit={onSubmit}>
              <>
                <div className="mt-4">
                  <Form.Group className="mb-3" controlId="model">
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      value={model}
                      onChange={(e) => setModel(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="year">
                    <Form.Label>Year</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      value={year}
                      onChange={(e) => setYear(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="capacity">
                    <Form.Label>Capacity</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      value={capacity}
                      onChange={(e) => setCapacity(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="manufacture">
                    <Form.Label>Manufacture</Form.Label>
                    <Form.Select
                      onChange={(e) => setManufacture(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>- Select Manufacture -</option>
                      {[...manufactureLists]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map((manufactureList) => (
                          <option
                            key={manufactureList.id}
                            value={manufactureList.id}
                          >
                            {manufactureList.name}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="rent_day">
                    <Form.Label>Rent Per Day</Form.Label>
                    <Form.Control
                      required
                      type="number"
                      value={rent_day}
                      onChange={(e) => setRentDay(e.target.value)}
                    />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="transmission">
                    <Form.Label>Transmission</Form.Label>
                    <Form.Select
                      onChange={(e) => setTransmission(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>- Select Transmission -</option>
                      {[...transmissionLists] // Salin array menggunakan spread operator
                        .sort((a, b) => a.name.localeCompare(b.name)) // Mengurutkan berdasarkan nama
                        .map((transmissionList) => (
                          <option
                            key={transmissionList.id}
                            value={transmissionList.id}
                          >
                            {transmissionList.name}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="type">
                    <Form.Label>Type</Form.Label>
                    <Form.Select
                      onChange={(e) => setType(e.target.value)}
                      aria-label="Default select example"
                    >
                      <option>- Select Type -</option>
                      {[...typeLists] // Salin array menggunakan spread operator
                        .sort((a, b) => a.name.localeCompare(b.name)) // Mengurutkan berdasarkan nama
                        .map((typeList) => (
                          <option key={typeList.id} value={typeList.id}>
                            {typeList.name}
                          </option>
                        ))}
                    </Form.Select>
                  </Form.Group>
                  <Form.Group
                    className="mb-3"
                    controlId="exampleForm.ControlTextarea1"
                  >
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                      required
                      as="textarea"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      rows={3}
                    />
                  </Form.Group>
                  <Form.Group controlId="image" className="mb-3">
                    <Form.Label>Car Image</Form.Label>
                    <Form.Control
                      required
                      type="file"
                      onChange={(e) => setImage(e.target.files[0])}
                    />
                  </Form.Group>
                  {image && (
                    <img
                      src={URL.createObjectURL(image)}
                      className="img-fluid col-12 mt-2 mb-4 rounded"
                      alt="Car Preview"
                    />
                  )}
                  <Button
                    className="me-3"
                    variant="secondary"
                    type="button"
                    onClick={() => navigate("/")}
                  >
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit" disabled={isLoading}>
                    {isLoading ? "Processing..." : "Simpan"}
                  </Button>
                </div>
              </>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default AddNewCar;
