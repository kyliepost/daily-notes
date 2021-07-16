// const searchTerm = "Confused"

const notes = [
    {
        id: 1,
        subject: "Java String",
        date: "7/15/21",
        feeling: "Good",
        timeSpent: 10
    },
    {
        id: 2,
        subject: "Java Iteration",
        date: "7/15/21",
        feeling: "Confused",
        timeSpent: 10
    }
]

const noteAboutToday = {
    id:3,
    subject: "Java in different projects",
    date: "7/16/21",
    feeling: "Slightly confused, but figuring it out",
    timeSpent: 60
}

const createNote = (noteObject) => {
    
    

    const lastIndex = notes.length - 1

    const currentLastNote = notes[lastIndex]

    const maxId = currentLastNote.id

    const idForNewNote = maxId + 1

    noteObject.id = idForNewNote

    notes.push(noteObject)

    
}



const newerNote = {
    subject: "Creating note properly",
    date: "7/16/21",
    feeling: "Slightly confused, but getting it",
    timeSpent: 30
}

createNote(newerNote)

notes.push(noteAboutToday)


for (const note of notes) {
    // console.log(`I worked on ${note.subject} on ${note.date} and during the process, I felt ${note.feeling}.`)
    

    // if (note.feeling === searchTerm) {
        console.log(`Note ${note.id}
    Date ${note.date}
    Subject ${note.subject}
    Time ${note.timeSpent} minutes
    Feeling ${note.feeling}
    `)
    }

console.log(notes)