import {Link} from "react-router-dom";
export const About = () => {
    return(
        <div className={"flex flex-col items-center mx-auto text-gray-800 text-lg"}>
            <h1 className={"text-3xl tracking-wide text-center pt-3 pb-3"}>About us 📃</h1>
            <div className={"container md:px-20 px-5 mb-3"}>
                <p>
                    NoCom is an application that allows you to comment the internet. 
                    With NoCom you can share your opinion about any site on the internet and see other peoples opinion as well. 
                    No more hidden comment sections and censorship. 
                </p>
            </div>
            <div className={"text-base"}>want to <Link to={"/register"} className={"text-purple-600"}>contact</Link> us?</div>
        </div>
    )
}   
