const Form = ({ onChangeName, name }) => {
  const handleChangeName = (event) => {
    onChangeName(event.target.value);
  };

  return (
    <form>
      <label htmlFor="name">Introduce tu nombre</label>
      <input id="name" type="text" onChange={handleChangeName} value={name} />
    </form>
  );
};

export default Form;
