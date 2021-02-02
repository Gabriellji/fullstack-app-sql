const Register = () => {
  return (
    <form>
      <label>First name</label>
      <input name="firstname"></input>
      <label>Last name</label>
      <input name="lastname"></input>
      <label>Email</label>
      <input name="email"></input>
      <label>password</label>
      <input name="password"></input>
      <button>Submit</button>
    </form>
  );
};

export default Register;
