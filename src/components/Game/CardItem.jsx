import '../../styles/CardItem.css';

import { motion } from 'motion/react';

export default function CardItem({ card }) {
  return (
    <motion.div
      whileTap={{ scale: 1 }}
      whileHover={{ scale: 1.1 }}
      className='card'
    >
      <img src={card.src} alt='Card Image' />
      <div className='card-name'>{card.name}</div>
    </motion.div>
  );
}
