import React from 'react';
import './App.css';
import './index.css';

const wrestlers = [
  { id: 1, img: 'images/CodyRhodes.webp', title: 'Cody Rhodes', nickname1: 'WWE Champion', nickname2: 'American Nightmare' },
  { id: 2, img: 'images/Damian_Priest.webp', title: 'Damian Priest', nickname1: 'World Heavyweight Champion', nickname2: 'Archer of Infamy' },
  { id: 3, img: 'images/sami-zayn.png', title: 'Sami Zayn', nickname1: 'Intercontinental Champion', nickname2: 'The Underdog From The Underground' },
  { id: 4, img: 'images/Loganpaul.png', title: 'Logan Paul', nickname1: 'United States Champion', nickname2: 'The gitMaverick' },
  { id: 5, img: 'images/Austin_Theory_3.webp', title: 'Austin Theory', nickname1: 'WWE Tag-Team Champion', nickname2: 'A-Town' },
  { id: 6, img: 'images/GraysonWaller.png', title: 'Grayson Waller', nickname1: 'WWE Tag-Team Champion', nickname2: 'The Moment Maker' },
  { id: 7, img: 'images/themiz.png', title: 'The Miz', nickname1: 'World Tag-Team Champion', nickname2: 'A-Lister' },
  { id: 8, img: 'images/r-truth.png', title: 'R-Truth', nickname1: 'World Tag-Team Champion', nickname2: 'The Truth' },
  { id: 9, img: 'images/Gunther.png', title: 'Gunther', nickname1: 'King of the Ring', nickname2: 'Ring General' },
  { id: 10, img: 'images/DrewMcintyre.webp', title: 'Drew McIntyre', nickname1: '#1 Contender for WHC', nickname2: 'Scottish Warrior' },
  { id: 11, img: 'images/roman-reigns.webp', title: 'Roman Reigns', nickname1: 'Longest Reigning WWE Champion', nickname2: 'The Tribal Chief' },
  { id: 12, img: 'images/sethrollins.webp', title: 'Seth Rollins', nickname1: '6-Time World Champion', nickname2: 'Visionary' },
  { id: 13, img: 'images/CMPunk.png', title: 'CM Punk', nickname1: '4-Time World Champion', nickname2: 'Best in the World' },
  { id: 14, img: 'images/randy-orton.png', title: 'Randy Orton', nickname1: '15-Time World Champion', nickname2: 'The Viper' },
  { id: 15, img: 'images/Johncena.webp', title: 'John Cena', nickname1: '16-Time World Champion', nickname2: 'Doctor of Thuganomics' },
  { id: 16, img: 'images/sheamus.webp', title: 'Sheamus', nickname1: '4-Time World Champion', nickname2: 'Celtic Warrior' },
  { id: 17, img: 'images/ChadGable.webp', title: 'Chad Gable', nickname1: '#1 Contender for IC Title', nickname2: 'Master Gable' },
  { id: 18, img: 'images/AjStyles.webp', title: 'AJ Styles', nickname1: '2-Time WWE Champion', nickname2: 'Phenomenal One' },
  { id: 19, img: 'images/la-knight.png', title: 'LA Knight', nickname1: '#1 Contender for US Title', nickname2: 'Yeah!' },
  { id: 20, img: 'images/Kevinowens.png', title: 'Kevin Owens', nickname1: '2-Time World Champion', nickname2: 'KO' },
  { id: 21, img: 'images/FinnBalor.webp', title: 'Finn Bálor', nickname1: 'Former World Champion', nickname2: 'Prince' },
  { id: 22, img: 'images/richochet.png', title: 'Ricochet', nickname1: '1-Time US Champion', nickname2: 'High Flyer' },
  { id: 23, img: 'images/ReyMysterio.webp', title: 'Rey Mysterio', nickname1: '3-Time WWE Champion', nickname2: 'Lucha Legend' },
];

function Header() {
  return (
    <header className="header">
      <h1 className="header-title">Top Stars of Professional Wrestling Industry in June 2024</h1>
    </header>
  );
}

function WrestlersList() {
  return (
    <>
      <Header />
      <section className='wrestlerslist'>
        {wrestlers.map((wrestler) => {
          return <Wrestler key={wrestler.id} {...wrestler} />;
        })}
      </section>
    </>
  );
}

const Wrestler = ({ img, title, nickname1, nickname2 }) => {
  return (
    <article className='wrestlers'>
      <img src={img} alt={title} />
      <h1>{title}</h1>
      <h4>{nickname1}</h4>
      <h4>{nickname2}</h4>
    </article>
  );
};

export default WrestlersList;

