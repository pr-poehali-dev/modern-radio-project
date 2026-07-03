import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"

const archiveItems = [
  {
    title: "Приказ об открытии первой амбулатории",
    date: "1929 год",
    image: "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/5e90a4fd-a681-456b-b8f2-4fe775ac07a4.jpg",
    description: "Распоряжение окружного исполкома об организации первого медицинского пункта на территории округа.",
  },
  {
    title: "Коллектив врачей и медсестёр окружной больницы",
    date: "1936 год",
    image: "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/60858873-dcdd-4925-a7b4-c666c2ba3232.jpg",
    description: "Групповая фотография сотрудников больницы на фоне деревянного здания стационара.",
  },
  {
    title: "Отчёт о работе санитарной авиации",
    date: "1976 год",
    image: "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/5e90a4fd-a681-456b-b8f2-4fe775ac07a4.jpg",
    description: "Годовой отчёт об эвакуации пациентов из отдалённых стойбищ силами санитарной авиации округа.",
  },
  {
    title: "Приказ о награждении медицинских работников",
    date: "1985 год",
    image: "https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/5e90a4fd-a681-456b-b8f2-4fe775ac07a4.jpg",
    description: "Документ окружного отдела здравоохранения о поощрении лучших врачей и медсестёр округа.",
  },
]

const Archive = () => {
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

      <section className="py-16 container max-w-6xl">
        <motion.h1
          className="text-3xl lg:text-4xl font-extrabold font-heading text-center mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Архивные материалы округа
        </motion.h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Документы, приказы и фотографии из фондов окружного архива, рассказывающие об истории
          медицины Ненецкого автономного округа.
        </p>

        <div className="grid sm:grid-cols-2 gap-8">
          {archiveItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="h-full overflow-hidden">
                <img src={item.image} alt={item.title} className="w-full h-64 object-cover" />
                <CardContent className="pt-5">
                  <p className="text-sm text-indigo-600 font-semibold mb-1">{item.date}</p>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Archive
