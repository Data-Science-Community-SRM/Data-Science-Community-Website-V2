import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { X, Code, Database, Brain, Rocket, ChevronRight } from 'lucide-react';
import styled from 'styled-components';

const LightboxOverlay = styled(motion.div)`
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.75);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 100;
    padding: 1rem;
`;

const LightboxContent = styled(motion.div)`
    background: linear-gradient(135deg, #1f1f1f, #3d007b);
    border-radius: 2rem;
    padding: 2rem;
    max-width: 90%;
    width: 100%;
    max-height: 90vh;
    overflow-y: auto;
    margin: 1rem;
    position: relative;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        max-width: 40rem;
        padding: 3rem;
    }
`;

const CloseButton = styled.button`
    position: absolute;
    top: 0.5rem;
    border-radius: 1rem;
    right: 0.5rem;
    color: #db2777 ;
    &:hover {
        color: white;
    }
    transition: color 0.3s;

    @media (min-width: 768px) {
        top: 1rem;
        right: 1rem;
    }
`;

const Title = styled.h2`
    font-size: 1.75rem;
    font-weight: bold;
    background: linear-gradient(to right, #a855f7, #ec4899);
    -webkit-background-clip: text;
    color: transparent;
    margin-bottom: 0.5rem;

    @media (min-width: 768px) {
        font-size: 2.25rem;
    }
`;

const Subtitle = styled.p`
    font-size: 1rem;
    color: #d1d5db;

    @media (min-width: 768px) {
        font-size: 1.25rem;
    }
`;

const FeatureContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;

const Feature = styled(motion.div)`
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: rgba(31, 41, 55, 0.5);
    border-radius: 0.5rem;
    padding: 0.75rem;
`;

const ApplyButton = styled(motion.button)`
    background: linear-gradient(to right, #a855f7, #ec4899);
    color: white;
    padding: 0.75rem 1.5rem;
    border-radius: 9999px;
    font-weight: 600;
    font-size: 1rem;
    &:hover {
        background: linear-gradient(to right, #8b5cf6, #db2777);
    }
    transition: background 0.3s;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);

    @media (min-width: 768px) {
        padding: 0.75rem 2rem;
        font-size: 1.125rem;
    }
`;

const RecruitmentLightbox = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIsOpen(true), 1000);
        return () => clearTimeout(timer);
    }, []);

    const features = [
        { icon: Code, text: "Learn cutting-edge technologies" },
        { icon: Database, text: "Work on real-world research" },
        { icon: Brain, text: "Develop creative projects" },
        { icon: Rocket, text: "Gain corporate experience" },
    ];

    return (
        <>
            {isOpen && (
                <LightboxOverlay
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setIsOpen(false)}
                >
                    <LightboxContent
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                        transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <CloseButton onClick={() => setIsOpen(false)}>
                            <X size={24} />
                        </CloseButton>
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            style={{ textAlign: 'center', marginBottom: '2rem' }}
                        >
                            <Title>Recruitment is ON!</Title>
                            <Subtitle>Join the Data Science Community at SRM IST</Subtitle>
                        </motion.div>
                        <FeatureContainer
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            {features.map((feature, index) => (
                                <Feature
                                    key={index}
                                    initial={{ x: -20, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{ delay: 0.6 + index * 0.1 }}
                                >
                                    <feature.icon style={{ color: '#a855f7' }} size={20} />
                                    <span style={{ color: '#e5e7eb', fontSize: '0.875rem' }}>{feature.text}</span>
                                </Feature>
                            ))}
                        </FeatureContainer>
                        <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.8 }}
                            style={{ textAlign: 'center' }}
                        >
                            <ApplyButton
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={() => window.open('https://apply.dscommunity.in')}
                            >
                                Apply Now <ChevronRight style={{ display: 'inline', marginLeft: '0.5rem' }} size={18} />
                            </ApplyButton>
                        </motion.div>
                    </LightboxContent>
                </LightboxOverlay>
            )}
        </>
    );
};

export default RecruitmentLightbox;


// onClick={() => setIsOpen(false)