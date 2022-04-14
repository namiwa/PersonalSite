import WINTER_NUSIT_20 from '../../../images/nus_it_winter.jpg';
import ASI_304 from '../../../images/noc_ASI_304.png';
import IDEATE_2020 from '../../../images/noc_ideate2020.png';

export const tileData = [
  {
    img: process.env.PUBLIC_URL + '/nus_it_winter.jpg',
    image: WINTER_NUSIT_20,
    title: 'Winter internship',
    author: 'NUS Information Technology',
    url: 'https://www.linkedin.com/feed/update/urn:li:activity:6683237871685636096/',
    width: '100%',
  },
  {
    img: process.env.PUBLIC_URL + '/noc_ideate2020.png',
    image: IDEATE_2020,
    title: 'Ideate 2020',
    author: 'Innovation & Design Student Club',
    url: 'https://ideate2020.devpost.com/',
    width: '100%',
  },
  {
    img: process.env.PUBLIC_URL + '/noc_ASI_304.png',
    image: ASI_304,
    title: 'Final Prototype',
    author:
      'Module ASI-304: Applying Machine Learning and AI to Satellite Data',
    url: 'https://asi-304-prototype.netlify.app/',
    width: '100%',
  },
];

export default tileData;
