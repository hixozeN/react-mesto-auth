import React from "react";
import HandlerCloseByEsc from "../hooks/CloseByEsc/CloseByEsc";

const PopupWithForm = (props) => {

  return (
    <div
      className={`popup popup_${props.name} ${props.isOpen && "popup_opened"}`}
      onMouseDown={(evt) => {
        if (evt.target.classList.contains("popup_opened")) {
          props.onClose();
        }
      }}
    >
      {props.isOpen && <HandlerCloseByEsc onClose={props.onClose} />}
      <div className="popup__content">
        <button
          type="button"
          name="button_form_close"
          id="button_form-add_close"
          className="popup__close-button"
          aria-label="Закрыть форму"
          onClick={props.onClose}
        ></button>
        <h2 className="popup__title">{props.title}</h2>
        <form
          className={`popup__form popup__form_type_${props.name}`}
          name={props.name}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button className="popup__submit-button" type="submit">
            {props.btnName}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
