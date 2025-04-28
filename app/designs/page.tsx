"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { cn } from "@/lib/utils"
import Image from 'next/image';

const designData = [
    {
        id: 1,
        title: 'Design 1',
        imageUrl: 'https://placehold.co/400x300',
        description: 'Description of Design 1.',
    },
    {
        id: 2,
        title: 'Design 2',
        imageUrl: 'https://placehold.co/400x300',
        description: 'Description of Design 2.',
    },
    {
        id: 3,
        title: 'Design 3',
        imageUrl: 'https://placehold.co/400x300',
        description: 'Description of Design 3'
    },
    {
        id: 4,
        title: 'Design 4',
        imageUrl: 'https://placehold.co/400x300',
        description: 'Description of Design 4'
    },
    {
        id: 5,
        title: 'Design 5',
        imageUrl: 'https://placehold.co/400x300',
        description: 'Description of Design 5'
    },
    {
        id: 6,
        title: 'Design 6',
        imageUrl: 'https://placehold.co/400x300',
        description: 'Description of Design 6'
    },
];

const Card = ({ imageUrl, title, description }: { imageUrl: string, title: string, description: string }) => {
    return (
        <div className={cn(
            "bg-white/5 backdrop-blur-md rounded-lg shadow-md overflow-hidden",
            "border border-white/10"
        )}>
            <Image
                src={imageUrl}
                alt={title}
                width={400}
                height={300}
                className="w-full h-auto object-cover"
            />
            <div className="p-4">
                <h2 className="text-xl font-semibold mb-2 text-white">{title}</h2>
                <p className="text-gray-400">{description}</p>
            </div>
        </div>
    );
};

const DesignsPage = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-8 text-center text-white">Our Designs</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {designData.map((design) => (
                    <motion.div
                        key={design.id}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <Card
                            imageUrl={design.imageUrl}
                            title={design.title}
                            description={design.description}
                        />
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default DesignsPage;