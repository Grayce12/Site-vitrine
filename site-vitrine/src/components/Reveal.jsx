import { useEffect, useRef, useState } from "react";

/**
 * Ajoute "animated <animation>" quand l'élément entre dans le viewport.
 * - delay: "0.2s"
 * - animation: "fadeInUp", "fadeInLeft", "fadeInRight", "zoomIn"...
 */
export default function Reveal({
    children,
    animation = "fadeInUp",
    delay = "0s",
    className = "",
    threshold = 0.15,
    once = true,
}) {
    const ref = useRef(null);
    const [show, setShow] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const io = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setShow(true);
                    if (once) io.disconnect();
                } else if (!once) {
                    setShow(false);
                }
            },
            { threshold }
        );

        io.observe(el);
        return () => io.disconnect();
    }, [threshold, once]);

    return (
        <div
            ref={ref}
            style={{
                animationDelay: delay,
                visibility: show ? "visible" : "hidden",
            }}
            className={`${className} ${show ? `animated ${animation}` : ""}`}
        >
            {children}
        </div>
    );
}
