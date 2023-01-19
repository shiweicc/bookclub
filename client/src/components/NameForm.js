import React from 'react';
import { useForm } from 'react-hook-form';

export default function NameForm(props) {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = data => {
    console.log('data in onSubmit: ', data);
    props.updateName(data["Name"]);
  }
  // console.log('error in NameForm: ', errors);
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input type="text" placeholder="Your Name" {...register("Name", {required: true, maxLength: 80})} />
      <input type="submit" />
    </form>
  );
}