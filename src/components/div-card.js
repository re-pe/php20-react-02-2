import React, { Component } from 'react';

class DivCard extends Component {
    btnClasses(status) {
        return `btn btn-${status ? "success" : "danger"}`;
    }

    render() {
        return (
            <div className="col-md-4">
                <div className="card mb-4 box-shadow">
                    <h5 className="card-title">{this.props.data.status ? "Task is done" : "Task is not done"}</h5>
                    <div className="card-body">
                        <p className="card-text rem-2">{this.props.data.textContent}</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="btn-group">
                                <button
                                    type="button"
                                    className={this.btnClasses(this.props.data.status)}
                                    onClick={() => this.props.updateCardData(this.props.data.id)}>
                                    {this.props.data.status ? "Done" : "Mark as done"}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default DivCard;
