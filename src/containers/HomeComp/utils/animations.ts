import { gsap, Power2 } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ethFieldAnimation = function () {
    const ethField = document.getElementsByClassName("ethField")[0];
    [...Array(60)].forEach(() => {
        const eth = document.createElement("img");
        eth.setAttribute("src", "/eth.png");
        eth.setAttribute("class", "star");
        eth.style.height = "4rem";
        eth.style.position = "absolute";
        gsap.fromTo(
            eth,
            {
                scale: 0,
                autoAlpha: 0,
                x: gsap.utils.random(0, 2000, 100),
                y: gsap.utils.random(0, 1000, 150)
            },
            {
                scale: gsap.utils.random(8, 20, 1) / 10,
                autoAlpha: 0.1,
                duration: 1
            });
        ethField.appendChild(eth);
    });
};

export const entryAnimation = function () {
    gsap.fromTo(
        ".heading",
        {
            autoAlpha: 0,
            y: 100
        },
        {
            autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: Power2.easeOut
        }
        );
        gsap.fromTo(
            ".subtext",
            {
                autoAlpha: 0,
                y: 100
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                ease: Power2.easeOut,
                delay: 0.1
            }
            );
            gsap.fromTo(
                ".cta",
                {
                    autoAlpha: 0,
                    y: 100
                },
                {
                    autoAlpha: 1,
            y: 0,
            duration: 0.5,
            ease: Power2.easeOut,
            delay: 0.2
        }
        );
        gsap.fromTo(
            ".smart-contract",
            {
                autoAlpha: 0,
                y: 100
            },
            {
                autoAlpha: 1,
                y: 0,
                duration: 0.5,
                ease: Power2.easeOut,
                delay: 0.3
            }
            );
            // eslint-disable-next-line no-undef
            if (process.browser) {
                // window.scrollTo(0, 0);
            }
        };
        
        export const scrollAnimations = function () {
            gsap.fromTo(".ethField", { autoAlpha: 1 }, {
                autoAlpha: 0,
                y: "-=100",
                duration: 10,
                scrollTrigger: {
                    trigger: ".subtext",
                    start: "top 50%",
                    end: "150% 50%",
                    scrub: true,
                }
            });
            
            gsap.fromTo(".navbar",
            {
            boxShadow: "0 0 1.5rem 0.5rem #ffffff, 0 0 1.5rem 1rem #ffffff",
            background: "white"
        },
        {
            margin: "0 0",
            width: "100vw",
            boxShadow: "0 0 1.5rem 0.5rem #f9f9f9",
            background: "white",
            scrollTrigger: {
                trigger: ".subtext",
                start: "top 50%",
                end: "150% 50%",
                scrub: true
            }
        });

    gsap.to(".nav",
        {
            boxShadow: "none",
            scrollTrigger: {
                trigger: ".subtext",
                start: "top 50%",
                end: "150% 50%",
                scrub: true
            }
        });
            
    gsap.fromTo(
        ".modules-heading",
        {
            autoAlpha: 0,
            y: 75
        },
        {
            autoAlpha: 1,
            y: 0,
            scrollTrigger: {
                trigger: ".modules-section",
                start: "top 80%"
            },
            duration: 0.2,
            ease: Power2.easeOut
        }
    );
            
    gsap.to(
        ".navbar",
        {
            boxShadow: "none",
            scrollTrigger: {
                trigger: ".install",
                start: "top 15%",
                scrub: true
            },
            duration: 0.2,
            ease: Power2.easeOut
        }
    );
            
    [...Array(6)].forEach((v, i) => {
        gsap.fromTo(`.card-${i}`,
            {
                autoAlpha: 0,
                y: 75
            },
            {
                autoAlpha: 1,
                y: 0,
                scrollTrigger: {
                    trigger: `.card-${i}`,
                    start: "top 80%"
                },
                duration: 0.2,
                ease: Power2.easeIn
            }
        );
    });
            
    const els = document.getElementsByClassName('scroll-animate');
    [...Array(els.length)].forEach((v, i) => {
        gsap.fromTo(
            els[i],
            {
                autoAlpha: 0,
                y: 75
            },
            {
                autoAlpha: 1,
                y: 0,
                scrollTrigger: {
                    trigger: i < 6 ? els[i] : els[5],
                    start: "top 90%"
                },
                duration: 0.2,
                ease: Power2.easeIn
            }
        );
    });
}