import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { doctors as allDoctors } from "@/data/doctors"

const doctors = allDoctors.slice(0, 3)

const milestones = [
  { year: "1929", text: "Основана первая амбулатория в Ненецком округе" },
  { year: "1935", text: "Открыт первый стационар Ненецкой окружной больницы" },
  { year: "1952", text: "Появилось родильное отделение" },
  { year: "1975", text: "Начала работу санитарная авиация" },
  { year: "1998", text: "Больница переехала в современное здание" },
]

const History = () => {
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

      <section className="relative py-20 overflow-hidden">
        <div
          className="absolute inset-0 z-0"
          style={{
            background: "radial-gradient(125% 125% at 50% 0%, #fff 40%, #6366f1 100%)",
          }}
        />
        <div className="relative z-10 container max-w-5xl text-center">
          <motion.h1
            className="text-3xl font-extrabold lg:text-5xl font-heading mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            История Ненецкой окружной больницы
          </motion.h1>
          <motion.p
            className="text-muted-foreground lg:text-lg max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            От первой амбулатории в тундре до современного медицинского центра — путь длиной почти в век,
            который прошли врачи Ненецкого автономного округа.
          </motion.p>
        </div>
      </section>

      <section className="py-16">
        <div className="container max-w-5xl">
          <motion.img
            src="https://cdn.poehali.dev/projects/e6baf20d-3f0f-44ab-a0b3-f567d9bbd523/files/0d847f6d-d69b-4c60-9ed9-6a6e181d830a.jpg"
            alt="Здание Ненецкой окружной больницы, историческое фото"
            className="w-full rounded-2xl shadow-lg mb-6 object-cover max-h-[420px]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          />
          <p className="text-center text-sm text-muted-foreground">
            Здание Ненецкой окружной больницы, архивное фото
          </p>
        </div>
      </section>

      <section className="py-16 bg-slate-50">
        <div className="container max-w-4xl">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-center mb-12">
            Ключевые вехи истории
          </h2>
          <div className="flex flex-col gap-6">
            {milestones.map((m, i) => (
              <motion.div
                key={m.year}
                className="flex items-center gap-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <div className="text-xl font-bold text-indigo-600 w-20 shrink-0">{m.year}</div>
                <div className="h-px flex-1 bg-indigo-200" />
                <div className="text-left flex-[3]">{m.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container max-w-6xl">
          <h2 className="text-2xl lg:text-3xl font-bold font-heading text-center mb-4">
            Главные врачи больницы
          </h2>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Люди, которые десятилетиями возглавляли медицину округа и определяли её развитие
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {doctors.map((doc, i) => (
              <motion.div
                key={doc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link to={`/doctors/${doc.id}`}>
                  <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                    <div className="overflow-hidden">
                      <img
                        src={doc.photo}
                        alt={doc.name}
                        className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <CardContent className="pt-6">
                      <h3 className="font-bold text-lg mb-1">{doc.name}</h3>
                      <p className="text-sm text-indigo-600 font-medium mb-3">{doc.years}</p>
                      <p className="text-sm text-muted-foreground">{doc.shortBio}</p>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/doctors">
                Все 39 врачей округа
                <Icon name="ArrowRight" size={18} className="ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/archive">
                <Icon name="Archive" size={18} className="mr-2" />
                Архивные материалы
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/departments">
                <Icon name="Building2" size={18} className="mr-2" />
                Отделения сегодня
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link to="/sources">
                <Icon name="BookOpen" size={18} className="mr-2" />
                Источники информации
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default History