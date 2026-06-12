import React, { useContext } from "react";
import noteContext from "../context/notes/noteContext";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote } = props;

  return (
    <div className="note-card">
      {/* Header: Title + Actions */}
      <div className="d-flex align-items-start justify-content-between gap-2 mb-2">
        <h5 className="note-card-title">{note.title}</h5>
        <div className="note-card-actions flex-shrink-0">
          <button
            className="note-action-btn note-action-edit"
            title="Edit note"
            onClick={() => updateNote(note)}
          >
            <i className="fa-regular fa-pen-to-square"></i>
          </button>
          <button
            className="note-action-btn note-action-delete"
            title="Delete note"
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("Note deleted successfully", "success");
            }}
          >
            <i className="fa-solid fa-trash-can"></i>
          </button>
        </div>
      </div>

      {/* Description */}
      <p className="note-card-desc">{note.description}</p>

      {/* Footer: Tag */}
      <div className="note-card-footer">
        {note.tag && (
          <span className="tag-badge">
            <i className="fa-solid fa-tag" style={{ fontSize: '0.65rem' }}></i>
            {note.tag}
          </span>
        )}
      </div>
    </div>
  );
};

export default Noteitem;