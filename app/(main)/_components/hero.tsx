import { ImageCarousel } from "@/components/image-carousel";

export const Hero = () => {
  const images = [
    {
      src: "/assets/carousel-1.jpg",
      alt: "Slide 1",
    },
    {
      src: "/assets/carousel-2.jpg",
      alt: "Slide 2",
    },
    {
      src: "/assets/carousel-3.jpg",
      alt: "Slide 3",
    },
  ]

  return (
    <div className="max-w-6xl mx-auto relative bg-softBlue overflow-hidden rounded-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Left Column - Text Content */}
          <div className="max-w-xl">
            <h1 className="text-4xl font-bold tracking-tight mb-6">
              <span className="text-red-500 md:text-5xl lg:text-6xl">Windsor</span> Idiomas
            </h1>
          </div>

          {/* Right Column - Image and Floating Elements */}
          <div className="">
            {/* Background Blob */}
            <div className="absolute right-0 top-0 w-[600px] h-[600px] bg-darkBlue rounded-full -translate-y-1/4 translate-x-1/4 hidden lg:block" />

            {/* Main Image */}
            <div className="relative z-10">
              <ImageCarousel images={images} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};