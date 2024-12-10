import Image from "next/image";


export const Hero = () => {
  return (
    <div className="max-w-6xl mx-auto relative bg-blue-100 overflow-hidden rounded-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              <span className="text-red-500 md:text-5xl lg:text-6xl">Windsor</span> Idiomas
            </h1>
          </div>

          {/* Right Column - Image and Floating Elements */}
          <div className="relative">
            {/* Background Blob */}
            <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-blue-200 rounded-full -translate-y-1/4 translate-x-1/4 hidden lg:block" />

            {/* Main Image */}
            <div className="relative">
              <Image
                src="/assets/carousel3.jpg"
                alt="Student learning"
                width={500}
                height={600}
                className="relative z-10 ml-auto rounded-lg h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};