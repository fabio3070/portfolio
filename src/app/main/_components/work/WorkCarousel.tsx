import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { fetchWorks } from "@/lib/fetch-work"
import Image from "next/image"

export async function WorkCarousel() {
  const works = await fetchWorks()

  return (
    <div className="w-full overflow-x-clip">
        <Carousel
        opts={{
            align: "start",
        }}
        >
        <CarouselContent>
            {works.map((work) => (
                <CarouselItem key={work.id} className="basis-2/2 lg:basis-1/3">
                    <div className="p-2">
                        <Card>
                            <CardContent className="text-center p-2">
                                <span className="text-base font-semibold">{work.name}</span>
                                <p className="text-2xl mt-2">{work.title}</p>
                                <p className="text-base text-neutral-500 mt-1">{work.description}</p>
                                <Image 
                                    className="mt-2" 
                                    src={work.image} 
                                    alt={work.name} 
                                    width={150} 
                                    height={150}
                                />
                            </CardContent>
                        </Card>
                        <p className="text-neutral-500 mt-1">{work.name}</p>
                    </div>
                </CarouselItem>
            ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
        </Carousel>
    </div>
  )
}
