import React from "react";

export default class Newsitem extends React.Component {
    render() {
        return (
            <div className="col-xxl-2 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
                <div className="card">
                    <img className="card-img-top" src={this.props.image} alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="card-title">{this.props.title}</h5>
                        <h6>{new Date(this.props.date).toString()}</h6>
                        <p className="card-text">{this.props.description}</p>
                        <a href={this.props.url} className="btn btn-primary">Baca Selengkapnya..</a>
                    </div>
                </div>
            </div>
        )
    }
}