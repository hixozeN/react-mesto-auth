import React, { useContext, useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm";
import { CurrentUserContext } from "../../contexts/CurrentUserContext";

const PopupEditProfile = (props) => {
  const currentUser = useContext(CurrentUserContext);
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');

  useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);

  const handleSumbit = (evt) => {
    evt.preventDefault();
    props.onUpdateUser({
      name, about: description
    })
  }
  
  return (
    <PopupWithForm
      name="profile-edit"
      title="Редактировать профиль"
      btnName={props.btnName}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSumbit}
    >
      <input
        className="popup__input popup__input_field_name"
        type="text"
        placeholder="Как Вас зовут?"
        name="username"
        id="username"
        minLength="2"
        maxLength="40"
        value={name ?? ''}
        onChange={(evt) => setName(evt.target.value)}
        required
      />
      <span className="popup__input-error username-error"></span>
      <input
        className="popup__input popup__input_field_job"
        type="text"
        placeholder="Кем Вы работаете?"
        name="userjob"
        id="userjob"
        minLength="2"
        maxLength="200"
        value={description ?? ''}
        onChange={(evt) => setDescription(evt.target.value)}
        required
      />
      <span className="popup__input-error userjob-error"></span>
    </PopupWithForm>
  );
};

export default PopupEditProfile;
