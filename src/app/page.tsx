import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function Home() {
  const baseNumber = "5584999837160";

  const streamings = [
    {
      name: "globoplay + canais",
      preco: 15.0,
      cor: "red-400",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRMIf5OeYfz9FDHG9gpy3tyXdDpSjVBG_wrlA&s",
    },
    {
      name: "youtube premium",
      preco: 10.0,
      cor: "red-400",
      imagem:
        "https://www.pngitem.com/pimgs/m/436-4360375_youtube-premium-logo-png-transparent-background-hd-youtube.png",
    },
    {
      name: "prime video",
      preco: 10.0,
      cor: "blue-400",
      imagem:
        "https://i0.wp.com/cloud.estacaonerd.com/wp-content/uploads/2020/10/12194108/Amazon-Prime.png?fit=512%2C512&ssl=1",
    },
    {
      name: "paramount+",
      preco: 8.0,
      cor: "blue-400",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdqGnPo4GJlQN8kYNJdVwxoOWIK-sdZ0Nt4w&s",
    },
    {
      name: "Clarotv básica",
      preco: 10.0,
      cor: "red-400",
      imagem:
        "https://images.prismic.io/ofertasclaro/ZiFdNPPdc1huKnyR_ClaroTV%2B.jpg?auto=format,compress&rect=225,0,658,658&w=640&h=640",
    },
    {
      name: "Clarotv completa",
      preco: 30.0,
      cor: "red-400",
      imagem:
        "https://images.prismic.io/ofertasclaro/ZiFdNPPdc1huKnyR_ClaroTV%2B.jpg?auto=format,compress&rect=225,0,658,658&w=640&h=640",
    },
    {
      name: "tv express",
      preco: 20.0,
      cor: "purple-purple",
      imagem:
        "https://jiroyukabkjzhlkjldur.supabase.co/storage/v1/object/public/products//efe9b243-91e6-40a1-98b5-c6973653f32b.jpg",
    },
    {
      name: "MAX",
      preco: 10.0,
      cor: "blue-400",
      imagem:
        "https://standfirst-designweek-production.imgix.net/uploads/2023/04/19112920/DixonBaxi_MAX_002-1.jpg?fit=crop&crop=faces&q=80&auto=compress,format&w=364&h=404&dpr=2.625",
    },
    {
      name: "Sky+ básica",
      preco: 20.0,
      cor: "red-400",
      imagem:
        "https://play-lh.googleusercontent.com/2Tg6j_V3goWRiht2-UEGUXuOeJ2uLTIgPqUhLrDsrkqL5Y2Ac_zCNEZUHELNoqYqww",
    },
    {
      name: "Sky+ completa",
      preco: 40.0,
      cor: "red-400",
      imagem:
        "https://play-lh.googleusercontent.com/2Tg6j_V3goWRiht2-UEGUXuOeJ2uLTIgPqUhLrDsrkqL5Y2Ac_zCNEZUHELNoqYqww",
    },
    {
      name: "My Family Cinema",
      preco: 10.0,
      cor: "orange-400",
      imagem:
        "https://http2.mlstatic.com/D_NQ_NP_722141-MLB78705571733_082024-O.webp",
    },
    {
      name: "Disney+",
      preco: 15.0,
      cor: "blue-400",
      imagem:
        "https://i.pinimg.com/736x/2b/fc/f1/2bfcf1f53b5d6fc10998509152011368.jpg",
    },
    {
      name: "Unitv",
      preco: 20.0,
      cor: "white",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRq-mKu57_q3iYR8LlR03Ta3ofCHghBTO8vTQ&s",
    },
    {
      name: "Telecine",
      preco: 8.0,
      cor: "blue-400",
      imagem:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT74vf8_giSk0vCB4SnqzlRGVyq4TDWUvZQhvF4zsQFAHHSf4JsCncmPxc&s=10",
    },
    {
      name: "Premiere",
      preco: 10.0,
      cor: "green-400",
      imagem:
        "https://s3.glbimg.com/v1/AUTH_36abb2af534644878388f516c38b89ac/prod/home-share-1b75cdaa.png",
    },
    {
      name: "Spotify",
      preco: 12.0,
      cor: "green-400",
      imagem:
        "https://files.tecnoblog.net/wp-content/uploads/2015/07/spotify-novo-verde.jpg",
    },
    {
      name: "Warez TV",
      preco: 30.0,
      cor: "green-400",
      imagem: "https://img.olx.com.br/images/47/479547404561225.jpg",
    },
  ];

  const updatedStreamings = streamings.map((s) => {
    const message = `Olá, vim pelo site e gostaria de adquirir uma conta de ${s.name}`;
    const encodedMessage = encodeURIComponent(message);
    return {
      ...s,
      link: `https://wa.me/${baseNumber}?text=${encodedMessage}`,
    };
  });

  const colorMap: Record<string, string> = {
    "orange-400": "border-t-orange-400",
    "red-400": "border-t-red-400",
    "blue-400": "border-t-blue-400",
    "purple-purple": "border-t-purple-400", // Corrija aqui se necessário
    "green-400": "border-t-green-400",
    white: "border-t-white",
  };

  return (
    <main className="w-full h-full">
      {/* <header className="w-full py-6"></header> */}

      <section className="w-full max-w-full bg-[url('/hero-bg.jpeg')] bg-cover bg-right-top h-[400px]"></section>

      <section className="w-full flex items-center justify-between flex-col flex-wrap py-8 bg-neutral-900 gap-10">
        <div className="text-center">
          <h5 className="text-3xl font-extrabold">10K+</h5>
          <p className="text-sm">Clientes Satisfeitos</p>
        </div>
        <div className="text-center">
          <h5 className="text-3xl font-extrabold">15+</h5>
          <p className="text-sm">Plataformas Disponíveis</p>
        </div>
        <div className="text-center">
          <h5 className="text-3xl font-extrabold">24/7</h5>
          <p className="text-sm">Suporte Premium</p>
        </div>
        <div className="text-center">
          <h5 className="text-3xl font-extrabold">90%</h5>
          <p className="text-sm">Economia</p>
        </div>
      </section>

      <section className="w-full flex items-center justify-center py-10 px-10 flex-col">
        <h4 className="text-2xl font-extrabold mb-2 text-center">
          Contas Premium Disponíveis
        </h4>

        <p className="block text-sm text mb-10 text-center">
          Escolha entre as principais plataformas digitais com acesso completo,
          sem limitações.
        </p>

        <div className="w-full flex items-center justify-center flex-row flex-wrap gap-8">
          {updatedStreamings.map((streaming) => (
            <div
              className={`px-8 py-8 bg-neutral-900 rounded-lg border-t-8 min-w-[25%] w-full ${
                colorMap[streaming.cor]
              }`}
              key={streaming.name}
            >
              <div className="w-full flex items-center justify-start gap-4 mb-6">
                <img
                  src={streaming.imagem}
                  className="w-[60px] h-[60px] rounded-lg"
                  alt=""
                />

                {/* {`border-t-${streaming.cor}`} */}

                <p className="uppercase text-xl font-bold">{streaming.name}</p>
              </div>

              <div className="w-full flex items-center justify-between mb-8">
                <p className="text-neutral-400">Conta Completa</p>
                <p className="font-extrabold">R$ {streaming.preco}/mês</p>
              </div>

              <Link
                href={streaming.link}
                target="_blank"
                className="w-full flex items-center justify-center gap-2 bg-neutral-800 hover:bg-red-400 transform duration-500 py-4 rounded-lg cursor-pointer"
              >
                <ShoppingCart />
                <p className="font-extrabold">Comprar agora</p>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
