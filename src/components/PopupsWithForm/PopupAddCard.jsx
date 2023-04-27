import React, { useEffect, useState } from "react";
import PopupWithForm from "../PopupWithForm";

const PopupAddCard = (props) => {
  const [placeName, setPlaceName] = useState("");
  const [placeLink, setPlaceLink] = useState("");

  const handleSubmit = (evt) => {
    evt.preventDefault();
    props.onAddPlace({
      name: placeName,
      link: placeLink,
    });
  };

  useEffect(() => {
    setPlaceName('');
    setPlaceLink('');
  }, [props.isOpen])

  return (
    <PopupWithForm
      name="card-add"
      title="Новое место"
      btnName={props.btnName}
      isOpen={props.isOpen}
      onClose={props.onClose}
      onSubmit={handleSubmit}
    >
      <input
        className="popup__input popup__input_field_placename"
        type="text"
        placeholder="Название"
        name="placename"
        id="placename"
        minLength="2"
        maxLength="30"
        value={placeName ?? ""}
        onChange={(evt) => setPlaceName(evt.target.value)}
        required
      />
      <span className="popup__input-error placename-error"></span>
      <input
        className="popup__input popup__input_field_placeurl"
        type="url"
        placeholder="Ссылка на картинку"
        name="placeurl"
        id="placeurl"
        value={placeLink ?? ""}
        onChange={(evt) => setPlaceLink(evt.target.value)}
        required
      />
      <span className="popup__input-error placeurl-error"></span>
    </PopupWithForm>
  );
};

export default PopupAddCard;
