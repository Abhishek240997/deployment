function fetchNotes (done) {
    $.get('/api/notes', function (data) {
        done(data)
    })
}

function addNote(title, content, done) {
    $.post('/api/notes', {
        title: title,
        content: content,
    }, function (data) {
        done(data)
    })
}

function createNoteCard(note) {
    return $(`
    <div class="col-3 card mx-4 p-2" style="width: 20rem;">
        <img class="card-img-top" src="note-icon.png" style="border-radius:10%; height: 20rem" alt="Card image cap">
        <div class="card-body">
            <h5 class="card-title">${note.title}</h5>
            <p class="card-text">${note.content}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`)
}