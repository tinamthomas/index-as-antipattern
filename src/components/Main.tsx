import * as React from 'react'
import {ITodo, default as ToDo} from "./ToDo";

interface IMainProps {
}
;

interface IMainState {
    todos: ITodo[];
}
;

export default class Main extends React.Component<IMainProps, IMainState> {
    constructor(props: IMainProps) {
        super(props);
        this.state = {
            todos: [
                {task: 'Wash car'},
                {task: 'Buy Groceries'},
                {task: 'Laundry'},
                {task: 'Dance recital'},
            ]
        };
        this.deleteTodo = this.deleteTodo.bind(this);
    }
    deleteTodo(index: number) {
        const newTodos =
            [...this.state.todos.slice(0, index), ...this.state.todos.slice(index + 1)];
        this.setState({todos: newTodos});
    }

    render() {
        return <div style={{width: '250px', marginLeft: '500px', marginTop: '51px'}}>
            {this.state.todos
                .map((todo: ITodo, index: number) =>
                    <ToDo
                        key={index}
                        todo={{task: todo.task}}
                        onDelete={() => this.deleteTodo(index)}
                    />)
            }
        </div>
    }
}