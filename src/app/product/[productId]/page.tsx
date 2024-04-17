import React from 'react'

export default function page({params} : {
    params: {productId: string}
}) {
  return (
    <div>detail product {params.productId}</div>
  )
}
