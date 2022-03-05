import React from 'react';
import ContactForma from './ContactForma/ContactForma';
import ContactList from './ContactList/ContactList';
import s from './App.module.css';
import { nanoid } from 'nanoid';
import Filter from './Filter/Filter';
// import Filter from './Filter/Filter';

export default class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      { id: 'id-5', name: 'dima', number: '227-915-26' },
    ],
    filter: '',
  };

  submitBtn = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    const checkedForName = this.state.contacts.find(
      contact => normalizedName === contact.name.toLocaleLowerCase()
    );

    if (checkedForName) {
      return alert(`${name} is already in contacts`);
    }

    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    if (!name || !number) {
      alert('Invalid name or number vaule!');
      return;
    }

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  onSaveFind = e => {
    this.setState({ filter: e.currentTarget.value.trim() });
  };

  findByName = () => {
    const { filter, contacts } = this.state;

    return contacts.filter(
      elem =>
        elem.name.slice(0, filter.length).toLowerCase() === filter.toLowerCase()
    );
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(el => el.id !== id),
    }));
  };

  componentDidMount() {
    console.log('App componentDidMount');

    const contacts = JSON.parse(localStorage.getItem('contacts'));
    this.setState({ contacts: contacts });
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('App componentDidUpdate');

    if (this.state.contacts !== prevState.contacts) {
      console.log('Обновили контакты');

      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  render() {
    const { contacts, filter } = this.state;

    return (
      <div className={s.section}>
        <p className={s.title}>Phonebook</p>
        <ContactForma contacts={contacts} submitBtn={this.submitBtn} />

        <p className={s.title}>Contacts</p>
        <Filter filter={filter} onSaveFind={this.onSaveFind} />
        <ContactList
          contacts={contacts}
          findByName={this.findByName}
          deleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
