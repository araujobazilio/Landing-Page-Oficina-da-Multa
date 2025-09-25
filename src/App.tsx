import React, { useState } from 'react';
import { Shield, FileText, Car, CreditCard, Car as IdCard, Menu, X, Phone, Mail, MapPin, Clock, CheckCircle, Users, Star, ArrowRight } from 'lucide-react';

declare global {
  interface Window {
    gtag_report_conversion?: (url?: string) => boolean;
  }
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const services = [
    {
      icon: Shield,
      title: "Recursos de Multas",
      description: "Defesa administrativa em todas as instâncias para anulação de multas.",
      features: ["Defesa prévia", "Recurso à JARI", "Recurso ao CETRAN"]
    },
    {
      icon: FileText,
      title: "Lei Seca",
      description: "Defesa especializada em casos de autuação por embriaguez ao volante.",
      features: ["Análise do bafômetro", "Verificação de procedimentos", "Recursos administrativos"]
    },
    {
      icon: Car,
      title: "Multas Autossuspensivas",
      description: "Defesa contra as infrações mais graves do CTB.",
      features: ["Excesso de velocidade +50%", "Rachas", "Ultrapassagem perigosa"]
    },
    {
      icon: CreditCard,
      title: "Parcelamento",
      description: "Parcelamento de multas, IPVA e licenciamento.",
      features: ["Até 18x no cartão", "Condições especiais", "Atendimento personalizado"]
    },
    {
      icon: IdCard,
      title: "Suspensão e Cassação",
      description: "Defesa em processos de suspensão ou cassação da CNH.",
      features: ["Recursos administrativos", "Acompanhamento jurídico", "Defesa em todas as instâncias"]
    },
    {
      icon: Users,
      title: "CNH Provisória (PPD)",
      description: "Assistência especializada para condutores em período probatório.",
      features: ["Defesa em multas", "Acompanhamento de pontos", "Preservação da CNH"]
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Netlify Forms vai processar automaticamente
    alert('✅ Mensagem enviada com sucesso! Entraremos em contato em breve.');
    setFormData({ name: '', email: '', phone: '', service: '', message: '' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="fixed w-full bg-orange-500/95 backdrop-blur-sm shadow-lg z-50 border-b border-orange-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-24">
            <div className="flex items-center space-x-3">
              <img src="/4 - oficina da mult 1.png" alt="Oficina da Multa" className="h-20 w-auto" />
              <span className="text-2xl font-bold text-white">
                Oficina da Multa
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#servicos" className="text-white hover:text-orange-100 font-medium transition-colors">
                Serviços
              </a>
              <a href="#sobre" className="text-white hover:text-orange-100 font-medium transition-colors">
                Sobre
              </a>
              <a href="#gravissimas" className="text-white hover:text-orange-100 font-medium transition-colors">
                Gravíssimas
              </a>
              <a href="#contato" className="text-white hover:text-orange-100 font-medium transition-colors">
                Contato
              </a>
              <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dnav_cta_desktop" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-500 px-6 py-2 rounded-full hover:bg-orange-50 transition-all transform hover:scale-105 font-medium" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                Ligar Agora
              </a>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg text-white hover:bg-orange-600 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-orange-600">
              <nav className="flex flex-col space-y-4">
                <a href="#servicos" className="text-white hover:text-orange-100 font-medium">
                  Serviços
                </a>
                <a href="#sobre" className="text-white hover:text-orange-100 font-medium">
                  Sobre
                </a>
                <a href="#gravissimas" className="text-white hover:text-orange-100 font-medium">
                  Gravíssimas
                </a>
                <a href="#contato" className="text-white hover:text-orange-100 font-medium">
                  Contato
                </a>
                <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dnav_cta_mobile" target="_blank" rel="noopener noreferrer" className="bg-white text-orange-500 px-6 py-3 rounded-full hover:bg-orange-50 transition-colors text-center font-medium" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                  Ligar Agora
                </a>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* WhatsApp CTA Sticky (Desktop) */}
      <div className="hidden md:block fixed top-24 w-full bg-white/95 backdrop-blur-sm shadow z-40 border-b border-orange-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2 flex items-center justify-between">
          <p className="text-sm text-gray-700 font-medium">CNH suspensa? Fale agora com um especialista via WhatsApp</p>
          <a
            href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dsticky_cta_desktop"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 text-white px-4 py-2 rounded-full hover:bg-green-600 transition-colors"
            onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}
          >
            Falar no WhatsApp
          </a>
        </div>
      </div>

      {/* WhatsApp Floating Button (Mobile) */}
      <a
        href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dfloating_cta_mobile"
        target="_blank"
        rel="noopener noreferrer"
        className="md:hidden fixed bottom-4 right-4 z-50 bg-green-500 text-white px-5 py-3 rounded-full shadow-lg flex items-center space-x-2 hover:bg-green-600"
        onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}
      >
        <Phone className="h-5 w-5" />
        <span>WhatsApp</span>
      </a>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 bg-gradient-to-br from-orange-50 via-white to-orange-50 overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center opacity-5"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Resolva suas
              <span className="bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent block">
                Multas de Trânsito
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Recebeu multa da Lei Seca ou teve a CNH suspensa? Nós podemos ajudar a recorrer e evitar a perda da sua habilitação.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a 
                href="#contato" 
                className="group bg-orange-500 text-white px-8 py-4 rounded-full hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg inline-flex items-center space-x-2 shadow-lg"
              >
                <span>Consulta Gratuita</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dhero_cta_whatsapp" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="group border-2 border-orange-500 text-orange-500 px-8 py-4 rounded-full hover:bg-orange-500 hover:text-white transition-all font-semibold text-lg inline-flex items-center space-x-2"
                onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}
              >
                <Phone className="h-5 w-5" />
                <span>(22) 99261-3485</span>
              </a>
            </div>
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="bg-white/80 rounded-xl px-4 py-3 shadow border border-orange-100 text-center">
                <div className="text-2xl font-bold text-gray-900">15+</div>
                <div className="text-sm text-gray-600">anos de atuação</div>
              </div>
              <div className="bg-white/80 rounded-xl px-4 py-3 shadow border border-orange-100 text-center">
                <div className="text-2xl font-bold text-gray-900">6.000+</div>
                <div className="text-sm text-gray-600">processos atendidos</div>
              </div>
              <div className="bg-white/80 rounded-xl px-4 py-3 shadow border border-orange-100 text-center">
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-sm text-gray-600">taxa de sucesso</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">15+</div>
              <div className="text-orange-200">Anos de Experiência</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">50k+</div>
              <div className="text-orange-200">Multas Resolvidas</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-orange-200">Taxa de Sucesso</div>
            </div>
            <div className="text-white">
              <div className="text-4xl font-bold mb-2">24h</div>
              <div className="text-orange-200">Atendimento</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="servicos" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Nossos Serviços
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Oferecemos uma gama completa de serviços para resolver todos os seus problemas relacionados ao trânsito
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div 
                  key={index}
                  className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100"
                >
                  <div className="bg-orange-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                    <Icon className="h-8 w-8 text-orange-500 group-hover:text-white transition-colors" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-orange-500 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Infrações Autossuspensivas */}
      <section id="infracoes" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Infrações Autossuspensivas
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Conheça as infrações que podem levar à suspensão imediata do direito de dirigir e como podemos te ajudar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Lei Seca</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Multa: R$ 2.934,70</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Suspensão: 12 meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Recolhimento da CNH</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Excesso de Velocidade +50%</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Multa: R$ 1.467,35</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Suspensão: 2 a 12 meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>7 pontos na CNH</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transform transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Racha</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Multa: R$ 2.934,70</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Suspensão: 12 a 24 meses</span>
                </li>
                <li className="flex items-start">
                  <span className="text-red-500 font-bold mr-2">•</span>
                  <span>Recolhimento do veículo</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-lg text-gray-700 mb-8">
              Nossa equipe está pronta para te auxiliar na defesa contra essas e outras infrações. 
              Entre em contato agora mesmo e evite a suspensão da sua CNH!
            </p>
            <a 
              href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dinfracoes_cta_global" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200 md:py-4 md:text-lg md:px-10"
              onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}
            >
              Fale com um Especialista
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>
      
      {/* Gravíssimas Section */}
      <section id="gravissimas" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recursos de Multas Gravíssimas (Lei Seca, CNH Suspensa)
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Especialistas em defesa técnica para as infrações que mais impactam sua CNH. Aja rápido e fale agora com nosso time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-red-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-red-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Lei Seca</h3>
              <p className="text-gray-600 mb-4">Defesa técnica para evitar suspensão e reduzir impactos.</p>
              <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dgravissimas_leiseca" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-yellow-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <IdCard className="h-6 w-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">CNH Suspensa</h3>
              <p className="text-gray-600 mb-4">Análise do processo e recursos administrativos completos.</p>
              <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dgravissimas_cnh" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-blue-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Excesso +50%</h3>
              <p className="text-gray-600 mb-4">Estratégia específica para reduzir penalidades e preservar sua CNH.</p>
              <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dgravissimas_excesso50" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-all">
              <div className="bg-purple-100 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <Car className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Racha</h3>
              <p className="text-gray-600 mb-4">Atuação imediata para mitigar efeitos e conduzir a melhor defesa.</p>
              <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dgravissimas_racha" target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-orange-600 font-semibold hover:text-orange-700" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                Falar no WhatsApp <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>

          <div className="mt-12 text-center">
            <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md border border-gray-100 text-left mb-8">
              <p className="text-gray-600 italic mb-4">"Tive a CNH suspensa e precisava de ajuda urgente. A equipe foi muito ágil e conseguiu reverter a situação. Recomendo!"</p>
              <div className="flex items-center">
                <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg mr-4">A</div>
                <div>
                  <h4 className="font-semibold text-gray-900">Alexandre M.</h4>
                  <p className="text-sm text-gray-500">CNH Suspensa</p>
                </div>
              </div>
            </div>
            <a 
              href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dgravissimas_cta_final" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors"
              onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}
            >
              Falar com um Especialista Agora
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="sobre" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                Por que escolher a Oficina da Multa?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Na Oficina da Multa, somos referência nacional em assessoria e defesa administrativa de infrações de trânsito. 
                Nosso time jurídico especializado atua com dedicação para garantir que cada cliente tenha a melhor 
                estratégia possível na sua defesa, reduzindo impactos financeiros e preservando o direito de dirigir.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <Users className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">+6.000 Processos Atendidos</h3>
                    <p className="text-gray-600">Alto índice de sucesso na defesa dos nossos clientes em todo o Brasil.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <Shield className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Especialistas em Lei Seca</h3>
                    <p className="text-gray-600">Defesa técnica especializada em casos de embriaguez ao volante.</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                    <CreditCard className="h-6 w-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Parcelamento Facilitado</h3>
                    <p className="text-gray-600">Multas, IPVA e licenciamento em até 18x no cartão de crédito.</p>
                  </div>
                </div>
                <div className="pt-6">
                  <a 
                    href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dsobre_cta" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 transition-colors duration-200"
                    onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}
                  >
                    Fale com um Especialista Agora
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-w-4 aspect-h-3 rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/5473298/pexels-photo-5473298.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Equipe da Oficina da Multa"
                  className="w-full h-96 object-cover rounded-2xl"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-gray-100">
                <div className="text-3xl font-bold text-orange-500 mb-1">50.000+</div>
                <div className="text-gray-600 font-medium">Clientes Satisfeitos</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contato" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Entre em Contato
            </h2>
            <p className="text-xl text-gray-600">
              Fale conosco e resolva seus problemas de trânsito hoje mesmo
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                  <Phone className="h-6 w-6 text-orange-500" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">WhatsApp</h3>
                  <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dcontato_info" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-orange-500 transition-colors block" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>(22) 99261-3485</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-green-100 p-3 rounded-full flex-shrink-0">
                  <Mail className="h-6 w-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">E-mail</h3>
                  <a href="mailto:oficinadamulta.nf@gmail.com" className="text-gray-600 hover:text-orange-500 transition-colors block">oficinadamulta.nf@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-orange-100 p-3 rounded-full flex-shrink-0">
                  <MapPin className="h-6 w-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Localização</h3>
                  <p className="text-gray-600">Nova Friburgo - RJ</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-purple-100 p-3 rounded-full flex-shrink-0">
                  <Clock className="h-6 w-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Horário de Funcionamento</h3>
                  <p className="text-gray-600">Segunda à Sexta: 08:00 - 18:00</p>
                  <p className="text-gray-600">Sábado: 08:00 - 12:00</p>
                  <p className="text-gray-600">Domingo: Fechado</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Envie sua Mensagem</h3>
              <form name="contato" method="POST" data-netlify="true" onSubmit={handleSubmit} className="space-y-6">
                <input type="hidden" name="form-name" value="contato" />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="Seu nome completo"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      E-mail *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="seu@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                      placeholder="(22) 99261-3485"
                    />
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Serviço de Interesse
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    >
                      <option value="">Selecione um serviço</option>
                      <option value="defesa-multas">Defesa de Multas</option>
                      <option value="recursos">Recursos de Infrações</option>
                      <option value="transferencia">Transferência de Veículo</option>
                      <option value="licenciamento">Licenciamento Anual</option>
                      <option value="renovacao-cnh">Renovação de CNH</option>
                      <option value="segunda-via">Segunda Via de Documentos</option>
                      <option value="parcelamento">Parcelamento de Débitos</option>
                      <option value="consulta">Consulta de Pontos</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensagem *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Descreva seu problema ou dúvida..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-orange-500 text-white px-8 py-4 rounded-lg hover:bg-orange-600 transition-all transform hover:scale-105 font-semibold text-lg shadow-lg"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              O que nossos clientes dizem
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Confira a opinião de quem já confiou nos nossos serviços
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Carlos Silva",
                role: "Motorista de Aplicativo",
                content: "Conseguiram anular uma multa de trânsito que quase me fez perder a CNH. Profissionais extremamente competentes e atenciosos.",
                rating: 5
              },
              {
                name: "Fernanda Oliveira",
                role: "Empresária",
                content: "Atendimento excelente! Me auxiliaram com um processo de suspensão da CNH e conseguiram reverter a situação rapidamente.",
                rating: 5
              },
              {
                name: "Roberto Santos",
                role: "Motorista Profissional",
                content: "Estou muito satisfeito com o serviço. Meu caso era complexo, mas a equipe foi incansável e conseguiu resolver tudo para mim.",
                rating: 5
              }
            ].map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-md border border-gray-100">
                <div className="flex items-center mb-4">
                  <div className="text-yellow-400 flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div className="flex items-center">
                  <div className="bg-orange-100 w-12 h-12 rounded-full flex items-center justify-center text-orange-500 font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h2>
            <div className="w-24 h-1 bg-orange-500 mx-auto mb-6"></div>
            <p className="text-lg text-gray-600">
              Tire suas dúvidas sobre nossos serviços e processos
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "Quanto tempo leva para analisar meu caso?",
                answer: "Nossa análise inicial é feita em até 48 horas úteis após o envio de toda a documentação necessária."
              },
              {
                question: "Quais são as chances de sucesso no meu recurso?",
                answer: "Cada caso é único, mas nossa equipe especializada tem um alto índice de sucesso na defesa de multas. Podemos te dar um parecer mais preciso após análise da sua documentação."
              },
              {
                question: "Posso dirigir enquanto o recurso está em andamento?",
                answer: "Sim, na maioria dos casos você pode continuar dirigindo normalmente enquanto o recurso está sendo analisado, a menos que haja uma decisão judicial em contrário."
              },
              {
                question: "Quais documentos são necessários para dar entrada no recurso?",
                answer: "Geralmente são necessários: cópia da CNH, CRLV, notificação da multa e documentos do veículo. A lista completa pode variar conforme o tipo de infração."
              },
              {
                question: "Vocês atendem em todo o Brasil?",
                answer: "Sim, atendemos clientes em todo o território nacional, de forma online e presencial em Nova Friburgo - RJ."
              }
            ].map((item, index) => (
              <div key={index} className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {item.question}
                </h3>
                <p className="text-gray-600">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img src="/5 - oficina da mult 3.png" alt="Oficina da Multa" className="h-10 w-auto" loading="lazy" decoding="async" />
                <span className="text-2xl font-bold text-white">Oficina da Multa</span>
              </div>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Referência nacional em assessoria e defesa administrativa de infrações de trânsito, atuando em todo o Brasil. Cuidamos da sua tranquilidade no trânsito com serviços de qualidade e atendimento personalizado.
              </p>
              <div className="flex space-x-4">
                <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dfooter_brand_icon" target="_blank" rel="noopener noreferrer" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                  <Phone className="h-5 w-5 text-orange-400 group-hover:text-white" />
                </a>
                <a href="mailto:oficinadamulta.nf@gmail.com" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors">
                  <Mail className="h-5 w-5 text-orange-400 group-hover:text-white" />
                </a>
                <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-orange-500 transition-colors">
                  <MapPin className="h-5 w-5 text-orange-400 group-hover:text-white" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
              <ul className="space-y-2">
                <li><a href="#inicio" className="text-gray-300 hover:text-orange-400 transition-colors">Início</a></li>
                <li><a href="#servicos" className="text-gray-300 hover:text-orange-400 transition-colors">Nossos Serviços</a></li>
                <li><a href="#infracoes" className="text-gray-300 hover:text-orange-400 transition-colors">Infrações Autossuspensivas</a></li>
                <li><a href="#faq" className="text-gray-300 hover:text-orange-400 transition-colors">Perguntas Frequentes</a></li>
                <li><a href="#contato" className="text-gray-300 hover:text-orange-400 transition-colors">Contato</a></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contato</h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <Phone className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dfooter_contact_link" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>(22) 99261-3485</a>
                </li>
                <li className="flex items-start">
                  <Mail className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                  <a href="mailto:oficinadamulta.nf@gmail.com" className="hover:text-orange-400 transition-colors">oficinadamulta.nf@gmail.com</a>
                </li>
                <li className="flex items-start">
                  <MapPin className="h-5 w-5 text-orange-400 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Nova Friburgo - RJ</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-center md:text-left text-gray-400 mb-4 md:mb-0">
                &copy; {new Date().getFullYear()} Oficina da Multa. Todos os direitos reservados.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Facebook</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/oficinadamulta" className="text-gray-400 hover:text-orange-400 transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path fillRule="evenodd" d="M12 22.75c-2.96 0-5.75-1.1-7.86-3.09C1.97 17.66.85 14.95.85 12c0-2.95 1.1-5.75 3.09-7.85C5.34 1.97 8.05.85 11 .85c1.61 0 3.17.32 4.64.95.47.21.81.68.81 1.28v2.84c0 .5-.36.93-.85 1.01l-2.51.5c-.4.08-.69.45-.69.87v1.7c0 .5-.41.9-.9.9h-1.6c-.5 0-.9-.4-.9-.9v-4.6c0-.5.4-.9.9-.9h4.6c.5 0 .9.4.9.9v.6h-3.1c-.28 0-.5.22-.5.5s.22.5.5.5h2.1c.5 0 .9.4.9.9v2.2c0 .5-.4.9-.9.9h-1.1c-.5 0-.9.4-.9.9v.6c0 .5.4.9.9.9h.6c.5 0 .9.4.9.9v1.7c0 .5-.4.9-.9.9h-1.1c-.5 0-.9.4-.9.9v2.6c0 .5.4.9.9.9h2.6c.5 0 .9-.4.9-.9v-1.1c0-.5.4-.9.9-.9h1.7c.5 0 .9-.4.9-.9v-2.1c0-.28.22-.5.5-.5h.6c.5 0 .9-.4.9-.9v-2.84c0-.6.34-1.07.81-1.28 1.47-.63 3.03-.95 4.64-.95 2.95 0 5.75 1.1 7.85 3.09 1.99 2.1 3.11 4.81 3.11 7.76 0 2.96-1.1 5.75-3.09 7.86-2.1 1.99-4.81 3.11-7.76 3.11z"/>
                    <path d="M12 22.75c-2.96 0-5.75-1.1-7.86-3.09C1.97 17.66.85 14.95.85 12c0-2.95 1.1-5.75 3.09-7.85C5.34 1.97 8.05.85 11 .85c1.61 0 3.17.32 4.64.95.47.21.81.68.81 1.28v2.84c0 .5-.36.93-.85 1.01l-2.51.5c-.4.08-.69.45-.69.87v1.7c0 .5-.41.9-.9.9h-1.6c-.5 0-.9-.4-.9-.9v-4.6c0-.5.4-.9.9-.9h4.6c.5 0 .9.4.9.9v.6h-3.1c-.28 0-.5.22-.5.5s.22.5.5.5h2.1c.5 0 .9.4.9.9v2.2c0 .5-.4.9-.9.9h-1.1c-.5 0-.9.4-.9.9v.6c0 .5.4.9.9.9h.6c.5 0 .9.4.9.9v1.7c0 .5-.4.9-.9.9h-1.1c-.5 0-.9.4-.9.9v2.6c0 .5.4.9.9.9h2.6c.5 0 .9-.4.9-.9v-1.1c0-.5.4-.9.9-.9h1.7c.5 0 .9-.4.9-.9v-2.1c0-.28.22-.5.5-.5h.6c.5 0 .9-.4.9-.9v-2.84c0-.6.34-1.07.81-1.28 1.47-.63 3.03-.95 4.64-.95 2.95 0 5.75 1.1 7.85 3.09 1.99 2.1 3.11 4.81 3.11 7.76 0 2.96-1.1 5.75-3.09 7.86-2.1 1.99-4.81 3.11-7.76 3.11z"/>
                  </svg>
                </a>
                <a href="https://wa.me/5522992613485?text=Ola!%20Preciso%20de%20ajuda%20com%20uma%20multa%20de%20tr%C3%A2nsito!%0A%0Autm_source%3Dgoogle%26utm_medium%3Dcpc%26utm_campaign%3Dleiseca%26utm_content%3Dfooter_social_whatsapp" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors" onClick={() => { window.gtag_report_conversion && window.gtag_report_conversion(); }}>
                  <span className="sr-only">WhatsApp</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.498 14.382l-2.78-1.11c-.64-.254-.747-.414-1.058.26-.218.473-.841 1.22-1.02 1.44-.2.256-.4.29-.74.1-.34-.19-1.44-.53-2.74-1.69-1.01-.9-1.69-2.01-1.89-2.35-.19-.34-.02-.53.14-.7.15-.15.34-.39.51-.6.17-.2.23-.34.34-.56.11-.23.06-.42-.02-.59-.07-.18-.62-1.49-.85-2.04-.22-.55-.45-.47-.62-.48h-.53c-.18 0-.48.08-.74.36-.25.28-.97.95-.97 2.31 0 1.37 1.01 2.68 1.14 2.87.14.19 1.96 3.07 4.77 4.31.66.29 1.19.47 1.6.6.67.23 1.28.2 1.76.12.53-.08 1.63-.67 1.86-1.32.23-.65.23-1.21.16-1.33-.07-.12-.25-.19-.53-.34z"/>
                    <path d="M12 22.75c-2.96 0-5.75-1.1-7.86-3.09C1.97 17.66.85 14.95.85 12c0-2.95 1.1-5.75 3.09-7.85C5.34 1.97 8.05.85 11 .85c1.61 0 3.17.32 4.64.95.47.21.81.68.81 1.28v2.84c0 .5-.36.93-.85 1.01l-2.51.5c-.4.08-.69.45-.69.87v1.7c0 .5-.41.9-.9.9h-1.6c-.5 0-.9-.4-.9-.9v-4.6c0-.5.4-.9.9-.9h4.6c.5 0 .9.4.9.9v.6h-3.1c-.28 0-.5.22-.5.5s.22.5.5.5h2.1c.5 0 .9.4.9.9v2.2c0 .5-.4.9-.9.9h-1.1c-.5 0-.9.4-.9.9v.6c0 .5.4.9.9.9h.6c.5 0 .9.4.9.9v1.7c0 .5-.4.9-.9.9h-1.1c-.5 0-.9.4-.9.9v2.6c0 .5.4.9.9.9h2.6c.5 0 .9-.4.9-.9v-1.1c0-.5.4-.9.9-.9h1.7c.5 0 .9-.4.9-.9v-2.1c0-.28.22-.5.5-.5h.6c.5 0 .9-.4.9-.9v-2.84c0-.6.34-1.07.81-1.28 1.47-.63 3.03-.95 4.64-.95 2.95 0 5.75 1.1 7.85 3.09 1.99 2.1 3.11 4.81 3.11 7.76 0 2.96-1.1 5.75-3.09 7.86-2.1 1.99-4.81 3.11-7.76 3.11z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;