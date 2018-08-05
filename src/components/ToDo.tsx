import * as React from 'react'
import {Icon, Checkbox, Button} from 'semantic-ui-react';
export interface ITodo {
    task: string;
}

interface IItemProps {
    todo: ITodo;
    onDelete: () => void;
}

interface IItemState {
    done: boolean;
}


export default class ToDo extends React.Component<IItemProps, IItemState> {
    constructor(props: IItemProps) {
        super(props);
        this.state = {done: false};
        this.toggleDone = this.toggleDone.bind(this);
    }
    toggleDone() {
        this.setState({done: !this.state.done});
    }
    render() {
        const todoStyle = {
            width: '250px',
            margin: '5px',
            display: 'block',
            border: '1px solid black',
            borderRadius: '5px',
            padding: '5px',
            paddingLeft: '8px',
            backgroundColor: this.state.done ?'gray': 'white'
        };

        return  <div style={todoStyle}>
            <Checkbox style={{float: 'left', marginRight: '2px'}} onClick={this.toggleDone}/>

            {this.props.todo.task}
            <div style={{float: 'right'}}>
                <button style={{border: 'none', cursor: 'pointer'}} onClick={this.props.onDelete}>
                    <Icon name='window close'/>
                </button>
            </div>
        </div>
    }
}