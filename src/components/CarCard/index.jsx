import {
  Container,
  Row,
  Col,
  Card,
  Button,
  Image,
  Modal,
} from "react-bootstrap";
import { useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { deleteCar } from "../../redux/actions/car";

const CarCard = ({ car }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCarId, setSelectedCarId] = useState(null);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(deleteCar(navigate, selectedCarId));
    handleClose();
  };

  return (
    <Col md={4} className="d-flex">
      <Card className="mb-4 flex-fill">
        <Card.Body className="p-4 d-flex flex-column">
          {car?.image && (
            <Card.Img
              src={car?.image}
              className="img-fluid mb-4 rounded"
              alt="..."
            />
          )}

          <Card.Text>{car?.model}</Card.Text>
          <Card.Title className="mb-3">Rp {car?.rent_day} / hari</Card.Title>
          <div className="mb-2">
            <Image className="me-2" src="/fi_clock.png" alt="" />
            {car?.updatedAt}
          </div>
          <Row className="mt-auto">
            <Col md={6} className="d-flex mt-2">
              <Button
                className="btn flex-fill d-flex align-items-center justify-content-center border-danger text-danger"
                onClick={() => {
                  setSelectedCarId(car?.id);
                  handleShow();
                }}
                variant="light"
              >
                <Image src="/fi_trash-2.png" alt="" />
                Delete
              </Button>
            </Col>
            <Col md={6} className="d-flex mt-2">
              <Button
                as={Link}
                to={`/cars/${car?.id}`}
                className="btn text-white flex-fill d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#5cb85f" }}
                variant="outline-none"
              >
                <Image src="/fi_edit.png" alt="" />
                Edit
              </Button>
            </Col>
          </Row>
        </Card.Body>
      </Card>

      <Modal show={showModal} onHide={handleClose} centered>
        <Modal.Body>
          <Row className="justify-content-center">
            <Image
              src="/img-BeepBeep.png"
              alt=""
              style={{ width: "50%" }}
            />
          </Row>
          <Row className="justify-content-center">
            <h4 style={{ textAlign: "center" }}>Menghapus Data Mobil</h4>
          </Row>
          <Row className="justify-content-center">
            <Col md={10}>
              <p style={{ textAlign: "center" }}>
                Setelah dihapus, data mobil tidak dapat dikembalikan. Yakin
                ingin menghapus?
              </p>
            </Col>
          </Row>
          <Row className="g-2 justify-content-center">
            <Col md={3} className="d-flex">
              <Button
                variant="outline-primary"
                className="flex-fill"
                onClick={handleClose}
              >
                Tidak
              </Button>
            </Col>
            <Col md={3} className="d-flex">
              <Button
                variant="primary"
                className="flex-fill"
                style={{ backgroundColor: "#0d28a6" }}
                onClick={onSubmit}
              >
                Ya
              </Button>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>
    </Col>
  );
};

CarCard.propTypes = {
  car: PropTypes.object,
};

export default CarCard;
