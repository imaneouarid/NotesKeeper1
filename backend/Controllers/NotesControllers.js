import db from "../Models/index.js"
const Note = db.Note;

export const createNote = async (req, res) => {
    try {
      const { title , content } = req.body;
      const newNote = new Note({ title, content });
      const savedNote = await newNote.save();
      res.status(201).json(savedNote);
    } catch (error) {
      res.status(400).json({ message: error.message });
    }
  };
  
  export const getNotes = async (req, res) => {
    try {
      const notes = await Note.find();
      res.json(notes);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const getNoteById = async (req, res) => {
    try {
      const note = await Note.findById(req.params.id);
      if (!note) {
        return res.status(404).json({ message: 'Note not found' });
      }
      res.json(note);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

export const updateNote = async (req, res) => {
    try {
        const { title, content } = req.body;
        const updatedNote = await Note.findByIdAndUpdate(req.params.id, {
            title,
            content,
            updatedAt: Date.now()
        }, { new: true });
        res.json(updatedNote);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
  };
  
  export const deleteNote = async (req, res) => {
    try {
        await Note.findByIdAndDelete(req.params.id);
        res.json({ message: 'Note deleted successfully' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
  };
