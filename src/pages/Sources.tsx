import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

interface Source {
  icon: string
  title: string
  description: string
}

const sources: Source[] = [
  {
    icon: "Landmark",
    title: "Государственный архив Ненецкого автономного округа",
    description: "Приказы, распоряжения и отчёты окружного отдела здравоохранения разных лет.",
  },
  {
    icon: "BookOpen",
    title: "Книги памяти и краеведческие издания НАО",
    description: "Публикации об истории освоения Севера и становлении медицины в округе.",
  },
  {
    icon: "Newspaper",
    title: "Материалы окружных газет",
    description: "Публикации о работе больницы, врачах и медицинских работниках округа разных лет.",
  },
  {
    icon: "Building2",
    title: "Официальный сайт Ненецкой окружной больницы",
    description: "Действующая структура отделений, кабинетов и служб медицинского учреждения.",
  },
  {
    icon: "Users",
    title: "Воспоминания сотрудников и ветеранов больницы",
    description: "Устные и письменные свидетельства врачей и медицинских сестёр разных поколений.",
  },
  {
    icon: "Image",
    title: "Фотоархив округа",
    description: "Исторические фотографии зданий, коллективов и медицинского оборудования.",
  },
]

const Sources = () => {
  return (
    <div className="min-h-screen w-full bg-white">
      <nav className="w-full px-6 py-4 border-b">
        <div className="mx-auto max-w-7xl flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold font-heading text-gray-900">
            Медицина Севера
          </Link>
          <Button asChild variant="outline">
            <Link to="/history">
              <Icon name="ArrowLeft" size={18} className="mr-2" />
              К истории больницы
            </Link>
          </Button>
        </div>
      </nav>

      <section className="py-16 container max-w-5xl">
        <motion.h1
          className="text-3xl lg:text-4xl font-extrabold font-heading text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Источники информации
        </motion.h1>
        <motion.p
          className="text-center text-muted-foreground max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Материалы, на основе которых собрана история и структура Ненецкой окружной больницы.
          Часть сведений уточняется и будет дополнена по мере пополнения архива.
        </motion.p>

        <div className="grid sm:grid-cols-2 gap-6 mb-12">
          {sources.map((source, i) => (
            <motion.div
              key={source.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow">
                <CardContent className="pt-6 flex flex-col gap-3">
                  <div className="size-12 rounded-xl bg-indigo-100 flex items-center justify-center">
                    <Icon name={source.icon} fallback="FileText" size={24} className="text-indigo-600" />
                  </div>
                  <h3 className="font-bold text-base">{source.title}</h3>
                  <p className="text-sm text-muted-foreground">{source.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="bg-slate-50 border-none">
            <CardContent className="pt-6 flex items-start gap-4">
              <Icon name="Info" size={24} className="text-indigo-600 shrink-0 mt-0.5" />
              <p className="text-sm text-muted-foreground">
                Если у вас есть архивные документы, фотографии или воспоминания о врачах и истории
                больницы — свяжитесь с редакцией сайта, чтобы дополнить материалы достоверными
                сведениями.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </section>
    </div>
  )
}

export default Sources
