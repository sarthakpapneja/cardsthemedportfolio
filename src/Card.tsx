import React from 'react';
import { motion } from 'framer-motion';

interface CardProps {
    id: string;
    suit: 'spades' | 'hearts' | 'diamonds' | 'clubs' | 'joker';
    rank: string;
    title: string;
    content: React.ReactNode;
    rotation?: number;
}

const Card: React.FC<CardProps> = ({
    suit, rank, title, content, rotation = 0
}) => {
    const isRed = suit === 'hearts' || suit === 'diamonds';
    const suitSymbol = suit === 'spades' ? '♠' :
        suit === 'hearts' ? '♥' :
            suit === 'diamonds' ? '♦' :
                suit === 'clubs' ? '♣' : '🃏';

    return (
        <motion.section
            className="card-panel"
            initial={{ opacity: 0, y: 50, rotate: rotation + 5 }}
            whileInView={{ opacity: 1, y: 0, rotate: rotation }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{
                y: -10,
                scale: 1.01,
                boxShadow: "0 20px 40px rgba(0,0,0,0.6), 0 0 0 1px var(--gold)",
                transition: { duration: 0.3 }
            }}
        >
            {/* Corner Indices */}
            <div className="indicator top-left" style={{ color: isRed ? 'var(--card-red)' : 'var(--card-black)' }}>
                <span className="rank">{rank}</span>
                <span className="suit-symbol">{suitSymbol}</span>
            </div>
            <div className="indicator bottom-right" style={{ color: isRed ? 'var(--card-red)' : 'var(--card-black)' }}>
                <span className="rank">{rank}</span>
                <span className="suit-symbol">{suitSymbol}</span>
            </div>

            {/* Suit Watermark */}
            <div
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    fontSize: '30rem',
                    opacity: 0.03,
                    color: isRed ? 'var(--card-red)' : 'var(--card-black)',
                    pointerEvents: 'none',
                    userSelect: 'none',
                    zIndex: 1
                }}
            >
                {suitSymbol}
            </div>

            <div style={{ position: 'relative', zIndex: 2 }}>
                <h2 className="card-title" style={{ color: isRed ? 'var(--card-red)' : 'var(--card-black)' }}>
                    {title}
                </h2>

                <div className="card-content-organized">
                    {content}
                </div>
            </div>
        </motion.section>
    );
};

export default Card;
