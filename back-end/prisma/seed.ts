import prisma from "./../src/database.js";

async function main() {
  console.log("Running Seed...");

  const students = [
    { name: "Diego Pinho" },
    { name: "Bruna Hamori" },
    { name: "Maria Fernanda" },
    { name: "Lucax da t7" },
    { name: "Thalles da Branch" },
    { name: "loro jose" },
    { name: "Gabriel VIMana" },
    { name: "Caio Calvo" },
    { name: "Matheus chili" },
    { name: "Natan maladoo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
    { name: "Thay" },
    { name: "Thay de Novo" },
  ];

  await prisma.student.createMany({
    data: students,
    skipDuplicates: true,
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
