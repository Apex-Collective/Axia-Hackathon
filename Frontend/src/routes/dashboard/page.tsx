import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Star,
  Menu,
  X,
  ChevronDown,
  Zap,
  Tag,
  Grid,
  Shield,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

export default function ApexCollectusLanding() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-purple-600"
              >
                <circle
                  cx="12"
                  cy="12"
                  r="10"
                  fill="currentColor"
                  opacity="0.2"
                />
                <path
                  d="M12 6v12M6 12h12"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
              <span className="text-lg font-semibold text-gray-900">
                ApexCollectus
              </span>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a
                href="#discover"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                Discover
              </a>
              <a
                href="#how"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                How it Works
              </a>
              <div className="relative group">
                <button className="flex items-center gap-1 text-sm text-gray-700 hover:text-gray-900">
                  Products <ChevronDown className="w-3 h-3" />
                </button>
              </div>
              <a
                href="#faqs"
                className="text-sm text-gray-700 hover:text-gray-900"
              >
                FAQs
              </a>
            </div>

            {/* Auth Buttons */}
            <div className="hidden md:flex items-center gap-3">
              <Button variant="ghost" className="text-sm">
                Login
              </Button>
              <Button className="bg-black hover:bg-gray-800 text-white text-sm">
                Get Started
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-4 py-4 space-y-3">
              <a href="#discover" className="block text-sm text-gray-700">
                Discover
              </a>
              <a href="#how" className="block text-sm text-gray-700">
                How it Works
              </a>
              <a href="#products" className="block text-sm text-gray-700">
                Products
              </a>
              <a href="#faqs" className="block text-sm text-gray-700">
                FAQs
              </a>
              <div className="pt-3 space-y-2 border-t border-gray-100">
                <Button variant="ghost" className="w-full">
                  Login
                </Button>
                <Button className="w-full bg-black hover:bg-gray-800 text-white">
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-24 md:pt-32 pb-12 md:pb-20 px-4 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-10 left-10 w-32 h-32 border border-purple-100 rounded-2xl transform -rotate-12"></div>
          <div className="absolute top-20 right-10 w-32 h-32 border border-purple-100 rounded-2xl transform rotate-12"></div>
          <div className="absolute bottom-20 left-1/4 w-24 h-24 border border-orange-100 rounded-2xl"></div>
          <div className="absolute top-1/3 right-1/4 w-20 h-20 border border-purple-100 rounded-xl"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center">
          {/* Stars */}
          <div className="flex justify-center gap-1 mb-6">
            <div className="w-6 h-6 bg-purple-600 rounded transform rotate-45"></div>
            <div className="w-6 h-6 bg-purple-600 rounded transform rotate-45"></div>
            <div className="w-6 h-6 bg-purple-600 rounded transform rotate-45"></div>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight">
            Stand Out. <span className="text-orange-500">Get Noticed.</span> In
            minutes.
          </h1>

          <div className="flex items-center justify-center gap-2 mb-8">
            <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center">
              <span className="text-purple-600 text-xs">✓</span>
            </div>
            <p className="text-base md:text-lg text-gray-600">
              Create a room, shareable profile that puts your skills front and
              center
            </p>
          </div>

          {/* Feature Pills - Mobile Responsive */}
          <div className="grid grid-cols-2 md:flex md:flex-wrap items-center justify-center gap-4 md:gap-6 mb-10 max-w-3xl mx-auto">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs md:text-sm text-gray-700">
                Less work to stay sport
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs md:text-sm text-gray-700">
                Lightning-fast setup
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Tag className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs md:text-sm text-gray-700">
                Skill tags that pop
              </span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-4 h-4 text-purple-600" />
              </div>
              <span className="text-xs md:text-sm text-gray-700">
                Availability badge
              </span>
            </div>
          </div>

          <Button
            size="lg"
            className="bg-black hover:bg-gray-800 text-white px-8 h-12"
          >
            Create Profile Now
          </Button>
        </div>
      </section>

      {/* Discover Section */}
      <section id="discover" className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 md:mb-12">
            Discover what's possible!
          </h2>

          <div className="flex flex-wrap justify-center gap-3 mb-10">
            <Button className="rounded-full bg-purple-600 hover:bg-purple-700 text-white">
              Business Savant
            </Button>
            <Button variant="outline" className="rounded-full">
              Hiring Mgmt
            </Button>
          </div>

          {/* Category Tags - Mobile Scrollable */}
          <div className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide">
            <Badge
              variant="outline"
              className="whitespace-nowrap flex items-center gap-1"
            >
              <Users className="w-3 h-3" /> Community
            </Badge>
            <Badge
              variant="outline"
              className="whitespace-nowrap flex items-center gap-1"
            >
              <Briefcase className="w-3 h-3" /> Business
            </Badge>
            <Badge
              variant="outline"
              className="whitespace-nowrap flex items-center gap-1"
            >
              <Grid className="w-3 h-3" /> Data Analysis
            </Badge>
            <Badge variant="outline" className="whitespace-nowrap">
              Business Intelligence
            </Badge>
            <Badge variant="outline" className="whitespace-nowrap">
              Marketing
            </Badge>
            <Badge variant="outline" className="whitespace-nowrap">
              Product Manager
            </Badge>
            <Badge variant="outline" className="whitespace-nowrap">
              Business Developer
            </Badge>
            <Badge variant="outline" className="whitespace-nowrap">
              COO (Executives)
            </Badge>
          </div>

          {/* Profile Cards Grid - Mobile Responsive */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-12">
            {[1, 2, 3, 4].map((item) => (
              <Card
                key={item}
                className="overflow-hidden hover:shadow-lg transition-shadow"
              >
                <CardContent className="p-0">
                  <div className="p-4 md:p-6 border-b">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full"></div>
                        <div>
                          <h3 className="font-bold text-sm md:text-base">
                            {item === 1
                              ? "Tanvi R. Pingale"
                              : item === 2
                              ? "Adele K. Satesvari"
                              : item === 3
                              ? "Chlorine E. Brazil"
                              : "Fatima A. Alica"}
                          </h3>
                          <p className="text-xs text-gray-500">
                            @
                            {item === 1
                              ? "tanviping"
                              : item === 2
                              ? "adeleks"
                              : item === 3
                              ? "chlorinee"
                              : "fatimaa"}
                          </p>
                        </div>
                      </div>
                      <Button
                        size="sm"
                        className="bg-purple-600 hover:bg-purple-700 text-white text-xs"
                      >
                        View Profile
                      </Button>
                    </div>
                    <div className="flex gap-2 flex-wrap mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {item === 1
                          ? "Beauty"
                          : item === 2
                          ? "Analytics"
                          : item === 3
                          ? "Data Visualizing"
                          : "3D Visual"}
                      </Badge>
                      <Badge variant="secondary" className="text-xs">
                        {item === 1
                          ? "Makeup"
                          : item === 2
                          ? "Business"
                          : item === 3
                          ? "adnick FX"
                          : "Ethical Hacking"}
                      </Badge>
                    </div>
                    <p className="text-xs md:text-sm text-gray-600 line-clamp-2">
                      {item === 1
                        ? "Building elegance, love beauty and colors"
                        : item === 2
                        ? "Analytics & Business - Data Driven Decision Making"
                        : item === 3
                        ? "Turning ideas into industrial experiences"
                        : "Securing systems and finding threats in businesses"}
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-2 p-2 bg-gray-50">
                    <div className="aspect-video bg-gradient-to-br from-orange-400 to-pink-500 rounded-lg"></div>
                    <div className="aspect-video bg-gray-900 rounded-lg flex items-center justify-center">
                      <span className="text-white text-xs">Preview</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <p className="text-center text-xl md:text-2xl font-bold mb-12">
            ...and so much more!
          </p>

          {/* Feature Cards - Mobile Responsive */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {[
              {
                title: "Lightning-fast setup",
                desc: "Get online in 60 seconds: pick your look, add your work, hit publish!",
                bg: "bg-white",
              },
              {
                title: "Skill tags that pop",
                desc: "Showcase those expertise cards and you're ahead",
                bg: "bg-purple-50",
              },
              {
                title: "All your work in one spot",
                desc: "Everything a recruiter needs: works, certs and contact details",
                bg: "bg-white",
              },
              {
                title: "Availability badge",
                desc: "Recruiters know exactly where you're at",
                bg: "bg-orange-100",
              },
            ].map((feature, idx) => (
              <Card
                key={idx}
                className={`${feature.bg} hover:shadow-lg transition-shadow`}
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="aspect-square bg-white border border-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 bg-gray-100 rounded-lg"></div>
                  </div>
                  <h3 className="font-bold mb-2 text-sm md:text-base">
                    {feature.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-600 mb-4">
                    {feature.desc}
                  </p>
                  <Button
                    variant="link"
                    className="text-purple-600 text-xs md:text-sm p-0"
                  >
                    Learn More <ArrowRight className="w-3 h-3 ml-1" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Mobile Responsive */}
      <section className="py-12 md:py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            What Our Customers Say
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 mb-10">
            Real stories from real recruiters, freelancers, and more who stands
            out with
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-12">
            {[
              {
                name: "Tanvi D",
                role: "Software Engineer",
                text: "I spent years tweaking my CV and still felt invisible. Created my ApexCollectus profile in 10 minutes — got my best messages the same week.",
                rating: 4.8,
              },
              {
                name: "Dianne R.",
                role: "Product Designer",
                text: "As a recruiter, I hate digging through attachments. ApexCollectus profiles feel like gold. Saves time, gets great results.",
                rating: 4.5,
              },
              {
                name: "Sara M.",
                role: "Marketing",
                text: "Finally a way to showcase my portfolio properly!",
                rating: 4.7,
              },
            ].map((testimonial, idx) => (
              <Card key={idx} className="p-4 md:p-6">
                <p className="text-sm mb-6">{testimonial.text}</p>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-gradient-to-br from-purple-300 to-pink-300 rounded-full"></div>
                  <div>
                    <p className="font-bold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-orange-400 text-orange-400"
                    />
                  ))}
                </div>
                <p className="text-xs text-gray-500">
                  {testimonial.rating} Rating
                </p>
              </Card>
            ))}
          </div>

          {/* Stats - Mobile Responsive */}
          <div className="grid grid-cols-3 gap-4 md:gap-16 max-w-3xl mx-auto">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">10x</p>
              <p className="text-xs md:text-sm text-gray-600">
                Increased Visibility
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">15x</p>
              <p className="text-xs md:text-sm text-gray-600">
                Recruiting Ease
              </p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold mb-1">10x</p>
              <p className="text-xs md:text-sm text-gray-600">Response Rate</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs - Mobile Responsive */}
      <section id="faqs" className="py-12 md:py-20 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-3">
            Frequently asked questions
          </h2>
          <p className="text-center text-sm md:text-base text-gray-600 mb-10">
            All the things you need to know about the ApexCollectus
          </p>

          <Tabs defaultValue="general" className="mb-12">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="general" className="text-xs md:text-sm">
                General
              </TabsTrigger>
              <TabsTrigger value="product" className="text-xs md:text-sm">
                Product
              </TabsTrigger>
              <TabsTrigger value="support" className="text-xs md:text-sm">
                Support
              </TabsTrigger>
              <TabsTrigger value="other" className="text-xs md:text-sm">
                Other
              </TabsTrigger>
            </TabsList>

            <TabsContent value="general" className="space-y-4">
              <Card className="p-4 md:p-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">
                  Is Apex Collectus free?
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Yes! Our basic plan is completely free. We also offer premium
                  plans with additional features.
                </p>
              </Card>
              <Card className="p-4 md:p-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">
                  Do I need an account to start?
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Not at all: you can start right now and build out exactly what
                  you want displayed.
                </p>
              </Card>
              <Card className="p-4 md:p-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">
                  Is my profile public?
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Only when you are ready. We'll generate a unique URL you can
                  share.
                </p>
              </Card>
              <Card className="p-4 md:p-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">
                  Can I edit my profile later?
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Absolutely. Just log in with or edit it whenever you choose.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="product" className="space-y-4">
              <Card className="p-4 md:p-6">
                <h3 className="font-bold mb-2 text-sm md:text-base">
                  What features are available?
                </h3>
                <p className="text-xs md:text-sm text-gray-600">
                  Profile customization, skill tags, portfolio showcase, and
                  more.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer - Mobile Responsive */}
      <footer className="bg-gray-900 text-white py-8 md:py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 mb-8">
            <div className="col-span-2 md:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  className="text-white"
                >
                  <circle
                    cx="12"
                    cy="12"
                    r="10"
                    fill="currentColor"
                    opacity="0.2"
                  />
                  <path
                    d="M12 6v12M6 12h12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
                <span className="text-lg font-bold">ApexCollectus</span>
              </div>
              <p className="text-xs md:text-sm text-gray-400">
                Making top-notch profiles easier by putting the right info in
                the right hands.
              </p>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
                Explore
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Blog & Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Pricing
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
                Company
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Startup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Careers
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold mb-3 md:mb-4 text-sm md:text-base">
                Legal Links
              </h4>
              <ul className="space-y-2 text-xs md:text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Disclaimer
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white">
                    Terms of use
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-6 md:pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs md:text-sm text-gray-400">
              © ApexCollectus. All Rights Reserved
            </p>
            <Button
              variant="link"
              className="text-white text-xs md:text-sm p-0"
              onClick={scrollToTop}
            >
              Back to top <ChevronRight className="w-4 h-4 rotate-[-90deg]" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
