import { z } from 'zod'
import type { NextRequest } from 'next/server'
import data from '../data.json'

export async function GET(request: NextRequest) {
  const { searchParams } = request.nextUrl

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const query = z.string().parse(searchParams.get('q'))

  const products = data.products.filter((product) => {
    return product.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  })

  return Response.json(products)
}
