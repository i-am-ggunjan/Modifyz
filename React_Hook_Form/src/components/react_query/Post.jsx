import "../Form";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";

const Post = () => {
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const { mutate } = useMutation((formData) =>
    fetch("http://localhost:4000/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    }).then((res) => res.json())
  );

  const onSubmit = (formData) => {
    mutate(formData);
    console.log(formData)
  };

  return (
    <>
      <section>
        <h1>Form</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div>
            <input
              type="text"
              placeholder="Enter you Name"
              {...register("name", {
                required: {
                  value: true,
                  message: "Name is required",
                },
              })}
            />
            <p>{errors.name?.message}</p>
          </div>

          <div>
            <input
              type="email"
              id="email"
              placeholder="Enter you Email"
              {...register("email", {
                required: {
                  value: true,
                  message: "Email is required",
                },
              })}
            />
            <p>{errors.email?.message}</p>
          </div>

          <div>
            <input
              type="text"
              placeholder="Enter you Name"
              {...register("address", {
                required: {
                  value: true,
                  message: "Address is required",
                },
              })}
            />
            <p>{errors.address?.message}</p>
          </div>

          <button>Submit</button>
        </form>
      </section>
    </>
  );
};

export default Post;
