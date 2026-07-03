import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Icon from "@/components/ui/icon"
import { doctors } from "@/data/doctors"

const Doctors = () => {
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
          Врачи Ненецкого автономного округа
        </motion.h1>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          39 врачей, чьи имена вписаны в историю окружной медицины. Нажмите на карточку, чтобы узнать
          подробную биографию и события эпохи.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doc, i) => (
            <motion.div
              key={doc.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 6) * 0.08 }}
            >
              <Link to={`/doctors/${doc.id}`}>
                <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow cursor-pointer group">
                  <div className="overflow-hidden">
                    <img
                      src={doc.photo}
                      alt={doc.name}
                      className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <CardContent className="pt-4">
                    <h3 className="font-bold text-base mb-1">{doc.name}</h3>
                    <p className="text-sm text-indigo-600 font-medium mb-2">{doc.years}</p>
                    <p className="text-sm text-muted-foreground line-clamp-2">{doc.shortBio}</p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Doctors
