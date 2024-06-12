//  /\_/\
// ( o.o ) ><(((('>
//  > ^ <

import server from "./src/server.js";
import sequelize from "./db.js";
import { PORT } from "./src/config/envs.js";
server.listen(PORT, () => {
  console.log(`servidor`);
  sequelize.sync({ alter: true }); 
});
