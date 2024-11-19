
import React from 'react'

// 기본값이 할당되는 경우는 null 또는 0 일 때만,
// undefined의 경우엔 할당되지 않는다.

export function getImageUrl(person, size = 's') {
    return (
      'https://i.imgur.com/' +
      person.imageId +
      size +
      '.jpg'
    );
  }