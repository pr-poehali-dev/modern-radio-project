import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface Dept {
  icon: string
  name: string
  description: string
}

interface Category {
  title: string
  items: Dept[]
}

const categories: Category[] = [
  {
    title: "Стационарные отделения",
    items: [
      { icon: "Brain", name: "Психиатрическое отделение", description: "Стационарная помощь пациентам с психическими расстройствами." },
      { icon: "FlaskConical", name: "Патологоанатомическое отделение", description: "Патоморфологическая диагностика и экспертиза." },
      { icon: "Stethoscope", name: "Терапевтическое отделение", description: "Лечение и наблюдение пациентов с заболеваниями внутренних органов." },
      { icon: "HeartPulse", name: "Первично-сосудистое отделение", description: "Помощь пациентам с острыми сосудистыми заболеваниями." },
      { icon: "Syringe", name: "Отделение анестезиологии-реанимации", description: "Интенсивная терапия и анестезиологическое сопровождение операций." },
      { icon: "Flower2", name: "Гинекологическое отделение", description: "Диагностика и лечение женских заболеваний." },
      { icon: "Baby", name: "Родильное отделение", description: "Родовспоможение и наблюдение за роженицами." },
      { icon: "Smile", name: "Детское отделение", description: "Стационарное лечение детей всех возрастов." },
      { icon: "ShieldAlert", name: "Инфекционное отделение", description: "Лечение пациентов с инфекционными заболеваниями." },
      { icon: "Droplet", name: "Трансфузиологическое отделение", description: "Организация переливания крови и её компонентов." },
      { icon: "MapPin", name: "Нижне-Пешская участковая больница", description: "Медицинская помощь жителям посёлка Нижняя Пёша и округи." },
    ],
  },
  {
    title: "Поликлиническая служба",
    items: [
      { icon: "Building2", name: "Поликлиника", description: "Амбулаторный приём взрослого населения округа." },
      { icon: "Building2", name: "Детская поликлиника", description: "Амбулаторное наблюдение и приём детей." },
      { icon: "HeartHandshake", name: "Центр медицинской профилактики / Центр здоровья", description: "Профилактические осмотры и формирование здорового образа жизни." },
    ],
  },
  {
    title: "Диагностические службы",
    items: [
      { icon: "Microscope", name: "Клинико-диагностическая лаборатория", description: "Лабораторные исследования крови, мочи и других биоматериалов." },
      { icon: "Search", name: "Эндоскопическое отделение", description: "Эндоскопические исследования и диагностика." },
      { icon: "Activity", name: "Отделение функциональной диагностики", description: "ЭКГ и другие функциональные исследования организма." },
      { icon: "Radiation", name: "Рентгенологическое отделение", description: "Рентгенодиагностика и снимки для постановки диагноза." },
      { icon: "Waves", name: "Отделение ультразвуковой диагностики", description: "УЗИ-исследования внутренних органов и систем." },
      { icon: "Zap", name: "Физиотерапевтическое отделение", description: "Физиотерапевтические процедуры и реабилитация." },
    ],
  },
  {
    title: "Специализированные кабинеты и службы",
    items: [
      { icon: "ShieldPlus", name: "Кабинет по профилактике инфекционных заболеваний и СПИДа", description: "Профилактика, консультирование и диагностика ВИЧ-инфекции." },
      { icon: "Brain", name: "Кабинет врача-психиатра-нарколога", description: "Консультации и лечение по профилю психиатрии-наркологии." },
      { icon: "UserRound", name: "Кабинет участкового врача-психиатра", description: "Амбулаторное наблюдение пациентов психиатрического профиля." },
      { icon: "Scale", name: "Отделение судебно-психиатрической экспертизы", description: "Проведение судебно-психиатрических экспертиз." },
      { icon: "Video", name: "Кабинет телемедицины", description: "Дистанционные консультации с врачами других медицинских центров." },
      { icon: "Dumbbell", name: "Отделение спортивной медицины", description: "Медицинское сопровождение спортсменов и физкультурников." },
    ],
  },
  {
    title: "Экстренная помощь",
    items: [
      { icon: "Siren", name: "Отделение скорой медицинской помощи", description: "Круглосуточный выезд бригад скорой помощи по округу." },
    ],
  },
]

const Departments = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <nav className="w-full px-6 py-4 border-b">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-heading text-gray-900">
            Медицина Севера
          </Link>
          <Button asChild variant="outline">
            <Link to="/">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              На главную
            </Link>
          </Button>
        </div>
      </nav>

      <section className="py-20">
        <div className="container max-w-6xl">
          <motion.h1
            className="text-3xl lg:text-4xl font-extrabold font-heading text-center mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Отделения больницы сегодня
          </motion.h1>
          <motion.p
            className="text-center text-muted-foreground max-w-2xl mx-auto mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Современная Ненецкая окружная больница объединяет стационар, поликлинику и
            специализированные службы, обеспечивающие полный цикл медицинской помощи жителям округа
          </motion.p>

          <div className="flex flex-col gap-16">
            {categories.map((category, ci) => (
              <div key={category.title}>
                <motion.h2
                  className="text-xl lg:text-2xl font-bold font-heading mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  {category.title}
                </motion.h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.items.map((dept, i) => (
                    <motion.div
                      key={dept.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
                    >
                      <Card className="h-full hover:shadow-lg transition-shadow">
                        <CardContent className="pt-6 flex flex-col gap-3">
                          <div className="size-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                            <Icon name={dept.icon} fallback="Building2" size={24} className="text-indigo-600" />
                          </div>
                          <h3 className="font-bold text-base">{dept.name}</h3>
                          <p className="text-sm text-muted-foreground">{dept.description}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Departments
