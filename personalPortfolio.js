import React from "react"

function Portfolio(){
    return(
        <div>
            <div>
                <h1>Personal Portfolio</h1>
                <h2>Lukas Hinshaw</h2>
            </div>
            <hr/>
            <ul>
                <a href = "https://my.indeed.com/p/lukash-3ui58x3">My Resume</a><br/>
                <a href = "https://github.com/llhss28">My Github</a><br/>
                <hr/>
                <li>Location: Salt Lake City, UT</li>
                <li>Phone: 828-578-2239</li>
                <li>Email: lukashinshaw28@icloud.com</li>
            </ul>
            <hr/>
            <ul>My Projects
                <li><a href = "https://github.com/llhss28/BountyHunterMongoDB">MongoDB project</a></li>
                <li><a href = "https://github.com/llhss28/ReactAPI">React API project</a></li>
                <li><a href = "https://github.com/llhss28/ReactBadge">React Badge Generator</a></li>
                <li><a href = "https://github.com/llhss28/ReactMeme">React Meme Generator</a></li>
                <li><a href = "https://github.com/llhss28/MongooseInventory">Mongoose Project</a></li>
            </ul>
        </div>
    )
}

export default Portfolio