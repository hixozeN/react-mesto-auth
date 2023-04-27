import React, { useEffect, useRef } from "react";
import PopupWithForm from "../PopupWithForm";

const PopupEditAvatar = (props) => {
  const inputAvatar = useRef();

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onUpdateAvatar({
      avatar: inputAvatar.current.value,
    });
  };

  useEffect(() => {inputAvatar.current.value = ''}, [props.isOpen])

  return (
    <PopupWithForm
      name="avatar-edit"
      title="Обновить аватар"
      btnName={props.btnName}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_ava-url"
        type="url"
        placeholder="Ссылка на аватар"
        name="avaurl"
        id="avaurl"
        ref={inputAvatar}
        required
      />
      <span className="popup__input-error avaurl-error"></span>
    </PopupWithForm>
  );
};

export default PopupEditAvatar;
