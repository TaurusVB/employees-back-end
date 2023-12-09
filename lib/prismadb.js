const PrismaClient = require("@prisma/client").PrismaClient;

const prismadb = new PrismaClient();

module.exports = {
  prismadb,
};
