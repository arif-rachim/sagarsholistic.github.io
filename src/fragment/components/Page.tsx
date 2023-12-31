import {useViewportDimension} from "../useViewportDimension";
import {CSSProperties, PropsWithChildren, useEffect, useRef} from "react";
import {colors} from "../colors";

export function Page(props: PropsWithChildren<{ title: string, path: string,stickyHeader?:boolean }>) {
    const dimension = useViewportDimension();
    const isMobile = dimension.width < 650
    const containerStyle: CSSProperties = {
        display: 'flex',
        flexDirection: 'column',
        background:'linear-gradient(180deg, rgba(128,188,106,0.2) 0%, rgba(255,255,255,0.5) 100%)',
        color: colors.second,
        borderTop: `1px solid ${colors.primary}`,
        paddingTop:'2.5rem'
    };
    const contentStyle: CSSProperties = {
        padding: '0rem 3rem 3rem 3rem ',
        letterSpacing:'0rem',
        fontFamily:'Fira Sans Condensed'
    }
    const headingStyle: CSSProperties = {
        fontFamily: 'Sacramento',
        fontSize: '3rem',
        margin: 0,
        padding: '1rem 3rem',
        color: colors.second,
        textAlign: isMobile ? 'center' : 'left',
    }

    if (isMobile) {
        headingStyle.padding = '0.5rem 1rem';
        headingStyle.fontSize = '2rem';
        if(!(props.stickyHeader === false)){
            headingStyle.position = 'sticky';
            headingStyle.top = 0;
        }
        contentStyle.padding = '0rem 1rem 1rem 1rem ';
    }
    const headingRef = useRef<HTMLHeadingElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    useEffect(() => {

        function checkScroll(): void {
            const headingElement = headingRef.current!;
            const parentElement = headingElement.parentElement!;
            const parentTop = parentElement.offsetTop || 0;
            const clientTop = headingElement.offsetTop || 0;
            const isMoved = (clientTop - parentTop) > 0;
            if (isMoved) {
                headingElement.style.backdropFilter = 'blur(5px)';
                headingElement.style.backgroundColor = 'rgba(219,230,214,0.9)';
                headingElement.style.borderBottom = `1px solid ${colors.primary}`;
            } else {
                headingElement.style.backdropFilter = 'blur(0px)';
                headingElement.style.borderBottom = `unset`;
                headingElement.style.backgroundColor = 'unset';
            }

        }


        window.addEventListener('scroll', checkScroll);
        return () => {
            window.removeEventListener('scroll', checkScroll);
        }
    }, [])

    return <div style={containerStyle} id={props.path} >
        <article>
            <h2 ref={headingRef} style={headingStyle}>{props.title}</h2>
            <div ref={contentRef} style={contentStyle}>
                {props.children}
            </div>
        </article>
    </div>
}