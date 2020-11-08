import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';

const AddEditTodo = props => {
    const EnterKeyHandler = (event) => {
        if (event.key === "Enter") {
            props.submit();
        }
    }
    return (
        <Container>
            <Form.Row className="justify-content-md-center">
                <Col xs lg="5">
                    <InputGroup className="mb-3">
                        <FormControl
                            placeholder="Task"
                            aria-label="Task"
                            aria-describedby="basic-addon2"
                            onChange={props.change}
                            value={props.value.name}
                            onKeyPress={EnterKeyHandler}
                        />
                        <InputGroup.Append>
                            <Button variant="primary" onClick={props.submit}>Submit</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
            </Form.Row>
        </Container>

    )
}

export default AddEditTodo;