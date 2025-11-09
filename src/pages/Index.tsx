import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const courses = [
    {
      id: 1,
      title: 'Программирование для начинающих',
      description: 'Изучи основы Python и создай свою первую игру',
      age: '8-11 лет',
      duration: '3 месяца',
      category: 'programming',
      image: '🎮',
      color: 'bg-primary'
    },
    {
      id: 2,
      title: 'Графический дизайн',
      description: 'Научись создавать крутые постеры и иллюстрации',
      age: '10-14 лет',
      duration: '4 месяца',
      category: 'design',
      image: '🎨',
      color: 'bg-purple'
    },
    {
      id: 3,
      title: 'Создание видео и блогинг',
      description: 'Стань популярным видеоблогером',
      age: '12-14 лет',
      duration: '2 месяца',
      category: 'blogging',
      image: '📹',
      color: 'bg-accent'
    },
    {
      id: 4,
      title: 'Разработка игр',
      description: 'Создай свою компьютерную игру на Scratch',
      age: '8-12 лет',
      duration: '3 месяца',
      category: 'programming',
      image: '🕹️',
      color: 'bg-secondary'
    }
  ];

  const reviews = [
    {
      name: 'Анна Петрова',
      text: 'Мой сын прошёл курс по программированию и теперь создаёт свои игры! Преподаватели — настоящие профессионалы.',
      rating: 5
    },
    {
      name: 'Дмитрий Иванов',
      text: 'Отличная платформа! Дочка научилась работать в Photoshop и теперь мечтает стать дизайнером.',
      rating: 5
    },
    {
      name: 'Елена Сидорова',
      text: 'Кураторы всегда на связи, программа адаптируется под ребёнка. Рекомендую!',
      rating: 5
    }
  ];

  const filteredCourses = activeCategory === 'all' 
    ? courses 
    : courses.filter(course => course.category === activeCategory);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-muted">
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="text-3xl">🚀</div>
              <h1 className="text-2xl font-bold text-primary">SKILLBOX JUNIOR</h1>
            </div>
            <nav className="hidden md:flex items-center gap-6">
              <a href="#courses" className="text-foreground hover:text-primary transition-colors">Курсы</a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors">О нас</a>
              <a href="#reviews" className="text-foreground hover:text-primary transition-colors">Отзывы</a>
              <a href="#blog" className="text-foreground hover:text-primary transition-colors">Блог</a>
              <Button size="lg" className="rounded-full">Выбрать курс</Button>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <Badge className="mb-4 text-sm px-4 py-1 bg-secondary text-secondary-foreground">
                Для детей 8-14 лет
              </Badge>
              <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                Раскрой творческий потенциал своего ребёнка
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Научим программированию, дизайну и блогингу через персонализированное обучение 
                с поддержкой профессиональных кураторов
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="rounded-full text-lg px-8 py-6 bg-primary hover:bg-primary/90">
                  Начать обучение
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6">
                  Бесплатный урок
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple/20 rounded-3xl blur-3xl"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-2xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">👨‍💻</div>
                    <div className="text-3xl font-bold text-primary">500+</div>
                    <div className="text-sm text-muted-foreground">Учеников</div>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">⭐</div>
                    <div className="text-3xl font-bold text-purple">4.9</div>
                    <div className="text-sm text-muted-foreground">Рейтинг</div>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">📚</div>
                    <div className="text-3xl font-bold text-secondary">15+</div>
                    <div className="text-sm text-muted-foreground">Курсов</div>
                  </div>
                  <div className="bg-muted rounded-2xl p-6 text-center">
                    <div className="text-4xl mb-2">🎓</div>
                    <div className="text-3xl font-bold text-accent">95%</div>
                    <div className="text-sm text-muted-foreground">Завершают</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="about">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Почему выбирают нас?</h3>
            <p className="text-xl text-muted-foreground">Современный подход к обучению детей цифровым профессиям</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: 'Users',
                title: 'Персональный куратор',
                description: 'Каждому ученику назначается персональный наставник',
                color: 'text-primary'
              },
              {
                icon: 'Sparkles',
                title: 'Практика с первого дня',
                description: 'Создавайте реальные проекты с самого начала',
                color: 'text-purple'
              },
              {
                icon: 'Award',
                title: 'Профессионалы',
                description: 'Курсы создают действующие специалисты из индустрии',
                color: 'text-secondary'
              },
              {
                icon: 'TrendingUp',
                title: 'Гибкий график',
                description: 'Учитесь в удобном темпе без привязки ко времени',
                color: 'text-accent'
              }
            ].map((feature, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all hover:shadow-lg hover:-translate-y-1 duration-300">
                <CardHeader>
                  <div className={`w-14 h-14 rounded-2xl bg-muted flex items-center justify-center mb-4 ${feature.color}`}>
                    <Icon name={feature.icon} size={28} />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20" id="courses">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Популярные курсы</h3>
            <p className="text-xl text-muted-foreground mb-8">Выберите направление для развития вашего ребёнка</p>
          </div>
          
          <Tabs defaultValue="all" className="w-full mb-12">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4 h-12">
              <TabsTrigger value="all" onClick={() => setActiveCategory('all')}>Все</TabsTrigger>
              <TabsTrigger value="programming" onClick={() => setActiveCategory('programming')}>Программирование</TabsTrigger>
              <TabsTrigger value="design" onClick={() => setActiveCategory('design')}>Дизайн</TabsTrigger>
              <TabsTrigger value="blogging" onClick={() => setActiveCategory('blogging')}>Блогинг</TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredCourses.map((course, index) => (
              <Card key={course.id} className="overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 animate-scale-in" style={{ animationDelay: `${index * 100}ms` }}>
                <div className={`${course.color} h-40 flex items-center justify-center text-7xl`}>
                  {course.image}
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-base">{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Calendar" size={12} className="mr-1" />
                      {course.duration}
                    </Badge>
                    <Badge variant="outline" className="text-xs">
                      <Icon name="User" size={12} className="mr-1" />
                      {course.age}
                    </Badge>
                  </div>
                  <Button className="w-full rounded-full">
                    Подробнее
                    <Icon name="ArrowRight" size={16} className="ml-2" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-white" id="reviews">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl lg:text-5xl font-bold mb-4">Отзывы родителей</h3>
            <p className="text-xl text-muted-foreground">Что говорят о нас семьи наших учеников</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-center gap-1 mb-2">
                    {[...Array(review.rating)].map((_, i) => (
                      <Icon key={i} name="Star" size={18} className="text-accent fill-accent" />
                    ))}
                  </div>
                  <CardTitle className="text-lg">{review.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">{review.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gradient-to-r from-primary to-purple text-white" id="blog">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold mb-6">Начните обучение сегодня!</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Запишитесь на бесплатный пробный урок и убедитесь в качестве нашего обучения
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" variant="secondary" className="rounded-full text-lg px-8 py-6">
              Записаться на урок
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="rounded-full text-lg px-8 py-6 bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary">
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      <footer className="bg-foreground text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="text-3xl">🚀</div>
                <h4 className="text-xl font-bold">SKILLBOX JUNIOR</h4>
              </div>
              <p className="text-white/70">Образовательная платформа для детей 8-14 лет</p>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Курсы</h5>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">Программирование</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Дизайн</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блогинг</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Компания</h5>
              <ul className="space-y-2 text-white/70">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Преподаватели</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Блог</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4">Контакты</h5>
              <ul className="space-y-2 text-white/70">
                <li className="flex items-center gap-2">
                  <Icon name="Mail" size={16} />
                  info@skillboxjunior.ru
                </li>
                <li className="flex items-center gap-2">
                  <Icon name="Phone" size={16} />
                  +7 (800) 123-45-67
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 mt-12 pt-8 text-center text-white/70">
            <p>&copy; 2024 SKILLBOX JUNIOR. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
