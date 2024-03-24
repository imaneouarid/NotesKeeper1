import { deleteNote, getNotes } from '../Controllers/NotesControllers.js';
import db from "../Models/index.js";
const Note = db.Note;

jest.mock('../Models/index', () => ({
  Note: {
    create: jest.fn(),
    find: jest.fn(),
    findByIdAndDelete: jest.fn(),
  },
}));

describe('Note Controller', () => {
  test('getNotes - gets all notes', async () => {
    const notes = [{ _id: '1', title: 'Note 1', content: 'Content 1' }];
    Note.find.mockResolvedValue(notes);
    const req = {};
    const res = { json: jest.fn() };

    await getNotes(req, res);

    expect(res.json).toHaveBeenCalledWith(notes);
  });
  test('deleteNote - deletes a note', async () => {
    const req = { params: { id: '1' } };
    const res = { json: jest.fn(), status: jest.fn().mockReturnThis() };

    await deleteNote(req, res);

    expect(Note.findByIdAndDelete).toHaveBeenCalledWith('1');
    expect(res.json).toHaveBeenCalledWith({ message: 'Note deleted successfully' });
  });
});
