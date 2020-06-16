/** @jsx jsx */
import React, { useState } from 'react'
import { jsx } from "@emotion/core";
import styled from '@emotion/styled/macro'
import {Dialog as ReachDialog} from '@reach/dialog'
import {Link as RouterLink} from 'react-router-dom'
// import * as colors from '../styles/colors';

function FormField({id, name, label, type, required, inline, placeholder, theme}) {
    const [isActive, setActive] = useState(false);

    return (
        <fieldset
            css={{
                display: inline ? 'inline-flex' : 'flex',
                flexDirection: "column",
                backgroundColor: theme === 'login' ? "rgba(232, 234, 237, .5)" : 'transparent',
                textAlign: "left",
                padding: "1.5em .5em .5em",
                margin: ".5em 0",
                border: 'none'
            }}>
            <label 
                htmlFor={name}
                css={{
                    position: "absolute",
                    backgroundColor: "transparent",
                    textTransform: "uppercase",
                    fontSize: ".8em",
                    color:"#3e3e3e",
                    transformOrigin: '0 0' ,
                    transition:"transform 0.2s linear",
                    transform: `translateY(${isActive || placeholder ? '-120%' : '0'}) scale(${isActive || placeholder ? '.8' : '1'})`,
                }}
            >
                {label}
            </label>
            <input
                type={type}
                id={id}
                name={name}
                css={{
                    backgroundColor: theme === 'login' ? "transparent" : "#fff",
                    border: "none",
                    lineHeight: "2",
                    padding: ".25em",
                    width: "100%",
                    ':focus': {
                        outline: 'none',
                        // backgroundColor: theme === 'login' ? 'rgba(243,236,120,.1)' : '#fff',
                    }
                }}
                required={required}
                onFocus={() => setActive(true)}
                onBlur={(e) => e.target.value.length ? setActive(true) : setActive(false)}
                placeholder={placeholder}
            />
        </fieldset>
    )
}

function SelectField({id, name, label, inline, theme, options}) {
    // const [isActive, setActive] = useState(false);

    return (
        <fieldset
            css={{
                display: inline ? 'inline-flex' : 'flex',
                flexDirection: "column",
                backgroundColor: theme === 'login' ? "#fff" : 'transparent',
                textAlign: "left",
                padding: "1.5em .5em .5em",
                margin: ".5em 0",
                border: 'none'
            }}>
            <label 
                htmlFor={name}
                css={{
                    // position: "absolute",
                    backgroundColor: "transparent",
                    textTransform: "uppercase",
                    fontSize: ".8em",
                    color:"#3e3e3e",
                    // transformOrigin: '0 0' ,
                    // transition:"transform 0.2s linear",
                    // transform: `scale('.8')`,
                }}
            >
                {label}
            </label>
            <select
                id={id}
                name={name}
                css={{
                    backgroundColor: theme === 'login' ? "transparent" : "#fff",
                    border: "none",
                    lineHeight: "2",
                    padding: ".25em",
                    height: "2.5em",
                    marginTop: ".5em",
                    ':focus': {
                        outline: 'none',
                        backgroundColor: theme === 'login' ? 'rgba(243,236,120,.1)' : '#fff',
                    }
                }}
                // onFocus={() => setActive(true)}
                // onChange={(e) => e.target.value.length ? setActive(true) : setActive(false)}
            >
                {options.map(option => <option value={option[0]}>{option}</option>)}
            </select>
        </fieldset>
    )
}

const Dialog = styled(ReachDialog)({
    borderColor: 'hotpink'
})

const Link = styled(RouterLink)({
    ':hover': {
      textDecoration: 'underline',
    },
  })

const Cover = ({children, styles}) => (
    <div
        css={{
        
            backgroundColor: '#020392',
            minHeight: '100%',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            height: '100vh',
            ...styles,
        }}>
          {children}
    </div>
)

const ColoredWrapper = ({children, styles}) => (
    <div
        css={{
            ...styles
        }}>
        {children}
    </div>
)

const Wrapper = ({children, styles}) => (
    <div css={{
        padding: '2em 2em',
        borderRadius: '2px',
        backgroundColor: '#fff',
        position: 'relative',
        ...styles,
    }}>
        {children}
    </div>
)

const VisuallyHidden = ({children}) => (
    <span
        css={{
            position: "absolute !important",
            height: '1px', 
            width: '1px',
            overflow: 'hidden',
            clip: 'rect(1px, 1px, 1px, 1px)',
            whiteSpace: 'nowrap',
        }}>
        {children}
    </span>
)

const Footer = ({children}) => (
    <footer css={{
        padding: '2em',
        backgroundColor: '#FFF',
        gridColumn: '1/-1',
        alignSelf: 'flex-end',
        textAlign: 'left',
    }}>
        {children}
    </footer>
)

function ErrorMessage({error, ...props}) {
    const [isActive, setIsActive] = useState(true);
    return isActive ? (
        <div
            role="alert"
            css={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                margin: '1em',
                padding: '2em',
                backgroundColor: '#d2322d',
                color: '#fff',
                animation: 'show 1s',
                '@keyframes show': {
                    from: {
                        opacity: 0,
                    },
                    to: {
                        opacity: 1,
                    },
                }
            }}
        >
            <button
                css={{
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    backgroundColor: 'transparent',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.5em',
                    cursor: 'pointer',
                }}
                onClick={() => setIsActive(false)}
                >
                <VisuallyHidden>Close</VisuallyHidden>
                <span aria-hidden>×</span>
            </button>
            {error.message}
        </div>
    ) : null
}

function FullPageErrorFallback({error}) {
    return (
        <div>
            <p>ooops, algo errado não está certo</p>
            <pre>{error.message}</pre>
        </div>
    )
}

const Logout = ({onClick}) => (
    <button 
        onClick={onClick}
        css={{
            appearance: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            fontSize: '1.5em',
            cursor: 'pointer',
        }}>
        <svg 
            css={{
                display: 'inline-block',
                width: '1em',
                height: '1em',
                strokeWidth: '0',
                stroke: 'currentColor',
                fill: 'currentColor'
            }}
            viewBox="0 0 32 32">
            <path d="M24 20v-4h-10v-4h10v-4l6 6zM22 18v8h-10v6l-12-6v-26h22v10h-2v-8h-16l8 4v18h8v-6z"></path>
        </svg>
    </button>
)

const Logo = ({styles}) => (
    <svg viewBox="0 0 512 512" css={{maxWidth: '10em', borderRadius: '50%', backgroundColor: '#FFF', ...styles}}>
        <path style={{fill:'#F2D546'}} d="M310.396,211.995c18.106-15.409,29.595-38.357,29.595-64.001c0-46.384-37.6-83.994-83.994-83.994  c-46.384,0-83.994,37.61-83.994,83.994c0,25.644,11.489,48.592,29.595,63.991"/>
        <path style={{fill:'#77C69E'}} d="M491.552,453.397c-21.417,0-21.417-20.739-42.835-20.739c-21.418,0-21.417,20.739-42.835,20.739  c-21.415,0-21.415-20.739-42.828-20.739c-21.415,0-21.415,20.739-42.829,20.739c-21.414,0-21.414-20.739-42.828-20.739  c-21.414,0-21.414,20.739-42.827,20.739c-21.411,0-21.411-20.739-42.822-20.739c-21.414,0-21.414,20.739-42.827,20.739  s-21.414-20.739-42.828-20.739c-21.414,0-21.414,20.739-42.827,20.739c-21.412,0-21.412-20.739-42.825-20.739v-50.426  c21.412,0,21.412,20.739,42.825,20.739c21.414,0,21.414-20.739,42.827-20.739s21.414,20.739,42.828,20.739  c21.414,0,21.414-20.739,42.827-20.739c21.411,0,21.411,20.739,42.822,20.739c21.414,0,21.414-20.739,42.827-20.739  c21.414,0,21.414,20.739,42.828,20.739c21.415,0,21.415-20.739,42.829-20.739s21.415,20.739,42.828,20.739  c21.417,0,21.417-20.739,42.835-20.739c21.418,0,21.417,20.739,42.835,20.739"/>
        <path style={{fill:'#89E5B9'}} d="M491.552,503.818c-21.417,0-21.417-20.739-42.835-20.739c-21.418,0-21.417,20.739-42.835,20.739  c-21.415,0-21.415-20.739-42.828-20.739c-21.415,0-21.415,20.739-42.829,20.739c-21.414,0-21.414-20.739-42.828-20.739  c-21.414,0-21.414,20.739-42.827,20.739c-21.411,0-21.411-20.739-42.822-20.739c-21.414,0-21.414,20.739-42.827,20.739  s-21.414-20.739-42.828-20.739c-21.414,0-21.414,20.739-42.827,20.739c-21.412,0-21.412-20.739-42.825-20.739v-50.425  c21.412,0,21.412,20.739,42.825,20.739c21.414,0,21.414-20.739,42.827-20.739s21.414,20.739,42.828,20.739  c21.414,0,21.414-20.739,42.827-20.739c21.411,0,21.411,20.739,42.822,20.739c21.414,0,21.414-20.739,42.827-20.739  c21.414,0,21.414,20.739,42.828,20.739c21.415,0,21.415-20.739,42.829-20.739s21.415,20.739,42.828,20.739  c21.417,0,21.417-20.739,42.835-20.739c21.418,0,21.417,20.739,42.835,20.739"/>
        <path style={{fill:'#EF8D43'}} d="M346.624,380.81c0,2.444-0.022,4.877-0.055,7.299c-0.12,6.644-0.404,13.233-0.818,19.79  c-0.775,11.739-2.029,23.336-3.775,34.78c-5.455,5.302-10.812,10.713-21.754,10.713c-21.405,0-21.405-20.739-42.821-20.739  c-21.416,0-21.416,20.739-42.831,20.739c-21.405,0-21.405-20.739-42.821-20.739c-10.855,0-16.212,5.324-21.645,10.593  c-1.495-9.775-2.651-19.681-3.437-29.685c-0.436-5.531-0.764-11.095-0.982-16.681c-0.196-5.117-0.295-10.255-0.305-15.426v-0.644  c0-37.933,5.149-74.666,14.783-109.533c3.131-11.346,6.742-22.485,10.801-33.416c15.503-41.73,37.606-80.274,65.033-114.345  c18.797,23.336,35.086,48.777,48.472,75.91c2.793,5.651,5.455,11.379,7.986,17.183c1.451,3.327,2.869,6.677,4.233,10.048  c13.55,33.406,22.834,69.015,27.154,106.13c0.873,7.506,1.549,15.066,2.007,22.692c0,0.011,0,0.011,0,0.011  C346.362,363.867,346.624,372.311,346.624,380.81z"/>
        <path style={{fill:'#F7AD7C'}} d="M345.849,355.477c0,0.011,0,0.011,0,0.011s-75.779-32.195-179.181,58.072  c-0.436-5.531-0.764-11.095-0.982-16.681c-0.196-5.117-0.295-10.255-0.305-15.426v-0.644c0-37.933,5.149-74.666,14.783-109.533  c0,0,64.836,5.237,136.524-44.621c13.55,33.405,22.834,69.015,27.154,106.13C344.714,340.291,345.391,347.852,345.849,355.477z"/>
        <path d="M116.186,156.179h24.537c4.519,0,8.182-3.663,8.182-8.182s-3.663-8.182-8.182-8.182h-24.537  c-4.519,0-8.182,3.663-8.182,8.182S111.667,156.179,116.186,156.179z"/>
        <path d="M371.276,156.179h24.538c4.52,0,8.182-3.663,8.182-8.182s-3.662-8.182-8.182-8.182h-24.538c-4.52,0-8.182,3.663-8.182,8.182  S366.757,156.179,371.276,156.179z"/>
        <path d="M168.701,72.269c1.597,1.598,3.692,2.397,5.785,2.397s4.188-0.799,5.785-2.397c3.195-3.195,3.195-8.375,0-11.571  l-17.351-17.351c-3.195-3.195-8.376-3.195-11.571,0c-3.195,3.195-3.195,8.375,0,11.571L168.701,72.269z"/>
        <path d="M369.375,255.044c2.282,0,4.553-0.949,6.171-2.805c2.97-3.406,2.615-8.575-0.791-11.545l-19.898-17.351  c-3.404-2.969-8.574-2.617-11.545,0.79c-2.97,3.406-2.615,8.575,0.791,11.545l19.898,17.351  C365.551,254.38,367.467,255.044,369.375,255.044z"/>
        <path d="M168.686,224.133c-2.971-3.407-8.139-3.758-11.545-0.79l-19.897,17.351c-3.406,2.971-3.759,8.139-0.79,11.545  c1.618,1.856,3.888,2.805,6.171,2.805c1.908,0,3.824-0.663,5.374-2.015l19.897-17.351  C171.304,232.707,171.656,227.539,168.686,224.133z"/>
        <path d="M337.513,74.666c2.094,0,4.188-0.799,5.785-2.397l17.352-17.351c3.195-3.195,3.195-8.376,0-11.572  c-3.195-3.194-8.376-3.195-11.571,0l-17.352,17.351c-3.195,3.195-3.195,8.376,0,11.572  C333.325,73.867,335.418,74.666,337.513,74.666z"/>
        <path d="M256,40.902c4.519,0,8.182-3.663,8.182-8.182V8.182C264.182,3.663,260.52,0,256,0s-8.182,3.663-8.182,8.182v24.537  C247.818,37.239,251.481,40.902,256,40.902z"/>
        <path d="M372.315,375.227c-4.358-1.182-8.855,1.393-10.038,5.756c-1.183,4.362,1.393,8.855,5.755,10.038  c4.237,1.15,7.112,3.934,10.752,7.459c5.83,5.647,13.086,12.675,27.106,12.675c14.02,0,21.276-7.028,27.106-12.675  c5.014-4.856,8.327-8.064,15.72-8.064c7.401,0,10.715,3.21,15.733,8.068c5.831,5.646,13.087,12.672,27.105,12.672  c4.52,0,8.182-3.663,8.182-8.182s-3.662-8.182-8.182-8.182c-7.392,0-10.706-3.207-15.721-8.063  c-5.832-5.647-13.091-12.676-27.116-12.676c-14.019,0-21.275,7.027-27.105,12.674c-5.015,4.857-8.327,8.066-15.721,8.066  c-7.394,0-10.707-3.209-15.721-8.066C385.915,382.607,380.624,377.481,372.315,375.227z"/>
        <path d="M176.031,448.9c5.014-4.856,8.326-8.064,15.721-8.064c7.392,0,10.706,3.209,15.719,8.064  c5.83,5.647,13.085,12.675,27.104,12.675c14.02,0,21.275-7.027,27.105-12.674c5.015-4.857,8.328-8.066,15.722-8.066  c7.394,0,10.706,3.209,15.721,8.064c5.83,5.647,13.086,12.675,27.106,12.675c14.021,0,21.277-7.027,27.108-12.674  c5.015-4.857,8.327-8.066,15.722-8.066c7.394,0,10.706,3.209,15.721,8.064c5.831,5.647,13.087,12.675,27.107,12.675  c14.021,0,21.277-7.027,27.108-12.674c5.016-4.857,8.33-8.066,15.726-8.066c7.396,0,10.709,3.209,15.724,8.066  c5.832,5.647,13.088,12.674,27.111,12.674c4.52,0,8.182-3.663,8.182-8.182s-3.662-8.182-8.182-8.182  c-7.397,0-10.71-3.209-15.726-8.066c-5.831-5.646-13.087-12.674-27.108-12.674c-14.022,0-21.278,7.027-27.111,12.674  c-5.015,4.857-8.328,8.066-15.724,8.066c-7.395,0-10.707-3.209-15.722-8.066c-5.831-5.647-13.086-12.674-27.106-12.674  s-21.276,7.027-27.107,12.674c-5.015,4.857-8.328,8.066-15.723,8.066c-7.393,0-10.706-3.209-15.721-8.064  c-5.83-5.647-13.086-12.675-27.106-12.675c-14.02,0-21.276,7.027-27.106,12.675c-5.014,4.856-8.327,8.064-15.721,8.064  c-7.392,0-10.705-3.207-15.718-8.064c-5.83-5.647-13.086-12.675-27.104-12.675c-6.38,0-11.349,1.463-15.431,3.581  c-1.225-10.461-2.055-21.004-2.457-31.493c-0.192-4.979-0.295-10.067-0.305-15.104v-0.643c0-3.173,0.038-6.396,0.112-9.581  c0.105-4.518-3.473-8.265-7.989-8.371c-4.52-0.128-8.265,3.473-8.371,7.989c-0.077,3.311-0.116,6.663-0.116,9.962v0.66  c0.008,3.755,0.082,7.516,0.187,11.253c-2.257,1.281-4.854,2.064-8.46,2.064c-7.393,0-10.706-3.209-15.721-8.064  c-5.83-5.647-13.086-12.675-27.106-12.675c-14.019,0-21.275,7.027-27.105,12.675c-5.014,4.856-8.326,8.064-15.721,8.064  s-10.707-3.209-15.721-8.066c-5.83-5.647-13.086-12.674-27.105-12.674c-4.519,0-8.182,3.663-8.182,8.182s3.663,8.182,8.182,8.182  c7.394,0,10.706,3.209,15.721,8.064c5.83,5.647,13.086,12.675,27.106,12.675c14.019,0,21.275-7.027,27.105-12.675  c5.014-4.856,8.326-8.064,15.721-8.064c7.395,0,10.707,3.209,15.721,8.066c5.83,5.647,13.086,12.674,27.105,12.674  c3.507,0,6.582-0.461,9.283-1.197c0.698,10.12,1.767,20.239,3.191,30.247c-3.497,3.096-6.772,5.006-12.47,5.006  c-7.395,0-10.707-3.209-15.722-8.066c-5.83-5.647-13.087-12.674-27.106-12.674s-21.275,7.027-27.106,12.675  c-5.014,4.856-8.327,8.064-15.721,8.064s-10.706-3.209-15.72-8.064c-5.83-5.647-13.086-12.675-27.105-12.675  c-4.519,0-8.182,3.663-8.182,8.182s3.663,8.182,8.182,8.182c7.394,0,10.706,3.209,15.72,8.064  c5.83,5.647,13.086,12.675,27.105,12.675c14.02,0,21.275-7.027,27.106-12.675c5.014-4.856,8.327-8.064,15.721-8.064  c7.395,0,10.707,3.209,15.722,8.066c5.83,5.647,13.087,12.674,27.106,12.674C162.946,461.574,170.201,454.547,176.031,448.9z"/>
        <path d="M106.097,474.896c-14.02,0-21.275,7.027-27.106,12.674c-5.014,4.857-8.327,8.066-15.721,8.066s-10.706-3.209-15.72-8.064  c-5.83-5.647-13.086-12.675-27.105-12.675c-4.519,0-8.182,3.663-8.182,8.182s3.663,8.182,8.182,8.182  c7.394,0,10.706,3.209,15.72,8.064C41.995,504.972,49.251,512,63.27,512c14.02,0,21.275-7.027,27.106-12.674  c5.014-4.857,8.327-8.066,15.721-8.066c4.519,0,8.182-3.663,8.182-8.182S110.616,474.896,106.097,474.896z"/>
        <path d="M491.555,495.635c-7.397,0-10.71-3.209-15.726-8.066c-5.831-5.646-13.087-12.674-27.108-12.674  c-14.022,0-21.278,7.027-27.111,12.674c-5.015,4.857-8.328,8.066-15.724,8.066c-7.395,0-10.707-3.209-15.722-8.066  c-5.831-5.647-13.086-12.674-27.106-12.674s-21.276,7.027-27.107,12.674c-5.015,4.857-8.328,8.066-15.723,8.066  c-7.393,0-10.706-3.209-15.721-8.066c-5.83-5.647-13.086-12.674-27.106-12.674c-14.02,0-21.276,7.027-27.106,12.675  c-5.014,4.856-8.327,8.064-15.721,8.064c-7.392,0-10.705-3.209-15.718-8.064c-5.83-5.647-13.085-12.675-27.104-12.675  c-14.019,0-21.275,7.027-27.105,12.674c-5.014,4.857-8.327,8.066-15.721,8.066c-3.366,0-6.1-0.677-8.603-2.133  c-3.906-2.27-8.914-0.945-11.185,2.963c-2.271,3.908-0.944,8.915,2.963,11.186c5.035,2.926,10.539,4.349,16.825,4.349  c14.02,0,21.275-7.027,27.106-12.675c5.014-4.856,8.327-8.064,15.721-8.064c7.392,0,10.706,3.209,15.719,8.064  C213.3,504.972,220.555,512,234.574,512c14.02,0,21.275-7.027,27.105-12.674c5.015-4.857,8.328-8.066,15.722-8.066  s10.706,3.209,15.721,8.066c5.83,5.647,13.086,12.674,27.106,12.674c14.021,0,21.277-7.027,27.108-12.674  c5.015-4.857,8.327-8.066,15.722-8.066c7.394,0,10.706,3.209,15.721,8.064c5.831,5.647,13.086,12.675,27.107,12.675  c14.021,0,21.277-7.027,27.108-12.674c5.016-4.857,8.33-8.066,15.726-8.066c7.396,0,10.709,3.209,15.724,8.066  c5.832,5.647,13.088,12.674,27.111,12.674c4.52,0,8.182-3.663,8.182-8.182S496.075,495.635,491.555,495.635z"/>
        <path d="M264.179,172.249c0-4.519-3.663-8.182-8.182-8.182c-4.519,0-8.182,3.663-8.182,8.182v138.953  c0,4.519,3.663,8.182,8.182,8.182c4.519,0,8.182-3.663,8.182-8.182V172.249z"/>
        <path d="M255.997,339.853c-4.519,0-8.182,3.663-8.182,8.182v63.254c0,4.519,3.663,8.182,8.182,8.182  c4.519,0,8.182-3.663,8.182-8.182v-63.254C264.179,343.516,260.516,339.853,255.997,339.853z"/>
        <path d="M191.721,214.044c-17.814,40.986-28.985,84.745-32.927,129.921c-0.393,4.501,2.938,8.47,7.44,8.863  c4.513,0.396,8.47-2.939,8.863-7.44c6.635-76.06,34.553-147.965,80.899-208.619c19.608,25.671,36.057,53.585,48.965,83.118  c22.217,50.842,33.482,104.985,33.482,160.926c0,2.39-0.021,4.78-0.061,7.16c-0.109,6.329-0.38,12.854-0.803,19.396  c-0.292,4.509,3.126,8.403,7.636,8.695c0.18,0.012,0.359,0.017,0.537,0.017c4.278,0,7.877-3.324,8.158-7.653  c0.441-6.799,0.722-13.587,0.836-20.174c0.043-2.473,0.063-4.956,0.063-7.44c0-57.945-11.623-114.042-34.541-166.756  c17.801-17.32,27.905-41.062,27.905-66.063c0-50.826-41.35-92.176-92.176-92.176s-92.176,41.35-92.176,92.176  C163.821,172.996,173.922,196.732,191.721,214.044z M255.997,72.183c41.803,0,75.812,34.009,75.812,75.812  c0,18.579-6.802,36.303-18.914,50.064c-13.765-28.319-30.708-55.065-50.524-79.677c-1.554-1.929-3.897-3.05-6.375-3.05  c-2.477,0-4.82,1.123-6.373,3.051c-19.952,24.785-36.854,51.496-50.54,79.653c-12.102-13.751-18.897-31.465-18.897-50.04  C180.185,106.192,214.194,72.183,255.997,72.183z"/>
    </svg>
)

const ArrowRight = () => (
    <svg viewBox="0 0 32 32" css={{
        display: 'inline-block',
        width: '1em',
        height: '1em',
        strokeWidth: '0',
        stroke: 'currentColor',
        fill: 'currentColor',
    }}>
        <path d="M19.414 27.414l10-10c0.781-0.781 0.781-2.047 0-2.828l-10-10c-0.781-0.781-2.047-0.781-2.828 0s-0.781 2.047 0 2.828l6.586 6.586h-19.172c-1.105 0-2 0.895-2 2s0.895 2 2 2h19.172l-6.586 6.586c-0.39 0.39-0.586 0.902-0.586 1.414s0.195 1.024 0.586 1.414c0.781 0.781 2.047 0.781 2.828 0z"></path>
    </svg>
)
const AppTitle = () => (
    <h1
        css={{
            fontSize: '1em',
            textTransform: 'uppercase',
            margin: '.5em auto 1em',
        }}
    >
        finding waves
    </h1>
)

const InfoMessage = ({children}) => (
    <div css={{
        display: 'flex',
        alignItems: 'center',
    }}>
        <svg viewBox="0 0 32 32" css={{
            display: 'inline-block',
            width: '1.5em',
            height: '1.5em',
            strokeWidth: '0',
            stroke: '#ef8d42',
            fill: '#ef8d42',
            marginRight: '.5em'
        }}>
            <path d="M16 3c-3.472 0-6.737 1.352-9.192 3.808s-3.808 5.72-3.808 9.192c0 3.472 1.352 6.737 3.808 9.192s5.72 3.808 9.192 3.808c3.472 0 6.737-1.352 9.192-3.808s3.808-5.72 3.808-9.192c0-3.472-1.352-6.737-3.808-9.192s-5.72-3.808-9.192-3.808zM16 0v0c8.837 0 16 7.163 16 16s-7.163 16-16 16c-8.837 0-16-7.163-16-16s7.163-16 16-16zM14 22h4v4h-4zM14 6h4v12h-4z"></path>
        </svg>
        {children}
    </div>
)

const PrimaryButton = ({children, isLoading, onClick, align}) => (
    <button
        onClick={onClick}
        disabled={isLoading}
        css={{
            appearance: 'none',
            border: 'none',
            color: '#fff',
            backgroundColor: '#019151', //'#5D67A3',
            fontSize: '.8em',
            textTransform: 'uppercase',
            // borderRadius: '5px',
            padding: '.75em',
            // margin: '1em',
            cursor: 'pointer',
            fontWeight: '600',
            width: align ? 'auto' : '100%',
            transition: 'background .2s linear',
            alignSelf: 'flex-end',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            ':disabled': {
                cursor: 'wait',
                backgroundColor: '#e0e1e8',
            },
            ':hover': {
                opacity: '.75',
            }, 
            ' svg': {
                marginLeft: '1em',
            }
            }}>
        {children}
    </button>
)

// how to organize buttons by appearance? with one component and multiple appearances
const SubtleButton = ({children, onClick}) => (
    <button
        onClick={onClick}
        css={{
            appearance: 'none',
            border: 'none',
            backgroundColor: 'transparent',
            color: '#019151',
            // fontSize: '1em',
            // margin: '1em',
            cursor: 'pointer',
            textDecoration: 'none',
            ':hover': {
                textDecoration: 'underline',
            }
            }}>
        {children}
    </button>
)

const Section = ({children}) => (
    <section css={{
        'h4': {
            textTransform: "uppercase",
        }
    }}>
        {children}
    </section>
)

const Star = ({stars}) => Array.from({length: 5}).map((item, index) => 
        <i key={`star--${index}`} className={`start star--${index}`} css={{
            'svg': {
                display: 'inline-block',
                width: '1em',
                height: '1em',
                strokeWidth: '0',
                stroke: 'currentColor',
                fill: index < stars ? '#F2E205' : '#F2F2F2',
            }
        }}>
            <svg viewBox="0 0 26 28">
                <path d="M26 10.109c0 0.281-0.203 0.547-0.406 0.75l-5.672 5.531 1.344 7.812c0.016 0.109 0.016 0.203 0.016 0.313 0 0.406-0.187 0.781-0.641 0.781-0.219 0-0.438-0.078-0.625-0.187l-7.016-3.687-7.016 3.687c-0.203 0.109-0.406 0.187-0.625 0.187-0.453 0-0.656-0.375-0.656-0.781 0-0.109 0.016-0.203 0.031-0.313l1.344-7.812-5.688-5.531c-0.187-0.203-0.391-0.469-0.391-0.75 0-0.469 0.484-0.656 0.875-0.719l7.844-1.141 3.516-7.109c0.141-0.297 0.406-0.641 0.766-0.641s0.625 0.344 0.766 0.641l3.516 7.109 7.844 1.141c0.375 0.063 0.875 0.25 0.875 0.719z"></path>
            </svg>
        </i>
    )

const Arrow = ({deg}) => (
    <i css={{
        '&': {
            transform: 'rotate(-45deg)',
            display: 'inline-block',
        },

        'svg': {
            display: 'inline-block',
            width: '1em',
            height: '1em',
            strokeWidth: '0',
            stroke: 'currentColor',
            transform: `rotate(${deg}deg)`,
        }
        }}>
        <svg viewBox="0 0 22 28" title={`${deg} degrees`}>
            <path d="M21.891 5.453l-10 20c-0.172 0.344-0.516 0.547-0.891 0.547-0.078 0-0.156-0.016-0.234-0.031-0.453-0.109-0.766-0.5-0.766-0.969v-9h-9c-0.469 0-0.859-0.313-0.969-0.766s0.109-0.922 0.516-1.125l20-10c0.141-0.078 0.297-0.109 0.453-0.109 0.266 0 0.516 0.094 0.703 0.297 0.313 0.297 0.391 0.766 0.187 1.156z"></path>
        </svg>
    </i>);

const Table = ({children}) => (
    <table css={{
        '&': {
            borderCollapse: 'collapse',
            width: '100%',
        },
        'thead': {
            textTransform: 'uppercase',
        },
        'th': {
            fontWeight: '500',
            color: '#019151',
            padding: '.25em',
            borderBottom: '2px solid #019151',
            textAlign: 'left',
        },
        'tr': {
            padding: '1em',
        },
        'td': {
            padding: '.5em',
            color: '#626066',
        }
    }}>
        {children}
    </table>);

export {
    Arrow,
    AppTitle,
    ArrowRight,
    ColoredWrapper,
    Cover,
    FormField,
    Dialog,
    ErrorMessage,
    FullPageErrorFallback,
    InfoMessage,
    Link,
    Logo,
    Logout,
    PrimaryButton,
    SubtleButton,
    SelectField,
    Section,
    Star,
    Table,
    Wrapper,
    Footer,
}