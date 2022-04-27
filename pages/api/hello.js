// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { PrismaClient } from '@prisma/client'
import prisma from '../../lib/prisma'

export default async function handler(req, res) {

  const allUsers = await prisma.field_data.create({

    data : {
      fieldid : 2,
      productid : 2,
      field_value : "TFT"
    },

  // where : {
  //   id : 1
  // }, 
  // include : {
  //   field_data : true
  // }
})

  res.status(200);
}

// export default async function handler(req, res) {
//   const allUsers = await prisma.products.findMany()

//   res.status(200).json(allUsers)
// }
