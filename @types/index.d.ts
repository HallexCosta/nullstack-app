import { AxiosInstance } from "axios";
import { BaseNullstackClientContext } from "nullstack";

declare module "nullstack" {
  export type NullstackClientContext<TProps = unknown> =
    BaseNullstackClientContext &
      TProps & {
        api?: AxiosInstance;
      };

  export type NullstackServerContext<TProps = unknown> =
    BaseNullstackClientContext &
      TProps & {
        api?: AxiosInstance;
      };
}
