import React from 'react'

export function getImageUrl(person, size = 'S') {
  return (
    'https://i.imgur.com/' + person.imageId + size + '.jpg'
  )
}
