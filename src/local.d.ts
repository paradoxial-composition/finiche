import { devNull } from "os";

declare interface userCredentials {
    login: string;
    password: string;
  }

declare interface Movie {
  ["Title"]?: String | null,
  ["US Gross"]?: Number | null,
  ["Worldwide Gross"]?: Number | null,
  ["US DVD Sales"]?: String | null,
  ["Production Budget"]?: Number | null,
  ["Release Date"]?: String | null,
  ["MPAA Rating"]?: String | null,
  ["Running Time min"]?: Number | null,
  ["Distributor"]?: String | null,
  ["Source"]?: String | null,
  ["Major Genre"]?: String | null,
  ["Creative Type"]?: String | null,
  ["Director"]?: String | null,
  ["Rotten Tomatoes Rating"]?: Number | null,
  ["IMDB Rating"]?: Number | null,
  ["IMDB Votes"]?: Number | null,
  ["id"]: Number
}