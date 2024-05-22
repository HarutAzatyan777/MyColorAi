import { Collection } from "@/components/Shared/Collections"
import { navLinks } from "@/constants"
import { getAllImages } from "@/lib/actions/image.actions"
import Image from "next/image"
import Link from "next/link"

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery})

  return (
    <>
     <section className="home">
        <h1 className="home-heading">
          Transform Your Creativity with MyColors
        </h1>
        <p className="home-description">
          Unleash the full potential of your creative projects with MyColors. Our innovative tools and resources empower you to bring your artistic vision to life. Whether you're a designer, artist, or enthusiast, MyColors provides everything you need to enhance your creativity and achieve professional-quality results. Join a community of creators who trust MyColors to elevate their work. Discover the difference with MyColors and take your creativity to the next level.
        </p>
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <li key={link.route} className="flex-center flex-col gap-2">
              <Link href={link.route} className="flex-center flex-col gap-2">
                <div className="flex-center w-fit rounded-full bg-white p-4">
                  <Image src={link.icon} alt={link.label} width={24} height={24} />
                </div>
                <p className="p-14-medium text-center text-white">{link.label}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="sm:mt-12">
        <Collection 
          hasSearch={true}
          images={images?.data}
          totalPages={images?.totalPage}
          page={page}
        />
      </section>
    </>
  )
}

export default Home