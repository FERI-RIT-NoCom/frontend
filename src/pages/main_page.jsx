import {Link} from "react-router-dom";
import Navigtion from "../services/navigtion";
import '../styles/main_page.css';
import Fotter from "../services/fotter";

function main_page() {

    return (
        <div className="mainDiv">

            <Navigtion/>
            <div className="Container">
            <img className="mainImg" src="https://news.cornell.edu/sites/default/files/styles/story_thumbnail_xlarge/public/2018-05/0502_free_speech.jpg?h=4233ef75&itok=-G55-64N"/>
                <div className="centered">
                    We work for the freedom of speech
                </div>

            </div>
            <div className="text-area">
                <p className="title">Lorem ipsum</p>
                <p>
                    dolor sit amet, consectetur adipiscing elit. Curabitur et mauris in ipsum tristique lobortis ut non enim. Aenean felis dui, posuere ac tellus eu, congue scelerisque nunc. Duis quis risus ac nisl posuere consequat eget sit amet enim. Quisque fermentum nibh eget quam dictum, sit amet laoreet ex feugiat. Etiam vitae odio nisl. Ut auctor hendrerit odio id pellentesque. Cras maximus semper purus eget hendrerit. Morbi sit amet hendrerit magna. Duis eu erat libero.
                </p><br/>
                <p className="title">Aenean quis hendrerit libero</p>
                <p>
                    et sollicitudin metus. Aenean scelerisque commodo orci ac sollicitudin. Nulla ac velit lobortis, viverra tellus eu, lacinia ante. Nam a risus ut massa faucibus viverra eget vel augue. Suspendisse potenti. Quisque ut elit sit amet lorem euismod cursus. Nullam fringilla mi pharetra auctor dapibus. Sed auctor posuere vulputate.
                </p><br/>
                <p>
                    Curabitur a erat nibh. Nulla vestibulum ut dolor a ultrices. Praesent elit purus, dignissim id ornare ac, tempor sed purus. Sed ac nisl.

                </p><br/>
            </div>
            <Fotter/>
        </div>
    )
}

export default main_page;
