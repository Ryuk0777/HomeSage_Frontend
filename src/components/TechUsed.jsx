import React, { useEffect, useRef, forwardRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from "gsap/ScrollTrigger";
import FrontendTechStack from './FrontendTechStack';
import BackendTechStack from './BackendTechStack';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TechUsed = forwardRef((props, ref) => {  // ✅ Correct way to use ref
    const title1 = useRef();
    const title2 = useRef();

    useGSAP(() => {
        if (!title1.current || !title2.current) return; // ✅ Prevent null refs

        gsap.from(title1.current, {
            x: 150,
            scrollTrigger: {
                trigger: title1.current,
                start: 'top 90%',
                end: 'top 60%',
                markers: false,
                scrub: true,
            },
        });

        gsap.from(title2.current, {
            x: -150,
            scrollTrigger: {
                trigger: title2.current,
                start: 'top 90%',
                end: 'top 60%',
                markers: false,
                scrub: true,
            },
        });
    }, [title1, title2]);

    return (
        <div ref={ref} className='h-[100vh] lg:h-[120vh] bg-emerald-300 flex flex-col overflow-x-hidden justify-end gap-y-6 lg:justify-center lg:gap-y-5'>
            <div className='w-auto h-auto flex justify-center gap-x-4 mb-20 lg:mb-10'>
                <div className='w-auto h-auto overflow-x-hidden'>
                    <h1 ref={title1} className='text-[min(13vw,90px)] font-bold'>Tech</h1>
                </div>
                <div className='w-auto h-auto overflow-x-hidden'>
                    <h1 ref={title2} className='text-[min(13vw,90px)] font-bold text-white'>Used</h1>
                </div>
            </div>

            <FrontendTechStack />
            <BackendTechStack />
        </div>
    );
});

export default TechUsed;
