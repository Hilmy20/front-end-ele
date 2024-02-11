import { useState } from "react";
import ErrorText from "../../components/Typography/ErrorText";
import InputText from "../../components/Input/InputText";
import FormFoto from "./Formfoto";

function Register() {
  const INITIAL_REGISTER_OBJ = {
    NIS: "",
    nisn: "",
    Nama: "",
    Level: "",
    Kelas: "",
    Jurusan: "",
    Username: "",
    Password: "",
    Agama: "",
    Foto: "",
  };

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [registerObj, setRegisterObj] = useState(INITIAL_REGISTER_OBJ);

  const submitForm = (e) => {
    e.preventDefault();
    setErrorMessage("");

    if (registerObj.NIS.trim() === "")
      return setErrorMessage("NIS is required! (use any value)");
    if (registerObj.nisn.trim() === "")
      return setErrorMessage("NISN is required! (use any value)");
    if (registerObj.Nama.trim() === "")
      return setErrorMessage("Nama is required! (use any value)");
    if (registerObj.Level.trim() === "")
      return setErrorMessage("Level is required! (use any value)");
    if (registerObj.Kelas.trim() === "")
      return setErrorMessage("Kelas is required! (use any value)");
    if (registerObj.Jurusan.trim() === "")
      return setErrorMessage("Jurusan is required! (use any value)");
    if (registerObj.Username.trim() === "")
      return setErrorMessage("Username is required! (use any value)");
    if (registerObj.Password.trim() === "")
      return setErrorMessage("Password is required! (use any value)");
    if (registerObj.Agama.trim() === "")
      return setErrorMessage("Agama is required! (use any value)");
    if (registerObj.Foto.trim() === "")
      return setErrorMessage("Foto is required! (use any value)");
    if (registerObj.Nama.trim() === "")
      return setErrorMessage("Nama is required! (use any value)");
    else {
      setLoading(true);
      // Call API to check user credentials and save token in localstorage
      localStorage.setItem("token", "DumyTokenHere");
      setLoading(false);
      window.location.href = "/app/welcome";
    }
  };

  const updateFormValue = ({ updateType, value }) => {
    setErrorMessage("");
    setRegisterObj({ ...registerObj, [updateType]: value });
  };

  return (
    <div className="min-h-screen bg-base-200 flex items-center">
      <div className="card mx-auto w-full max-w-5xl  shadow-xl">
        <div className="grid  md:grid-cols-1 grid-cols-1  bg-base-100 rounded-xl">
          <div className="py-24 px-10">
            <h2 className="text-2xl font-semibold mb-2 text-center">
              Register
            </h2>
            <form onSubmit={(e) => submitForm(e)}>
              <div className="mb-4">
                <InputText
                  defaultValue={registerObj.NIS}
                  updateType="NIS"
                  containerStyle="mt-4"
                  labelTitle="NIS"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={registerObj.nisn}
                  updateType="nisn"
                  containerStyle="mt-4"
                  labelTitle="NISN"
                  updateFormValue={updateFormValue}
                />

                <InputText
                  defaultValue={registerObj.Nama}
                  updateType="Nama"
                  containerStyle="mt-4"
                  labelTitle="Nama"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.Level}
                  updateType="Level"
                  containerStyle="mt-4"
                  labelTitle="Level"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.Kelas}
                  updateType="Kelas"
                  containerStyle="mt-4"
                  labelTitle="Kelas"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.Jurusan}
                  updateType="Jurusan"
                  containerStyle="mt-4"
                  labelTitle="Jurusan"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.Username}
                  updateType="Username"
                  containerStyle="mt-4"
                  labelTitle="Username"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.Password}
                  updateType="Password"
                  containerStyle="mt-4"
                  labelTitle="Password"
                  updateFormValue={updateFormValue}
                />
                <InputText
                  defaultValue={registerObj.Agama}
                  updateType="Agama"
                  containerStyle="mt-4"
                  labelTitle="Agama"
                  updateFormValue={updateFormValue}
                />
                <FormFoto
                  defaultValue={registerObj.photo}
                  updateType="photo"
                  containerStyle="mt-4"
                  labelTitle="Photo"
                  updateFormValue={updateFormValue}
                />
              </div>

              <ErrorText styleClass="mt-8">{errorMessage}</ErrorText>
              <button
                type="submit"
                className={
                  "btn mt-2 w-full btn-primary" + (loading ? " loading" : "")
                }
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
