import { useRef } from "react";

import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import cat from "./cat.gif";
import land from "./land.png";
import moon from "./moon.png";

function HeroParallax() {
    const containerRef = useRef(null);
    return (
        <Parallax pages={4} ref={containerRef}>
            <ParallaxLayer
                offset={0}
                speed={1}
                factor={2}
                style={{
                    backgroundImage: `url(${moon})`,
                    backgroundSize: "cover",
                }}
            />

            <ParallaxLayer
                offset={2}
                speed={1}
                factor={4}
                style={{
                    backgroundImage: `url(${land})`,
                    backgroundSize: "cover",
                }}
            ></ParallaxLayer>

            <ParallaxLayer
                sticky={{ start: 0.9, end: 2.5 }}
                style={{ textAlign: "center" }}
            >
                <img src={cat} />
            </ParallaxLayer>

            <ParallaxLayer offset={0.2} speed={0.05}>
                <h2>Bienvenido al Club de ciencias</h2>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={2}>
                <h2>Hola Ramon</h2>
            </ParallaxLayer>
        </Parallax>
    );
}

export default HeroParallax;
