function body(){
    let html = document.querySelector("#html")
    let htm = document.getElementById("html")
    let css = document.querySelector("#css")
    let js = document.querySelector("#js")
    let node =document.querySelector("#node")
    
    
    let cssclick = css.addEventListener("click")
    let jsclick = js.addEventListener("click")
    let nodeclick = node.addEventListener("click")
    htm.style.backgroundColor="yellow"
    

    
    
}

function Contentsnav(){
    return(
        <div id="nav2" >
            <div className="navbtn" onClick={()=> this.body()} id="html">HTML</div>
            <div className="navbtn" id="css">CSS</div>
            <div className="navbtn" id="js">JS</div>
            <div className="navbtn"  id="node">NODE</div>
        </div>

    );
}

export default Contentsnav