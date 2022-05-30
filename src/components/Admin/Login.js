import React from "react";
import axios from "axios";

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
        };
    }
    componentDidMount() {
        axios
            .get("https://server-api-manggala-pustaka.herokuapp.com/items")
            .then((response) => {
                this.setState({ items: response.data });
            });
    }
    render() {
        return (
            <div className="container">
                <h1>hellow</h1>
                <div className="col-lg-6 pb-5">
                    {this.state.items.map((index) => (
                        <div key={index.id}>
                            <h1>{index.name}</h1>
                            <p>{index.slug}</p>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
