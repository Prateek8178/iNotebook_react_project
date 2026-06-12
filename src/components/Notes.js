import React, { useContext, useEffect, useRef, useState } from "react";
import noteContext from "../context/notes/noteContext";
import Noteitem from "./Noteitem";
import AddNote from "./AddNote";
import { useNavigate } from "react-router-dom";

const Notes = (props) => {
  const context = useContext(noteContext);
  const navigate = useNavigate();
  const { notes, getNotes, editNote } = context;

  useEffect(() => {
    if (localStorage.getItem("token")) {
      getNotes();
    } else {
      // BUG FIX: Was "/Login" - case mismatch with route definition
      navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

  // BUG FIX: Was useRef("null") with string "null" - should be useRef(null)
  const ref = useRef(null);
  const refClose = useRef(null);
  const [note, setNote] = useState({
    id: "",
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentNote) => {
    ref.current.click();
    setNote({
      id: currentNote._id,
      etitle: currentNote.title,
      edescription: currentNote.description,
      etag: currentNote.tag,
    });
  };

  const handleClick = (e) => {
    editNote(note.id, note.etitle, note.edescription, note.etag);
    props.showAlert("Note updated successfully ✏️", "success");
    refClose.current.click();
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="notes-page">
      <div className="container">
        {/* Add Note Section */}
        <AddNote showAlert={props.showAlert} />

        {/* Hidden modal trigger */}
        <button
          ref={ref}
          type="button"
          className="d-none"
          data-bs-toggle="modal"
          data-bs-target="#editNoteModal"
        >
          Open Edit Modal
        </button>

        {/* Edit Note Modal */}
        <div
          className="modal fade"
          id="editNoteModal"
          tabIndex="-1"
          aria-labelledby="editNoteModalLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editNoteModalLabel">
                  <i className="fa-regular fa-pen-to-square me-2" style={{ color: 'var(--color-primary-light)' }}></i>
                  Edit Note
                </h5>
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div className="modal-body p-4">
                <form>
                  {/* Title */}
                  <div className="mb-3">
                    <label htmlFor="etitle" className="label-dark form-label">
                      Title
                    </label>
                    <input
                      type="text"
                      id="etitle"
                      name="etitle"
                      value={note.etitle}
                      className="form-control input-dark"
                      onChange={onChange}
                      minLength={5}
                      required
                      placeholder="Note title..."
                    />
                  </div>

                  {/* BUG FIX: Was missing label text for description */}
                  <div className="mb-3">
                    <label htmlFor="edescription" className="label-dark form-label">
                      Description
                    </label>
                    <textarea
                      id="edescription"
                      value={note.edescription}
                      name="edescription"
                      className="form-control input-dark"
                      onChange={onChange}
                      minLength={5}
                      required
                      rows={3}
                      placeholder="Note description..."
                      style={{ resize: 'none' }}
                    />
                  </div>

                  {/* Tag */}
                  <div className="mb-3">
                    <label htmlFor="etag" className="label-dark form-label">
                      Tag
                    </label>
                    <input
                      type="text"
                      id="etag"
                      name="etag"
                      value={note.etag}
                      className="form-control input-dark"
                      onChange={onChange}
                      placeholder="e.g. personal, work..."
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button
                  ref={refClose}
                  type="button"
                  className="btn"
                  data-bs-dismiss="modal"
                  style={{
                    background: 'rgba(255,255,255,0.06)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    color: 'var(--text-secondary)',
                    borderRadius: '8px',
                    padding: '8px 20px',
                  }}
                >
                  Cancel
                </button>
                <button
                  disabled={note.etitle.length < 5 || note.edescription.length < 5}
                  onClick={handleClick}
                  type="button"
                  className="btn btn-gradient"
                >
                  <i className="fa-solid fa-floppy-disk me-2"></i>
                  Save Changes
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Your Notes Section */}
        <div className="section-header">
          <h3 className="section-title">
            <i className="fa-solid fa-note-sticky" style={{ color: 'var(--color-primary-light)' }}></i>
            Your Notes
            {notes.length > 0 && (
              <span className="notes-count">{notes.length}</span>
            )}
          </h3>
        </div>

        {/* Empty State */}
        {notes.length === 0 && (
          <div className="empty-state">
            <div className="empty-state-icon">
              <i className="fa-regular fa-note-sticky"></i>
            </div>
            <p className="empty-state-text">No notes yet. Add your first note above!</p>
          </div>
        )}

        {/* Notes Grid */}
        <div className="notes-grid">
          {notes.map((note) => (
            <Noteitem
              key={note._id}
              updateNote={updateNote}
              showAlert={props.showAlert}
              note={note}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
