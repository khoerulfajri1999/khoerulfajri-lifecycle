import React from "react";
import Newsitem from "./Newsitem";
import { Component } from "react";
import { Axios } from "axios";
import { Form } from "react-bootstrap"

export default class Lifecycle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newsDataArr: [],
            search: ""
        }
    }

    getArticles = async (param) => {
        let api =
            param != undefined
                ? `https://newsapi.org/v2/top-headlines?q=${this.state.search}&country=id&apiKey=63269bae99df4dfd964c3ce1d44b710e`
                : "https://newsapi.org/v2/top-headlines?country=id&apiKey=63269bae99df4dfd964c3ce1d44b710e";
        let datax = await fetch(api);
        let data = await datax.json();
        console.log(data);
        return this.setState({ article: data.articles });
    };
    componentDidMount() {
        this.getArticles()
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.search !== prevState.search) {
            this.getArticles(this.state.search);
        }
    }
    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-danger bg-danger">
                        <div className="container-fluid">
                            <a className="navbar-brand text-white" href="#">News App</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                                aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <form className="d-flex">
                                    <Form.Control
                                        size="lg"
                                        onChange={(e) => this.setState({ search: e.target.value })}
                                        placeholder="search keyword"
                                    />
                                </form>
                            </div>
                        </div>
                    </nav>
                </div><br />
                <div className="container-fluid">
                    <div className="row">
                        {
                              this.state.article && this.state.article.map((item, index) => {
                                return <Newsitem
                                    title={item?.title}
                                    author={item?.author}
                                    date={item?.publishedAt}
                                    description={item?.description}
                                    image={item?.urlToImage}
                                    url={item?.url}
                                    key={index}
                                />
                            }) 
                        }
                    </div>
                </div>
            </div>
        )
    }
}