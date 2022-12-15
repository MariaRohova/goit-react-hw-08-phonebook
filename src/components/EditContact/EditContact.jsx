import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { changeContacts } from 'redux/operation';
import { EditFormStyled } from './Styled';


const EditContactForm = ({ id }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.contacts.items);

  const handleChange = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        return;
    }
  };

  const onSubmit = e => {
    e.preventDefault();
    const contact = {
      name,
      phone: number,
    };
    if (contacts.find(({ phone }) => phone === number)) {
      toast(
        'This phone number is already in the contact list, please write another phone number',
        { type: 'warning', autoClose: 1000 }
      );
      return;
    }

    dispatch(changeContacts({id, contact }));
    resetForm();
    toast('Contact is change', { type: 'success', autoClose: 1000 });
  };
  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <EditFormStyled onSubmit={onSubmit}>
      <label>
        <span>Name</span>
        <input
          onChange={handleChange}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label>
        <span>Number</span>
        <input
          onChange={handleChange}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit">Edit</button>
    </EditFormStyled>
  );
};

export default EditContactForm;
