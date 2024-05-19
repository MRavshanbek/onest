import React from "react";
import "./Locations.scss";

function Location() {
  return (
    <div className="location__inner">
      <div className="location__inner__div">
        <h2 className="location__inner__title">Местоположение</h2>
        <form className="location__inner__form">
          <label className="location__inner__form__search">
            <input
              className="location__inner__form__search__input"
              type="search"
              placeholder="Название города"
            />
          </label>
        </form>
        <form className="location__inner__form2">
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form2__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">Квартира</h2>
          </label>
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form2__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">
              Квартира е новостройке
            </h2>
          </label>
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">Коттедж</h2>
          </label>
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form2__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">Дом/Дача</h2>
          </label>
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form2__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">Коттедж</h2>
          </label>
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form2__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">Таунхаус</h2>
          </label>
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form2__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">Часть дома</h2>
          </label>
          <label className="location__inner__form2__label">
            <input
              className="location__inner__form2__label__input"
              type="radio"
              name="name"
            />
            <h2 className="location__inner__form2__label__title">Участок</h2>
          </label>
        </form>
      </div>
      <iframe
        className="location__inner__map"
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d2997.6859573149886!2d69.35506201545569!3d41.2939387792728!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sr.M.Ulugbek%2C%20str.Boburiy%20135%20A!5e0!3m2!1suz!2s!4v1676371620819!5m2!1suz!2s"
        width={600}
        height={450}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default Location;
