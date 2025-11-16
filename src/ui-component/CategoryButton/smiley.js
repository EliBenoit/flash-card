// IMPORT
import './style.css';

const Emptyface = () => {
    return (
    <>
        <defs>
            <linearGradient id="emptyGradient" gradientTransform="rotate(45)">
            <stop offset="5%" stopColor="#a7f2feff" />
            <stop offset="95%" stopColor="#30c2e7ff" />
            </linearGradient>
        </defs>
        <g id="Calque_1-2" data-name="Calque 1">
            <circle cx="86.83" cy="89.17" r="84.18" className="face" fill="url('#emptyGradient')"/>
            <circle cx="60.19" cy="66.08" r="12.03" fill="#007485"/>
            <circle cx="111.96" cy="66.08" r="12.03" fill="#007485"/>
        </g>
    </>
    )
}

const NeutralFace = () => {
    return (
        <>
            <defs>
                <linearGradient id="neutralGradient" gradientTransform="rotate(45)">
                    <stop offset="5%" stopColor="#ffed62ff" />
                    <stop offset="95%" stopColor="#db8200" />
                </linearGradient>
            </defs>
            <g id="Calque_1-2" data-name="Calque 1">
                <circle cx="86.83" cy="89.17" r="84.18" fill="url(#neutralGradient)"/>
                <circle cx="62.26" cy="71.08" r="12.03" fill="#854700"/>
                <circle cx="114.03" cy="71.08" r="12.03" fill="#854700"/>
                <path d="M62.26 124.37h51.77" stroke="#854700" className="neutral-mouth"/>
            </g>
        </>
    )
}

const HappyFace = () => {
    return (
        <>
            <defs>
                <linearGradient id="happyGradient" gradientTransform="rotate(45)">
                    <stop offset="5%" stopColor="#00b400" />
                    <stop offset="95%" stopColor="#006112" />
                </linearGradient>
            </defs>
            <g id="Calque_1-2" data-name="Calque 1">
                <circle cx="86.83" cy="89.17" r="84.18" fill="url(#happyGradient)"/>
                <circle cx="62.39" cy="71.08" r="12.03" fill="#021b05ff"/>
                <circle cx="114.15" cy="71.08" r="12.03" fill="#021b05ff"/>
                <path 
                    d="M112.11 107.99c3.99 0 6.98 3.72 6.05 7.59-3.41 14.13-16.14 24.63-31.32 24.63s-27.91-10.5-31.32-24.63c-.94-3.87 2.06-7.59 6.05-7.59h50.56Z" 
                    fill="#021b05ff"
                />
            </g>
        </>
    )
}

const SmileFace = () => {
    return (
        <>
            <defs>
                <linearGradient id="smileGradient" gradientTransform="rotate(45)">
                    <stop offset="5%" stopColor="#B055D0" />
                    <stop offset="95%" stopColor="#7124B0" />
                </linearGradient>
            </defs>
            <g id="Calque_1-2" data-name="Calque 1">
                <circle cx="86.83" cy="89.17" r="84.18" fill="url(#smileGradient)"/>
                <circle cx="62.85" cy="71.08" r="12.03" fill="#2A144D"/>
                <circle cx="114.61" cy="71.08" r="12.03" fill="#2A144D"/>
                <path 
                    d="M118.16 112.06c-3.41 14.13-16.14 24.63-31.32 24.63s-27.91-10.5-31.32-24.63" 
                    stroke="#2A144D" 
                    className="neutral-mouth"
                />
            </g>
        </>
    )
}

const UnhappyFace = () => {
    return (
        <>
            <defs>
                <linearGradient id="unhappyGradient" gradientTransform="rotate(45)">
                    <stop offset="5%" stopColor="#f40400" />
                    <stop offset="95%" stopColor="#830000" />
                </linearGradient>
            </defs>
            <g id="Calque_1-2" data-name="Calque 1">
                <circle cx="86.83" cy="89.17" r="84.18" fill="url(#unhappyGradient)"/>
                <circle cx="62.85" cy="71.08" r="12.03" fill="#3c0000ff"/>
                <circle cx="114.61" cy="71.08" r="12.03" fill="#3c0000ff"/>
                <path 
                    d="M55.51 136.55c3.41-14.13 16.14-24.63 31.32-24.63s27.91 10.5 31.32 24.63" 
                    stroke="#3c0000ff"
                    className="neutral-mouth"
                />
            </g>
        </>
    )
}

export {
    Emptyface,
    NeutralFace,
    HappyFace,
    SmileFace,
    UnhappyFace
}