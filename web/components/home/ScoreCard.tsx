import {
  ScoreCardUI,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/scorecardui";

const ScoreCard = () => {
  return (
    <ScoreCardUI className="w-full lg:w-[300px] hover:cursor-pointer hover:border-green-600">
      <CardHeader>
        <CardTitle>3rd Match, Group A </CardTitle>
        <CardDescription>Asia Cup, 2023</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col">
          <div className="flex items-center justify-between">
            <div className=" text-lg font-semibold">India</div>
            <div className="ml-2">144/2 (22.3)</div>
          </div>
          <div className="flex items-center justify-between">
            <div className=" text-lg font-semibold">Pakistan</div>
            <div className="ml-2">144/2 (22.3)</div>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <div className="text-orange-400">Tomorrow 3PM</div>
      </CardFooter>
    </ScoreCardUI>
  );
};

export default ScoreCard;
