import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { fetchWorks } from "@/lib/fetch-work"

export async function WorkCarousel() {
  const works = await fetchWorks()

  return (
    <div className="relative left-1/2 w-screen max-w-[100vw] -translate-x-1/2">
        <Carousel
        opts={{
            align: "start",
        }}
        >
        <CarouselContent>
            {works.map((work) => (
            <CarouselItem key={work.id} className="basis-1/2 lg:basis-1/3">
                <div className="p-4">
                    <Card>
                        <CardContent className="items-center justify-center p-6 w-200">
                            <span className="text-xl font-semibold">{work.name}</span>
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
