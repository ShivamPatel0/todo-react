import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import { Form } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome/'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faTrash,faEdit } from '@fortawesome/free-solid-svg-icons'
import uidv4 from 'uuid/dist/v4';
library.add(fab, faTrash,faEdit);

const TodoList = props => {
    const List = props.data.Lists.map((x, index) => {
        return (
            <tr key={uidv4()}>
                <td key={uidv4()}>{x}</td>
                <td key={uidv4()}><FontAwesomeIcon title='Click to delete' icon="trash" onClick={() => props.delete(index)}/> <FontAwesomeIcon title='Click to edit' icon="edit" onClick={() => props.edit(index)}/></td>
            </tr>
        )
    })
    return (
        <Container>
            <Form.Row className="justify-content-md-center">
                <Col xs lg="5">
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                                <th>
                                    Task
                                </th>
                                <th>
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {List}
                        </tbody>
                    </Table>
                </Col>
            </Form.Row>
        </Container>
    )
}

export default TodoList;