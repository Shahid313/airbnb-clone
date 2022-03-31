import Image from 'next/image'

function SmallCard({name, image, distance}){
    const ImagePath = "/"
    return(
        <div className='flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover:scale-105 transition transform duration-200'>
            <div className='relative h-16 w-16'>
            <Image src={ImagePath+image} layout='fill' className='rounded-lg'/>
            </div>
            <div>
                <p>{name}</p>
                <p className='text-gray-500'>{distance}</p>
            </div>
        </div>
    )
}

export default SmallCard