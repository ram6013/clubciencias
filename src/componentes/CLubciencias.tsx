import React from 'react'
import { motion } from 'framer-motion'


const Clubciencias =()=>{
    return(
        <div className="flex justify-center items-center gap-3">
            <motion.h1 className="text-white text-6xl">CLub</motion.h1>
            <motion.div className="bg-white border-3 rounded-full mt-3">
                <motion.button whileInView={{rotate:360}}    transition={{ duration: 2, ease: 'linear', repeat: Infinity }}><img src="logoClub.png" alt="Logo" height={2} width={150}></img></motion.button>
            </motion.div>
            <motion.h1  className="text-6xl text-white">Ciencias</motion.h1>
        </div>
    );
}

export default Clubciencias;