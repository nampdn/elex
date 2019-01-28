import axios, {AxiosResponse} from 'axios';
import pRetry from 'p-retry';

export const fetch = async (
  url: string,
  timeout: number = 7000,
  retries: number = 1,
): Promise<AxiosResponse<any>> => {
  const toFetch = async (): Promise<AxiosResponse<any>> => {
    const response = await axios.request({url, timeout});
    if (response.status === 404) {
      throw new pRetry.AbortError(response.statusText);
    }
    return response;
  };
  return pRetry(toFetch, {
    retries,
    onFailedAttempt: (error: any) => {
      console.log(
        `[WARN] Fetch ${url} attempt ${error.attemptNumber} failed. There are ${
          (error as any).retriesLeft
        } attempts left.`,
      );
    },
  });
};
