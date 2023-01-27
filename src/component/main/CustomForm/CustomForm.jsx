import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import "./CustomForm.css";
import { useHistory } from "react-router-dom";

export default function CustomForm() {
  const history = useHistory();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    let body = {
      name: data.fullname,
      phone_number: data.phoneNumber,
      email: data.email,
      gender: data.gender,
      birth_date: data.birthdate,
      address: data.address,
      complaint: data.healthComplaint,
    };
    axios
      .post("https://api.getfitwithphysio.com/user-service/api/users/register-old", {
        ...body,
      })
      .then((response) => {
        history.push("/thanks");
      });
  };
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="custom-form__card__form__group">
                    <label htmlFor="fullnameId">
                      Nama Lengkap{" "}
                      <p className="error-hint">{errors.fullname?.message}</p>
                    </label>

                    <input
                      {...register("fullname", {
                        required: "Harap isi Field ini",
                      })}
                      type="text"
                      id="fullnameId"
                      name="fullname"
                      placeholder="Nama Lengkap"
                    />
                    <span className="hint">Cth: John Doe</span>
                  </div>
                  <div className="custom-form__card__form__group">
                    <label htmlFor="gender">
                      Jenis Kelamin{" "}
                      <p className="error-hint">{errors.gender?.message}</p>
                    </label>
                    <div className="radio-wrapper">
                      <div className="radio-group">
                        <input
                          {...register("gender", {
                            required: "Harap isi Field ini",
                          })}
                          type="radio"
                          id="genderFemale"
                          name="gender"
                          value="female"
                          checked
                        />
                        <label for="genderFemale">Perempuan</label>
                      </div>
                      <div className="radio-group">
                        <input
                          {...register("gender", {
                            required: "Harap isi Field ini",
                          })}
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
                    <label htmlFor="birthdateId">
                      Tanggal Lahir{" "}
                      <p className="error-hint">{errors.birthdate?.message}</p>
                    </label>
                    <input
                      {...register("birthdate", {
                        required: "Harap isi Field ini",
                      })}
                      type="date"
                      id="birthdateId"
                      name="birthdate"
                    />
                    <span className="hint">
                      Cth: 12/06/97 `(tanggal bulan tahun)`
                    </span>
                  </div>
                  <div className="custom-form__card__form__group">
                    <label htmlFor="emailId">
                      Email{" "}
                      {errors?.email?.type === "required" && (
                        <p className="error-hint">Harap masukan Email</p>
                      )}
                      {errors?.email?.type === "pattern" && (
                        <p className="error-hint">
                          Harap masukan Email yang valid
                        </p>
                      )}
                    </label>
                    <input
                      {...register("email", {
                        required: "Harap isi Field ini",
                        pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
                      })}
                      type="text"
                      id="emailId"
                      name="email"
                      placeholder="Email"
                    />
                    <span className="hint">Cth: JohnDoe@gmail.com</span>
                  </div>
                  <div className="custom-form__card__form__group">
                    <label htmlFor="phoneNumberId">
                      No HP{" "}
                      {errors?.phoneNumber?.type === "required" && (
                        <p className="error-hint">Harap masukan No HP</p>
                      )}
                      {errors?.phoneNumber?.type === "pattern" && (
                        <p className="error-hint">
                          Harap masukan No HP yang valid
                        </p>
                      )}
                    </label>
                    <input
                      {...register("phoneNumber", {
                        required: "Harap isi Field ini",
                        pattern: /^(^\+62|62|^08)(\d{3,4}-?){2}\d{3,4}$/g,
                      })}
                      type="text"
                      id="phoneNumberId"
                      name="phoneNumber"
                      placeholder="Nomor telephone"
                    />
                    <span className="hint">Cth: 08112345678</span>
                  </div>
                  <div className="custom-form__card__form__group">
                    <label htmlFor="addressId">
                      Alamat{" "}
                      <p className="error-hint">{errors.address?.message}</p>
                    </label>
                    <textarea
                      {...register("address", {
                        required: "Harap isi Field ini",
                      })}
                      id="addressId"
                      name="address"
                      placeholder="Alamat lengkap"
                    />
                    <span className="hint">
                      Cth: Link Harum manis Rt04/02 Kel. Manggarai, Kec. Tebet
                    </span>
                  </div>
                  <div className="custom-form__card__form__group">
                    <label htmlFor="healthComplaintId">
                      Keluhan Kesehatan saat ini{" "}
                      <p className="error-hint">
                        {errors.healthComplaint?.message}
                      </p>
                    </label>
                    <textarea
                      {...register("healthComplaint", {
                        required: "Harap isi Field ini",
                      })}
                      id="healthComplaintId"
                      name="healthComplaint"
                      placeholder="Keluhan Kesehatan saat ini."
                    />
                    <span className="hint">
                      Cth: Saya sulit tidur dimalam hari, karena sakit leher
                      yang berkelanjutan.
                    </span>
                  </div>
                  <div className="custom-form__card__form__group">
                    <button type="submit">Submit</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
