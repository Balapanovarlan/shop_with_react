
import React from 'react'
import { Link } from 'react-router'

const CategoryListItem = (props) => {
  return (
    <Link to={`/category/${props.slug}`}>{props.name}</Link>
  )
}

export default CategoryListItem