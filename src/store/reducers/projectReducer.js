const initState = {
    projects: [
        {id:'1', title:'AL & ED\'s Autosound', content:'AL & ED\'s Autosound: Car Audio Systems including Car Speakers, Subwoofers, Amps, HD Radio, Satellite Radio, GPS Navigation Systems, Car Alarm.'},
        {id:'2', title:'Car Audio Closeout', content:'The lowest prices on car audio and video products online including car subwoofers, car amplifiers, car speakers and electronics in USA. We specialize in: Alpine, AudioControl, Code Alarm, Hello Kitty, JBL, Jensen, JVC, Kenwood, PAC, Pioneer, Rockford Fosgate, Sony, Soundstream and many more.'},
        {id:'3', title:'Diamond Audio', content:'Diamond audio, diamond audio speakers, diamond audio subwoofers, diamond audio woofers, diamond rpm, diamond audio marine, diamond audio technologies'}
    ]
}

const projectReducer = (state=initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('Created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('Latthi khawar age create project error thik kor', action.err)
            return state;
        default:
            return state;
    }
}

export default projectReducer;