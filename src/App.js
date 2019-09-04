import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import "./css/style.css"
import Card from "./components/card"
import $ from "jquery"

class App extends Component {

    constructor(props) {
        super(props);
    }

    GetPhotos() {
        let result;

        $.ajax({
            url: " https://jsonplaceholder.typicode.com/photos",
            async: false,
            type: "get",
            success(data) {
                result = data;
            },
            error() {
                result = "";
                alert("Ошибка загрузки!");
            }
        });

        return result;
    }

    render() {

        let photos = this.GetPhotos().slice(0, 20);
        console.log(photos);

        return (
            <div>
                <h1>Фотографии в цикле</h1>
                <p>{"Количество записей: " + photos.length}</p>
                <div className="cards_place">
                    {photos.map(function (photo) {
                        console.log(photo);
                        return (
                            <Card item={photo}/>
                        )
                    })}
                </div>
            </div>
        )
    }
}

export default App;
