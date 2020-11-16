import TodoList from './TodoList';
import AddEditTodo from './AddEditTodo';
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Todo = () => {
    const [input_todo, setTodo] = useState(
        {
            name: '',
            Lists: [],
            isEdit: false,
            index: 0
        }
    );

    useEffect(() => {
        setTodo({
            name: localStorage.getItem('name'),
            Lists: localStorage.getItem('Lists') !== null &&  localStorage.getItem('Lists') !== '' ? [...localStorage.getItem('Lists').split(',')] : [],
            isEdit: false,
            index: 0
        })
    }, []);
    const setTodoHandler = (event) => {
        setLocalStorage(input_todo.Lists, event.target.value);
        setTodo({
            name: event.target.value,
            Lists: [...input_todo.Lists],
            isEdit: input_todo.isEdit,
            index: input_todo.index
        })
    };

    const AddToDoHandler = () => {
        if (input_todo.name.length !== 0 && !input_todo.isEdit) {
            setLocalStorage([...input_todo.Lists, input_todo.name], '')
            setTodo({
                name: '',
                Lists: [...input_todo.Lists, input_todo.name],
                isEdit: false,
                index: 0
            })
        }
        else {
            const data = input_todo.Lists;
            data[input_todo.index] = input_todo.name;
            setTodo({
                name: '',
                Lists: [...data],
                isEdit: false,
                index: 0
            })
        }
    }
    const DeleteTodoHandler = (index) => {
        if (window.confirm('Do you really want to delete this?')) {
            const data = input_todo.Lists;
            data.splice(index, 1);

            setLocalStorage(data, input_todo.name);

            setTodo({
                name: input_todo.name,
                Lists: [...data],
                isEdit: false,
                index: 0
            });
        }
    }
    const EditToDoHandler = (index) => {
        const data = input_todo.Lists[index];
        setTodo({
            name: data,
            Lists: [...input_todo.Lists],
            isEdit: true,
            index: index
        })
    }
    const setLocalStorage = (Lists, name) => {
        localStorage.setItem("name", name);
        localStorage.setItem("Lists", [...Lists]);
        localStorage.setItem("isEdit", false);
        localStorage.setItem("index", 0);
    }

    return (
        <Container>
            <Row>
                <Col>
                    <h3>TODO App</h3>
                    <hr />
                </Col>
            </Row>
            <Row>
                <Col>
                    <AddEditTodo
                        change={setTodoHandler}
                        submit={AddToDoHandler}
                        value={input_todo} />
                </Col>
            </Row>
            <Row>
                <Col>
                    <TodoList data={input_todo} delete={DeleteTodoHandler} edit={EditToDoHandler} />
                </Col>
            </Row>
        </Container>
    )
}

export default Todo;