import React from 'react';

import DirectoryItem from "../DirectoryItem/DirectoryItem.component.jsx"

import { DirectoryContainer } from './Directory.styles';

const categories = [
  {
    "id": 1,
    "title": "Sneakers",
    "imageUrl": "https://i.ibb.co/n194yQN/snealerss.webp",
    "route": 'shop/sneakers',
    "gridArea": "sneakers"
  },
  {
    "id": 2,
    "title": "Giacche",
    "imageUrl": "https://i.ibb.co/Gd7cxJq/jackets.webp",
    "route": 'shop/jackets',
    "gridArea": "jackets"
  },
  {
    "id": 3,
    "title": "Cappelli",
    "imageUrl": "https://i.ibb.co/jgzMMfz/webp.webp",
    "route": "shop/hats",
    "gridArea": "hats"
  },
  {
    "id": 4,
    "title": "Donna",
    "imageUrl": "https://i.ibb.co/pL4npcX/woman.webp",
    "route": 'shop/womens',
    "gridArea": "women"
  },
  {
    "id": 5,
    "title": "Uomo",
    "imageUrl": "https://i.ibb.co/Pwn70VP/man.webp",
    "route": 'shop/mens',
    "gridArea": "men"
  }
]



// Componente presente nell'home page con i vari collegamenti alle categorie
export const Directory = () => {  
  return (
    <>
      <DirectoryContainer>
        {categories.map((category) => (
          <DirectoryItem key={category.id} category={category} />
        ))}
      </DirectoryContainer>
    </>
  )
}

export default Directory;
