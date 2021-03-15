import React, { Component } from 'react';
import DivCard from './div-card';

class Main extends Component {
    constructor() {
        super()
        this.state = {
            list: [
                { id: 1, status: false, textContent: "Lorem ipsum 1" },
                { id: 2, status: false, textContent: "Lorem ipsum 2" },
                { id: 3, status: false, textContent: "Lorem ipsum 3" },
                { id: 4, status: false, textContent: "Lorem ipsum 4" },
                { id: 5, status: false, textContent: "Lorem ipsum 5" },
                { id: 6, status: false, textContent: "Lorem ipsum 6" },
                { id: 7, status: false, textContent: "Lorem ipsum 7" },
                { id: 8, status: false, textContent: "Lorem ipsum 8" },
                { id: 9, status: false, textContent: "Lorem ipsum 9" },
            ]
        }
    }

    updateCardData = (id) => {
        const elementsIndex = this.state.list.findIndex(element => element.id === id);
        const newArray = [...this.state.list];
        newArray[elementsIndex] = { ...newArray[elementsIndex], status: !newArray[elementsIndex].status };
        this.setState({ list: newArray });
    }

    render() {
        return (
            <main className="container">
                <div className="row">
                    {this.state.list.map(card => {
                        return <DivCard key={card.id} data={card} updateCardData={this.updateCardData} />
                    })}
                </div>
            </main>
        );
    }
}

export default Main;
