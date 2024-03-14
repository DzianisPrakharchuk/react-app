import React, { useEffect, useState, useCallback } from "react";
import Button from "./Button/Button";
import Modal from "./Modal/Modal";

export default function EffectSection() {
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await response.json();
    setUsers(users);
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchUsers();
  }, [fetchUsers]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <section>
      <h3 style={{marginBottom: "2rem"}}>Effects</h3>
      <Button style={{marginBottom: "2rem"}} onClick={openModal}>Open information</Button>
      <h3>Search</h3>
      <Modal open={modalOpen} onClose={closeModal}>
        <h3>Hello world!</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod impedit
          cumque quidem vel porro ad non saepe eius ab cupiditate, nobis
          voluptates animi. Quia, facilis! Asperiores dolorum animi alias! Sed.
        </p>
        <Button onClick={closeModal}>Close</Button>
      </Modal>
      {loading && <p>Loading...</p>}

      {!loading && (
        <>
          <input style={{marginBottom: "2rem"}} type="text" className="control" value={inputValue} onChange={handleInputChange} />
          <ul>
            {users
              .filter((user) =>
                user.name.toLowerCase().includes(inputValue.toLowerCase())
              )
              .map((user) => (
                <li key={user.id}>{user.name}</li>
              ))}
          </ul>
        </>
      )}
    </section>
  );
}