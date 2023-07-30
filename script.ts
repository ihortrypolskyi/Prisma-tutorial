import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient({
  // log: ["query"]
})

async function main() {
  // const users = await prisma.user.findMany({
  //   where: {
      // name: {not: "John"},
      // name: { notIn: ["John", "Ben"] },
      // { age: { lte: 21 } },
      // email: { contains: 'email.com' },
      // AND: [
      //   { email: { startsWith: 'john' } } ,
      //   { email: { endsWith: 'com' } } ,
      // ],
      // OR: [
      //   { email: { startsWith: 'john' } } ,
      //   { age: { lte: 21 } },
      // ],
      // NOT: [
      //   { age: { gte: 30 } },
      // ]
      // userPreference: {
      //   emailUpdates: true
      // }
      // author: {
      //   is: {
      //     age: 20
      //   },
      //   isNot: {
      //     name: 'Ben'
      //   }
      // },
    //   writtenPosts: {
    //     every: {
    //       cratedAt: new Date(),
    //       title: "Test"
    //     }
    //   }
    // },
    // distinct: ["name", "age"]
  //   orderBy: {age: 'desc'},
  //   take: 4,
  //   skip: 0
  // });
  // await prisma.user.deleteMany();

  // const user = await prisma.user.createMany({
  //   data: [{
  //     name: 'John',
  //     email: 'john@email1.com',
  //     age: 22,

  //   },{
  //     name: 'Ben',
  //     email: 'ben@email1.com',
  //     age: 26,
  //   }], 
    // select: {
    //   name: true,
    //   userPreference: { select: {id: true} },
    // }
    // include: {
    //   userPreference: true,
    // }
  // });

  // const user = await prisma.user.findUnique({
  //   where: {
  //     // email: 'john@email.com'
  //     name_age: {age: 20, name: 'John'}
  //   }
  // })

  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Ben"
  //   }
  // })

  // const user = await prisma.user.update({
  //   where: {
  //     email: "john1@gmail.com"
  //   },
  //   data: {
      // email: "john2@gmail.com",
      // age: {
      //   increment: 1,
      // }
      // userPreference: {
      //   create: {
      //     emailUpdates: true
      //   },
        // connect: {
        //   id: "1dff2ad3-4e57-402c-a759-f708cd6d0132",
        // }
        // disconnect: true,
      // }
  //   }
  // })

  // const user = await prisma.user.delete({
  //   where: {
  //     email: 'ben@email.com'
  //   }
  // })

  const users = await prisma.user.deleteMany({
    where: {
      age: { gte: 30 }
    }
  })

  console.log(users)
}

main()
  .catch(e => {
    console.log(e.message)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })