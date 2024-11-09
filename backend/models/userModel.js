import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const {DataTypes} = Sequelize;


const user = db.define('users',{
  nama: DataTypes.STRING,
  email: DataTypes.STRING,
  jenis_kelamin: DataTypes.STRING,
},{
  freezeTableName:true
});

export default user;

(async()=>{
  await db.sync();
})();