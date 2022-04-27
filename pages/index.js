import styles from '../styles/Home.module.css'
import Layout from '../components/layouts/layout'
import { useState } from 'react';
import prisma from '../lib/prisma'

export default function Home({ initialContacts, Component, pageProps }) {
  const [contacts, setContacts] = useState(initialContacts);
  console.log(contacts)
  return (
    <section className='w-full'>
      <div className='w-4/5 mx-auto my-12'>
        <h1 className='font-medium leading-tight text-5xl mt-0 mb-2 text-zinc-900'>Товары</h1>
        <div className='grid grid-cols-4 gap-4'>
          {contacts.map(product => (
            <div key={product.id}>{product.product_name}</div>
          ))}
          <div>

          </div>

        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps() {
  const res = await prisma.products.findMany({
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
  return {
    props: {
      initialContacts: res
    }
  }
}