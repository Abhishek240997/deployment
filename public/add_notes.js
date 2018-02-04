$(function () {
    let noteTitle = $('#noteTitle')
    let noteContent = $('#notecontent')

    $('#btnNoteAdd').click(function () {
        addNote(
            noteTitle.val(),
            noteContent.val(),
            function (addedNote) {
                window.alert("Added "+ addedNote.title + " to Database")
            }
        )
    })
})