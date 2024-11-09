import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditUser = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [jenis_kelamin, setjenis_kelamin] = useState('Laki-laki');
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUserById();
  }, []);

  const updateUser = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:3000/users/${id}`, {
        nama,
        email,
        jenis_kelamin,
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const getUserById = async () => {
    const response = await axios.get(`http://localhost:3000/users/${id}`);
    setNama(response.data.nama);
    setEmail(response.data.email);
    setjenis_kelamin(response.data.jenis_kelamin);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateUser}>
          <div className="field">
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
                <select value={jenis_kelamin} onChange={(e) => setjenis_kelamin(e.target.value)}>
                  <option value="Laki-laki">Laki-laki</option>
                  <option value="Perempuan">Perempuan</option>
                </select>
              </div>
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditUser;
