import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, Calendar, Coffee, Share2 } from "lucide-react";

interface BlogPostData {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  readTime: string;
  content: JSX.Element;
}

const blogPostsData: Record<string, BlogPostData> = {
  "espresso-101": {
    id: "espresso-101",
    title: "Основы эспрессо: секреты идеальной экстракции",
    description: "Подробное руководство по приготовлению идеального эспрессо в домашних условиях с любой кофемашиной",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "24 апреля 2025",
    readTime: "7 мин",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Что такое эспрессо?</h2>
        <p className="mb-6">
          Эспрессо — это метод приготовления кофе, при котором горячая вода под давлением проходит через тонко молотый кофе. Результат — концентрированный напиток с насыщенным вкусом и характерной кремовой пенкой (крема) на поверхности.
        </p>
        
        <div className="my-8 p-6 bg-coffee-light/10 rounded-lg border border-coffee-light/20">
          <h3 className="text-xl font-bold mb-3">Ключевые параметры идеального эспрессо:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Время экстракции:</strong> 25-30 секунд</li>
            <li><strong>Температура воды:</strong> 90-96°C</li>
            <li><strong>Давление:</strong> 9 бар</li>
            <li><strong>Вес молотого кофе:</strong> 18-20 г (для двойного эспрессо)</li>
            <li><strong>Выход напитка:</strong> 25-30 мл (для одинарного), 40-60 мл (для двойного)</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Выбор кофе для эспрессо</h2>
        <p className="mb-6">
          Для эспрессо лучше всего подходят средне-темные или темные обжарки. Такой кофе обычно обладает меньшей кислотностью и более выраженной сладостью, что идеально подходит для короткой экстракции.
        </p>
        <p className="mb-6">
          Отличными вариантами являются:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Итальянские и французские смеси</li>
          <li>Бразильская арабика</li>
          <li>Смеси с добавлением робусты (для более выраженного телa и кремы)</li>
        </ul>
        
        <figure className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1587492154296-ab72d0d89c8a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Различные виды кофейных зерен" 
            className="w-full h-auto rounded-lg"
          />
          <figcaption className="text-sm text-center mt-2 text-coffee-dark/60">
            Разные виды обжарки кофейных зерен для эспрессо
          </figcaption>
        </figure>
        
        <h2 className="text-2xl font-bold mb-4">Помол: ключ к идеальному эспрессо</h2>
        <p className="mb-6">
          Помол для эспрессо должен быть достаточно тонким, чтобы создать необходимое сопротивление для воды под давлением, но не настолько тонким, чтобы заблокировать поток полностью.
        </p>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Признаки неправильного помола:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Слишком грубый помол:</strong> экстракция проходит слишком быстро (менее 15-20 секунд), напиток получается водянистым, с кислым вкусом</li>
            <li><strong>Слишком тонкий помол:</strong> экстракция слишком медленная (более 35-40 секунд) или вовсе блокируется, напиток получается горьким и переэкстрагированным</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Темперовка</h2>
        <p className="mb-6">
          Темперовка — это процесс утрамбовки молотого кофе в портафильтре. Это критически важный шаг для достижения равномерной экстракции.
        </p>
        <p className="mb-6">
          Правильная техника темперовки:
        </p>
        <ol className="list-decimal pl-5 space-y-2 mb-6">
          <li>Распределите кофе равномерно в корзине портафильтра</li>
          <li>Держите темпер перпендикулярно поверхности кофе</li>
          <li>Приложите давление примерно 15-20 кг (с практикой вы почувствуете нужное усилие)</li>
          <li>Давите ровно, без перекосов</li>
          <li>После темперовки поверхность кофе должна быть идеально ровной и гладкой</li>
        </ol>
        
        <div className="my-8 p-6 bg-coffee-accent/10 rounded-lg border border-coffee-accent/20">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Coffee className="mr-2 h-5 w-5" />
            Совет профессионала
          </h3>
          <p>
            Темперуйте кофе дважды: сначала с легким давлением для распределения, затем с полным давлением для окончательной утрамбовки. Это помогает достичь более равномерной плотности кофейной таблетки.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Процесс приготовления</h2>
        <ol className="list-decimal pl-5 space-y-4 mb-6">
          <li>
            <strong>Подготовьте кофемашину</strong>
            <p>Включите кофемашину и дайте ей прогреться минимум 15-20 минут. Температурная стабильность критически важна для хорошего эспрессо.</p>
          </li>
          <li>
            <strong>Промойте группу</strong>
            <p>Пропустите немного воды через группу без портафильтра, чтобы очистить сетку и стабилизировать температуру.</p>
          </li>
          <li>
            <strong>Подготовьте портафильтр</strong>
            <p>Высушите корзину портафильтра перед загрузкой кофе. Влага может создать каналы в кофейной таблетке.</p>
          </li>
          <li>
            <strong>Отмерьте кофе</strong>
            <p>Используйте точные весы для измерения дозы кофе (обычно 18-20 г для двойного эспрессо).</p>
          </li>
          <li>
            <strong>Темперуйте кофе</strong>
            <p>Следуйте указанной выше технике темперовки.</p>
          </li>
          <li>
            <strong>Немедленно начните экстракцию</strong>
            <p>После темперовки сразу установите портафильтр и начните экстракцию, чтобы кофе не перегрелся от горячей группы.</p>
          </li>
          <li>
            <strong>Следите за временем и объемом</strong>
            <p>Идеальная экстракция двойного эспрессо должна занимать 25-30 секунд и давать 40-60 мл напитка.</p>
          </li>
        </ol>
        
        <figure className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1593412323862-085195e2a326?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Процесс экстракции эспрессо" 
            className="w-full h-auto rounded-lg"
          />
          <figcaption className="text-sm text-center mt-2 text-coffee-dark/60">
            Правильная экстракция эспрессо с красивой кремой
          </figcaption>
        </figure>
        
        <h2 className="text-2xl font-bold mb-4">Признаки хорошего эспрессо</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li><strong>Крема:</strong> толстая, золотисто-коричневая пенка, которая должна держаться не менее 2-3 минут</li>
          <li><strong>Тело:</strong> насыщенное, плотное, с почти сиропообразной консистенцией</li>
          <li><strong>Вкус:</strong> сбалансированный, без доминирующей кислотности или горечи, с заметной сладостью</li>
          <li><strong>Послевкусие:</strong> продолжительное, сладкое, с нотами шоколада или карамели</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Распространенные проблемы и их решения</h2>
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Слишком быстрая экстракция (менее 20 секунд)</h3>
          <p className="mb-3"><strong>Причины:</strong></p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Слишком грубый помол</li>
            <li>Недостаточная доза кофе</li>
            <li>Недостаточное темперование</li>
          </ul>
          <p><strong>Решения:</strong> Используйте более тонкий помол, увеличьте дозу кофе, улучшите технику темперовки.</p>
        </div>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-3">Слишком медленная экстракция (более 35 секунд)</h3>
          <p className="mb-3"><strong>Причины:</strong></p>
          <ul className="list-disc pl-5 space-y-1 mb-3">
            <li>Слишком тонкий помол</li>
            <li>Избыточная доза кофе</li>
            <li>Слишком сильное темперование</li>
          </ul>
          <p><strong>Решения:</strong> Используйте более грубый помол, уменьшите дозу кофе, не прикладывайте чрезмерное усилие при темперовке.</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Заключение</h2>
        <p className="mb-6">
          Искусство приготовления идеального эспрессо требует практики и внимания к деталям. Экспериментируйте с различными настройками, документируйте результаты и со временем вы научитесь готовить эспрессо на уровне лучших бариста.
        </p>
        <p>
          Помните, что даже небольшие изменения в помоле, дозе или технике темперовки могут значительно влиять на конечный результат. Не бойтесь экспериментировать, но меняйте только один параметр за раз, чтобы понимать, как каждое изменение влияет на вкус.
        </p>
      </>
    )
  },
  
  "pour-over-guide": {
    id: "pour-over-guide",
    title: "Пошаговое руководство по пуроверу",
    description: "Метод приготовления кофе пуровер от А до Я: выбор кофе, помол, техника заваривания",
    image: "https://images.unsplash.com/photo-1544252890-95a2bd25c391?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    date: "15 апреля 2025",
    readTime: "9 мин",
    content: (
      <>
        <h2 className="text-2xl font-bold mb-4">Что такое пуровер?</h2>
        <p className="mb-6">
          Пуровер (pour-over) — это метод заваривания кофе, при котором горячая вода вручную наливается на молотый кофе, размещенный в фильтре. Этот метод позволяет раскрыть тонкие нюансы вкуса и аромата кофе, недоступные при других способах приготовления.
        </p>
        
        <figure className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1556387677-67895e7d02dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Процесс заваривания кофе методом пуровер" 
            className="w-full h-auto rounded-lg"
          />
          <figcaption className="text-sm text-center mt-2 text-coffee-dark/60">
            Классический процесс заваривания кофе методом пуровер с гейзерной колбой
          </figcaption>
        </figure>
        
        <h2 className="text-2xl font-bold mb-4">Необходимое оборудование</h2>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>
            <strong>Воронка для пуровера</strong> (V60, Kalita Wave, Chemex или подобные)
          </li>
          <li>
            <strong>Бумажные фильтры</strong>, подходящие для вашей воронки
          </li>
          <li>
            <strong>Чайник с тонким носиком</strong> для контроля потока воды
          </li>
          <li>
            <strong>Весы</strong> для точного измерения количества кофе и воды
          </li>
          <li>
            <strong>Таймер</strong> для контроля времени экстракции
          </li>
          <li>
            <strong>Кофемолка</strong> с регулируемым помолом
          </li>
          <li>
            <strong>Сервер</strong> или кружка для сбора готового напитка
          </li>
        </ul>
        
        <div className="my-8 p-6 bg-coffee-light/10 rounded-lg border border-coffee-light/20">
          <h3 className="text-xl font-bold mb-3">Базовые пропорции для пуровера:</h3>
          <ul className="list-disc pl-5 space-y-2">
            <li><strong>Соотношение кофе к воде:</strong> 1:15 - 1:17 (например, 15-17 г воды на 1 г кофе)</li>
            <li><strong>Стандартная дозировка:</strong> 15-20 г кофе на 250-300 мл воды</li>
            <li><strong>Температура воды:</strong> 90-96°C</li>
            <li><strong>Время экстракции:</strong> 2:30-3:30 минуты</li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Выбор кофе для пуровера</h2>
        <p className="mb-6">
          Пуровер лучше всего раскрывает легкие и средние обжарки. Этот метод идеально подходит для моносортов с яркими фруктовыми, цветочными или ягодными нотами.
        </p>
        <p className="mb-6">
          Рекомендуемые варианты:
        </p>
        <ul className="list-disc pl-5 space-y-2 mb-6">
          <li>Эфиопия (регионы Йиргачеффе, Сидамо) — ягодные, цитрусовые, цветочные ноты</li>
          <li>Кения — яркая кислотность, ноты смородины, томатов, тропических фруктов</li>
          <li>Колумбия — сбалансированный профиль с нотами карамели, орехов и фруктов</li>
          <li>Гватемала — шоколадные, ореховые ноты с легкой фруктовостью</li>
        </ul>
        
        <h2 className="text-2xl font-bold mb-4">Помол для пуровера</h2>
        <p className="mb-6">
          Правильный помол для пуровера — от среднего до средне-крупного, напоминающий по текстуре столовую соль или сахарный песок. Помол должен быть равномерным, без большого количества мелких частиц (пыли).
        </p>
        <p className="mb-6">
          Если ваш кофе заваривается слишком быстро и получается водянистым, используйте более тонкий помол. Если вода проходит слишком медленно и кофе получается горьким — используйте более крупный помол.
        </p>
        
        <h2 className="text-2xl font-bold mb-4">Пошаговая инструкция</h2>
        <ol className="list-decimal pl-5 space-y-4 mb-6">
          <li>
            <strong>Нагрейте воду</strong>
            <p>Доведите воду до кипения, затем дайте ей остыть до 90-96°C. Если нет термометра, подождите около 30 секунд после закипания.</p>
          </li>
          <li>
            <strong>Подготовьте фильтр</strong>
            <p>Поместите бумажный фильтр в воронку и промойте его горячей водой. Это удалит бумажный привкус и прогреет воронку и емкость для кофе.</p>
          </li>
          <li>
            <strong>Слейте воду после промывки</strong>
            <p>Обязательно слейте воду, которой промывали фильтр, перед добавлением кофе.</p>
          </li>
          <li>
            <strong>Отмерьте и помелите кофе</strong>
            <p>Отмерьте 15-20 г кофе (для чашки 250-300 мл) и помелите его до средне-крупного размера.</p>
          </li>
          <li>
            <strong>Добавьте кофе в фильтр</strong>
            <p>Поместите молотый кофе в фильтр и слегка встряхните воронку, чтобы выровнять поверхность кофе.</p>
          </li>
          <li>
            <strong>Предсмачивание (blooming)</strong>
            <p>Налейте в центр кофейной массы воду, примерно в два раза превышающую вес кофе (30-40 мл для 15-20 г кофе). Начните отсчет времени. Подождите 30-45 секунд, позволяя кофе "расцвести".</p>
          </li>
          <li>
            <strong>Основное заваривание</strong>
            <p>Медленно наливайте воду круговыми движениями от центра к краям, избегая прямого контакта воды со стенками фильтра. Поддерживайте уровень воды примерно на 1 см выше кофейного слоя.</p>
          </li>
          <li>
            <strong>Продолжайте наливать воду</strong>
            <p>Продолжайте добавлять воду порциями по 50-100 мл, пока не достигнете желаемого объема (обычно 250-300 мл).</p>
          </li>
          <li>
            <strong>Завершение</strong>
            <p>Весь процесс заваривания должен занять 2:30-3:30 минуты. Когда вся вода пройдет через кофе, уберите воронку.</p>
          </li>
          <li>
            <strong>Подавайте кофе</strong>
            <p>Перемешайте готовый кофе перед подачей, чтобы обеспечить равномерность экстракции.</p>
          </li>
        </ol>
        
        <figure className="my-8">
          <img 
            src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" 
            alt="Процесс предсмачивания (blooming) кофе" 
            className="w-full h-auto rounded-lg"
          />
          <figcaption className="text-sm text-center mt-2 text-coffee-dark/60">
            Этап предсмачивания (blooming) является критическим для равномерной экстракции
          </figcaption>
        </figure>
        
        <div className="my-8 p-6 bg-coffee-accent/10 rounded-lg border border-coffee-accent/20">
          <h3 className="text-xl font-bold mb-3 flex items-center">
            <Coffee className="mr-2 h-5 w-5" />
            Советы профессионалов
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <strong>Техника наливания:</strong> Держите чайник низко над кофе в начале заваривания и выше — в конце, это помогает контролировать скорость экстракции.
            </li>
            <li>
              <strong>Разные методы наливания:</strong> Экспериментируйте с различными техниками — непрерывным наливанием, импульсным наливанием (порциями) или методом "бабочки" (от центра к краям и обратно).
            </li>
            <li>
              <strong>Качество воды:</strong> Используйте фильтрованную воду без сильного вкуса хлора и с умеренной минерализацией.
            </li>
          </ul>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Распространенные ошибки</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Неравномерный помол</h3>
          <p>Неравномерный помол приводит к неравномерной экстракции — мелкие частицы переэкстрагируются (горечь), крупные недоэкстрагируются (кислотность). Используйте качественную кофемолку с жерновами.</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Пропуск этапа предсмачивания</h3>
          <p>Предсмачивание позволяет кофе высвободить CO₂, что обеспечивает более равномерную экстракцию. Не пропускайте этот этап!</p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Слишком быстрое или медленное наливание</h3>
          <p>Наливайте воду медленно и контролируемо. Слишком быстрое наливание приводит к неравномерной экстракции и каналообразованию.</p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Различия между популярными воронками</h2>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Hario V60</h3>
          <p>
            Коническая форма с большим отверстием и спиральными ребрами внутри. Обеспечивает быструю экстракцию и подчеркивает яркость и сложность вкуса. Требует точного контроля техники наливания.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Kalita Wave</h3>
          <p>
            Плоское дно с тремя отверстиями, которые замедляют поток и обеспечивают более стабильную экстракцию. Более прощающая к ошибкам в технике, дает сбалансированный вкус.
          </p>
        </div>
        
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Chemex</h3>
          <p>
            Использует более толстые фильтры, которые задерживают больше масел и мелких частиц. Дает очень чистый, прозрачный вкус с меньшей плотностью тела.
          </p>
        </div>
        
        <h2 className="text-2xl font-bold mb-4">Заключение</h2>
        <p className="mb-6">
          Пуровер — это не просто способ заваривания, а настоящий ритуал, позволяющий насладиться нюансами вкуса качественного кофе. Этот метод требует внимания к деталям и практики, но результат стоит затраченных усилий.
        </p>
        <p>
          С опытом вы научитесь адаптировать ваш метод заваривания под разные сорта кофе, раскрывая их уникальные характеристики. Не бойтесь экспериментировать с помолом, температурой воды и техникой наливания, чтобы найти свой идеальный рецепт.
        </p>
      </>
    )
  }
};

const BlogPost = () => {
  const { postId } = useParams<{ postId: string }>();
  const post = postId ? blogPostsData[postId] : null;

  if (!post) {
    return (
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-12">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-2xl font-bold mb-4">Статья не найдена</h1>
            <p className="mb-6">Запрашиваемая статья не существует или была удалена.</p>
            <Link to="/blog">
              <Button>Вернуться к списку статей</Button>
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        {/* Hero Section */}
        <div className="relative h-96 md:h-[500px] overflow-hidden">
          <img 
            src={post.image} 
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
            <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12">
              <div className="max-w-3xl">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">{post.title}</h1>
                <div className="flex items-center text-white/80 space-x-4 mb-4">
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Content Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Main Content */}
              <div className="lg:w-3/4">
                <div className="prose prose-lg max-w-none prose-headings:text-coffee-dark prose-a:text-coffee-accent">
                  {post.content}
                </div>
                
                {/* Share Buttons */}
                <div className="mt-12 mb-8 border-t border-coffee-light/20 pt-8">
                  <div className="flex items-center">
                    <span className="font-medium mr-4">Поделиться:</span>
                    <div className="flex space-x-2">
                      <button className="p-2 rounded-full bg-coffee-light/10 hover:bg-coffee-light/20">
                        <Share2 className="h-5 w-5 text-coffee-dark" />
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Navigation Between Posts */}
                <div className="mt-12 flex flex-col sm:flex-row justify-between gap-4">
                  <Link to="/blog">
                    <Button variant="outline" className="flex items-center">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Вернуться к статьям
                    </Button>
                  </Link>
                </div>
              </div>
              
              {/* Sidebar */}
              <div className="lg:w-1/4 space-y-8">
                <div className="bg-coffee-light/5 rounded-lg p-6 border border-coffee-light/10">
                  <h3 className="text-xl font-bold mb-4">Другие статьи</h3>
                  <div className="space-y-4">
                    {Object.values(blogPostsData)
                      .filter(p => p.id !== post.id)
                      .slice(0, 3)
                      .map(relatedPost => (
                        <Link 
                          key={relatedPost.id} 
                          to={`/blog/${relatedPost.id}`}
                          className="block group"
                        >
                          <div className="flex items-start space-x-3">
                            <div className="w-16 h-16 overflow-hidden rounded-md flex-shrink-0">
                              <img 
                                src={relatedPost.image} 
                                alt={relatedPost.title}
                                className="w-full h-full object-cover transition-transform group-hover:scale-110"
                              />
                            </div>
                            <div>
                              <h4 className="font-medium group-hover:text-coffee-accent transition-colors line-clamp-2">
                                {relatedPost.title}
                              </h4>
                              <p className="text-sm text-coffee-dark/60">{relatedPost.readTime}</p>
                            </div>
                          </div>
                        </Link>
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
