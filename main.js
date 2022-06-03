
console.log('js is connected!')


//REPO THINGS//
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

    for (let repo of repoData) {
        console.log(repo)
        buildRepo(repo)
    }
}

function buildRepo(repoName) {
    let repoEl = document.createElement("a")
    repoEl.innerText = repoName.name
    repoEl.href = repoName.html_url
    repoStuff.appendChild(repoEl)
}

//PROFILE THINGS//

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
    //location
    let locationElement = document.createElement("p")
    locationElement.innerText = `${profileData.location}`
    pageElement.appendChild(locationElement)
    //blog
    let blogElement = document.createElement("a", "#url")
    blogElement.innerText = `${profileData.blog}`
    blogElement.href = profileData.blog
    pageElement.appendChild(blogElement)
    //email
    let emailElement = document.createElement("a", "#email")
    emailElement.innerText = "\nd.ortizkosobucki@gmail.com"
    emailElement.href = "mailto:d.ortizkosobucki@gmail.com";
    pageElement.appendChild(emailElement)
    //bio
    let bioElement = document.createElement("p")
    bioElement.innerText = `${profileData.bio}`
    pageElement.appendChild(bioElement)
    //publicrepos
    let reposElement = document.createElement("p")
    reposElement.innerText = `${profileData.public_repos}`
    pageElement.appendChild(reposElement)
    //final append to the profile stuff 
    profileStuff.appendChild(pageElement)
}