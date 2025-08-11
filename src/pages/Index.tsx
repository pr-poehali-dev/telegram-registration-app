import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Имитация отправки данных в Telegram
    const message = `🚀 Новая регистрация:
📱 Телефон: ${formData.phone}
👤 Имя: ${formData.firstName} ${formData.lastName}
📧 Email: ${formData.email}`;
    
    console.log('Данные отправлены в @gwintess:', message);
    setIsSubmitted(true);
    
    // Сброс формы через 3 секунды
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ firstName: '', lastName: '', phone: '', email: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-telegram-gray p-4">
      <div className="w-full max-w-md">
        {/* Заголовок */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary rounded-full mb-4">
            <Icon name="Send" size={24} className="text-white" />
          </div>
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Регистрация</h1>
          <p className="text-telegram-darkgray">Создайте аккаунт для продолжения</p>
        </div>

        {/* Форма */}
        <Card className="shadow-lg border-0">
          <CardHeader className="space-y-1">
            <CardTitle className="text-xl text-center text-gray-800">
              Добро пожаловать
            </CardTitle>
            <CardDescription className="text-center text-telegram-darkgray">
              Заполните форму для регистрации
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-2">
                    <Label htmlFor="firstName" className="text-sm font-medium text-gray-700">
                      Имя
                    </Label>
                    <Input
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Иван"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                      Фамилия
                    </Label>
                    <Input
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Иванов"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="phone" className="text-sm font-medium text-gray-700">
                    Номер телефона
                  </Label>
                  <div className="relative">
                    <Icon name="Phone" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-telegram-darkgray" />
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+7 (999) 123-45-67"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="pl-10 border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                    Email
                  </Label>
                  <div className="relative">
                    <Icon name="Mail" size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-telegram-darkgray" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="ivan@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="pl-10 border-gray-200 focus:border-primary focus:ring-primary/20"
                    />
                  </div>
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-telegram-lightblue text-white font-medium py-3 rounded-lg transition-colors duration-200"
                >
                  <Icon name="UserPlus" size={18} className="mr-2" />
                  Зарегистрироваться
                </Button>
              </form>
            ) : (
              <div className="text-center py-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                  <Icon name="Check" size={24} className="text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  Регистрация успешна!
                </h3>
                <p className="text-telegram-darkgray">
                  Ваши данные отправлены в Telegram @gwintess
                </p>
              </div>
            )}
          </CardContent>
        </Card>

        {/* Дополнительная информация */}
        <div className="text-center mt-6">
          <p className="text-sm text-telegram-darkgray">
            Уже есть аккаунт?{' '}
            <button className="text-primary hover:text-telegram-lightblue font-medium transition-colors">
              Войти
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;