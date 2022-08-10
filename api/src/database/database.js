/* import Sequelize from "sequelize";

export const sequelize = new Sequelize({
  database: "d260skeohvpt1a",
  username: "qevhtqvnggzzno",
  password: "183f29a7b9241ac697bec5c744ca7228e36aa6cdc9c63844a9c3822847cf942b",
  host: "ec2-50-19-255-190.compute-1.amazonaws.com",
  port: 5432,
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      require: true, // This will help you. But you will see nwe error
      rejectUnauthorized: false, // This line will fix new error
    },
  },
});
*/
import Sequelize from "sequelize";

export const sequelize = new Sequelize(
  "postgres://postgres:1234@localhost:5432/taskeep"
); // Example for postgres
