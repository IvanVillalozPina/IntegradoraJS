import React from "react";
import NoEncontrado from "../pictures/404.png";

class NotFound extends React.Component {
    render() {
        return (
            <center>
                <img src={NoEncontrado} />
                <div>
                    <a href="/" class="btn btn-dark btn-lg">
                        Volver al inicio
                    </a>
                </div>
            </center>

        );
    }
}
export default NotFound;