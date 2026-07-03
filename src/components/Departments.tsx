import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Icon from "@/components/ui/icon"

const departments = [
  {
    icon: "HeartPulse",
    name: "Приёмное отделение",
    description: "Круглосуточный приём экстренных и плановых пациентов, первичная диагностика и маршрутизация.",
  },
  {
    icon: "Baby",
    name: "Родильное отделение",
    description: "Современное родовспоможение, ведение беременности и наблюдение за новорождёнными.",
  },
  {
    icon: "Stethoscope",
    name: "Терапевтическое отделение",
    description: "Диагностика и лечение внутренних заболеваний, диспансерное наблюдение взрослого населения.",
  },
  {
    icon: "Scissors",
    name: "Хирургическое отделение",
    description: "Плановые и экстренные операции, современное операционное оборудование и реанимационная поддержка.",
  },
  {
    icon: "Baby",
    name: "Педиатрическое отделение",
    description: "Медицинская помощь детям от рождения до совершеннолетия, профилактика и диспансеризация.",
  },
  {
    icon: "Plane",
    name: "Санитарная авиация",
    description: "Экстренная эвакуация и оказание помощи жителям отдалённых посёлков и стойбищ округа.",
  },
  {
    icon: "Microscope",
    name: "Клинико-диагностическая лаборатория",
    description: "Современные лабораторные исследования крови, биохимии и других анализов для точной диагностики.",
  },
  {
    icon: "Radiation",
    name: "Отделение лучевой диагностики",
    description: "Рентген, УЗИ и компьютерная томография для быстрой и точной постановки диагноза.",
  },
]

const Departments = () => {
  return (
    <section className="py-20">
      <div className="container max-w-6xl">
        <motion.h2
          className="text-2xl lg:text-3xl font-bold font-heading text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Отделения больницы сегодня
        </motion.h2>
        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Современная Ненецкая окружная больница объединяет несколько отделений, обеспечивающих
          полный цикл медицинской помощи жителям округа
        </motion.p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 4) * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col gap-3">
                  <div className="size-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <Icon name={dept.icon} size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-base">{dept.name}</h3>
                  <p className="text-sm text-muted-foreground">{dept.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Departments
