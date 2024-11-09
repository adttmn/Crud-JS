import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const AddUser = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [jenis_kelamin, setjenis_kelamin] = useState('Laki-laki');
  const navigate = useNavigate();

  const saveUser = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/users', {
        nama,
        email,
        jenis_kelamin,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={saveUser}>
          <div className="field mt-5">
            <label className="">Nama</label>
            <div className="control">
              <input type="text" className="input" value={nama} onChange={(e) => setNama(e.target.value)} placeholder="Name" />
            </div>
          </div>
          <div className="field">
            <label className="">Email</label>
            <div className="control">
              <input type="text" className="input" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
            </div>
          </div>
          <div className="field">
            <label className="">Jenis Kelamin</label>
            <div className="control">
              <div className="select is-fullwidth">
                <select value={jenis_kelamin} onChange={(e) => setjenis_kelamin(e.target.value)} placeholder='Jenis Kelamin'>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field mt-5">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
