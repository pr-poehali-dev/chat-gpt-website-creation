import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="fixed top-0 w-full z-50 border-b border-border/40 backdrop-blur-xl bg-background/80">
        <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Brain" className="text-primary" size={32} />
            <span className="font-heading text-2xl font-bold text-gradient">AI ChatGPT</span>
          </div>
          
          <div className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm hover:text-primary transition-colors">Возможности</a>
            <a href="#pricing" className="text-sm hover:text-primary transition-colors">Тарифы</a>
            <a href="#faq" className="text-sm hover:text-primary transition-colors">FAQ</a>
            <a href="#blog" className="text-sm hover:text-primary transition-colors">Блог</a>
            <a href="#contact" className="text-sm hover:text-primary transition-colors">Контакты</a>
          </div>

          <div className="flex items-center gap-3">
            {isLoggedIn ? (
              <Button onClick={() => setIsLoggedIn(false)} variant="outline">
                <Icon name="User" size={16} className="mr-2" />
                Кабинет
              </Button>
            ) : (
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90">
                    Войти
                  </Button>
                </DialogTrigger>
                <DialogContent className="border-gradient">
                  <DialogHeader>
                    <DialogTitle className="font-heading text-2xl">Вход в систему</DialogTitle>
                    <DialogDescription>Введите данные для доступа к AI платформе</DialogDescription>
                  </DialogHeader>
                  <Tabs defaultValue="login" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="login">Вход</TabsTrigger>
                      <TabsTrigger value="register">Регистрация</TabsTrigger>
                    </TabsList>
                    <TabsContent value="login" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="password">Пароль</Label>
                        <Input id="password" type="password" placeholder="••••••••" />
                      </div>
                      <Button onClick={() => setIsLoggedIn(true)} className="w-full bg-gradient-to-r from-primary to-secondary">
                        Войти
                      </Button>
                    </TabsContent>
                    <TabsContent value="register" className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="reg-name">Имя</Label>
                        <Input id="reg-name" placeholder="Ваше имя" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-email">Email</Label>
                        <Input id="reg-email" type="email" placeholder="your@email.com" />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="reg-password">Пароль</Label>
                        <Input id="reg-password" type="password" placeholder="••••••••" />
                      </div>
                      <Button onClick={() => setIsLoggedIn(true)} className="w-full bg-gradient-to-r from-primary to-secondary">
                        Зарегистрироваться
                      </Button>
                    </TabsContent>
                  </Tabs>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </nav>
      </header>

      <main className="pt-16">
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-grid">
          <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background"></div>
          
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
              <Badge variant="outline" className="border-primary/50 text-primary animate-glow">
                <Icon name="Sparkles" size={14} className="mr-1" />
                Новая эра искусственного интеллекта
              </Badge>
              
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-tight">
                <span className="text-gradient glow-primary">Будущее AI</span>
                <br />
                <span className="text-foreground">уже здесь</span>
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Передовая платформа искусственного интеллекта для бизнеса и творчества. 
                Автоматизируйте процессы, генерируйте контент, анализируйте данные.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button size="lg" className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 text-lg px-8 h-14">
                  <Icon name="Rocket" size={20} className="mr-2" />
                  Начать бесплатно
                </Button>
                <Button size="lg" variant="outline" className="border-primary/50 text-lg px-8 h-14">
                  <Icon name="Play" size={20} className="mr-2" />
                  Смотреть демо
                </Button>
              </div>

              <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto pt-12">
                <div className="space-y-2">
                  <div className="text-3xl font-heading font-bold text-primary">1M+</div>
                  <div className="text-sm text-muted-foreground">Пользователей</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-heading font-bold text-secondary">99.9%</div>
                  <div className="text-sm text-muted-foreground">Uptime</div>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-heading font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Поддержка</div>
                </div>
              </div>
            </div>
          </div>

          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon name="ChevronDown" size={32} className="text-primary/50" />
          </div>
        </section>

        <section id="features" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="border-secondary/50 text-secondary">
                <Icon name="Cpu" size={14} className="mr-1" />
                Возможности
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Безграничные <span className="text-gradient">возможности AI</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Передовые технологии для решения любых задач
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { icon: 'MessageSquare', title: 'Умные диалоги', desc: 'Естественное общение с AI на русском языке' },
                { icon: 'Code2', title: 'Генерация кода', desc: 'Создание и отладка кода на любых языках' },
                { icon: 'FileText', title: 'Работа с текстом', desc: 'Написание, редактура, перевод текстов' },
                { icon: 'BarChart3', title: 'Анализ данных', desc: 'Обработка и визуализация больших данных' },
                { icon: 'Image', title: 'Работа с изображениями', desc: 'Генерация и редактирование визуала' },
                { icon: 'Zap', title: 'Автоматизация', desc: 'Автоматизация бизнес-процессов' },
              ].map((feature, i) => (
                <Card key={i} className="border-gradient hover:scale-105 transition-transform duration-300 animate-fade-in" style={{ animationDelay: `${i * 100}ms` }}>
                  <CardHeader>
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon name={feature.icon as any} className="text-primary" size={24} />
                    </div>
                    <CardTitle className="font-heading">{feature.title}</CardTitle>
                    <CardDescription>{feature.desc}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="pricing" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="border-primary/50 text-primary">
                <Icon name="DollarSign" size={14} className="mr-1" />
                Тарифы
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Выберите <span className="text-gradient">свой план</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Гибкие тарифы для любых задач
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[
                {
                  name: 'Старт',
                  price: '0',
                  desc: 'Для знакомства с платформой',
                  features: ['100 запросов/день', 'Базовые модели', 'Email поддержка', 'API доступ'],
                  popular: false
                },
                {
                  name: 'Про',
                  price: '990',
                  desc: 'Для профессионалов',
                  features: ['Безлимитные запросы', 'Все модели', 'Приоритетная поддержка', 'Расширенный API', 'Кастомные настройки'],
                  popular: true
                },
                {
                  name: 'Бизнес',
                  price: '4990',
                  desc: 'Для команд и компаний',
                  features: ['Всё из Про', 'Выделенные ресурсы', '24/7 поддержка', 'SLA гарантии', 'Персональный менеджер', 'Обучение команды'],
                  popular: false
                }
              ].map((plan, i) => (
                <Card key={i} className={`relative ${plan.popular ? 'border-primary scale-105 shadow-2xl shadow-primary/20' : 'border-gradient'} animate-scale-in`} style={{ animationDelay: `${i * 150}ms` }}>
                  {plan.popular && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <Badge className="bg-gradient-to-r from-primary to-secondary animate-glow">
                        Популярный
                      </Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle className="font-heading text-2xl">{plan.name}</CardTitle>
                    <CardDescription>{plan.desc}</CardDescription>
                    <div className="mt-4">
                      <span className="text-4xl font-heading font-bold">{plan.price}</span>
                      <span className="text-muted-foreground ml-2">₽/мес</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <Icon name="Check" className="text-primary mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <CardFooter>
                    <Button className={`w-full ${plan.popular ? 'bg-gradient-to-r from-primary to-secondary' : ''}`} variant={plan.popular ? 'default' : 'outline'}>
                      {plan.price === '0' ? 'Начать бесплатно' : 'Выбрать план'}
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="faq" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-16 space-y-4">
                <Badge variant="outline" className="border-secondary/50 text-secondary">
                  <Icon name="HelpCircle" size={14} className="mr-1" />
                  FAQ
                </Badge>
                <h2 className="font-heading text-4xl md:text-5xl font-bold">
                  Частые <span className="text-gradient">вопросы</span>
                </h2>
              </div>

              <Accordion type="single" collapsible className="space-y-4">
                {[
                  {
                    q: 'Как начать работу с платформой?',
                    a: 'Зарегистрируйтесь бесплатно и получите доступ к базовому тарифу. Вы сразу сможете начать работу с AI.'
                  },
                  {
                    q: 'Какие модели AI доступны?',
                    a: 'Мы предоставляем доступ к GPT-4, Claude, LLaMA и другим передовым моделям в зависимости от тарифа.'
                  },
                  {
                    q: 'Безопасны ли мои данные?',
                    a: 'Да, мы используем end-to-end шифрование и не храним ваши диалоги. Полное соответствие GDPR.'
                  },
                  {
                    q: 'Можно ли интегрировать с другими сервисами?',
                    a: 'Да, мы предоставляем REST API и SDK для популярных языков программирования.'
                  },
                  {
                    q: 'Как работает оплата?',
                    a: 'Мы принимаем банковские карты, PayPal, криптовалюту. Оплата списывается ежемесячно, отмена в любой момент.'
                  }
                ].map((item, i) => (
                  <AccordionItem key={i} value={`item-${i}`} className="border-gradient bg-card px-6">
                    <AccordionTrigger className="font-heading text-left hover:text-primary">
                      {item.q}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                      {item.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        <section id="blog" className="py-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16 space-y-4">
              <Badge variant="outline" className="border-primary/50 text-primary">
                <Icon name="BookOpen" size={14} className="mr-1" />
                Блог
              </Badge>
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Последние <span className="text-gradient">новости</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: 'GPT-5: Новая эра AI',
                  date: '15 октября 2024',
                  category: 'Технологии',
                  image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop'
                },
                {
                  title: 'Как AI меняет бизнес',
                  date: '12 октября 2024',
                  category: 'Бизнес',
                  image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop'
                },
                {
                  title: 'Этика искусственного интеллекта',
                  date: '10 октября 2024',
                  category: 'Исследования',
                  image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=600&h=400&fit=crop'
                }
              ].map((post, i) => (
                <Card key={i} className="border-gradient overflow-hidden hover:scale-105 transition-transform duration-300 cursor-pointer">
                  <div className="h-48 overflow-hidden">
                    <img src={post.image} alt={post.title} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                  <CardHeader>
                    <div className="flex items-center gap-2 mb-2">
                      <Badge variant="secondary">{post.category}</Badge>
                      <span className="text-xs text-muted-foreground">{post.date}</span>
                    </div>
                    <CardTitle className="font-heading hover:text-primary transition-colors">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <div className="text-center mb-12 space-y-4">
                <Badge variant="outline" className="border-secondary/50 text-secondary">
                  <Icon name="Mail" size={14} className="mr-1" />
                  Контакты
                </Badge>
                <h2 className="font-heading text-4xl md:text-5xl font-bold">
                  Свяжитесь <span className="text-gradient">с нами</span>
                </h2>
              </div>

              <Card className="border-gradient">
                <CardHeader>
                  <CardTitle className="font-heading">Напишите нам</CardTitle>
                  <CardDescription>Мы ответим в течение 24 часов</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="contact-name">Имя</Label>
                    <Input id="contact-name" placeholder="Ваше имя" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-email">Email</Label>
                    <Input id="contact-email" type="email" placeholder="your@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contact-message">Сообщение</Label>
                    <Input id="contact-message" placeholder="Ваш вопрос..." />
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                    <Icon name="Send" size={16} className="mr-2" />
                    Отправить
                  </Button>
                </CardFooter>
              </Card>

              <div className="grid grid-cols-3 gap-6 mt-12">
                <a href="#" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors">
                  <Icon name="Mail" className="text-primary" size={24} />
                  <span className="text-sm text-muted-foreground">Email</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors">
                  <Icon name="MessageCircle" className="text-primary" size={24} />
                  <span className="text-sm text-muted-foreground">Telegram</span>
                </a>
                <a href="#" className="flex flex-col items-center gap-2 p-4 rounded-lg hover:bg-muted transition-colors">
                  <Icon name="Phone" className="text-primary" size={24} />
                  <span className="text-sm text-muted-foreground">Телефон</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/40 py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Icon name="Brain" className="text-primary" size={28} />
                <span className="font-heading text-xl font-bold">AI ChatGPT</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Передовая платформа искусственного интеллекта
              </p>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Продукт</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-primary transition-colors">Возможности</a></li>
                <li><a href="#pricing" className="hover:text-primary transition-colors">Тарифы</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Документация</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#blog" className="hover:text-primary transition-colors">Блог</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#contact" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Вакансии</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-heading font-semibold mb-4">Юридическое</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Условия использования</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Политика конфиденциальности</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Cookie</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-border/40 mt-12 pt-8 text-center text-sm text-muted-foreground">
            <p>© 2024 AI ChatGPT Platform. Все права защищены.</p>
          </div>
        </div>
      </footer>

      {isLoggedIn && (
        <div className="fixed bottom-6 right-6 z-50 animate-scale-in">
          <Dialog>
            <DialogTrigger asChild>
              <Button size="lg" className="rounded-full h-16 w-16 shadow-2xl bg-gradient-to-r from-primary to-secondary hover:opacity-90 animate-float">
                <Icon name="MessageSquare" size={24} />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-2xl border-gradient max-h-[80vh]">
              <DialogHeader>
                <DialogTitle className="font-heading text-2xl">Личный кабинет</DialogTitle>
                <DialogDescription>Управление аккаунтом и использование AI</DialogDescription>
              </DialogHeader>
              
              <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="dashboard">
                    <Icon name="LayoutDashboard" size={16} className="mr-2" />
                    Дашборд
                  </TabsTrigger>
                  <TabsTrigger value="usage">
                    <Icon name="Activity" size={16} className="mr-2" />
                    Использование
                  </TabsTrigger>
                  <TabsTrigger value="settings">
                    <Icon name="Settings" size={16} className="mr-2" />
                    Настройки
                  </TabsTrigger>
                </TabsList>
                
                <TabsContent value="dashboard" className="space-y-4 mt-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Card className="border-primary/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Запросов сегодня</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-heading font-bold text-primary">847</div>
                        <p className="text-xs text-muted-foreground mt-1">из 1000 доступных</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="border-secondary/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-sm font-medium">Токенов использовано</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="text-3xl font-heading font-bold text-secondary">124K</div>
                        <p className="text-xs text-muted-foreground mt-1">безлимит</p>
                      </CardContent>
                    </Card>
                  </div>
                  
                  <Card className="border-gradient">
                    <CardHeader>
                      <CardTitle className="font-heading">Текущий тариф: Про</CardTitle>
                      <CardDescription>Действует до 15 ноября 2024</CardDescription>
                    </CardHeader>
                    <CardFooter>
                      <Button variant="outline" className="w-full">
                        <Icon name="CreditCard" size={16} className="mr-2" />
                        Управление подпиской
                      </Button>
                    </CardFooter>
                  </Card>
                </TabsContent>
                
                <TabsContent value="usage" className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">История запросов</CardTitle>
                      <CardDescription>Последние 7 дней</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {[
                          { date: 'Сегодня', requests: 847, tokens: '45K' },
                          { date: 'Вчера', requests: 1203, tokens: '67K' },
                          { date: '14 окт', requests: 956, tokens: '52K' },
                        ].map((day, i) => (
                          <div key={i} className="flex items-center justify-between p-3 rounded-lg bg-muted/50">
                            <div className="flex items-center gap-3">
                              <Icon name="Calendar" size={16} className="text-muted-foreground" />
                              <span className="text-sm font-medium">{day.date}</span>
                            </div>
                            <div className="flex items-center gap-6">
                              <span className="text-sm text-muted-foreground">{day.requests} запросов</span>
                              <span className="text-sm text-muted-foreground">{day.tokens} токенов</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="settings" className="space-y-4 mt-4">
                  <Card>
                    <CardHeader>
                      <CardTitle className="font-heading">Настройки профиля</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label>API ключ</Label>
                        <div className="flex gap-2">
                          <Input value="sk-proj-abc123..." readOnly />
                          <Button variant="outline" size="icon">
                            <Icon name="Copy" size={16} />
                          </Button>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Модель по умолчанию</Label>
                        <Input defaultValue="GPT-4 Turbo" />
                      </div>
                      
                      <Button className="w-full bg-gradient-to-r from-primary to-secondary">
                        Сохранить изменения
                      </Button>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </DialogContent>
          </Dialog>
        </div>
      )}
    </div>
  );
}
