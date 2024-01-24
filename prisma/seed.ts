import { PrismaClient } from '@prisma/client'
import { hash } from 'bcrypt'

const prisma = new PrismaClient()

async function main() {
const password = await hash('test1234', 12)
  const user = await prisma.user.upsert({
    where: { email: 'testuser1@test.com' },
    update: {},
    create: {
      email: 'testuser1@test.com',
      role: 'user',
      name: 'Test User',
      password
    }
  })
  console.log({ user })
  const admin = await prisma.user.upsert({
    
    where: { email: 'testadmin2@test.com' },
    update: {},
    create: {
      email: 'testadmin2@test.com',
      name: 'Test Admin',
      role: 'admin',
      password
    }
  })
  console.log({ admin })
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })