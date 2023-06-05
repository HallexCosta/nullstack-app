import Nullstack, {
  NullstackClientContext,
  NullstackServerContext,
} from "nullstack";

import { Waifu, WaifuProps } from "./atoms/Waifu";

interface HomeProps {
  greeting: string;
}

// interface HomeLinkProps {
//   href: string;
// }

// declare function Waifu(context: WaifuProps): NullstackNode;
// declare function Link(context: HomeLinkProps): NullstackNode;
// declare function ActionLink(context: HomeLinkProps): NullstackNode;

interface Home {
  listWaifus(): Promise<WaifuProps["data"][]>;
}

class Home extends Nullstack<HomeProps> {
  waifus = [];

  prepare({ project, page, greeting }: NullstackClientContext<HomeProps>) {
    page.title = `${project.name} - ${greeting}`;
    page.description = `${project.name} was made with Nullstack`;
  }

  async initiate(context: NullstackClientContext<HomeProps>) {
    const waifus = await this.listWaifus();
    console.log(waifus);

    // load waifus data on array
    this.waifus.push.apply(this.waifus, waifus);
  }

  /**
   * Server side function is declared like static methods
   * @param param0
   * @returns {WaifuProps[]}
   */
  static async listWaifus({ api }: NullstackServerContext<HomeProps>) {
    const response = await api.get("/waifu?amount=20");
    return response.data.results.map((result) => ({
      name: result.artist_name,
      imageURL: result.url,
      artistURL: result.artist_href,
    }));
  }

  /**
   * Also declared in format of innerComponent
   * @param context
   * @returns
   */
  // renderWaifu({ data }: NullstackClientContext<WaifuProps>) {
  //   return (
  //     <div class="w-fit max-w-5xl min-w-72 max-h-72 min-h-72 bg-black/40 p-4 rounded-lg">
  //       <div class="w-full h-full p-5 gap-5 flex flex-col justify-between items-center rounded-sm">
  //         {/* <span class="self-start mb-2">1</span> */}
  //         <ActionLink href={data.imageURL}>
  //           <img class="rounded-md h-36 w-30" src={data.imageURL} alt="waifu" />
  //         </ActionLink>
  //         <ActionLink href={data.artistURL}>
  //           <p class="text-lg text-center truncate text-red-400/60 max-w-[120px] min-w-[120px]">
  //             {data.name}
  //           </p>
  //         </ActionLink>
  //       </div>
  //     </div>
  //   );
  // }

  render(context: NullstackClientContext<HomeProps>) {
    return (
      <section>
        <div>
          <h2 class="text-center text-5xl mb-8 text-white">
            <strong>Developed with Nullstack</strong>
          </h2>
          <article class="flex justify-center max-w-7xl flex-wrap gap-8 mx-auto px-4">
            {this.waifus.map((waifu) => (
              <Waifu data={waifu} />
            ))}
          </article>
        </div>
      </section>
    );
  }
}

export default Home;
