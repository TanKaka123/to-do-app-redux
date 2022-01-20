import { Col, Row, Input, Button, Select, Tag } from "antd";
import Todo from "../Todo";
import { useDispatch } from "react-redux";
import { addTodo } from "../../redux/actions";
import { v4 as uuid } from "uuid";
import { useState } from "react";
import { useSelector } from "react-redux";
import { todoRemainingSelector } from "../../redux/selectors";


export default function TodoList() {
  const dispatch = useDispatch();
  const [todoName, setTodoName] = useState("");
  const [priority, setPriority] = useState("Medium");

  const todoList = useSelector(todoRemainingSelector);
  // const searchText=useSelector(searchTextSelector);
  // console.log(searchText);

  const handlAllButtonClick = () => {
    //dispatch
    dispatch(
      addTodo({
        id: uuid(),
        name: todoName,
        priority: priority,
        completed: false,
      })
    );
    setTodoName("");
    setPriority('Medium')
  };
  const handlInputOnChange = (e) => {
    setTodoName(e.target.value);
  };
  const handlePriority = (e) => {
    setPriority(e);
  };
  return (
    <Row style={{ height: "calc(100% - 40px)" }}>
      <Col span={24} style={{ height: "calc(100% - 40px)", overflowY: "auto" }}>
        {/* <Todo name='Learn React' prioriry='High' />
        <Todo name='Learn Redux' prioriry='Medium' />
        <Todo name='Learn JavaScript' prioriry='Low' /> */}
        {todoList.map(todo => 
          
          <Todo key={todo.id} name={todo.name} prioriry={todo.priority}/>
        )}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: "flex" }} compact>
          <Input value={todoName} onChange={handlInputOnChange} />
          <Select
            defaultValue="Medium"
            value={priority}
            onChange={handlePriority}
          >
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handlAllButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
