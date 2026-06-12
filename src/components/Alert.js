import React from 'react';

function Alert(props) {
  // BUG FIX: Was "erroe" - corrected to "error"
  const getAlertConfig = (type) => {
    switch (type) {
      case 'success':
        return { icon: 'fa-circle-check', label: 'Success', className: 'in-alert-success' };
      case 'danger':
        return { icon: 'fa-circle-exclamation', label: 'Error', className: 'in-alert-danger' };
      case 'warning':
        return { icon: 'fa-triangle-exclamation', label: 'Warning', className: 'in-alert-warning' };
      default:
        return { icon: 'fa-circle-info', label: 'Info', className: 'in-alert-success' };
    }
  };

  if (!props.alert) return null;

  const { icon, label, className } = getAlertConfig(props.alert.type);

  return (
    <div className="in-alert-wrapper">
      <div className={`in-alert ${className}`}>
        <span className="in-alert-icon">
          <i className={`fa-solid ${icon}`}></i>
        </span>
        <span>
          <strong>{label}: </strong>{props.alert.msg}
        </span>
      </div>
    </div>
  );
}

export default Alert;
