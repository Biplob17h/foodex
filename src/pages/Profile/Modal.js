import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../ContextApi/UserContext";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Modal = ({ id, htmlFor }) => {
  const { updateUser } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();

  const imageHostKey = process.env.REACT_APP_imagebb_key;

  const onSubmit = (data) => {
    const image = data.image[0];
    const formData = new FormData();
    formData.append("image", image);
    const url = `https://api.imgbb.com/1/upload?key=${imageHostKey}`;
    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imageData) => {
        console.log(imageData);
        if (imageData.success) {
          const imageUrl = imageData.data.url;
          const profile = { photoURL: imageUrl };
          updateUser(profile)
            .then(() => {
              toast.success("Profile photo update successfull");
              navigate("/home");
            })
            .catch((err) => {
              console.log(err);
            });
        }
      });
  };
  return (
    <div>
      {/* Put this part before </body> tag */}
      <input type="checkbox" id={id} className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="file"
              {...register("image", {
                required: "Image is required",
              })}
              className="input input-bordered w-full"
            />

            <div className="modal-action">
              <label htmlFor={htmlFor} className="btn btn-ghost cbtn3 mt-5">
                Close
              </label>
              <input
                className="btn btn-ghost cbtn1 mt-5"
                type="submit"
                value="Submit"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
