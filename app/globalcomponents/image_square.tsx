
import Image from 'next/image';
import MyPic from "../../public/images/my_pic_4.jpg";

export default function MyImage() {
  return (
    <div className="justify-center items-center mt-10 md:mt-0">
      <div className="relative w-60 h-60 md:w-80 md:h-80 group">
        {/* Stylish border */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 to-gray-900 rounded-sm transform rotate-6 scale-105 group-hover:scale-110 transition duration-300"></div>
        
        {/* Image with shadow and effect */}
        <div className="relative w-full h-full bg-white rounded-sm overflow-hidden shadow-lg">
          <Image
            src={MyPic} // Replace with the actual image path
            alt="Stylish Squarish Image"
            layout="fill"
            objectFit="cover"
            className="transform group-hover:scale-105 transition duration-300"
          />
        </div>
      </div>
    </div>
  );
}
