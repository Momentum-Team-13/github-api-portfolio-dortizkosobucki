
console.log('js is connected!')

const repoStuff = document.querySelector('#repos')
//holder of all stuff 

let gitHubUrlRepo = "https://api.github.com/users/dortizkosobucki/repos"


fetch(gitHubUrlRepo, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})
    .then(function (response) {
        //the response is the promised data
        return response.json()
        //put the response in JSON format 
    })
    .then(function (data) {
        console.log("Response from GitHub API:", data)
        //data refers to what the above promise returned
        //console log the data
        buildPage(data)
    })

function buildPage(repoData) {
    console.log(typeof repoData)
    let names = repoData.map(function (repo) {
        return repo.name
    })
    console.log(names)
    elements = names.map(function (name) {
        return buildRepo(name)

    })
    console.log("elements", elements)
    for (let element of elements) {
        repoStuff.appendChild(element)
    }
}

function buildRepo(repoName) {
    let repoEl = document.createElement("p")
    repoEl.innerText = repoName
    return repoEl
}

const profileStuff = document.querySelector('#profile')
//holder of all stuff 

let gitHubUrl = "https://api.github.com/users/dortizkosobucki"

fetch(gitHubUrl, {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' }
})

    .then(function (response) {
        //the response is the promised data
        return response.json()
        //put the response in JSON format 
    })

    .then(function (data) {
        console.log("Response from GitHub API:", data.name)
        //data refers to what the above promise returned
        //console log the data
        buildProfile(data)
    })

function buildProfile(profileData) {
    console.log(profileData)
    //page element that everything is dumping into
    let pageElement = document.createElement("div")
    pageElement.classList.add("profile")
    //picture
    let imageElement = document.createElement("img")
    imageElement.src = `${profileData.avatar_url}`
    imageElement.alt = "Profile Picture"
    pageElement.appendChild(imageElement)
    //name
    let nameElement = document.createElement("h1")
    nameElement.innerText = `${profileData.name}`
    pageElement.appendChild(nameElement)
    //final append to the profile stuff 
    profileStuff.appendChild(pageElement)
}