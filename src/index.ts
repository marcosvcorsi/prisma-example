import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// prisma.user
//   .create({
//     data: {
//       name: "Marcos Corsi",
//       email: "marcos.corsi@hotmail.com",
//     },
//   })
//   .then(() => console.log("teste"));

prisma.user.findMany().then((data) => {
  console.log(data);
});
