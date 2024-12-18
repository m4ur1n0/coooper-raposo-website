import React from 'react'
import Link from 'next/link'

const PageLinkButton = ({page_dest, children}) => {
  return (
    <Link href={page_dest}>
        {children}
    </Link>
  )
}

export default PageLinkButton