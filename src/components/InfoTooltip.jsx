import React from "react";
import HandlerCloseByEsc from "../hooks/CloseByEsc/CloseByEsc";
import statusOkImage from "../images/ok.png";
import statusErrorImage from "../images/error.png";

const InfoTooltip = ({ errorText = 'Что-то пошло не так! Попробуйте ещё раз.', ...props } ) => {
  return (
    <div
      className={`popup popup_info ${props.isOpen && "popup_opened"}`}
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
          aria-label="Закрыть попап"
          onClick={props.onClose}
        ></button>
        <img
          src={props.isError ? statusErrorImage : statusOkImage}
          alt="Картинка статуса регистрации"
          className="popup__status-image"
        />
        <h2 className="popup__status-title">
          {props.isError ? errorText : `Вы успешно зарегистрировались!`}
        </h2>
      </div>
    </div>
  );
};

export default InfoTooltip;
