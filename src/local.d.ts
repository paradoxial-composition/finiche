import { devNull } from "os";

declare interface userCredentials {
    login: string;
    password: string;
  }

declare interface Movie {
  [key: string]: string | number | null;
  ["Title"]?: string | null,
  ["US Gross"]?: number | null,
  ["Worldwide Gross"]?: number | null,
  ["US DVD Sales"]?: string | null,
  ["Production Budget"]?: number | null,
  ["Release Date"]?: string | null,
  ["MPAA Rating"]?: string | null,
  ["Running Time min"]?: number | null,
  ["Distributor"]?: string | null,
  ["Source"]?: string | null,
  ["Major Genre"]?: string | null,
  ["Creative Type"]?: string | null,
  ["Director"]?: string | null,
  ["Rotten Tomatoes Rating"]?: number | null,
  ["IMDB Rating"]?: number | null,
  ["IMDB Votes"]?: number | null,
  ["id"]: number
}