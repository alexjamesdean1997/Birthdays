import React from "react";
import './../styles/main.css';
import Checkbox from './Checkbox';
import TodosData from "../data/todosData";
import Joke from "./Joke"
import Form from "./Form";

class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            loggedIn: false,
            todos: TodosData,
            artists: []
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            });

            return{
                todos : updatedTodos
            }
        })
    }

    render() {

        const date = new Date();
        const todos = this.state.todos.map(todo => <Checkbox handleChange={this.handleChange} key={todo.id} todo={todo}/>);

        return(
            <main>
                <section>
                    <h1>Alex Dean</h1>
                    <div>la date = {date.getHours()}:{date.getMinutes()}:{date.getSeconds()}</div>
                    <div>
                        <ul>
                            {todos}
                        </ul>
                    </div>
                    <div>user is logged {this.state.loggedIn ? 'in' : 'out'}</div>
                </section>
                <section>
                    <Joke joke={{
                        question: "What did the grape say when it was stepped on?",
                        punchLine: "Nothing, it just let out a little wine."
                    }}/>
                    <Joke joke={{
                        question: "Why can't a bicycle stand on its own?",
                        punchLine: "It's two-tired."
                    }}/>
                    <Joke joke={{
                        punchLine:"I was up all night wondering where the sun went, but then it dawned on me."
                    }}/>
                </section>
                <section>
                    <Form/>
                </section>
                <section>

                </section>
            </main>
        )
    }

}

export default Main;