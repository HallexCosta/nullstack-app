import { ActionLink } from "./ActionLink";
import * as Progress from "@radix-ui/react-progress";

export type WaifuProps = {
  data: {
    name: string;
    imageURL: string;
    artistURL: string;
  };
};
export function Waifu({ data: { imageURL, artistURL, name } }: WaifuProps) {
  return (
    <div class="w-fit max-w-5xl min-w-72 max-h-72 min-h-72 bg-black/40 p-4 rounded-lg">
      <div class="w-full h-full p-5 gap-5 flex flex-col justify-between items-center rounded-sm">
        {/* <span class="self-start mb-2">1</span> */}
        <ActionLink href={imageURL}>
          <img class="rounded-md h-36 w-30" src={imageURL} alt="waifu" />
        </ActionLink>

        {/* <Separator.Root class="w-full h-2" style={{ margin: "15px 0" }} /> */}
        <Progress.Root class="ProgressRoot" value={80}>
          <Progress.Indicator
            class="ProgressIndicator"
            style={{ transform: `translateX(-${100 - 80}%)` }}
          />
        </Progress.Root>
        <ActionLink href={artistURL}>
          <p class="text-lg text-center truncate text-red-400/60 max-w-[120px] min-w-[120px]">
            {name}
          </p>
        </ActionLink>
      </div>
    </div>
  );
}
