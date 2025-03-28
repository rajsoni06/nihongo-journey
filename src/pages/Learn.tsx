import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useIsMobile } from '@/hooks/use-mobile';
import { motion } from 'framer-motion';

const LearnPage = () => {
    const [activeTab, setActiveTab] = useState('jlpt');
    const isMobile = useIsMobile();

    // Reusable Section Heading component with enhanced animations
    const SectionHeading = ({ title, subtitle, className = "" }) => (
        <div className={`text-center ${className}`}>
            <motion.h2
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="text-3xl md:text-4xl font-bold mb-2"
            >
                {title}
            </motion.h2>
            <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                className="text-gray-600 dark:text-gray-400"
            >
                {subtitle}
            </motion.p>
        </div>
    );

    // Reusable Card component with hover animation
    const CardComponent = ({ image, title, description, externalLink }) => {
        const isVideo = typeof image === 'string' && (image.endsWith('.mp4') || image.endsWith('.webm'));

        return (
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.03, rotate: 1 }}
                transition={{ duration: 0.5 }}
                className="bg-white shadow-md rounded-xl overflow-hidden transition-shadow hover:shadow-lg"
            >
                {isVideo ? (
                    <video controls className="w-full aspect-video" preload="metadata">
                        <source src={image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={image} alt={title} className="w-full h-48 object-cover" />
                )}
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{title}</h3>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">{description}</p>
                    {externalLink && (
                        <motion.a
                            href={externalLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                            whileHover={{ scale: 1.1 }}
                            transition={{ duration: 0.3 }}
                        >
                            Learn More
                        </motion.a>
                    )}
                </div>
            </motion.div>
        );
    };

    // Monetization Card component with enhanced hover effects
    const MonetizationCardComponent = ({ image, title, description }) => {
        const isVideo = typeof image === 'string' && (image.endsWith('.mp4') || image.endsWith('.webm'));

        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05, boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.2)" }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-xl overflow-hidden border border-white/10 shadow-xl backdrop-blur-md h-[400px] flex flex-col"
            >
                {isVideo ? (
                    <video controls className="w-full aspect-video rounded-t-xl" preload="metadata">
                        <source src={image} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                ) : (
                    <img src={image} alt={title} className="w-full h-48 object-cover rounded-t-xl" />
                )}
                <div className="p-6 flex-grow flex flex-col">
                    <h3 className="text-xl font-semibold mb-2 text-black">{title}</h3>
                    <p className="text-black mb-4 flex-grow">{description}</p>
                </div>
            </motion.div>
        );
    };

    return (
        <div className="min-h-screen">
            {/* Hero Section with enhanced animations */}
            <section className="relative py-20 px-4 flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <img
                        src="https://images.unsplash.com/photo-1528360983277-13d401cdc186?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
                        alt="Japanese Study Books"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
                </div>

                <div className="max-w-4xl mx-auto text-center text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: -50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut" }}
                        className="text-4xl md:text-5xl font-bold mb-4"
                    >
                        Japanese Language Learning
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
                        className="text-xl max-w-2xl mx-auto"
                    >
                        Comprehensive resources for all Japanese language learners, from absolute beginners to advanced speakers preparing for the JLPT.
                    </motion.p>
                </div>
            </section>

            {/* Navigation Tabs with button animations */}
            <section className="py-8 px-4 bg-white border-b">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-wrap justify-center gap-4">
                        {['jlpt', 'beginners', 'resources'].map((tab) => (
                            <motion.div
                                key={tab}
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                <Button
                                    onClick={() => setActiveTab(tab)}
                                    className={`px-4 py-2 rounded-lg transition-colors ${
                                        activeTab === tab ? 'bg-japan-red text-white' : 'bg-gray-100 hover:bg-gray-200'
                                    }`}
                                >
                                    {tab === 'jlpt' ? 'JLPT Levels' : tab === 'beginners' ? 'For Beginners' : 'Additional Resources'}
                                </Button>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* JLPT Levels Content with 3D Effect and Staggered Animations */}
            {activeTab === 'jlpt' && (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 px-4 bg-gradient-to-b from-white to-gray-50"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading
                            title="JLPT - Levels"
                            subtitle="The Japanese Language Proficiency Test has five levels, with N5 being the easiest and N1 the most difficult."
                            className="mb-12"
                        />

                        {/* 3D Wrapper for JLPT Content */}
                        <div className="jlpt-3d-wrapper">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5 }}
                                className="bg-white shadow-md rounded-xl overflow-hidden mb-12"
                            >
                                <img
                                    src="https://www.jlpt.jp/e/about/img/levelsummary_h1.gif"
                                    alt="N1-N5: Summary of Linguistic Competence"
                                    className="w-full max-w-full h-auto"
                                />
                                <img
                                    src="https://www.jlpt.jp/e/about/img/levelsummary_lvlbar.gif"
                                    width="665"
                                    height="52"
                                    alt="N1 difficult ←→ easy N5"
                                    className="w-full max-w-full h-auto"
                                />
                                <div className="p-6">
                                    <p className="mb-4">
                                        N4 and N5 measure the level of understanding of basic Japanese mainly learned in class. N1 and N2 measure the level of understanding of Japanese used in a broad range of scenes in actual everyday life. N3 is a bridging level between N1/N2 and N4/N5.
                                    </p>
                                    <p>
                                        Linguistic competence required for the JLPT is expressed in terms of language activities, such as Reading and Listening, as shown in the table below.
                                    </p>
                                </div>
                            </motion.div>

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                                {[
                                    {
                                        image: "https://cdn.fs.teachablecdn.com/0qdI5pweTACcOVF2ewzc",
                                        title: "JLPT - N1",
                                        description: "The most advanced level of the JLPT. Demonstrates ability to understand Japanese in complex situations.",
                                        externalLink: "https://drive.google.com/file/d/1Xhu7BJV7Iur5MFTCR7icvQnQRzaY2NQ_/view?usp=sharing"
                                    },
                                    {
                                        image: "https://kizunajapaneseacademy.com/wp-content/uploads/2023/12/5-3-1024x576.png",
                                        title: "JLPT - N2",
                                        description: "Certifies understanding of Japanese in everyday situations and various circumstances.",
                                        externalLink: "https://drive.google.com/file/d/1Xq3abGiV4yR0ZMk6pII1UN_46xxQbPAJ/view?usp=drive_link"
                                    },
                                    {
                                        image: "https://65.media.tumblr.com/8c81e80f7abc90f59a61913284dda0a8/tumblr_inline_o7ckapQes21tqv1ik_500.gif",
                                        title: "JLPT - N3",
                                        description: "Intermediate level, understanding Japanese in everyday situations to a certain degree.",
                                        externalLink: "https://drive.google.com/file/d/1ZpJrnG593XgiUcqtu7VMwWgZAtybzlOQ/view?usp=sharing"
                                    },
                                    {
                                        image: "https://i.ytimg.com/vi/uHdJn_ENpIo/hq720.jpg",
                                        title: "JLPT - N4",
                                        description: "Requires reading 300 kanji and knowing about 1,500 vocabulary words.",
                                        externalLink: "https://drive.google.com/file/d/1UJYOGGcGOTv8_N7Slk0D8EEfW94Vf5dw/view?usp=drivesdk"
                                    },
                                    {
                                        image: "https://www.attainj.co.jp/attain-online-japanese/material/images/jlpt-N5-en-1.jpg",
                                        title: "JLPT - N5",
                                        description: "Basic level requiring understanding of hiragana, katakana, and simple conversations.",
                                        externalLink: "https://drive.google.com/file/d/1VKWTSLRO441fbNuicU8OkVYoU_htGBYZ/view?usp=drivesdk"
                                    }
                                ].map((level, index) => (
                                    <motion.div
                                        key={level.title}
                                        initial={{ opacity: 0, y: 50 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.5, delay: index * 0.1 }}
                                    >
                                        <CardComponent {...level} />
                                    </motion.div>
                                ))}
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.5 }}
                                    className="glass-card p-6 flex flex-col justify-center items-center text-center"
                                >
                                    <h3 className="text-xl font-semibold mb-4">Official JLPT Information?</h3>
                                    <p className="mb-4">Visit the official JLPT website for test dates and sample questions.</p>
                                    <motion.a
                                        href="https://www.jlpt.jp/e/index.html"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="button-primary"
                                        whileHover={{ scale: 1.1 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        Visit Official JLPT Site
                                    </motion.a>
                                </motion.div>
                            </div>
                        </div>
                    </div>
                </motion.section>
            )}

            {/* For Beginners Content with Slide-in Animations */}
            {activeTab === 'beginners' && (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 px-4 bg-gradient-to-b from-white to-gray-50"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading
                            title="For Beginners"
                            subtitle="Getting started with Japanese language study"
                            className="mb-12"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                            {[
                                {
                                    image: "https://linkupnippon.com/wp-content/uploads/2023/06/Japanese-alphabet-top.png",
                                    title: "Japanese Alphabets",
                                    description: "Learn Hiragana, Katakana, and Kanji with this beginner-friendly guide.",
                                    externalLink: "https://drive.google.com/file/d/1_FgeXtrY8S-JRY7rhC3uIxyKxQGHYeVK/view?usp=sharing"
                                },
                                {
                                    image: "Absolute_Beginner_Course.jpeg",
                                    title: "Absolute Beginner Course",
                                    description: "Comprehensive guide for absolute beginners with basic phrases and vocabulary.",
                                    externalLink: "https://drive.google.com/file/d/1V5VB6F2aSNmrpXw2_9P-9xnoFyLswH-e/view?usp=drivesdk"
                                },
                                {
                                    image: "https://i.ytimg.com/vi/nha3pLrmvjI/hq720.jpg",
                                    title: "Beginner Course",
                                    description: "Take your Japanese to the next level with everyday conversation practice.",
                                    externalLink: "https://drive.google.com/file/d/1VNqheM7AI1TYL-Mow3mCHcCXPL_mk-nw/view?usp=sharing"
                                }
                            ].map((resource, index) => (
                                <motion.div
                                    key={resource.title}
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                >
                                    <CardComponent {...resource} />
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-12 p-8 bg-white rounded-xl shadow-lg"
                        >
                            <h3 className="text-2xl font-semibold mb-4">Tips for Beginners</h3>
                            <ul className="space-y-4">
                                {[
                                    "Start with hiragana and katakana before moving to kanji.",
                                    "Practice speaking from day one, even if it's just basic greetings.",
                                    "Use spaced repetition to memorize vocabulary efficiently.",
                                    "Immerse yourself in Japanese media (anime, podcasts, music).",
                                    "Find a language exchange partner for conversation practice."
                                ].map((tip, index) => (
                                    <motion.li
                                        key={index}
                                        initial={{ opacity: 0, x: -20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ duration: 0.4, delay: index * 0.1 }}
                                        className="flex"
                                    >
                                        <span className="text-japan-red font-bold mr-2">{index + 1}.</span>
                                        <span>{tip}</span>
                                    </motion.li>
                                ))}
                            </ul>
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {/* Additional Resources Content with Fade-in Animations */}
            {activeTab === 'resources' && (
                <motion.section
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    className="py-16 px-4 bg-gradient-to-b from-white to-gray-50"
                >
                    <div className="max-w-7xl mx-auto">
                        <SectionHeading
                            title="Additional Resources"
                            subtitle="Tools and resources to enhance your Japanese language learning journey"
                            className="mb-12"
                        />

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                            {[
                                {
                                    title: "Online Learning Platforms",
                                    items: [
                                        { name: "Duolingo", link: "https://www.duolingo.com/course/ja/en/Learn-Japanese", desc: "Free, gamified language learning app" },
                                        { name: "JapanesePod101", link: "https://www.japanesepod101.com/", desc: "Audio and video lessons for all levels" },
                                        { name: "WaniKani", link: "https://www.wanikani.com/", desc: "Specialized platform for learning kanji" },
                                        { name: "BunPro", link: "https://bunpro.jp/", desc: "Grammar-focused spaced repetition system" },
                                        { name: "Tofugu", link: "https://www.tofugu.com/", desc: "Blog with excellent resources" }
                                    ]
                                },
                                {
                                    title: "Mobile Apps",
                                    items: [
                                        { name: "Japanese", link: "https://apps.apple.com/us/app/japanese/id290664053", desc: "Comprehensive dictionary app" },
                                        { name: "Kanji Study", link: "https://play.google.com/store/apps/details?id=com.mindtwisted.kanjistudy", desc: "In-depth kanji learning app" },
                                        { name: "Anki", link: "https://apps.ankiweb.net/", desc: "Powerful flashcard app" },
                                        { name: "HelloTalk", link: "https://apps.apple.com/us/app/hellotalk-language-exchange/id557130558", desc: "Connect with native speakers" },
                                        { name: "Itazuraneko", link: "https://itazuraneko.neocities.org/learn/anki.html", desc: "Free Anki decks for Japanese" }
                                    ]
                                },
                                {
                                    title: "Books & Textbooks",
                                    items: [
                                        { name: "Genki", desc: "Popular textbook series for beginners" },
                                        { name: "Minna no Nihongo", desc: "Comprehensive textbook series" },
                                        { name: "Tobira", desc: "Intermediate to advanced textbook" },
                                        { name: "A Dictionary of Japanese Grammar", desc: "The 'Japanese grammar bible' series" },
                                        { name: "Kodansha Kanji Learner's Course", desc: "Systematic approach to 2,300 kanji" }
                                    ]
                                },
                                {
                                    title: "YouTube Channels",
                                    items: [
                                        { name: "JapanesePod101", link: "https://www.youtube.com/c/JapanesePod101", desc: "Lessons for all skill levels" },
                                        { name: "Tokini Andy", link: "https://www.youtube.com/c/TokiniAndy", desc: "Grammar lessons with Genki" },
                                        { name: "Dogen", link: "https://www.youtube.com/c/dogen", desc: "Pronunciation and pitch accent" },
                                        { name: "YU Japanese", link: "https://www.youtube.com/c/YUYU%E3%81%AE%E6%97%A5%E6%9C%AC%E8%AA%9E%E6%95%99%E5%AE%A4", desc: "Lessons in simple Japanese" },
                                        { name: "Comprehensible Japanese", link: "https://www.youtube.com/c/ComprehensibleJapanese", desc: "Input-based learning" }
                                    ]
                                }
                            ].map((category, index) => (
                                <motion.div
                                    key={category.title}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: index * 0.1 }}
                                    className="glass-card p-8"
                                >
                                    <h3 className="text-xl font-semibold mb-4">{category.title}</h3>
                                    <ul className="space-y-3">
                                        {category.items.map((item, idx) => (
                                            <motion.li
                                                key={idx}
                                                initial={{ opacity: 0, x: -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ duration: 0.4, delay: (index * 0.1) + (idx * 0.05) }}
                                            >
                                                {item.link ? (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-japan-red hover:underline">
                                                        {item.name}
                                                    </a>
                                                ) : (
                                                    <span className="font-medium">{item.name}</span>
                                                )}
                                                <span> - {item.desc}</span>
                                            </motion.li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="p-8 bg-white rounded-xl shadow-lg"
                        >
                            <div className="md:flex md:items-center md:justify-between">
                                <div className="mb-6 md:mb-0 md:max-w-md">
                                    <h3 className="text-2xl font-semibold mb-4">Looking for a Study Partner?</h3>
                                    <p className="mb-6 md:mb-0">
                                        Join our WhatsApp group to connect with other learners and native speakers.
                                    </p>
                                </div>
                                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                    <Button
                                        className="bg-japan-red hover:bg-japan-red/90 text-white w-full md:w-auto px-4 py-2 md:px-8"
                                        asChild
                                    >
                                        <a href="https://chat.whatsapp.com/JZu3yXhmwqMCoFxc9XZvKM" target="_blank" rel="noopener noreferrer">
                                            Join India-Japan WhatsApp Group
                                        </a>
                                    </Button>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </motion.section>
            )}

            {/* Fuji School of Japanese Language Section with Enhanced Animations */}
            <motion.section
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="py-16 px-4 md:px-10 bg-gray-900 text-white"
            >
                <div className="max-w-7xl mx-auto">
                    <SectionHeading
                        title="📢 Fuji School of Japanese Language"
                        subtitle={
                            <div className="text-center space-y-2 text-white">
                                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
                                    Join Today, JLPT + Study Materials
                                </motion.p>
                                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
                                    Online Classes Available
                                </motion.p>
                                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}>
                                    📞 WhatsApp: +91 9911312608
                                </motion.p>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.6 }}
                                >
                                    <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                                        <Button
                                            asChild
                                            className="mt-4 bg-gradient-to-r from-green-400 to-teal-500 hover:from-green-500 hover:to-teal-600 text-white px-6 py-3 rounded-lg shadow-lg"
                                        >
                                            <a href="https://wa.me/919911312608" target="_blank" rel="noopener noreferrer">
                                                Contact Now
                                            </a>
                                        </Button>
                                    </motion.div>
                                </motion.div>
                            </div>
                        }
                        className="mb-12"
                    />
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                image: "Vanshika_Sensei_N5_Course_Promotion.mp4",
                                title: <span style={{ color: 'black' }}>Master Japanese! 🚀</span>,
                                description: (
                                    <ul className="space-y-2 text-black">
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            JLPT N5-N1 Courses + Materials 📚
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                            Expert Guidance & EMI Options
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                            Start Your Journey Today! ✨
                                        </motion.li>
                                    </ul>
                                )
                            },
                            {
                                image: "Vanshika_Sensei_Japan_Obsession.mp4",
                                title: <span style={{ color: 'black' }}>Learn with Fuji School! ✨</span>,
                                description: (
                                    <ul className="space-y-2 text-black">
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            Comprehensive N5-N1 Training ✅
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                            Interactive Online/Offline Classes
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                            Mock Tests & EMI Available
                                        </motion.li>
                                    </ul>
                                )
                            },
                            {
                                image: "Vanshika_Sensei_Course_Promotion.jpg",
                                title: <span style={{ color: 'black' }}>Unlock Skills 🔓</span>,
                                description: (
                                    <ul className="space-y-2 text-black">
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            High-Quality Materials
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}>
                                            Flexible Online Classes
                                        </motion.li>
                                        <motion.li initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }}>
                                            Expert-Led Training 🚀
                                        </motion.li>
                                    </ul>
                                )
                            }
                        ].map((card, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                            >
                                <MonetizationCardComponent {...card} />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </motion.section>
        </div>
    );
};

export default LearnPage;