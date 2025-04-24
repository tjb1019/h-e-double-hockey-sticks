import { FC } from 'react';

export const Form: FC = () => {
  const submitForm = (data: FormData) => {
    console.log(data.get('teamName'));
  };

  return (
    <form action={submitForm}>
      <label htmlFor="team-name">Team Name</label>
      <input type="text" name="teamName" id="team-name" />
      <button type="submit">Submit</button>
    </form>
  );
};
