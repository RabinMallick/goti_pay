import Image from "next/image";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

const TrustedBrands = ({ logos }: { logos: string[] }) => {
    const controls = useAnimation();

    useEffect(() => {
        controls.start({
            x: ["0%", "-50%"],
            transition: { repeat: Infinity, duration: 20, ease: "linear" },
        });
    }, [controls]);

    return (
        <section className="py-12 bg-gray-50">
            <div className="max-w-6xl mx-auto text-center">
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold">
                    Trusted by <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">Leading Brands</span>
                </h2>
                <p className="text-xs md:text-md text-gray-600 mt-4 max-w-3xl mx-auto">
                    We collaborate with top brands to bring you secure and reliable payment solutions.
                </p>

                <div className="overflow-hidden relative mt-8">
                    <motion.div
                        className="flex gap-10 w-max items-center"
                        animate={controls}
                        onHoverStart={() => controls.stop()}
                        onHoverEnd={() =>
                            controls.start({
                                x: ["0%", "-50%"],
                                transition: { repeat: Infinity, duration: 20, ease: "linear" },
                            })
                        }
                    >
                        {[...logos, ...logos].map((logo, i) => (
                            <div key={i} className="flex-shrink-0">
                                <Image
                                    src={`/${logo}`}
                                    alt="partner"
                                    width={100}
                                    height={40}
                                    className="grayscale hover:grayscale-0 transition duration-300"
                                />
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default TrustedBrands;
