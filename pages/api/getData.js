import prisma from '../../lib/prisma'

export default async function handler(req, res) {

    let allData = await prisma.products.findMany({
        select: {
            product_name: true,
            id: true,

            field_data: {
                where: {
                    fieldid: 1
                },
                select: {
                    field_value: true
                },
            },
            category: {
                select: {
                    category_fields: {
                        where: {
                            id: 1
                        },
                        select: {
                            field_name: true
                        }
                    }
                }
            }
        },
    })
    // res.status(200).json(allData);
    res.send(allData)
}

