import videoHomePages from '../../acesst/video-homepages.mp4'

const HomePages = () => {
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
                <div className='profile-right'>
                    <div>
                        <p className='mb-0'>EMAIL</p>
                        <h3 className='mt-0'>vuquangnynh@gmail.com</h3>
                        <p className='mb-0'> PHONE</p>
                        <h4 className='m-0'>0845955004</h4>
                    </div>
                    <div>
                        <p className='mb-0'>BIRTHDAY</p>
                        <h3 className='mt-0'>1 January, 2001</h3>
                        <p className='mb-0'> PLACE </p>
                        <h4 className='m-0'>Nam Định</h4>

                    </div>
                </div>
            </div>
        </div>
    )
}
export default HomePages
