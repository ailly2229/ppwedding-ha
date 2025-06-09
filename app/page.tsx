"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, Phone, Mail, MapPin, Globe, X } from "lucide-react"
import Image from "next/image"

export default function LGBTQWeddingServices() {
  const [showBookingModal, setShowBookingModal] = useState(false)
  const [showContactModal, setShowContactModal] = useState<"phone" | "email" | "line" | null>(null)
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [customerName, setCustomerName] = useState("")
  const [customerPhone, setCustomerPhone] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [language, setLanguage] = useState<"en" | "zh">("en")

  // Translations
  const translations = {
    en: {
      // Header
      brandName: "PP.Country",
      tagline: "beloved partners of the rainbow group",
      since: "since 2023",

      // Hero
      heroTitle: "International Wedding in Bangkok",
      heroSubtitle1: "Same-sex marriage registration & cathedral blessings",
      heroSubtitle2: "Wedding Packages",
      badge1: "✅ 100% LGBTQ+ Friendly",
      badge2: "🏳️‍🌈 International Same-Sex Unions",
      badge3: "✝️ Progressive Cathedral",
      badge4: "🏆 Bangkok Pride Certified",
      startJourney: "Start Your Journey",

      // Legal Marriage Services
      legalServicesTitle: "Legal Marriage Services",
      marriageRegistration: "Marriage Registration",
      noDualAuth: "No dual authentication required",
      chineseEmbassy: "Chinese Embassy in Thailand Certification",
      registrationNote:
        "★No need for domestic dual authentication. Only passport copy required for appointment. Certificate can be obtained within 4 days of arrival in Bangkok.",
      registrationProcessTitle: "Registration Process:",
      registrationStep1: "① Registration appointment",
      registrationStep2: "② Translation assistance",
      registrationStep3: "③ English translation & certification of marriage certificate",
      registrationStep4: "④ Transportation on registration day: Hotel-Registry-Church-Round trip transfer",
      churchWedding: "Basic Church Wedding Ceremony",
      cathedral: "Cathedral of the Assumption of Mary",
      ceremonyIncludesTitle: "Ceremony Includes:",
      ceremonyItem1: "• Venue setup",
      ceremonyItem2: "• Priest arrangement",
      ceremonyItem3: "• Floral decor",
      ceremonyItem4: "• Photography",
      ceremonyItem5: "• Same registration process as above",
      price: "83,900 THB",
      priceUSD: "(≈$2,500 USD)",
      bookAppointment: "Book Appointment",

      // Wedding Packages
      packagesTitle: "Inclusive Wedding Packages",
      bestValue: "BEST VALUE",
      packageA: "Pride Package A",
      essentialCelebration: "Essential Celebration",
      packageAItem1: "Legal marriage registration",
      packageAItem2: "Cathedral blessing ceremony",
      packageAItem3: "1-day LGBTQ+ friendly photoshoot",
      packageAItem4: "1-night at",
      packageAItem5: "Pride-flag decorated Toyota Commuter",
      chooseHotel: "Choose hotel",
      priceA: "119,900 THB",
      bookNow: "Book Now",

      luxury: "LUXURY",
      packageB: "Deluxe Pride Package B",
      ultimateExperience: "Ultimate Pride Experience",
      packageBItem1: "Everything in Package A plus...",
      packageBItem2: "2-day photoshoot at LGBTQ+ hotspots",
      packageBItem3: "2-nights luxury suite at",
      packageBItem4: "Romantic dinner at",
      packageBItem5: "Couples spa at",
      packageBItem6: "Luxury transport:",
      chooseRestaurant: "Choose restaurant",
      chooseSpa: "Choose spa",
      chooseVehicle: "Choose vehicle",
      priceB: "155,900 THB",

      // Gallery
      galleryTitle: "Our Wedding Gallery",

      // Testimonials
      testimonialsTitle: "Testimonials",
      testimonial1:
        "As a gay couple from Singapore, we never dreamed we could have such a beautiful church blessing. The team made us feel completely welcome and handled all the legal complexities.",
      testimonial1Author: "- Mark & Ryan",
      testimonial1Year: "2024",
      testimonial2:
        "The rainbow flower arches and inclusive language in our ceremony brought us to tears. Worth every baht!",
      testimonial2Author: "- Sofia & Lena",
      testimonial2Year: "2025",

      // Important Information
      infoTitle: "Important Information",
      legalStatusTitle: "Legal Status",
      legalStatusText: "While Thailand doesn't yet recognize same-sex marriage nationally, our packages provide:",
      legalStatusItem1: "• Internationally recognized marriage certificates",
      legalStatusItem2: "• Symbolic cathedral blessings (fully LGBTQ+ affirming)",

      customizationTitle: "Customization",
      customizationText: "All packages can be modified for:",
      customizationItem1: "• Non-binary/genderqueer ceremonies",
      customizationItem2: "• Drag queen officiants",
      customizationItem3: "• Polyamorous commitment ceremonies",

      safetyTitle: "Safety",
      safetyText: "Discreet services available for couples from restrictive countries",

      // Contact
      contactTitle: "Ready to Start Planning?",
      contactText: "Contact us today to begin your beautiful LGBTQ+ wedding journey in Bangkok",
      callUs: "Call Us",
      emailUs: "Email Us",
      line: "LINE",
      location: "Bangkok, Thailand",

      // Footer
      celebratingLove: "Celebrating love in all its beautiful forms",
      copyright: "© 2024 PPCountry International Wedding. All rights reserved.",

      // Modals
      bookingTitle: "Book Your Appointment",
      selectDate: "Select Date",
      yourName: "Your Name",
      namePlaceholder: "Enter your full name",
      phoneNumber: "Phone Number",
      phonePlaceholder: "Enter your phone number",
      submit: "Submit",
      submitting: "Submitting...",
      cancel: "Cancel",
      appointmentBooked: "Appointment Booked!",
      thankYou: "Thank you",
      confirmationText: "! We'll contact you at",
      confirmationText2: "to confirm your appointment.",
      close: "Close",

      // Contact Modals
      phoneContact: "Phone Number",
      emailContact: "Email Address",
      lineQR: "LINE QR Code",
      scanQR: "Scan this QR code with your LINE app",
    },
    zh: {
      // Header
      brandName: "PP.Country",
      tagline: "彩虹群体的挚爱伙伴",
      since: "始于2023年",

      // Hero
      heroTitle: "曼谷国际婚礼",
      heroSubtitle1: "同性婚姻登记与大教堂祝福",
      heroSubtitle2: "婚礼套餐",
      badge1: "✅ 100% LGBTQ+ 友好",
      badge2: "🏳️‍🌈 国际同性婚姻",
      badge3: "✝️ 进步大教堂",
      badge4: "🏆 曼谷骄傲认证",
      startJourney: "开始您的旅程",

      // Legal Marriage Services
      legalServicesTitle: "法律婚姻服务",
      marriageRegistration: "婚姻登记",
      noDualAuth: "无需双重认证",
      chineseEmbassy: "泰国中国大使馆认证",
      registrationNote: "★无需国内双重认证。预约只需护照复印件。证书可在抵达曼谷后4天内获得。",
      registrationProcessTitle: "登记流程：",
      registrationStep1: "① 登记预约",
      registrationStep2: "② 翻译协助",
      registrationStep3: "③ 婚姻证书英文翻译与认证",
      registrationStep4: "④ 登记日交通：酒店-登记处-教堂-往返接送",
      churchWedding: "基础教堂婚礼仪式",
      cathedral: "圣母升天大教堂",
      ceremonyIncludesTitle: "仪式包括：",
      ceremonyItem1: "• 场地布置",
      ceremonyItem2: "• 神父安排",
      ceremonyItem3: "• 花卉装饰",
      ceremonyItem4: "• 摄影服务",
      ceremonyItem5: "• 与上述相同的登记流程",
      price: "83,900 泰铢",
      priceUSD: "(约$2,500 美元)",
      bookAppointment: "预约咨询",

      // Wedding Packages
      packagesTitle: "包容性婚礼套餐",
      bestValue: "最佳价值",
      packageA: "骄傲套餐 A",
      essentialCelebration: "基础庆典",
      packageAItem1: "法律婚姻登记",
      packageAItem2: "大教堂祝福仪式",
      packageAItem3: "1天LGBTQ+友好摄影",
      packageAItem4: "入住1晚",
      packageAItem5: "彩虹旗装饰丰田通勤车",
      chooseHotel: "选择酒店",
      priceA: "119,900 泰铢",
      bookNow: "立即预订",

      luxury: "豪华",
      packageB: "豪华骄傲套餐 B",
      ultimateExperience: "终极骄傲体验",
      packageBItem1: "包含套餐A的所有内容，外加...",
      packageBItem2: "2天LGBTQ+热点摄影",
      packageBItem3: "2晚豪华套房于",
      packageBItem4: "浪漫晚餐于",
      packageBItem5: "情侣水疗于",
      packageBItem6: "豪华交通：",
      chooseRestaurant: "选择餐厅",
      chooseSpa: "选择水疗",
      chooseVehicle: "选择车辆",
      priceB: "155,900 泰铢",

      // Gallery
      galleryTitle: "我们的婚礼画廊",

      // Testimonials
      testimonialsTitle: "客户评价",
      testimonial1:
        "作为来自新加坡的同性伴侣，我们从未梦想过能有如此美丽的教堂祝福。团队让我们感到完全受欢迎，并处理了所有法律复杂事务。",
      testimonial1Author: "- Mark 和 Ryan",
      testimonial1Year: "2024年",
      testimonial2: "彩虹花拱门和仪式中包容的语言让我们感动落泪。每一铢都值得！",
      testimonial2Author: "- Sofia 和 Lena",
      testimonial2Year: "2025年",

      // Important Information
      infoTitle: "重要信息",
      legalStatusTitle: "法律状态",
      legalStatusText: "虽然泰国尚未在全国范围内承认同性婚姻，但我们的套餐提供：",
      legalStatusItem1: "• 国际认可的婚姻证书",
      legalStatusItem2: "• 象征性大教堂祝福（完全LGBTQ+肯定）",

      customizationTitle: "定制选项",
      customizationText: "所有套餐可针对以下情况进行修改：",
      customizationItem1: "• 非二元/性别酷儿仪式",
      customizationItem2: "• 变装皇后主持",
      customizationItem3: "• 多元爱情承诺仪式",

      safetyTitle: "安全",
      safetyText: "为来自限制性国家的伴侣提供谨慎服务",

      // Contact
      contactTitle: "准备开始规划？",
      contactText: "立即联系我们，开始您在曼谷美丽的LGBTQ+婚礼之旅",
      callUs: "致电我们",
      emailUs: "电子邮件",
      line: "LINE",
      location: "泰国曼谷",

      // Footer
      celebratingLove: "庆祝各种形式的美丽爱情",
      copyright: "© 2024 PPCountry国际婚礼。保留所有权利。",

      // Modals
      bookingTitle: "预约咨询",
      selectDate: "选择日期",
      yourName: "您的姓名",
      namePlaceholder: "输入您的全名",
      phoneNumber: "电话号码",
      phonePlaceholder: "输入您的电话号码",
      submit: "提交",
      submitting: "提交中...",
      cancel: "取消",
      appointmentBooked: "预约已确认！",
      thankYou: "感谢您",
      confirmationText: "！我们将通过",
      confirmationText2: "联系您确认预约。",
      close: "关闭",

      // Contact Modals
      phoneContact: "电话号码",
      emailContact: "电子邮箱",
      lineQR: "LINE 二维码",
      scanQR: "使用LINE应用扫描此二维码",
    },
  }

  // Get current translation based on selected language
  const t = translations[language]

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-sm border-b border-rainbow sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold relative">
              <div className="absolute inset-0 flex items-center justify-center">
                <Image
                  src="/images/pp-logo-new.jpeg"
                  alt="PP Country Logo"
                  width={60}
                  height={60}
                  className="object-cover w-full h-full rounded-full"
                  style={{ objectPosition: "center" }}
                />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                {t.brandName}
              </span>
              <span className="text-xs text-gray-600">{t.tagline}</span>
              <span className="text-xs text-gray-500">{t.since}</span>
            </div>
          </div>

          {/* Language Selector */}
          <div className="flex items-center gap-2">
            <Globe className="w-4 h-4 text-gray-500" />
            <div className="flex border rounded-md overflow-hidden">
              <button
                className={`px-2 py-1 text-xs ${language === "en" ? "bg-blue-100 text-blue-700" : "bg-white text-gray-700"}`}
                onClick={() => setLanguage("en")}
              >
                EN
              </button>
              <button
                className={`px-2 py-1 text-xs ${language === "zh" ? "bg-blue-100 text-blue-700" : "bg-white text-gray-700"}`}
                onClick={() => setLanguage("zh")}
              >
                中文
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative py-20 px-4 text-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-blue-500/10"></div>
        <div className="container mx-auto relative z-10">
          <div className="flex justify-center mb-6">
            <div className="text-6xl">❤️</div>
          </div>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent leading-tight">
            {t.heroTitle}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            {t.heroSubtitle1}
            <br />
            {t.heroSubtitle2}
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <Badge className="bg-pink-100 text-pink-800 px-4 py-2">{t.badge1}</Badge>
            <Badge className="bg-purple-100 text-purple-800 px-4 py-2">{t.badge2}</Badge>
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2">{t.badge3}</Badge>
            <Badge className="bg-green-100 text-green-800 px-4 py-2">{t.badge4}</Badge>
          </div>
          <Button
            size="lg"
            className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8 py-3 text-lg"
          >
            {t.startJourney}
          </Button>
        </div>
      </section>

      {/* Legal Marriage Services */}
      <section id="services" className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.legalServicesTitle}</h2>

          <Card className="max-w-5xl mx-auto border-2 border-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 p-0.5">
            <div className="bg-white rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Marriage Registration */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">📋</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{t.marriageRegistration}</h3>
                      <p className="text-sm text-gray-600">{t.noDualAuth}</p>
                      <p className="text-sm text-gray-600">{t.chineseEmbassy}</p>
                    </div>
                  </div>

                  <p className="text-purple-600 font-semibold mb-4">{t.registrationNote}</p>

                  <h4 className="font-semibold mb-3 text-gray-800">{t.registrationProcessTitle}</h4>
                  <ul className="space-y-2 text-gray-700 mb-4">
                    <li>{t.registrationStep1}</li>
                    <li>{t.registrationStep2}</li>
                    <li>{t.registrationStep3}</li>
                    <li>{t.registrationStep4}</li>
                  </ul>
                </div>

                {/* Church Wedding Ceremony */}
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-lg">⛪</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">{t.churchWedding}</h3>
                      <p className="text-sm text-gray-600">{t.cathedral}</p>
                    </div>
                  </div>

                  <h4 className="font-semibold mb-3 text-gray-800">{t.ceremonyIncludesTitle}</h4>
                  <ul className="space-y-2 text-gray-700 mb-6">
                    <li>{t.ceremonyItem1}</li>
                    <li>{t.ceremonyItem2}</li>
                    <li>{t.ceremonyItem3}</li>
                    <li>{t.ceremonyItem4}</li>
                    <li>{t.ceremonyItem5}</li>
                  </ul>
                </div>
              </div>

              <div className="flex flex-col md:flex-row justify-center items-center gap-4 mt-6">
                <div className="text-center">
                  <div className="text-2xl font-bold text-purple-600">{t.price}</div>
                  <div className="text-gray-600">{t.priceUSD}</div>
                </div>
                <Button
                  onClick={() => setShowBookingModal(true)}
                  size="lg"
                  className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white px-8"
                >
                  {t.bookAppointment}
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Wedding Packages */}
      <section id="packages" className="py-16 px-4 bg-white/70">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.packagesTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {/* Package A */}
            <Card className="relative overflow-hidden border-2 border-pink-200 hover:border-pink-400 transition-colors">
              <Badge className="absolute top-4 right-4 bg-green-500 text-white">{t.bestValue}</Badge>
              <CardHeader>
                <div className="text-2xl mb-2">🏳️‍🌈</div>
                <CardTitle className="text-2xl">{t.packageA}</CardTitle>
                <CardDescription className="text-lg font-semibold text-purple-600">
                  {t.essentialCelebration}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📜</span>
                    <span>{t.packageAItem1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">⛪</span>
                    <span>{t.packageAItem2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📸</span>
                    <span>{t.packageAItem3}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">🏨</span>
                    <div className="flex-1">
                      <span>{t.packageAItem4} </span>
                      <Select>
                        <SelectTrigger className="w-48 inline-flex">
                          <SelectValue placeholder={t.chooseHotel} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mandarin">Mandarin Oriental</SelectItem>
                          <SelectItem value="capella">Capella</SelectItem>
                          <SelectItem value="siam">The Siam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">🚗</span>
                    <span>{t.packageAItem5}</span>
                  </li>
                </ul>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-pink-600">{t.priceA}</div>
                </div>
                <Button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-500 text-white"
                >
                  {t.bookNow}
                </Button>
              </CardContent>
            </Card>

            {/* Package B */}
            <Card className="relative overflow-hidden border-2 border-purple-200 hover:border-purple-400 transition-colors">
              <Badge className="absolute top-4 right-4 bg-purple-500 text-white">{t.luxury}</Badge>
              <CardHeader>
                <div className="text-2xl mb-2">🌈</div>
                <CardTitle className="text-2xl">{t.packageB}</CardTitle>
                <CardDescription className="text-lg font-semibold text-purple-600">
                  {t.ultimateExperience}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-center gap-2">
                    <span className="text-lg">💍</span>
                    <span>{t.packageBItem1}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">📸</span>
                    <span>{t.packageBItem2}</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">🏨</span>
                    <div className="flex-1">
                      <span>{t.packageBItem3} </span>
                      <Select>
                        <SelectTrigger className="w-48 inline-flex">
                          <SelectValue placeholder={t.chooseHotel} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="mandarin">Mandarin Oriental</SelectItem>
                          <SelectItem value="capella">Capella</SelectItem>
                          <SelectItem value="siam">The Siam</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">🍽️</span>
                    <div className="flex-1">
                      <span>{t.packageBItem4} </span>
                      <Select>
                        <SelectTrigger className="w-48 inline-flex">
                          <SelectValue placeholder={t.chooseRestaurant} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="normandie">Le Normandie</SelectItem>
                          <SelectItem value="blue">Blue by Alain Ducasse</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">💆‍♂️</span>
                    <div className="flex-1">
                      <span>{t.packageBItem5} </span>
                      <Select>
                        <SelectTrigger className="w-48 inline-flex">
                          <SelectValue placeholder={t.chooseSpa} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="divana">Divana Spa</SelectItem>
                          <SelectItem value="oasis">Oasis Spa</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-lg">🚙</span>
                    <div className="flex-1">
                      <span>{t.packageBItem6} </span>
                      <Select>
                        <SelectTrigger className="w-48 inline-flex">
                          <SelectValue placeholder={t.chooseVehicle} />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="alphard">Toyota Alphard</SelectItem>
                          <SelectItem value="mercedes">Mercedes V-Class</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </li>
                </ul>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-purple-600">{t.priceB}</div>
                </div>
                <Button
                  onClick={() => setShowBookingModal(true)}
                  className="w-full bg-gradient-to-r from-purple-500 to-blue-500 hover:from-purple-600 hover:to-blue-500 text-white"
                >
                  {t.bookNow}
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Sample Display */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.galleryTitle}</h2>

          {/* Wedding Ceremonies */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-purple-600">Wedding Ceremonies</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-1.png"
                  alt="Two grooms in burgundy/dark suits kissing outdoors"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-2.png"
                  alt="Two men at wedding, one in patterned vest, one in floral jacket"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-3.png"
                  alt="Two women in intimate embrace on beach/outdoor setting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-4.png"
                  alt="Two brides in white dresses under floral arch in garden"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-5.png"
                  alt="Two grooms in mint green and white suits under circular floral arch"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-6.png"
                  alt="Beautiful cathedral with dome and bell tower"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-7.png"
                  alt="Two grooms in light colored suits shaking hands in garden"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-square overflow-hidden rounded-lg">
                <img
                  src="/images/wedding-8.png"
                  alt="Two brides with colorful smoke and bridesmaids in pink"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Luxury Transport */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-blue-600">Luxury Transport</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpha1-4Q9IN8IFbDmiLVQetHzW4pm6uMMloC.jpeg"
                  alt="Fleet of luxury Toyota Alphard vehicles with professional drivers"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/alpha2-jI27aXUdJPWsoos9WgncNPHfWxzsON.jpeg"
                  alt="Toyota Alphard luxury transport in Bangkok traffic"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toyota1-4wteS0JXLXLBXuGUlDItmAuUAr6APg.jpeg"
                  alt="Toyota All New Commuter VIP with luxury pink interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/toyota2-zhMTouZRcyjwzRLU9TR6Sdm1fRtiUc.jpeg"
                  alt="Toyota Commuter VIP with golden luxury interior"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Luxury Suites */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-pink-600">Luxury Suites</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel.jpg-WHYjVIg8fc9MpYXhogcJv0x3DI7PSz.jpeg"
                  alt="Luxury hotel exterior with palm trees and elegant architecture"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel2.jpg-2MSqi8v4W2zWxcGcWIdNvqdsnajiXx.jpeg"
                  alt="Romantic luxury hotel suite with fireplace, crystal chandelier, marble bathroom and rose petals"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel3.jpg-S0vh8YyyLJbRoc2rLPgcjlOPgFGqiX.jpeg"
                  alt="Elegant luxury hotel suite bedroom with sophisticated decor, mirrored wardrobes and city views"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/hotel5.jpg-IUR5qxXNBmcMTvcbd90IgE9BVQJmBC.jpeg"
                  alt="Luxury modern suite with floor-to-ceiling windows, platform bed, and serene water views"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Fine Dining */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-orange-600">Fine Dining</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dinner1.jpg-8XJd2mxT99ljtZNjSZiSYfMZCqbz65.jpeg"
                  alt="Elegant rooftop restaurant with panoramic city views and sunset ambiance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dinner4.jpg-D0xxGqQEzyTh26e8tUQ6UL5lmf9yEW.jpeg"
                  alt="Rooftop restaurant with city skyline view and evening ambiance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dinner2.jpg-Q4MENvqbsrTh4vbjBID6omAr4wkbKs.jpeg"
                  alt="Grand hotel atrium restaurant with colonial architecture and elegant seating"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dinner3.jpg-UnvHruHA1WvnSODXyotzRpId7UrAZL.jpeg"
                  alt="Romantic outdoor restaurant terrace with candles and evening atmosphere"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>

          {/* Spa & Wellness */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-center mb-8 text-green-600">Spa & Wellness</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spa1.jpg-TcfNjZHtgEeoiHMkMr43R1prd7G49K.jpeg"
                  alt="Luxury spa treatment room with massage beds, freestanding bathtub and city skyline views"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spa3.jpg-rPbwLlELWxMi4kLgUN6WrqsTYi5MLY.jpeg"
                  alt="Romantic spa setting with wooden hot tub surrounded by tropical plants and candles"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spa4.jpg-NLTcxaYHzPDtweCmWZgUFiKsi0Arjm.jpeg"
                  alt="Natural herbal bath experience with tropical garden setting"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="aspect-video overflow-hidden rounded-lg">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/spa5.jpg-MCFXspF69nUq123iUi1TGaBoVS6VBJ.jpeg"
                  alt="Luxury tropical villa with private pool, palm trees and evening ambiance"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 px-4 bg-gradient-to-r from-pink-50 to-purple-50">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.testimonialsTitle}</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{t.testimonial1}</p>
              <div className="text-right">
                <p className="font-semibold">{t.testimonial1Author}</p>
                <p className="text-sm text-gray-500">{t.testimonial1Year}</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">{t.testimonial2}</p>
              <div className="text-right">
                <p className="font-semibold">{t.testimonial2Author}</p>
                <p className="text-sm text-gray-500">{t.testimonial2Year}</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="py-16 px-4 bg-blue-50">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">{t.infoTitle}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-blue-600">{t.legalStatusTitle}</h3>
              <p className="text-sm text-gray-600 mb-2">{t.legalStatusText}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>{t.legalStatusItem1}</li>
                <li>{t.legalStatusItem2}</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-purple-600">{t.customizationTitle}</h3>
              <p className="text-sm text-gray-600 mb-2">{t.customizationText}</p>
              <ul className="text-sm text-gray-600 space-y-1">
                <li>{t.customizationItem1}</li>
                <li>{t.customizationItem2}</li>
                <li>{t.customizationItem3}</li>
              </ul>
            </Card>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-green-600">{t.safetyTitle}</h3>
              <p className="text-sm text-gray-600">{t.safetyText}</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 px-4 bg-white/80">
        <div className="container mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">{t.contactTitle}</h2>
          <p className="text-lg text-gray-600 mb-8">{t.contactText}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button
              size="lg"
              className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 hover:from-pink-600 hover:via-purple-600 hover:to-blue-600 text-white"
              onClick={() => setShowContactModal("phone")}
            >
              <Phone className="w-4 h-4 mr-2" />
              {t.callUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-purple-300 text-purple-600 hover:bg-purple-50"
              onClick={() => setShowContactModal("email")}
            >
              <Mail className="w-4 h-4 mr-2" />
              {t.emailUs}
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-green-300 text-green-600 hover:bg-green-50"
              onClick={() => setShowContactModal("line")}
            >
              <Image src="/images/line-logo-new.png" alt="LINE" width={16} height={16} className="mr-2" />
              {t.line}
            </Button>
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <MapPin className="w-4 h-4" />
            <span>{t.location}</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-6 h-6 rounded-full overflow-hidden border border-gold">
              <Image
                src="/images/pp-logo-new.jpeg"
                alt="PP Country Logo"
                width={24}
                height={24}
                className="object-cover w-full h-full rounded-full"
                style={{ objectPosition: "center" }}
              />
            </div>
            <div className="text-center">
              <div className="text-lg font-bold">{t.brandName}</div>
              <div className="text-xs text-gray-400">{t.tagline}</div>
            </div>
          </div>
          <p className="text-gray-400 mb-4">{t.celebratingLove}</p>
          <p className="text-sm text-gray-500">{t.copyright}</p>
        </div>
      </footer>

      {/* Booking Modal */}
      {showBookingModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold text-center">{t.bookingTitle}</h3>
              <button onClick={() => setShowBookingModal(false)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>

            {!isSubmitted ? (
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">{t.selectDate}</label>
                  <input
                    type="date"
                    className="w-full p-2 border rounded-lg"
                    min={new Date().toISOString().split("T")[0]}
                    onChange={(e) => setSelectedDate(new Date(e.target.value))}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.yourName}</label>
                  <input
                    type="text"
                    className="w-full p-2 border rounded-lg"
                    placeholder={t.namePlaceholder}
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">{t.phoneNumber}</label>
                  <input
                    type="tel"
                    className="w-full p-2 border rounded-lg"
                    placeholder={t.phonePlaceholder}
                    value={customerPhone}
                    onChange={(e) => setCustomerPhone(e.target.value)}
                  />
                </div>

                <div className="flex gap-2">
                  <Button
                    onClick={() => {
                      setIsSubmitting(true)
                      setTimeout(() => {
                        setIsSubmitting(false)
                        setIsSubmitted(true)
                      }, 1500)
                    }}
                    disabled={!selectedDate || !customerName || !customerPhone || isSubmitting}
                    className="flex-1 bg-gradient-to-r from-pink-500 to-purple-500"
                  >
                    {isSubmitting ? t.submitting : t.submit}
                  </Button>
                  <Button variant="outline" onClick={() => setShowBookingModal(false)} className="flex-1">
                    {t.cancel}
                  </Button>
                </div>
              </div>
            ) : (
              <div className="text-center space-y-4">
                <div className="text-4xl">✅</div>
                <h4 className="text-xl font-semibold">{t.appointmentBooked}</h4>
                <p className="text-gray-600">
                  {t.thankYou} {customerName}
                  {t.confirmationText} {customerPhone} {t.confirmationText2}
                </p>
                <Button
                  onClick={() => {
                    setShowBookingModal(false)
                    setIsSubmitted(false)
                    setCustomerName("")
                    setCustomerPhone("")
                    setSelectedDate(undefined)
                  }}
                  className="w-full"
                >
                  {t.close}
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Contact Modals */}
      {showContactModal === "phone" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{t.phoneContact}</h3>
              <button onClick={() => setShowContactModal(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center py-8">
              <Phone className="w-12 h-12 mx-auto text-blue-500 mb-4" />
              <p className="text-2xl font-bold text-gray-800">+66 098 574 8899</p>
            </div>
            <Button onClick={() => setShowContactModal(null)} className="w-full mt-4">
              {t.close}
            </Button>
          </div>
        </div>
      )}

      {showContactModal === "email" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{t.emailContact}</h3>
              <button onClick={() => setShowContactModal(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center py-8">
              <Mail className="w-12 h-12 mx-auto text-purple-500 mb-4" />
              <p className="text-2xl font-bold text-gray-800">linkus@ppcountry.com</p>
            </div>
            <Button onClick={() => setShowContactModal(null)} className="w-full mt-4">
              {t.close}
            </Button>
          </div>
        </div>
      )}

      {showContactModal === "line" && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-2xl font-bold">{t.lineQR}</h3>
              <button onClick={() => setShowContactModal(null)} className="text-gray-500 hover:text-gray-700">
                <X className="w-5 h-5" />
              </button>
            </div>
            <div className="text-center py-4">
              <div className="w-48 h-48 mx-auto mb-4 border-4 border-green-500 p-2 rounded-lg">
                <img src="/images/line-qr.png" alt="LINE QR Code" className="w-full h-full object-contain" />
              </div>
              <p className="text-gray-600">{t.scanQR}</p>
            </div>
            <Button onClick={() => setShowContactModal(null)} className="w-full mt-4">
              {t.close}
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}
