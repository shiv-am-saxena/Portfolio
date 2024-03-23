const Shivam = (color) => {
  console.log({color})
    const width = screen.width;
  return (
    <svg width={(width > 750)? '334' : '210'} height="27" viewBox="0 0 334 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.8496 19.793C29.8496 20.8008 29.6621 21.7441 29.2871 22.623C28.9121 23.4902 28.3965 24.252 27.7402 24.9082C27.0957 25.5527 26.334 26.0625 25.4551 26.4375C24.5879 26.8125 23.6562 27 22.6602 27H0.757812V23.3965H22.6602C23.1641 23.3965 23.6328 23.3027 24.0664 23.1152C24.5 22.9277 24.875 22.6699 25.1914 22.3418C25.5195 22.0137 25.7773 21.6328 25.9648 21.1992C26.1523 20.7539 26.2461 20.2852 26.2461 19.793C26.2461 19.3008 26.1523 18.8379 25.9648 18.4043C25.7773 17.9707 25.5195 17.5898 25.1914 17.2617C24.875 16.9336 24.5 16.6758 24.0664 16.4883C23.6328 16.3008 23.1641 16.207 22.6602 16.207H7.96484C6.98047 16.207 6.04883 16.0195 5.16992 15.6445C4.29102 15.2695 3.52344 14.7598 2.86719 14.1152C2.22266 13.459 1.70703 12.6914 1.32031 11.8125C0.945312 10.9336 0.757812 9.99609 0.757812 9C0.757812 8.01562 0.945312 7.08398 1.32031 6.20508C1.70703 5.32617 2.22266 4.56445 2.86719 3.91992C3.52344 3.26367 4.29102 2.74805 5.16992 2.37305C6.04883 1.98633 6.98047 1.79297 7.96484 1.79297H28.0566V5.39648H7.96484C7.47266 5.39648 7.00391 5.49023 6.55859 5.67773C6.125 5.86523 5.74414 6.12305 5.41602 6.45117C5.08789 6.7793 4.83008 7.16602 4.64258 7.61133C4.45508 8.04492 4.36133 8.50781 4.36133 9C4.36133 9.49219 4.45508 9.96094 4.64258 10.4062C4.83008 10.8398 5.08789 11.2207 5.41602 11.5488C5.74414 11.877 6.125 12.1348 6.55859 12.3223C7.00391 12.5098 7.47266 12.6035 7.96484 12.6035H22.6602C23.6562 12.6035 24.5879 12.7969 25.4551 13.1836C26.334 13.5586 27.0957 14.0742 27.7402 14.7305C28.3965 15.375 28.9121 16.1367 29.2871 17.0156C29.6621 17.8828 29.8496 18.8086 29.8496 19.793ZM56.9902 27H53.3867V17.1035C53.3867 16.2363 53.2227 15.4219 52.8945 14.6602C52.5664 13.8984 52.1211 13.2363 51.5586 12.6738C50.9961 12.0996 50.334 11.6484 49.5723 11.3203C48.8223 10.9805 48.0137 10.8047 47.1465 10.793H37.25V27H33.6465V0H37.25V7.20703H47.1465C48.5059 7.20703 49.7832 7.4707 50.9785 7.99805C52.1738 8.51367 53.2168 9.22266 54.1074 10.125C54.998 11.0156 55.7012 12.0645 56.2168 13.2715C56.7324 14.4668 56.9902 15.7441 56.9902 17.1035V27ZM66.3418 2.70703C66.3418 3.08203 66.2715 3.43359 66.1309 3.76172C65.9902 4.07812 65.7969 4.35938 65.5508 4.60547C65.3047 4.85156 65.0176 5.04492 64.6895 5.18555C64.3613 5.32617 64.0156 5.39648 63.6523 5.39648C63.2773 5.39648 62.9258 5.32617 62.5977 5.18555C62.2695 5.04492 61.9824 4.85156 61.7363 4.60547C61.4902 4.35938 61.2969 4.07812 61.1562 3.76172C61.0156 3.43359 60.9453 3.08203 60.9453 2.70703C60.9453 2.34375 61.0156 1.99805 61.1562 1.66992C61.2969 1.3418 61.4902 1.05469 61.7363 0.808594C61.9824 0.5625 62.2695 0.369141 62.5977 0.228516C62.9258 0.0761719 63.2773 0 63.6523 0C64.0156 0 64.3613 0.0761719 64.6895 0.228516C65.0176 0.369141 65.3047 0.5625 65.5508 0.808594C65.7969 1.05469 65.9902 1.3418 66.1309 1.66992C66.2715 1.99805 66.3418 2.34375 66.3418 2.70703ZM65.4453 27H61.8418V7.20703H65.4453V27ZM94.4668 7.20703L83.5332 27H79.4199L68.5566 7.20703H72.7578L81.4766 23.2559L90.2656 7.20703H94.4668ZM119.375 27H101.375C100.496 27 99.6758 26.8359 98.9141 26.5078C98.1523 26.1797 97.4844 25.7344 96.9102 25.1719C96.3359 24.5977 95.8848 23.9297 95.5566 23.168C95.2285 22.3945 95.0645 21.5742 95.0645 20.707C95.0645 19.8281 95.2285 19.0078 95.5566 18.2461C95.8848 17.4844 96.3359 16.8164 96.9102 16.2422C97.4844 15.668 98.1523 15.2168 98.9141 14.8887C99.6758 14.5605 100.496 14.3965 101.375 14.3965H113.961V18H101.375C101 18 100.648 18.0762 100.32 18.2285C99.9922 18.3691 99.7051 18.5625 99.459 18.8086C99.2129 19.0547 99.0195 19.3418 98.8789 19.6699C98.7383 19.998 98.668 20.3438 98.668 20.707C98.668 21.082 98.7383 21.4336 98.8789 21.7617C99.0195 22.0781 99.2129 22.3594 99.459 22.6055C99.7051 22.8516 99.9922 23.0449 100.32 23.1855C100.648 23.3262 101 23.3965 101.375 23.3965H115.771V13.5C115.771 13.1367 115.695 12.791 115.543 12.4629C115.402 12.1348 115.209 11.8477 114.963 11.6016C114.717 11.3555 114.43 11.1621 114.102 11.0215C113.773 10.8691 113.428 10.793 113.064 10.793H98.668V7.20703H113.064C113.943 7.20703 114.764 7.37109 115.525 7.69922C116.287 8.02734 116.955 8.47852 117.529 9.05273C118.104 9.61523 118.555 10.2773 118.883 11.0391C119.211 11.8008 119.375 12.6211 119.375 13.5V27ZM128.023 27H124.42V7.20703H143.404C144.764 7.20703 146.041 7.4707 147.236 7.99805C148.432 8.51367 149.469 9.22266 150.348 10.125C151.238 11.0156 151.941 12.0645 152.457 13.2715C152.973 14.4668 153.23 15.7441 153.23 17.1035V27H149.627V17.1035C149.627 16.2363 149.463 15.4219 149.135 14.6602C148.807 13.8984 148.361 13.2363 147.799 12.6738C147.236 12.0996 146.574 11.6484 145.812 11.3203C145.062 10.9805 144.26 10.8047 143.404 10.793H140.627V27H137.023V10.793H128.023V27ZM199.865 19.793C199.865 20.8008 199.678 21.7441 199.303 22.623C198.928 23.4902 198.412 24.252 197.756 24.9082C197.111 25.5527 196.35 26.0625 195.471 26.4375C194.604 26.8125 193.672 27 192.676 27H170.773V23.3965H192.676C193.18 23.3965 193.648 23.3027 194.082 23.1152C194.516 22.9277 194.891 22.6699 195.207 22.3418C195.535 22.0137 195.793 21.6328 195.98 21.1992C196.168 20.7539 196.262 20.2852 196.262 19.793C196.262 19.3008 196.168 18.8379 195.98 18.4043C195.793 17.9707 195.535 17.5898 195.207 17.2617C194.891 16.9336 194.516 16.6758 194.082 16.4883C193.648 16.3008 193.18 16.207 192.676 16.207H177.98C176.996 16.207 176.064 16.0195 175.186 15.6445C174.307 15.2695 173.539 14.7598 172.883 14.1152C172.238 13.459 171.723 12.6914 171.336 11.8125C170.961 10.9336 170.773 9.99609 170.773 9C170.773 8.01562 170.961 7.08398 171.336 6.20508C171.723 5.32617 172.238 4.56445 172.883 3.91992C173.539 3.26367 174.307 2.74805 175.186 2.37305C176.064 1.98633 176.996 1.79297 177.98 1.79297H198.072V5.39648H177.98C177.488 5.39648 177.02 5.49023 176.574 5.67773C176.141 5.86523 175.76 6.12305 175.432 6.45117C175.104 6.7793 174.846 7.16602 174.658 7.61133C174.471 8.04492 174.377 8.50781 174.377 9C174.377 9.49219 174.471 9.96094 174.658 10.4062C174.846 10.8398 175.104 11.2207 175.432 11.5488C175.76 11.877 176.141 12.1348 176.574 12.3223C177.02 12.5098 177.488 12.6035 177.98 12.6035H192.676C193.672 12.6035 194.604 12.7969 195.471 13.1836C196.35 13.5586 197.111 14.0742 197.756 14.7305C198.412 15.375 198.928 16.1367 199.303 17.0156C199.678 17.8828 199.865 18.8086 199.865 19.793ZM226.215 27H208.215C207.336 27 206.516 26.8359 205.754 26.5078C204.992 26.1797 204.324 25.7344 203.75 25.1719C203.176 24.5977 202.725 23.9297 202.396 23.168C202.068 22.3945 201.904 21.5742 201.904 20.707C201.904 19.8281 202.068 19.0078 202.396 18.2461C202.725 17.4844 203.176 16.8164 203.75 16.2422C204.324 15.668 204.992 15.2168 205.754 14.8887C206.516 14.5605 207.336 14.3965 208.215 14.3965H220.801V18H208.215C207.84 18 207.488 18.0762 207.16 18.2285C206.832 18.3691 206.545 18.5625 206.299 18.8086C206.053 19.0547 205.859 19.3418 205.719 19.6699C205.578 19.998 205.508 20.3438 205.508 20.707C205.508 21.082 205.578 21.4336 205.719 21.7617C205.859 22.0781 206.053 22.3594 206.299 22.6055C206.545 22.8516 206.832 23.0449 207.16 23.1855C207.488 23.3262 207.84 23.3965 208.215 23.3965H222.611V13.5C222.611 13.1367 222.535 12.791 222.383 12.4629C222.242 12.1348 222.049 11.8477 221.803 11.6016C221.557 11.3555 221.27 11.1621 220.941 11.0215C220.613 10.8691 220.268 10.793 219.904 10.793H205.508V7.20703H219.904C220.783 7.20703 221.604 7.37109 222.365 7.69922C223.127 8.02734 223.795 8.47852 224.369 9.05273C224.943 9.61523 225.395 10.2773 225.723 11.0391C226.051 11.8008 226.215 12.6211 226.215 13.5V27ZM254.48 27H249.348L241.631 19.5469L234.072 27H228.922L239.152 17.1387L228.922 7.20703H234.072L254.48 27ZM254.48 7.20703L245.92 15.5566L243.336 13.2539L249.348 7.20703H254.48ZM279.652 13.5C279.652 14.3789 279.488 15.1992 279.16 15.9609C278.832 16.7227 278.381 17.3906 277.807 17.9648C277.244 18.5273 276.576 18.9727 275.803 19.3008C275.041 19.6289 274.227 19.793 273.359 19.793H259.561C259.818 20.3203 260.141 20.8066 260.527 21.252C260.914 21.6973 261.348 22.0781 261.828 22.3945C262.309 22.7109 262.83 22.957 263.393 23.1328C263.967 23.3086 264.564 23.3965 265.186 23.3965H276.963V27H265.186C263.826 26.9883 262.549 26.7246 261.354 26.209C260.158 25.6816 259.115 24.9727 258.225 24.082C257.346 23.1797 256.648 22.1309 256.133 20.9355C255.617 19.7402 255.359 18.4629 255.359 17.1035C255.359 15.7441 255.617 14.4668 256.133 13.2715C256.648 12.0762 257.346 11.0332 258.225 10.1426C259.115 9.24023 260.158 8.53125 261.354 8.01562C262.549 7.48828 263.826 7.21875 265.186 7.20703H273.359C274.227 7.20703 275.041 7.37109 275.803 7.69922C276.576 8.02734 277.244 8.47852 277.807 9.05273C278.381 9.61523 278.832 10.2773 279.16 11.0391C279.488 11.8008 279.652 12.6211 279.652 13.5ZM273.359 16.207C273.723 16.207 274.068 16.1367 274.396 15.9961C274.725 15.8555 275.012 15.6621 275.258 15.416C275.504 15.1699 275.697 14.8828 275.838 14.5547C275.979 14.2266 276.049 13.875 276.049 13.5C276.049 13.1367 275.979 12.791 275.838 12.4629C275.697 12.1348 275.504 11.8477 275.258 11.6016C275.012 11.3555 274.725 11.1621 274.396 11.0215C274.068 10.8691 273.723 10.793 273.359 10.793H265.186C264.389 10.793 263.639 10.9336 262.936 11.2148C262.244 11.4961 261.623 11.8828 261.072 12.375C260.533 12.8555 260.082 13.4297 259.719 14.0977C259.367 14.7539 259.139 15.457 259.033 16.207H273.359ZM286.789 27H283.186V7.20703H296.686C298.045 7.20703 299.322 7.4707 300.518 7.99805C301.713 8.51367 302.756 9.22266 303.646 10.125C304.537 11.0156 305.24 12.0645 305.756 13.2715C306.271 14.4668 306.529 15.7441 306.529 17.1035V27H302.926V17.1035C302.926 16.2363 302.762 15.4219 302.434 14.6602C302.105 13.8984 301.66 13.2363 301.098 12.6738C300.535 12.0996 299.873 11.6484 299.111 11.3203C298.361 10.9805 297.553 10.8047 296.686 10.793H286.789V27ZM333.934 27H315.934C315.055 27 314.234 26.8359 313.473 26.5078C312.711 26.1797 312.043 25.7344 311.469 25.1719C310.895 24.5977 310.443 23.9297 310.115 23.168C309.787 22.3945 309.623 21.5742 309.623 20.707C309.623 19.8281 309.787 19.0078 310.115 18.2461C310.443 17.4844 310.895 16.8164 311.469 16.2422C312.043 15.668 312.711 15.2168 313.473 14.8887C314.234 14.5605 315.055 14.3965 315.934 14.3965H328.52V18H315.934C315.559 18 315.207 18.0762 314.879 18.2285C314.551 18.3691 314.264 18.5625 314.018 18.8086C313.771 19.0547 313.578 19.3418 313.438 19.6699C313.297 19.998 313.227 20.3438 313.227 20.707C313.227 21.082 313.297 21.4336 313.438 21.7617C313.578 22.0781 313.771 22.3594 314.018 22.6055C314.264 22.8516 314.551 23.0449 314.879 23.1855C315.207 23.3262 315.559 23.3965 315.934 23.3965H330.33V13.5C330.33 13.1367 330.254 12.791 330.102 12.4629C329.961 12.1348 329.768 11.8477 329.521 11.6016C329.275 11.3555 328.988 11.1621 328.66 11.0215C328.332 10.8691 327.986 10.793 327.623 10.793H313.227V7.20703H327.623C328.502 7.20703 329.322 7.37109 330.084 7.69922C330.846 8.02734 331.514 8.47852 332.088 9.05273C332.662 9.61523 333.113 10.2773 333.441 11.0391C333.77 11.8008 333.934 12.6211 333.934 13.5V27Z" fill={color.color} stroke={color.color} strokeWidth="1px" strokeDasharray='190' strokeDashoffset='190'/>
            </svg>
  )
}

export default Shivam