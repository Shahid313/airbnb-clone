import Image from 'next/image'

function MediumCard({title, img}){
    return(
        <div className='cursor-pointer transition transform duration-300 ease-out hover:scale-105 '>
            <div className='relative h-80 w-80'>
                <Image className='rounded-xl' src={img} layout='fill'/>
            </div>
            <h3 className='text-2xl mt-3'>{title}</h3>
        </div>
    )
}

export default MediumCard