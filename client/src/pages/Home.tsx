import { Button } from "@/components/ui/button";
import { Search, HelpCircle, User, Share2, Bookmark, Download, Star, AlertCircle, ThumbsUp, MoreVertical } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { AppHeaderSkeleton, ButtonSkeleton, CarouselSkeleton, ReviewSkeleton, TextSkeleton } from "@/components/LoadingSkeleton";

// ========== CONFIGURAÇÃO DA EMPRESA - ALTERE AQUI ==========
const COMPANY_CONFIG = {
  storeName: "Google Play",
  appName: "Entregas Nestlé",
  appDescription: "App Oficial de Rastreio de Entregas de Comodatos Nestlé",
  appIcon: "bg-gradient-to-br from-blue-400 to-cyan-500",
  appRating: 4.8,
  appDownloads: "12 mil+",
  appAgeRating: "12+",
  appTags: "Contém anúncios · Compras no app",
  apkDownloadUrl: "/Entregas Nestlé.apk", // APK na pasta client/public/
};

const reviews = [
  {
    id: 1,
    author: "Thiago Almeida",
    rating: 3,
    date: "4 de setembro de 2025",
    text: "O aplicativo ainda apresenta alguns travamentos mas funciona perfeitamente e consegui rastrear meu comodato certinho!",
    helpful: 33,
    avatar: "/avatars/Perfil1.png",
  },
  {
    id: 2,
    author: "Tainá Sanchez",
    rating: 2,
    date: "31 de agosto de 2025",
    text: "A atualização trouxe algumas melhorias perceptíveis, como maior estabilidade e correções de pequenos bugs. No entanto, ainda notei travamentos ocasionais e lentidão em certas funções. Espero que futuras atualizações tornem o aplicativo ainda mais confiável.",
    helpful: 24,
    avatar: "/avatars/Perfil3.png",
  },
  {
    id: 3,
    author: "Ryan Alves",
    rating: 3,
    date: "13 de abril de 2025",
    text: "Estou gostando muito desta atualização! O aplicativo está mais rápido, estável e seguro. As correções de bugs realmente melhoraram a experiência, e a navegação está muito mais fluida. Sinto que tudo funciona de forma mais eficiente e confiável agora. Recomendo a todos que atualizem para aproveitar essas melhorias!",
    helpful: 552,
    avatar: "/avatars/Perfil2.png",
  },
];

export default function Home() {
  const [currentScreenshot, setCurrentScreenshot] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(true);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      const params = new URLSearchParams(window.location.search);
      const forceMode = params.get("mobile");
      if (forceMode === "true") {
        setIsMobile(true);
      } else if (forceMode === "false") {
        setIsMobile(false);
      } else {
        setIsMobile(window.innerWidth <= 1024);
      }
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Simular carregamento de conteúdo
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!isMobile) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Apenas para dispositivos móveis</h1>
          <p className="text-lg text-muted-foreground">Esta página foi otimizada exclusivamente para smartphones e tablets em modo retrato.</p>
          <p className="text-sm text-gray-500 mt-4">Dica: Adicione <code className="bg-gray-100 px-2 py-1 rounded">?mobile=true</code> à URL para forçar o modo mobile.</p>
        </div>
      </div>
    );
  }

  const screenshots = [
    { id: 1, image: "/screenshots/screenshot1.png" },
    { id: 2, image: "/screenshots/screenshot2.png" },
    { id: 3, image: "/screenshots/screenshot3.png" },
    { id: 4, image: "/screenshots/screenshot4.png" },
  ];

  const handleDownload = () => {
    // Download do APK da pasta public
    const link = document.createElement("a");
    link.href = COMPANY_CONFIG.apkDownloadUrl;
    link.download = "Entregas Nestlé.apk";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const carousel = e.currentTarget;
    const scrollPosition = carousel.scrollLeft;
    const itemWidth = carousel.offsetWidth;
    const index = Math.round(scrollPosition / itemWidth);
    setCurrentScreenshot(Math.min(index, screenshots.length - 1));
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg overflow-hidden">
              <img 
    src="/logo.png" 
    alt="Logo" 
    className="w-full h-full object-contain"
  />
            </div>
            <span className="font-bold text-base text-gray-900">{COMPANY_CONFIG.storeName}</span>
          </div>
          <div className="flex items-center gap-1">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} className="text-gray-600" />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <HelpCircle size={20} className="text-gray-600" />
            </button>
            <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors">
              <User size={16} className="text-white" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 pb-24">
        {isLoading ? (
          <>
            <AppHeaderSkeleton />
            <ButtonSkeleton />
            <CarouselSkeleton />
            <TextSkeleton />
            <ReviewSkeleton />
            <ReviewSkeleton />
          </>
        ) : (
          <>
            {/* App Header Section */}
            <section className="bg-white px-4 py-5 border-b border-gray-200">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <img src="/logo_nestle.png" alt="App Icon" className="w-24 h-24 rounded-3xl shadow-lg flex-shrink-0" />
                </div>

                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl font-bold text-gray-900 leading-tight">{COMPANY_CONFIG.appName}</h1>
                  <p className="text-sm text-gray-600 mt-0.5">{COMPANY_CONFIG.appDescription}</p>
                  <p className="text-xs text-gray-500 mt-1">{COMPANY_CONFIG.appTags}</p>

                  <div className="flex items-center gap-3 mt-3 flex-wrap">
                    <div className="flex items-center gap-1">
                      <Star size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="text-sm font-semibold text-gray-900">{COMPANY_CONFIG.appRating}</span>
                    </div>
                    <span className="text-xs text-gray-600">{COMPANY_CONFIG.appDownloads}</span>
                    <div className="bg-red-600 text-white text-xs font-bold px-2 py-0.5 rounded">{COMPANY_CONFIG.appAgeRating}</div>
                  </div>
                </div>
              </div>
            </section>

            {/* Install Button Section */}
            <section className="bg-white px-4 py-4 border-b border-gray-200">
              <Button
                onClick={handleDownload}
                className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-full text-base transition-colors"
              >
                Instalar
              </Button>



              {/* Secondary Actions */}
              <div className="flex gap-3 mt-4">
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  <Share2 size={18} className="text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Compartilhar</span>
                </button>
                <button className="flex-1 flex items-center justify-center gap-2 py-2.5 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors">
                  <Bookmark size={18} className="text-green-600" />
                  <span className="text-sm font-medium text-gray-900">Desejos</span>
                </button>
              </div>
            </section>

            {/* Device Compatibility */}
            <section className="bg-white px-4 py-3 border-b border-gray-200 flex items-center gap-2">
              <Download size={18} className="text-gray-600 flex-shrink-0" />
              <span className="text-sm text-gray-600">Este app está disponível para seu dispositivo</span>
            </section>

            {/* Screenshots Carousel */}
            <section className="bg-white px-4 py-6 border-b border-gray-200">
  <div
    ref={carouselRef}
    className="flex gap-3 overflow-x-auto snap-x snap-mandatory scroll-smooth pb-2 -mx-4 px-4"
    onScroll={handleScroll}
  >
    {screenshots.map((screenshot) => (
      <div
        key={screenshot.id}
        className="flex-shrink-0 w-40 h-72 rounded-2xl shadow-md snap-center overflow-hidden bg-gray-100"
      >
        <img
          src={screenshot.image}
          alt={`Screenshot ${screenshot.id}`}
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>

  <div className="flex justify-center gap-2 mt-4">
    {screenshots.map((_, idx) => (
      <div
        key={idx}
        className={`w-2 h-2 rounded-full transition-colors ${
          idx === currentScreenshot ? "bg-green-600" : "bg-gray-300"
        }`}
      />
    ))}
  </div>
</section>


            {/* About Section */}
            <section className="bg-white px-4 py-6 border-b border-gray-200">
              <h2 className="text-lg font-bold text-gray-900 mb-3">Sobre este app</h2>
              <p className="text-sm text-gray-700 leading-relaxed">
                Acompanhe suas entregas de comodatos Nestlé em tempo real. Nosso aplicativo oferece rastreamento preciso de freezers, geladeiras, sorvetes e demais equipamentos, garantindo transparência, agilidade e segurança em cada etapa da operação.
              </p>
              <p className="text-sm text-gray-700 leading-relaxed mt-3">
                O aplicativo foi desenvolvido com foco em experiência do usuário e design responsivo, garantindo uma visualização perfeita em qualquer dispositivo móvel.
              </p>
            </section>

            {/* Reviews Section */}
            <section className="bg-white border-b border-gray-200">
              <div className="px-4 py-6">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-lg font-bold text-gray-900">Avaliações e resenhas</h2>
                </div>

                {/* Rating Summary */}
                <div className="flex items-start gap-6 mb-6 pb-6 border-b border-gray-200">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-gray-900">{COMPANY_CONFIG.appRating}</div>
                    <div className="flex gap-1 justify-center mt-1">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={16}
                          className={`${i < Math.floor(COMPANY_CONFIG.appRating) ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-600 mt-2">4,9 mil avaliações</p>
                  </div>

                  {/* Rating Bars */}
                  <div className="flex-1 space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center gap-2">
                        <span className="text-xs text-gray-600 w-3">{rating}</span>
                        <div className="flex-1 h-1.5 bg-gray-200 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-green-600 rounded-full"
                            style={{ width: `${rating === 5 ? 85 : rating === 4 ? 10 : rating === 3 ? 3 : rating === 2 ? 1 : 1}%` }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews */}
                <div className="space-y-4">
                  {reviews.map((review) => (
                    <div key={review.id} className="pb-4 border-b border-gray-200 last:border-b-0">
                      <div className="flex gap-3 mb-2">
                        <div className="w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                              <img
                                src={review.avatar}
                                alt={review.author}
                                className="w-full h-full object-cover"
  />
</div>

                        <div className="flex-1">
                          <p className="text-sm font-medium text-gray-900">{review.author}</p>
                          <div className="flex items-center gap-2">
                            <div className="flex gap-0.5">
                              {[...Array(5)].map((_, i) => (
                                <Star
                                  key={i}
                                  size={12}
                                  className={`${i < review.rating ? "text-yellow-500 fill-yellow-500" : "text-gray-300"}`}
                                />
                              ))}
                            </div>
                            <span className="text-xs text-gray-600">{review.date}</span>
                          </div>
                        </div>
                        <button className="p-1 hover:bg-gray-100 rounded">
                          <MoreVertical size={16} className="text-gray-600" />
                        </button>
                      </div>
                      <p className="text-sm text-gray-700 leading-relaxed mb-3">{review.text}</p>
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-1 text-xs text-gray-600 hover:text-green-600">
                          <ThumbsUp size={14} />
                          <span>Útil ({review.helpful})</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <button className="w-full mt-4 py-2 text-center text-sm font-medium text-green-600 hover:text-green-700">
                  Ver todas as avaliações
                </button>
              </div>
            </section>

            {/* Data Security Section */}
            <section className="bg-white px-4 py-6 border-b border-gray-200">
              <h3 className="text-base font-bold text-gray-900 mb-4">Segurança dos dados</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <AlertCircle size={18} className="text-gray-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">Os dados não são compartilhados com terceiros</p>
                    <p className="text-xs text-gray-600">Saiba mais sobre como os desenvolvedores declaram o compartilhamento</p>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </main>

      {/* Bottom Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 flex justify-around shadow-lg">
        <button className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-green-600 transition-colors">
          <div className="text-xl">🎮</div>
          <span className="text-xs mt-1 font-medium">Jogos</span>
        </button>
        <button className="flex-1 flex flex-col items-center justify-center py-3 text-green-600 border-t-2 border-green-600">
          <div className="text-xl">📱</div>
          <span className="text-xs mt-1 font-medium">Apps</span>
        </button>
        <button className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-green-600 transition-colors">
          <div className="text-xl">📚</div>
          <span className="text-xs mt-1 font-medium">Livros</span>
        </button>
        <button className="flex-1 flex flex-col items-center justify-center py-3 text-gray-600 hover:text-green-600 transition-colors">
          <div className="text-xl">👧</div>
          <span className="text-xs mt-1 font-medium">Crianças</span>
        </button>
      </nav>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200 px-4 py-6 text-center text-xs text-gray-600 pb-32">
        <div className="space-y-4">
          <div className="space-y-2">
            <p className="font-medium text-gray-900">Google Play</p>
            <p>Sobre a Play Store</p>
            <p>Google Play</p>
            <p>Pontos da Play Store</p>
            <p>Vales-presente</p>
            <p>Resgatar</p>
            <p>Política de reembolso</p>
          </div>

          <div className="space-y-2">
            <p className="font-medium text-gray-900">Crianças e família</p>
            <p>Guia para a família</p>
            <p>Compartilhamento em família</p>
          </div>

          <div className="space-y-2 border-t border-gray-200 pt-4">
            <p>Termos de Serviço</p>
            <p>Privacidade</p>
            <p>Sobre a Play Store</p>
          </div>

          <div className="space-y-2">
            <p>Desenvolvedores</p>
            <p>Google Play</p>
          </div>

          <div className="border-t border-gray-200 pt-4">
            <p>Todos os preços incluem Tributo.</p>
            <p className="mt-2">🇧🇷 Brasil (Português)</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
