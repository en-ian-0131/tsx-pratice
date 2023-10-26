import React from 'react'

function IanTree() {
    const aa = [{
        "id": 5,
        "name": "Countries",
        "parentId": 0
      },
      {
        "id": 6,
        "name": "Netherlands",
        "parentId": 5
      },
      {
        "id": 7,
        "name": "Scandinavia",
        "parentId": 5
      },
      {
        "id": 8,
        "name": "Denmark",
        "parentId": 7
      },
      {
        "id": 9,
        "name": "Norway",
        "parentId": 7
      },
      {
        "id": 10,
        "name": "Sweden",
        "parentId": 7
      },
      {
        "id": 11,
        "name": "Germany",
        "parentId": 5
      }
    ]
  return (
    <div>IanTree</div>
  )
}

export default IanTree