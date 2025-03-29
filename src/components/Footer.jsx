import React, { useEffect, useRef } from 'react';
import PropTypes, { element } from 'prop-types';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import ScrollTrigger from 'gsap/ScrollTrigger';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// SocialMediaLinks Component
const SocialMediaLinks = ({ socialLinks }) => {
  const socialMediaData = [
    { name: 'Discord', url: socialLinks.discord, icon: '/images/social media/discord-white.png', className:"w-6.5 h-6.5"},
    { name: 'GitHub', url: socialLinks.github, icon: '/images/social media/github-white.png', className:"w-7 h-7"},
    { name: 'LinkedIn', url: socialLinks.linkedIn, icon: '/images/social media/linkedin-white.png', className:"w-6 h-6.5"},
    { name: 'Reddit', url: socialLinks.reddit, icon: '/images/social media/reddit-white.png', className:"w-6 h-6"},
    { name: 'Twitter', url: socialLinks.twitter, icon: '/images/social media/twitter-white.png', className:"w-6 h-6"},
  ];

  return (
    <div className="h-18 flex justify-center items-center gap-x-5 lg:justify-end lg:items-end lg:py-2 lg:px-3">
      {socialMediaData.map(
        (media) =>
          media.url && (
            <a
              key={media.name}
              className="hover:opacity-30 cursor-none"
              href={media.url}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className={media.className} src={media.icon} alt={media.name} />
            </a>
          )
      )}
    </div>
  );
};

SocialMediaLinks.propTypes = {
  socialLinks: PropTypes.shape({
    discord: PropTypes.string,
    github: PropTypes.string,
    linkedIn: PropTypes.string,
    reddit: PropTypes.string,
    twitter: PropTypes.string,
  }).isRequired,
};

// Footer Component
const Footer = ({ cursorRef, aboutRef, name, profileName, info, profilePic, socialLinks, animationStart }) => {
  const socialRef = useRef();

  useEffect(() => {
    if (!aboutRef.current || !cursorRef.current) return;

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        backgroundColor: 'white',
        borderColor: 'white',
        duration: 0.5,
        ease: 'power2.out',
        stagger: { amount: 0.2 },
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        backgroundColor: 'black',
        borderColor: 'black',
        duration: 0.5,
        ease: 'power2.out',
        stagger: { amount: 0.2 },
      });
    };

    const footerElement = aboutRef.current;
    footerElement.addEventListener('mouseenter', handleMouseEnter);
    footerElement.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      footerElement.removeEventListener('mouseenter', handleMouseEnter);
      footerElement.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [aboutRef, cursorRef]);

  useEffect(() => {
    if (!socialRef.current || !cursorRef.current) return;

    const handleMouseEnter = () => {
      gsap.to(cursorRef.current, {
        scale: 0.5,
        duration: 0.5,
        ease: 'power2.out',
        stagger: { amount: 0.2 },
      });
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.5,
        ease: 'power2.out',
        stagger: { amount: 0.2 },
      });
    };

    const anchorTags = socialRef.current.querySelectorAll('a');

    anchorTags.forEach((tag) => {
      tag.addEventListener('mouseenter', handleMouseEnter);
      tag.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      anchorTags.forEach((tag) => {
        tag.removeEventListener('mouseenter', handleMouseEnter);
        tag.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, [socialRef, cursorRef]);



      const nameRef = useRef();
      const profileNameRef = useRef();
      const infoRef = useRef();

      useGSAP(()=>{

        if(!aboutRef) return;

      const scrambleAnimation = () =>{

        const randomChar = "⏚⊑⏃⋏ ⏃⋏ ⊇⎍⌰⏃⊬⎍⌰⍜⊑⏃⊑⌇ ⏚⍜⊑⊬⏃⋏⌇ ⏁⊑⏃⌇ ⏃ ⏚⋔⏃⊑⌇ ⏃⋏ ⌇⏃⋏⌇ - ⌇⏃⏁⏃ ⌇⎍⌰⏃⋏⌇⍜⋏⌇. ⏚ ⏃⎎⏃⌰⟒ ⏃ ⍜⏚⏚⏃⌇⌇⏃⋏ ⎎⏃⋏ ⌇⏃⏁⏃ ⌇⎍⌰⏃⋏⌇⍜⋏⌇ ⏃⋏⌇ ⎍⌰⌰ ⏁⍜⋏⌇⌇ ⎍⏃⏁ ⏁⏃⌇⎍⋏⌰⍜⌇⟒⋏⌇. ⏚ ⌇⍜⌰⏚ ⏁⊑⏃⌰⌰⌇⌇⍜⌰⍜⋏⌇ ⋏⎍⌰ ⏁⊑⍜⋏⌇⟟⎅⏃⌰⟒⋏⌇⍜⌰⍜⋏⌇, ⎎⏃⌰⟒⌰⏃⋏⟟⋏⌇ ⎍⋔⍜⏚⏃⌇⏃⌰⌇⏃⋏⌇";
        
        const textForAnimataion = [nameRef.current, profileNameRef.current, infoRef.current];

        textForAnimataion.forEach(element =>{
          
          const originalText =  element.dataset.text;

          let iteration = 0;

          let interval = setInterval(()=>{
            element.textContent = originalText.split("").map(
                (char, index)=>{
                    if(index < iteration) return char;
    
                    return randomChar.charAt(Math.floor(Math.random()*randomChar.length));
                }
            )
            .join("");
    
            if(iteration >= originalText.length){
                clearInterval(interval);
            }
        
            iteration += 1/3;
        }, 70)


        })
    }


    ScrollTrigger.create({
      trigger: aboutRef.current,
      start: "top 40%",
      end: "top 40%",
      onEnter: scrambleAnimation,
      once: true,
      markers: true,
    })




      }, [aboutRef]);

  return (
    <div ref={aboutRef} className="h-auto w-full bg-slate-900 py-2">
      <div className="h-16 flex items-center px-2 gap-x-2">
        <img
          src={profilePic}
          className="w-13 h-13 rounded-full border-2 border-white"
          alt="profile"
        />
        <div className="h-15">
          <h1 ref={nameRef} className="text-white text-[min(10vw,22px)]" data-text={name}>{name}</h1>
          <h1 ref={profileNameRef} className="text-neutral-400 text-[min(7vw,17px)]" data-text={profileName} >{profileName}</h1>
        </div>
      </div>
      <p  ref={infoRef} className="text-white text-[min(5vw,25px)] text-center px-2 lg:text-left lg:px-3 mt-5" data-text={info}>
         {info}
      </p>
      <div ref={socialRef}>
        <SocialMediaLinks socialLinks={socialLinks} />
      </div>
    </div>
  );
};

Footer.propTypes = {
  cursorRef: PropTypes.object.isRequired,
  aboutRef: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  profileName: PropTypes.string.isRequired,
  info: PropTypes.string.isRequired,
  profilePic: PropTypes.string.isRequired,
  socialLinks: {
    discord: '',
    github: '',
    linkedIn: '',
    reddit: '',
    twitter: '',
  },
};

export default Footer;
