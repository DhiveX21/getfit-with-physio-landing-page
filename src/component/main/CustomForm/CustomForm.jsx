import React from "react";
import "./CustomForm.css";

export default function CustomForm() {
  return (
    <section
      className="custom-form"
      style={{
        backgroundColor: "#E0E0E0",
        backgroundImage: `url('/images/atendee_form_bg.jpg')`,
      }}
    >
      <div className="custom-form__wrapper">
        <div className="custom-form__card">
          <div className="custom-form__card__wrapper">
            <div className="custom-form__card__title">
              <h3>Biodata</h3>
            </div>
            <div className="custom-form__card__form">
              <div className="custom-form__card__form__wrapper">
                <div className="custom-form__card__form__group">
                  <label htmlFor="fullnameId">Nama Lengkap</label>
                  <input type="text" id="fullnameId" name="fullname" />
                </div>
                <div className="custom-form__card__form__group">
                  <label htmlFor="gender">Jenis Kelamin</label>
                  <div className="radio-wrapper">
                    <div className="radio-group">
                      <input
                        type="radio"
                        checked
                        id="genderFemale"
                        name="gender"
                        value="female"
                      />
                      <label for="genderFemale">Perempuan</label>
                    </div>
                    <div className="radio-group">
                      <input
                        type="radio"
                        id="genderMale"
                        name="gender"
                        value="male"
                      />
                      <label for="genderMale">Laki-Laki</label>
                    </div>
                  </div>
                </div>
                <div className="custom-form__card__form__group">
                  <label htmlFor="birthdateId">Tanggal Lahir</label>
                  <input type="text" id="birthdateId" name="birthdate" />
                </div>
                <div className="custom-form__card__form__group">
                  <label htmlFor="emailId">Email</label>
                  <input type="text" id="emailId" name="email" />
                </div>
                <div className="custom-form__card__form__group">
                  <label htmlFor="phoneNumberId">No HP</label>
                  <input type="text" id="phoneNumberId" name="phoneNumber" />
                </div>
                <div className="custom-form__card__form__group">
                  <button type="submit">Submit</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
