import { useState } from "react"
import AboutText from "./AboutText"
import WorkText from "./WorkText"

const HomePages = () => {
    const [pops, setPop] = useState('about')
    const infor = [
        {
            id: 1,
            title: "Email",
            dipcription: "vuquangnynh@gmail.com"
        },
        {
            id: 2,
            title: "Birthday",
            dipcription: "01/01/2001"
        },
        {
            id: 3,
            title: "Phone",
            dipcription: "0845955004"
        },
        {
            id: 4,
            title: "Place of origin",
            dipcription: "Nam Định"
        },

    ]
    const handleClickAbout = () => {
        setPop('about')
    }
    const handleClickEx = () => {
        setPop('ex')
    }
    return (
        <div className="homepages-contenter mt-4">
            <div className="profile px-5 py-3">
                <div className='profile-left'>
                    <img className='imgProfile' src='Nynh.jpg' />
                    <div className='p-2'>
                        <h2>Vũ Quang Ninh</h2>
                        <p>Front-end Developer</p>
                    </div>
                </div >
                <div className='profile-right '>
                    {
                        infor.map((item) => (
                            <div key={item.id}>
                                <p className='mb-0'>{item.title}</p>
                                <h3 className='mt-0'>{item.dipcription}</h3>

                            </div>
                        ))
                    }

                </div>
            </div>
            <div className='about mt-4 px-5 py-3'>
                <div className="d-flex">
                    <div><button onClick={handleClickAbout} className={` mr-3 btn btn-info active  ${pops == 'about' ? 'bg-warning' :''}`}>About</button></div>
                    <div className="ms-3"><button onClick={handleClickEx} className={` mr-3 btn btn-info active  ${pops == 'ex' ? 'bg-warning' :''}`}>EXPERIENCE</button></div>
                </div>
                <div>
                    {pops == 'about' ?<AboutText /> :<WorkText /> }
                </div>
            </div>

        </div>
    )
}
export default HomePages
