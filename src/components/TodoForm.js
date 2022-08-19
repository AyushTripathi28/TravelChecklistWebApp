import React, { useState } from 'react';

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : '');
  const [travelTime, setTravelTime] = useState(props.edit ? props.edit.value : '');
  const [returnDate, setReturnDate] = useState(props.edit ? props.edit.value : '');
  const [isImportant, setIsImportant] = React.useState(false);

  // const inputRef = useRef(null);
  // const travelTimeRef = useRef(null);
  // const returnDateRef = useRef(null);

  // useEffect(() => {
  //   inputRef.current.focus();

  // });


  const handleIsImportantChange = () => {
    setIsImportant(!isImportant);
  };
  const handleInputChange = e => {
    setInput(e.target.value);
  };
  const handleTravelTimeChange = e => {
    setTravelTime(e.target.value);
  };
  const handleReturnDateChange = e => {
    setReturnDate(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (input !== '' && travelTime !== '' && returnDate !== '') {
      // print()
      props.onSubmit({
        id: Math.floor(Math.random() * 10000),
        text: input,
        time: travelTime,
        date: returnDate,
        isImportant: isImportant
      });
      setInput('');
      setTravelTime('');
      setReturnDate('');
      setIsImportant(false);
    }

    else {
      alert('Please fill out all fields');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='todo-form'>

      <>
        <input
          placeholder='Add a todo'
          value={input}
          onChange={handleInputChange}
          name='text'
          className='todo-input'
          style={{ "width": "62%" }}
        // ref={inputRef}
        />
        <br />
        <br />
        <div style={{}}>
          <input type="time" className='todo-input' value={travelTime}
            onChange={handleTravelTimeChange} style={{ "width": "30%", "margin": "5px", "padding": 11, "borderRadius": "5px" }} onKeyDown={(e) => e.preventDefault()} />
          <input type="date"
            value={returnDate}
            onChange={handleReturnDateChange}
            placeholder='Travel Date'
            onKeyDown={(e) => e.preventDefault()}
            className='todo-input'
            style={{ "width": "30%", "margin": "5px", }}></input>

        </div>
        <br />

        <label className='todo-checkbox-input' style={{}}>
          Is Important:
          <input
            type="checkbox"
            value={isImportant}
            checked={isImportant}
            onChange={handleIsImportantChange}
            style={{ "margin": "10px", "transform": "scale(1.3)" }}
          />

        </label >

        <button onClick={handleSubmit} className='todo-button'>
          Add todo
        </button>
      </>

    </form >
  );
  // return (
  //   <form onSubmit={handleSubmit} className='todo-form'>
  //     {props.edit ? (
  //       <>
  //         <input
  //           placeholder='Update your item'
  //           value={input}
  //           onChange={handleChange}
  //           name='text'
  //           ref={inputRef}
  //           className='todo-input edit'
  //         />
  //         <button onClick={handleSubmit} className='todo-button edit'>
  //           Update
  //         </button>
  //       </>
  //     ) : (
  //       <>
  //         <input
  //           placeholder='Add a todo'
  //           value={input}
  //           onChange={handleChange}
  //           name='text'
  //           className='todo-input'
  //           ref={inputRef}
  //         />
  //         <button onClick={handleSubmit} className='todo-button'>
  //           Add todo
  //         </button>
  //       </>
  //     )}
  //   </form>
  // );
}

export default TodoForm;
