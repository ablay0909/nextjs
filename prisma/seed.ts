import { PrismaClient } from '@prisma/client';
import { data } from './seeds/data';

const prisma = new PrismaClient();

async function main() {
    await prisma.field_data.createMany({
        data: data,
      });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });