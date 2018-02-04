$(function () {

    let notelist = $('#notes-list')

    fetchNotes(function (notes) {
        notelist.empty()
        for (note of notes){
            notelist.append(createNoteCard(note))
        }
    })

})