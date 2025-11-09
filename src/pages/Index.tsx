import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [selectedTariff, setSelectedTariff] = useState<string | null>(null);

  const tariffs = [
    {
      id: 'day',
      title: 'Дневной тариф',
      price: '500 ₽',
      period: 'день',
      description: 'Идеально для разовой работы',
      features: ['Рабочее место', 'Wi-Fi', 'Кофе/чай', 'Печать 5 стр.']
    },
    {
      id: 'fixed',
      title: 'Фиксированное место',
      price: '12 000 ₽',
      period: 'месяц',
      description: 'Ваше постоянное рабочее пространство',
      features: ['Личный стол', 'Шкаф для вещей', 'Wi-Fi', 'Безлимитный кофе', 'Печать 100 стр.', 'Участие в мероприятиях']
    },
    {
      id: 'team',
      title: 'Для команды',
      price: 'от 30 000 ₽',
      period: 'месяц',
      description: 'Отдельная зона для вашей команды',
      features: ['Отдельный офис', 'До 10 человек', 'Переговорная 2 ч/день', 'Wi-Fi', 'Кофе-зона', 'Печать безлимит']
    }
  ];

  const events = [
    {
      id: 1,
      date: '15',
      month: 'ноя',
      title: 'Нетворкинг для фрилансеров',
      time: '19:00',
      description: 'Вечер знакомств и обмена опытом между дизайнерами, разработчиками и маркетологами.',
      spots: 12
    },
    {
      id: 2,
      date: '22',
      month: 'ноя',
      title: 'Воркшоп: Устойчивый бизнес',
      time: '18:30',
      description: 'Как строить бизнес с заботой об окружающей среде. Спикер — эко-предприниматель.',
      spots: 8
    },
    {
      id: 3,
      date: '29',
      month: 'ноя',
      title: 'Йога для офисных работников',
      time: '08:00',
      description: 'Утренняя практика для снятия напряжения и заряда энергией на весь день.',
      spots: 15
    }
  ];

  const benefits = [
    {
      icon: 'Leaf',
      title: 'Экологичность',
      description: 'Используем перерабатываемые материалы и энергосберегающие технологии'
    },
    {
      icon: 'Users',
      title: 'Комьюнити',
      description: 'Регулярные мероприятия для обмена опытом и нетворкинга'
    },
    {
      icon: 'Calendar',
      title: 'Гибкость',
      description: 'Работайте по вашим правилам: посуточно, помесячно или по часам'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 bg-card/90 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                <Icon name="Sprout" size={24} className="text-primary-foreground" />
              </div>
              <h1 className="text-xl font-semibold text-foreground">URBAN ROOTS</h1>
            </div>
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground/80 hover:text-foreground transition-colors text-sm">Главная</a>
              <a href="#tariffs" className="text-foreground/80 hover:text-foreground transition-colors text-sm">Тарифы</a>
              <a href="#events" className="text-foreground/80 hover:text-foreground transition-colors text-sm">Мероприятия</a>
              <a href="#about" className="text-foreground/80 hover:text-foreground transition-colors text-sm">О нас</a>
              <a href="#contact" className="text-foreground/80 hover:text-foreground transition-colors text-sm">Контакты</a>
              <Button className="bg-accent hover:bg-accent/90">Забронировать место</Button>
            </nav>
            <Button variant="outline" size="icon" className="md:hidden">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </header>

      <section id="home" className="py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5"></div>
        <div className="container mx-auto px-4 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h2 className="text-5xl lg:text-6xl font-semibold mb-6 leading-tight text-foreground">
                Рабочее пространство, где растут ваши идеи
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Экологичный коворкинг в центре города для фрилансеров, стартапов и творческих команд.
              </p>
              <div className="flex flex-wrap gap-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                      Выбрать тариф
                      <Icon name="ArrowRight" size={20} className="ml-2" />
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Забронировать место</DialogTitle>
                      <DialogDescription>
                        Оставьте заявку, и мы свяжемся с вами в течение часа
                      </DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4 pt-4">
                      <div>
                        <Label htmlFor="name">Имя</Label>
                        <Input id="name" placeholder="Иван Петров" />
                      </div>
                      <div>
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="ivan@example.com" />
                      </div>
                      <div>
                        <Label htmlFor="phone">Телефон</Label>
                        <Input id="phone" type="tel" placeholder="+7 (900) 123-45-67" />
                      </div>
                      <Button className="w-full bg-accent hover:bg-accent/90">
                        Отправить заявку
                      </Button>
                    </div>
                  </DialogContent>
                </Dialog>
                <Button size="lg" variant="outline" className="text-lg">
                  Узнать больше
                </Button>
              </div>
            </div>
            <div className="relative animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/c0236ade-d326-494e-b585-77a0a637820d/files/d6314b39-6bcd-4364-a61e-711d916a6d5d.jpg" 
                alt="Urban Roots Coworking" 
                className="rounded-2xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-slide-up">
            <h3 className="text-4xl font-semibold mb-4 text-foreground">Почему URBAN ROOTS?</h3>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Мы создали пространство, где комфорт сочетается с заботой о природе
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <Card key={index} className="border-2 hover:border-primary transition-all duration-300 hover:shadow-lg">
                <CardHeader>
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                    <Icon name={benefit.icon} size={32} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-semibold mb-4 text-foreground">Начните работать за 3 шага</h3>
            <p className="text-lg text-muted-foreground">Простой процесс от выбора до начала работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Выберите тариф', description: 'Подберите подходящий вариант из наших гибких предложений' },
              { step: '02', title: 'Оставьте заявку', description: 'Заполните простую форму или позвоните нам' },
              { step: '03', title: 'Приходите работать', description: 'Получите доступ и начните работу в комфортной среде' }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <span className="text-3xl font-bold text-accent">{item.step}</span>
                </div>
                <h4 className="text-xl font-semibold mb-3 text-foreground">{item.title}</h4>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="tariffs" className="py-20 bg-card">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-semibold mb-4 text-foreground">Тарифы и услуги</h3>
            <p className="text-lg text-muted-foreground">Выберите удобный для вас формат работы</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {tariffs.map((tariff, index) => (
              <Card key={tariff.id} className={`relative overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 ${index === 1 ? 'border-2 border-primary' : ''}`}>
                {index === 1 && (
                  <div className="absolute top-0 right-0">
                    <Badge className="bg-primary rounded-tl-none rounded-br-none">Популярный</Badge>
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="text-2xl">{tariff.title}</CardTitle>
                  <div className="mt-4">
                    <span className="text-4xl font-bold text-foreground">{tariff.price}</span>
                    <span className="text-muted-foreground ml-2">/ {tariff.period}</span>
                  </div>
                  <CardDescription className="text-base mt-2">{tariff.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {tariff.features.map((feature, i) => (
                      <li key={i} className="flex items-center gap-2 text-sm">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button 
                        className="w-full" 
                        variant={index === 1 ? 'default' : 'outline'}
                        onClick={() => setSelectedTariff(tariff.id)}
                      >
                        Забронировать
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-md">
                      <DialogHeader>
                        <DialogTitle>Бронирование: {tariff.title}</DialogTitle>
                        <DialogDescription>
                          Оставьте контакты, и мы свяжемся с вами
                        </DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4 pt-4">
                        <div>
                          <Label htmlFor="name">Имя</Label>
                          <Input id="name" placeholder="Ваше имя" />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input id="email" type="email" placeholder="email@example.com" />
                        </div>
                        <div>
                          <Label htmlFor="phone">Телефон</Label>
                          <Input id="phone" type="tel" placeholder="+7" />
                        </div>
                        <Button className="w-full bg-accent hover:bg-accent/90">
                          Отправить заявку
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="events" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-semibold mb-4 text-foreground">Присоединяйтесь к нашему комьюнити</h3>
            <p className="text-lg text-muted-foreground">Ближайшие мероприятия для нетворкинга и развития</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {events.map((event) => (
              <Card key={event.id} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4 mb-4">
                    <div className="bg-primary/10 rounded-xl p-4 text-center min-w-[80px]">
                      <div className="text-3xl font-bold text-primary">{event.date}</div>
                      <div className="text-sm text-muted-foreground uppercase">{event.month}</div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{event.title}</CardTitle>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Clock" size={16} />
                        <span>{event.time}</span>
                      </div>
                    </div>
                  </div>
                  <CardDescription className="text-base">{event.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="text-xs">
                      <Icon name="Users" size={12} className="mr-1" />
                      {event.spots} мест
                    </Badge>
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Участвовать
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 text-center">
          <img 
            src="https://cdn.poehali.dev/projects/c0236ade-d326-494e-b585-77a0a637820d/files/56742e68-8316-464a-81ec-394a77a8fc28.jpg" 
            alt="Community event" 
            className="rounded-2xl shadow-2xl w-full max-w-3xl mx-auto mb-12 h-[300px] object-cover"
          />
          <h3 className="text-4xl font-semibold mb-6">Готовы начать работать с нами?</h3>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Забронируйте рабочее место или посетите бесплатную экскурсию по пространству
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button size="lg" className="bg-accent hover:bg-accent/90 text-lg">
                  Забронировать место
                  <Icon name="ArrowRight" size={20} className="ml-2" />
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-md">
                <DialogHeader>
                  <DialogTitle>Забронировать место</DialogTitle>
                  <DialogDescription>
                    Заполните форму для бронирования
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4 pt-4">
                  <div>
                    <Label htmlFor="name">Имя</Label>
                    <Input id="name" placeholder="Ваше имя" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" placeholder="email@example.com" />
                  </div>
                  <div>
                    <Label htmlFor="phone">Телефон</Label>
                    <Input id="phone" type="tel" placeholder="+7" />
                  </div>
                  <Button className="w-full bg-accent hover:bg-accent/90">
                    Отправить заявку
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
            <Button size="lg" variant="outline" className="text-lg bg-transparent border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary">
              Бесплатная экскурсия
            </Button>
          </div>
        </div>
      </section>

      <footer id="contact" className="bg-foreground text-white py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <Icon name="Sprout" size={24} className="text-primary-foreground" />
                </div>
                <h4 className="text-xl font-semibold">URBAN ROOTS</h4>
              </div>
              <p className="text-white/70 text-sm">
                Экологичный коворкинг в центре города
              </p>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">Навигация</h5>
              <ul className="space-y-2 text-sm">
                <li><a href="#home" className="text-white/70 hover:text-white transition-colors">Главная</a></li>
                <li><a href="#tariffs" className="text-white/70 hover:text-white transition-colors">Тарифы</a></li>
                <li><a href="#events" className="text-white/70 hover:text-white transition-colors">Мероприятия</a></li>
                <li><a href="#about" className="text-white/70 hover:text-white transition-colors">О нас</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">Контакты</h5>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start gap-2 text-white/70">
                  <Icon name="MapPin" size={16} className="mt-0.5 flex-shrink-0" />
                  <span>Москва, ул. Тверская, 12</span>
                </li>
                <li className="flex items-center gap-2 text-white/70">
                  <Icon name="Phone" size={16} />
                  <span>+7 (495) 123-45-67</span>
                </li>
                <li className="flex items-center gap-2 text-white/70">
                  <Icon name="Mail" size={16} />
                  <span>hello@urbanroots.ru</span>
                </li>
              </ul>
            </div>
            <div>
              <h5 className="font-semibold mb-4 text-sm">Соцсети</h5>
              <div className="flex gap-3">
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon name="Instagram" size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 transition-colors flex items-center justify-center">
                  <Icon name="Send" size={18} />
                </a>
              </div>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm text-white/70">
            <p>&copy; URBAN ROOTS, 2025. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
