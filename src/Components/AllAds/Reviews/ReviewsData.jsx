import React from 'react'
import Payne from '../../../images/Payne.png';
import Reviews from './Reviews';


const data=[
    {
        id:"1",

        img:{Payne},

        name:'Samantha Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',

        data:"23 Nov 2023"
    },
    {
        id:"2",

        img:{Payne},

        name:'Hello Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
        
        data:"23 Nov 2023"
    },{
        id:"3",

        img:{Payne},

        name:'Samantha Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
        
        data:"23 Nov 2023"
    },{
        id:"4",

        img:{Payne},

        name:'Samantha Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
        
        data:"23 Nov 2023"
    },{
        id:"5",

        img:{Payne},

        name:'John Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
        
        data:"23 Nov 2023"
    },{
        id:"6",

        img:Payne,

        name:'Samantha Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
        
        data:"23 Nov 2023"
    },{
        id:"7",

        img:{Payne},

        name:'Samantha Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
        
        data:"23 Nov 2023"
    },{
        id:"8",

        img:{Payne},

        name:'Samantha Payne',

        lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis, lectus magna fringilla urna, porttitor rhoncus dolor purus non enim praesent elementum facilisis leo, vel',
        
        data:"23 Nov 2023"
    }
]
function ReviewsData() {
    
  return (
    <>
    <Reviews data={data} />
    </>
  )
}

export default ReviewsData