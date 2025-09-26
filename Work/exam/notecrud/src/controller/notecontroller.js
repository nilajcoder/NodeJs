
import Note from "../model/note.js";


//Create
export async function CreateNote(req, res) {

    try {
        // your logic here

        await Note.create(req.body);

        res.json({
            status: true,
            message: 'note created successfully'
        });

    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }

}



// GetAllProduct
export async function GetAllNotte(req, res) {

    const notes = await Note.find({}).exec()

    res.json({
        status: true,
        data: notes

    })

}

// GetById
export async function GetNoteById(req, res) {
    try {
        const notetId = req.params.id;
        const note = await Note.findById(notetId);

        if (!note) {
            return res.status(404).json({
                status: false,
                message: 'Note not found'
            });
        }

        res.json({
            status: true,
            data: note
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}


// Update 
export async function UpdateNote(req, res) {
    try {
        const notetId = req.params.id;
        const note = await Note.findById(notetId);

        if (!note) {
            return res.status(404).json({
                status: false,
                message: 'Note not found'
            });
        }

        await Note.findByIdAndUpdate(notetId, req.body);

        return res.json({
            status: true,
            message: 'Note updated successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}



// Delete
export async function DeleteNote(req, res) {
    try {
        const notetId = req.params.id;
        const note = await Note.findById(notetId);

        if (!note) {
            return res.status(404).json({
                status: false,
                message: 'Note not found'
            });
        }

        await Note.findByIdAndDelete(notetId);

        res.json({
            status: true,
            message: 'note deleted successfully'
        });
    } catch (e) {
        res.status(500).json({
            status: false,
            message: e.message
        });
    }
}