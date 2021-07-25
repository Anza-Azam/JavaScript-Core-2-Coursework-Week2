function listOfNames(arrayOfPeople) {
    let content = document.querySelector("#content");

    arrayOfPeople.forEach((person) => {

    //created  h1 and h2 for name and job

        const names = document.createElement('h1')
        const jobs = document.createElement('h2')

    //adding each person

        names.innerHTML = person.name;
        jobs.innerHTML = person.job;

        content.appendChild(names);
        content.appendChild(jobs);
    })


}

let people = [
    {
        name: "Chris",
        job: "Teacher"
    }, {
        name: "Joanna",
        job: "Student"
    }, {
        name: "Boris",
        job: "Prime Minister"
    },
];

listOfNames(people);
