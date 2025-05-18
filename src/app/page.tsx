import Image from "next/image";
import Link from "next/link";

export default function HomePage() {

  const mockdata = [
    'https://5sogwfu2yd.ufs.sh/f/vpz2ufVVQ9MSn3IiCRwK5l2PI71tLexQWowfB4bVYHRjOdZN',
    'https://5sogwfu2yd.ufs.sh/f/vpz2ufVVQ9MShLcKRd6PaGdln0fkX2D81AI6j3cMQRypwvgZ',
    'https://5sogwfu2yd.ufs.sh/f/vpz2ufVVQ9MST8Cs3tlVNktuiBmAwL1eFSPGz4Q8gH6x7Wpa',
    'https://5sogwfu2yd.ufs.sh/f/vpz2ufVVQ9MSBNUKunhwerS6aJXLqCic3un5OmPEHjKYhT9o'
  ]

  const mockImages = mockdata.map((url, index) => ({
    id: index + 1,
    url
  }))


  return (
    <div className="flex flex-wrap gap-4">
      {mockImages.map((image) =>
        <div key={image.id} className="w-48">
          <img src={image.url} alt="a image"></img>
        </div>)}
    </div>
  );
}
