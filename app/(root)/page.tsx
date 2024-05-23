import { Collection } from "@/components/Shared/Collections";
import { navLinks } from "@/constants";
import { getAllImages } from "@/lib/actions/image.actions";
import Image from "next/image";
import Link from "next/link";
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Home - MyColors",
  description: "Transform Your Creative Projects with MyColors. Discover an extensive collection of images and advanced tools to enhance your creative vision, including Image Restore, Generative Fill, Object Remove, Object Recolor, and Background Remove.",
  keywords: "creative projects, images, MyColors, Image Restore, Generative Fill, Object Remove, Object Recolor, Background Remove",
  openGraph: {
    title: "Home - MyColors",
    description: "Transform Your Creative Projects with MyColors. Discover an extensive collection of images and advanced tools to enhance your creative vision.",
    url: "https://ai.mycolors.pro/",
    type: "website",
    images: [
      {
        url: "https://ai.mycolors.pro/og-image.jpg",
        width: 800,
        height: 600,
        alt: "MyColors Home",
      },
    ],
  },
};

const Home = async ({ searchParams }: SearchParamProps) => {
  const page = Number(searchParams?.page) || 1;
  const searchQuery = (searchParams?.query as string) || '';

  const images = await getAllImages({ page, searchQuery });

  return (
    <>
      <section className="home">
        <h1 className="home-heading">
          Transform Your Creative Projects with MyColors
        </h1>
        <p className="home-subheading">
          Explore a vast array of high-quality images and leverage our cutting-edge tools to elevate your artistic endeavors. Whether you need to restore old images, fill generative content, remove unwanted objects, recolor elements, or remove backgrounds, MyColors has you covered.
        </p>
      </section>

      <section className="p-4">
        <ul className="flex-center w-full gap-20">
          {navLinks.slice(1, 5).map((link) => (
            <Link
              key={link.route}
              href={link.route}
              className="flex-center flex-col gap-2"
            >
              <li className="flex-center w-fit rounded-lg bg-black p-4 gap-4">
                <Image src={link.icon} alt={link.label} width={24} height={24} />
              </li>
              <p className="p-14-medium text-center text-white">{link.label}</p>
            </Link>
          ))}
        </ul>
      </section>

      <section className="ad-banner">
  <div className="flex-center bg-yellow-500 p-4 rounded-lg">
    <p className="text-lg font-bold">
      Effortlessly generate colors in seconds with our Color Tool at <a href="https://mycolors.pro/" className="underline" target="_blank">mycolors.pro</a>
    </p>
  </div>
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
  );
};

export default Home;
