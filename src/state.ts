const state = {
    top: 0,
    pages:0,
    threshole: 4,
    mouse: [0,0],
    content: [
        {
            tag: "00",
            text: `The Bacchic\nand Dionysiac\nRites`,
            images: ['/, 140  _ Hot Walls _        _ Modern.jpg', '/Alonso & Crippa renovates compact urban dwelling in Buenos Aires.jpg', '/Benjamin Hale.jpg']
        },
        {
            tag: "01",
            text: `The Elysian\nMysteries`,
            images: ['/, 140  _ Hot Walls _        _ Modern.jpg', '/Alonso & Crippa renovates compact urban dwelling in Buenos Aires.jpg', '/John Hale.jpg']
        },
        {
            tag: '02',
            text:  `The Hiramic\nLegend`,
            images: ['/, 140  _ Hot Walls _        _ Modern.jpg', '/Alonso & Crippa renovates compact urban dwelling in Buenos Aires.jpg', '/John Hale.jpg']
        }
    ],
    depthbox: [
        {
            depth: 0,
            color: '#cccccc',
            textColor: '#ffffff',
            text: 'In a void,\nno one could say\nwhy a thing\nonce set in motion\nshould stop anywhere.',
            image: '/VIWO.jpg',
        },
        {
            depth: -5,
            textColor: '#272727',
            text: 'For why should it stop\nhere rather than here?\nSo that a thing\nwill either be at rest\nor must be moved\nad infinitum.',
            image: '/download (3).jpg',
        },
    ],
    lines: [
        { points: [[-20, 0, 0], [-9, 0, 0]], color: "black", lineWidth: 0.5 },
        { points: [[20, 0, 0], [9, 0, 0]], color: "black", lineWidth: 0.5 },
      ]
}

export default state