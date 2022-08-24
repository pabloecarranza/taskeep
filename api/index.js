import app from "./src/app.js";
import { sequelize } from "./src/database/database.js";

async function main() {
  try {
    await sequelize.sync({ force: false });
    app.listen(process.env.PORT || 4000);
    console.log("server us listening on port", 4000);
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

main();

//TODO https://www.youtube.com/watch?v=zBbqrcvdJjQ&t=246s
//TODO https://express-validator.github.io/docs/
