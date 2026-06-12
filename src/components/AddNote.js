import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";

const AddNote = (props) => {
  const context = useContext(noteContext);
  const { addNote } = context;

  const [note, setNote] = useState({
    title: "",
    description: "",
    tag: "default",
  });

  const handleClick = (e) => {
    e.preventDefault();
    addNote(note.title, note.description, note.tag);
    // BUG FIX: Was resetting tag to "" — should reset to "default"
    setNote({
      title: "",
      description: "",
      tag: "default",
    });
    props.showAlert("Note added successfully ✨", "success");
  };

  const onChange = (e) => {
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });
  };

  const isDisabled = note.title.length < 5 || note.description.length < 5;

  return (
    <div className="add-note-card">
      {/* Header */}
      <div className="add-note-title">
        <span className="add-note-title-icon">
          <i className="fa-solid fa-plus"></i>
        </span>
        Add a New Note
      </div>

      <form>
        <div className="row g-3">
          {/* Title */}
          <div className="col-md-6">
            <label htmlFor="title" className="label-dark form-label">
              Title <span style={{ color: 'var(--color-primary-light)' }}>*</span>
            </label>
            <input
              type="text"
              id="title"
              name="title"
              className="form-control input-dark"
              value={note.title}
              onChange={onChange}
              minLength={5}
              required
              placeholder="Note title..."
            />
          </div>

          {/* Tag */}
          <div className="col-md-6">
            <label htmlFor="tag" className="label-dark form-label">
              Tag
            </label>
            <input
              type="text"
              id="tag"
              name="tag"
              className="form-control input-dark"
              value={note.tag}
              onChange={onChange}
              placeholder="e.g. personal, work..."
            />
          </div>

          {/* Description */}
          <div className="col-12">
            <label htmlFor="description" className="label-dark form-label">
              Description <span style={{ color: 'var(--color-primary-light)' }}>*</span>
            </label>
            <textarea
              id="description"
              name="description"
              className="form-control input-dark"
              value={note.description}
              onChange={onChange}
              minLength={5}
              required
              rows={3}
              placeholder="Write your note here..."
              style={{ resize: 'none' }}
            />
          </div>
        </div>

        {/* Submit */}
        <div className="d-flex align-items-center justify-content-between mt-4">
          <p className="mb-0" style={{ color: 'var(--text-muted)', fontSize: '0.8rem' }}>
            <i className="fa-solid fa-circle-info me-1"></i>
            Title & description must be at least 5 characters
          </p>
          <button
            disabled={isDisabled}
            type="submit"
            className="btn btn-gradient"
            onClick={handleClick}
          >
            <i className="fa-solid fa-plus me-2"></i>
            Add Note
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;