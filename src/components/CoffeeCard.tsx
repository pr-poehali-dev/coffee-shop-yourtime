import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CoffeeCardProps {
  title: string;
  description: string;
  price: string;
  imageUrl: string;
}

const CoffeeCard = ({ title, description, price, imageUrl }: CoffeeCardProps) => {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-md h-full flex flex-col">
      <div className="aspect-video w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
      </div>
      <CardHeader className="flex-none">
        <CardTitle className="text-xl font-semibold">{title}</CardTitle>
        <CardDescription className="text-muted-foreground">{description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-lg font-medium text-coffee-accent">{price} ₽</p>
      </CardContent>
      <CardFooter className="flex-none border-t pt-4">
        <Button className="w-full bg-coffee-medium hover:bg-coffee-dark text-white">
          Заказать
        </Button>
      </CardFooter>
    </Card>
  );
};

export default CoffeeCard;
