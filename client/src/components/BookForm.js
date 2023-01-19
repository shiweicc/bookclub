import React from 'react';
import { useForm } from 'react-hook-form';

export default function BookForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => console.log(data);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Book" {...register("Book", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Author" {...register("Author", {required: true, maxLength: 100})} />
      <input type="text" placeholder="Link" {...register("Link", {required: false, maxLength: 200})} />
      <input type="text" placeholder="Note" {...register("Note", {required: false, maxLength: 1000})} />

      <select {...register("Genre", { required: true })}>
        <option value="">Genre...</option>
        <option value="Fiction">Fiction</option>
        <option value="Non-Fiction">Non-Fiction</option>
      </select>

      <select placeholder="Month" {...register("Month", { required: true })}>
        <option value="">Month...</option>
        <option value="January">January</option>
        <option value="February">February</option>
        <option value="March">March</option>
        <option value="April">April</option>
        <option value="May">May</option>
        <option value="June">June</option>
        <option value="July">July</option>
        <option value="August">August</option>
        <option value="September">September</option>
        <option value="October">October</option>
        <option value="November">November</option>
        <option value="December">December</option>
      </select>
    {/*<input {...register("Developer", { required: true })} type="radio" value="Yes" />
      <input {...register("Developer", { required: true })} type="radio" value="No" /> */}

      <input type="submit" />
    </form>
  );
}